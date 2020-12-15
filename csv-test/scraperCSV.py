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

endpoints = {
    # "5.0": "https://dev.geoservices.tamu.edu/Api/Geocode/V5/",
    "4.05": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_05.aspx",
    "4.04": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_04.aspx",
    "4.03": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_03.aspx",
    "4.02": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_02.aspx",
    "4.01": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx",
    "3.01": "https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V03_01.aspx"
}

oneEndpoint = {
    "5.0": "https://dev.geoservices.tamu.edu/Api/Geocode/V5/"
}


def fetchData(endpointList):
    firstPass = True
    with open('postmandata.json', 'r') as jsonFile:
        inputData = json.load(jsonFile)
    print("Fetching Data - CSV")
    for key in endpointList:
        print(key)
        tempDict = inputData
        # for i in tqdm(range(5)):
        for i in tqdm(range(len(tempDict['inputData']))):
            payload = {
                'StreetAddress': inputData['inputData'][i]['StreetAddress'], 'City': inputData['inputData'][i]['City'],
                'State': inputData['inputData'][i]['State'], 'zip': inputData['inputData'][i]['Zip'],
                'Version': key, 'format': 'csv', 'census': 'TRUE', 'censusyear': '199020002010',
                'apiKey': apiKey, 'allowTies': 'FALSE', 'tieBreakingStrategy': 'revertToHierarchy',
                'geom': 'FALSE', 'ShouldDoExhaustiveSearch': 'FALSE', 'ConfidenceLevels': 7,
                'MinScore': 70, 'UseAliasTable': 'FALSE', 'ShouldUseMultithreadedGeocoder': 'FALSE',
                'refs': 'all', 'notstore': '', 'includeHeader': 'TRUE', 'Verbose': 'TRUE',
                'r': 'true,false', 'ratts': 'pre,suffix,post,city,zip'
            }
            headerCheck = 'FALSE'
            res = req.get(endpointList[key], params=payload, timeout=20)
            decoded_content = res.content.decode('utf-8')
            # print(decoded_content)
            decoded_content = decoded_content.replace('\n', '')
            cr = csv.reader(decoded_content.splitlines(), delimiter=',')
            my_list = list(cr)
            originalHeader = my_list[0]
            if firstPass:
                firstRow = ['StreetAddress', 'City', 'State', 'Zip']
                secondRow = [inputData['inputData'][i]['StreetAddress'], inputData['inputData'][i]
                             ['City'], inputData['inputData'][i]['State'], inputData['inputData'][i]['Zip']]
                my_list[0] = firstRow + my_list[0]
                my_list[1] = secondRow + my_list[1]
                biglist = my_list
                firstPass = False
            else:
                if(originalHeader == my_list[0]):
                    inputList = [inputData['inputData'][i]['StreetAddress'], inputData['inputData'][i]
                                 ['City'], inputData['inputData'][i]['State'], inputData['inputData'][i]['Zip']]
                    biglist.append(inputList + my_list[1])
                    # print(inputList)
                else:
                    print('Unexpected Error')
                    exit(0)
        saveFile(biglist, key)
    return 0
    # check two headers, make sure values
    # all of them fields in parsedaddress, all the fields in results


def saveFile(listToSave, version):
    singleFilename = r'output/' + version + '-fields.txt'
    testFilename = r'output/' + version + '-pm-tests.txt'
    fileName = r'output/' + version + '-test-file.csv'
    generateTestsCommands(listToSave[0], singleFilename, testFilename)
    with open(fileName, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        for row in listToSave:
            writer.writerow(row)
    return 0


def generateTestsCommands(headers, fileName, testfile):
    file = open(fileName, 'w')
    for item in headers:
        testString = item + " = head.indexOf('" + item + "'),"
        file.write(testString+'\n')
    file.close()
    file = open(testfile, 'w')
    for item in headers:
        pmLine = "pm.expect(row[" + item + \
            "]).to.equal(pm.iterationData.get('" + item + "'));"
        file.write(pmLine+'\n')
    file.close()
    return 0


recievedData = fetchData(endpoints)


'''
https://dev.geoservices.tamu.edu/Api/Geocode/V5/?StreetAddress=25 Summit Street
&City=Newark&State=NJ&Zip=07103&Version=5.0.0.0&APIKey=4eb436346c6b4c24a83478142a9a28b7&Format=json
&Census=TRUE&CensusYear=199020002010&allowTies=FALSE
&tieBreakingStrategy=revertToHierarchy&geom=FALSE&ShouldDoExhaustiveSearch=FALSE
&ConfidenceLevels=7&MinScore=70&UseAliasTable=FALSE&ShouldUseMultithreadedGeocoder=FALSE
&refs=all&notstore=&includeHeader=FALSE&Verbose=TRUE
&r=true,false&ratts=pre,suffix,post,city,zip
'''