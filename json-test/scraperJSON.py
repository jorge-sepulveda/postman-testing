import json
import csv
import requests as req
from tqdm import *
from itertools import chain, starmap
import os
import smasher
import sys
import re


geocodeFiveData = {"data": []}

apiKey = '4eb436346c6b4c24a83478142a9a28b7'

# endpoint = 'https://prod.geoservices.tamu.edu/Api/Geocode/V5/'
endpoint = 'https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx'

endpoints = {
    #"5.0": "https://geoservices.tamu.edu/Api/Geocode/V5/",
    #"4.05": "https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_05.aspx",
    #"4.04": "https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_04.aspx",
    #"4.03": "https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_03.aspx",
    #"4.02": "https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_02.aspx",
    "4.01": "https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx",
    "3.01": "https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V03_01.aspx"
}

oneEndpoint = {
    "5.0": "https://prod.geoservices.tamu.edu/Api/Geocode/V5/"
}


def fetchData(endpointList, server):

    with open(r'address-sample/sample.json', 'r') as jsonFile:
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
                'refs': 'all', 'notstore': 'TRUE', 'includeHeader': 'FALSE', 'Verbose': 'TRUE',
                'r': 'true,false', 'ratts': 'pre,suffix,post,city,zip'
            }
            while True:
                try:
                    res = req.get(endpointList[key], params=payload, timeout=180)
                except Exception as e:
                    continue
                    print(e)
                break
            decoded_content = res.content.decode('utf-8')
            #print(decoded_content)
            returnedObject = res.json()
            flattenedKeys = smasher.flatten_json_iterative_solution(
                returnedObject)
            tempDict['inputData'][i].update(flattenedKeys)
            # print(inputData['inputData'][i])
        processData(tempDict, key, server)
    # check two headers, make sure values
    # all of them fields in parsedaddress, all the fields in results


def processData(dictRecived, version, server):
    # don't print anything here.
    singleFilename = r'json-test/output/' + version + '-fields.txt'
    fileName = r'json-test/output/' + version + '-test-file-' + server + '.json'
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
        #concatString = "pm.expect(res'" + finalResult + \
        #    "').to.equal(pm.iterationData.get('"+line+"'))"
        funcLine = 'pm.test(pm.iterationData.get("id") + ": ' + line + '", function () {\n'   
        pmLine = "\tpm.expect(res" + finalResult + \
            ").to.equal(pm.iterationData.get('" + line + "'));\n"
        file.write(funcLine + pmLine + '});\n')
        #file.write(concatString+'\n')
    file.close()
    return 0


recievedData = fetchData(oneEndpoint, "prod")
