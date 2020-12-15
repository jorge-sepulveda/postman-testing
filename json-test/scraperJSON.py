import json
import csv
import requests as requests
from tqdm import *
from itertools import chain, starmap
import os
import smasher
import sys
import re


geocodeFiveData = {"data": []}

apiKey = '4eb436346c6b4c24a83478142a9a28b7'

# endpoint = 'https://dev.geoservices.tamu.edu/Api/Geocode/V5/'
endpoint = 'https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx'

endpoints = {
    # "5.0": "https://dev.geoservices.tamu.edu/Api/Geocode/V5/",
    # "4.05": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_05.aspx",
    "4.04": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_04.aspx",
    "4.03": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_03.aspx",
    "4.02": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_02.aspx",
    "4.01": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx"
    # "3.01": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V03_01.aspx"
}

oneEndpoint = {
    "5.0": "https://dev.geoservices.tamu.edu/Api/Geocode/V5/"
}


def fetchData(endpointList):

    with open('postmandata.json', 'r') as jsonFile:
        inputData = json.load(jsonFile)

    print("Fetching Data - JSON")
    for key in endpointList:
        print(key)
        tempDict = inputData
        for i in tqdm(range(len(tempDict['inputData']))):
            payload = {
                'StreetAddress': tempDict['inputData'][i]['StreetAddress'], 'City': tempDict['inputData'][i]['City'],
                'State': tempDict['inputData'][i]['State'], 'zip': tempDict['inputData'][i]['Zip'],
                'Version': key, 'format': 'json', 'census': 'TRUE', 'censusyear': '199020002010',
                'apiKey': apiKey, 'allowTies': 'FALSE', 'tieBreakingStrategy': 'revertToHierarchy',
                'geom': 'FALSE', 'ShouldDoExhaustiveSearch': 'FALSE', 'ConfidenceLevels': 7,
                'MinScore': 70, 'UseAliasTable': 'FALSE', 'ShouldUseMultithreadedGeocoder': 'FALSE',
                'refs': 'all', 'notstore': '', 'includeHeader': 'FALSE', 'Verbose': 'TRUE',
                'r': 'true,false', 'ratts': 'pre,suffix,post,city,zip'
            }
            res = requests.get(endpointList[key], params=payload)
            returnedObject = res.json()
            flattenedKeys = smasher.flatten_json_iterative_solution(
                returnedObject)
            tempDict['inputData'][i].update(flattenedKeys)
            # print(inputData['inputData'][i])
        processData(tempDict, key)
    # check two headers, make sure values
    # all of them fields in parsedaddress, all the fields in results


def processData(dictRecived, version):
    # don't print anything here.
    singleFilename = r'output/' + version + '-fields.txt'
    fileName = r'output/' + version + '-test-file.json'
    # dictionary = {version: dictRecived['inputData']}
    # entire file
    regexReplace(dictRecived['inputData'][0], singleFilename)

    with open(fileName, 'w') as f:
        json.dump(dictRecived['inputData'], f, indent=2, skipkeys=True)
    return 0


def regexReplace(dictIndex, fileName):
    file = open(fileName, 'w')
    for key in dictIndex:
        line = key
        result = re.sub(r"([A-Za-z]+[0-9]?)", r"['\1']", line)
        finalResult = re.sub(r"(?<![a-zA-Z])([0-9]+)", r"[\1]", result)
        finalResult = finalResult.replace('_', '')
        concatString = "pm.expect(res'" + finalResult + \
            "').to.equal(pm.iterationData.get('"+line+"'))"
        file.write(concatString+'\n')
    file.close()
    return 0


recievedData = fetchData(endpoints)


'''

with open('postmandata.json', 'r') as jsonFile:
    inputData = json.load(jsonFile)
# print(inputData)
print("Requesting and Processing Data")
# for i in (range(len(inputData['inputData']))):
for i in tqdm(range(len(inputData['inputData']))):
    payload = {
        'StreetAddress': inputData['inputData'][i]['StreetAddress'], 'City': inputData['inputData'][i]['City'],
        'State': inputData['inputData'][i]['State'], 'zip': inputData['inputData'][i]['Zip'],
        'Version': '4.01', 'format': 'json', 'census': 'TRUE', 'censusyear': '199020002010',
        'apiKey': apiKey, 'allowTies': 'FALSE', 'tieBreakingStrategy': 'revertToHierarchy',
        'geom': 'FALSE', 'ShouldDoExhaustiveSearch': 'FALSE', 'ConfidenceLevels': 7,
        'MinScore': 70, 'UseAliasTable': 'FALSE', 'ShouldUseMultithreadedGeocoder': 'FALSE',
        'refs': 'all', 'notstore': '', 'includeHeader': 'FALSE', 'Verbose': 'TRUE',
        'r': 'true,false', 'ratts': 'pre,suffix,post,city,zip'
    }
    res = re.get(endpoint, params=payload)
    # print(res.json())
    returnedObject = res.json()
    hopeThisWorks = smasher.flatten_json_iterative_solution(returnedObject)
    inputData['inputData'][i].update(hopeThisWorks)
    # check two headers, make sure values
    # all of them fields in parsedaddress, all the fields in results

print('writing file')
with open('four-one-json-test.json', 'w') as f:
    json.dump(inputData, f, indent=2, skipkeys=True)
with open('postman_100_noheader.csv') as csvfile:
    readCSV = csv.reader(csvfile, delimiter=',')
    for row in readCSV:
        payload = {
            'StreetAddress': row[0], 'City': row[1], 'State': row[2], 'zip': row[3],
            'Version': '5.0.0.0', 'format': 'json', 'census': 'TRUE', 'censusyear': '199020002010',
            'apiKey': apiKey, 'allowTies': 'FALSE', 'tieBreakingStrategy': 'revertToHierarchy',
            'geom': 'FALSE', 'ShouldDoExhaustiveSearch': 'FALSE', 'ConfidenceLevels': 7,
            'MinScore': 70, 'UseAliasTable': 'FALSE', 'ShouldUseMultithreadedGeocoder': 'FALSE',
            'refs': 'all', 'notstore': '', 'includeHeader': 'FALSE', 'Verbose': 'TRUE',
            'r': 'true,false', 'ratts': 'pre,suffix,post,city,zip'
        }
        res = re.get(endpoint, params=payload)
        geocodeFiveData['data'].append(res.json())

        # print(res)
        # print(row)

print('deleting NULLS')


# with open('fiveodatanonulls.json', 'w') as f:
#    json.dump(geocodeFiveData, f, indent=2)
print('done')

https://dev.geoservices.tamu.edu/Api/Geocode/V5/?StreetAddress=25 Summit Street
&City=Newark&State=NJ&Zip=07103&Version=5.0.0.0&APIKey=4eb436346c6b4c24a83478142a9a28b7&Format=json
&Census=TRUE&CensusYear=199020002010&allowTies=FALSE
&tieBreakingStrategy=revertToHierarchy&geom=FALSE&ShouldDoExhaustiveSearch=FALSE
&ConfidenceLevels=7&MinScore=70&UseAliasTable=FALSE&ShouldUseMultithreadedGeocoder=FALSE
&refs=all&notstore=&includeHeader=FALSE&Verbose=TRUE
&r=true,false&ratts=pre,suffix,post,city,zip
'''
