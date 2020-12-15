import json
import csv
import requests as re
from tqdm import *
from itertools import chain, starmap
import smasher
import os

geocodeFiveData = {"data": []}

apiKey = '4eb436346c6b4c24a83478142a9a28b7'

endpoint = 'https://dev.geoservices.tamu.edu/Api/Geocode/V5/'

headerCheck = 'TRUE'
with open('postmandata.json', 'r') as jsonFile:
    inputData = json.load(jsonFile)
# print(inputData)
biglist = 'heh'
firstPass = True
print("Requesting and Processing CSV Data")
# for i in (range(len(inputData['inputData']))):
# for i in tqdm(range(5)):
for i in tqdm(range(len(inputData['inputData']))):
    payload = {
        'StreetAddress': inputData['inputData'][i]['StreetAddress'], 'City': inputData['inputData'][i]['City'],
        'State': inputData['inputData'][i]['State'], 'zip': inputData['inputData'][i]['Zip'],
        'Version': '5.0.0.0', 'format': 'csv', 'census': 'TRUE', 'censusyear': '199020002010',
        'apiKey': apiKey, 'allowTies': 'FALSE', 'tieBreakingStrategy': 'revertToHierarchy',
        'geom': 'FALSE', 'ShouldDoExhaustiveSearch': 'FALSE', 'ConfidenceLevels': 7,
        'MinScore': 70, 'UseAliasTable': 'FALSE', 'ShouldUseMultithreadedGeocoder': 'FALSE',
        'refs': 'all', 'notstore': '', 'includeHeader': 'TRUE', 'Verbose': 'TRUE',
        'r': 'true,false', 'ratts': 'pre,suffix,post,city,zip'
    }
    headerCheck = 'FALSE'
    res = re.get(endpoint, params=payload)
    # print(res.content)
    decoded_content = res.content.decode('utf-8')
    cr = csv.reader(decoded_content.splitlines(), delimiter=',')
    my_list = list(cr)
    if firstPass:
        biglist = my_list
        firstPass = False
        # print(biglist[0])
    else:
        if(biglist[0] == my_list[0]):
            #print('headers are in the same order')
            biglist.append(my_list[1])
        else:
            print('something went wrong')
            exit(0)

    # print(my_list[1])
    # for row in my_list:
    #    print(row)
    # print(res.json())
    #returnedObject = res.json()
    #hopeThisWorks = smasher.flatten_json_iterative_solution(returnedObject)
    # inputData['inputData'][i].update(hopeThisWorks)
    #inputData['inputData'][i]['latitude'] = returnedObject['data']['results'][0]['latitude']
    #inputData['inputData'][i]['longitude'] = returnedObject['data']['results'][0]['longitude']
    #inputData['inputData'][i]['featureMatchingGeographyType'] = returnedObject['data']['results'][0]['featureMatchingGeographyType']
    #inputData['inputData'][i]['gisCoordinateQualityType'] = returnedObject['data']['results'][0]['naaccr']['gisCoordinateQualityType']
    # check two headers, make sure values
    # all of them fields in parsedaddress, all the fields in results
print(biglist)

with open('finalOne.csv', 'w') as csvfile:
    writer = csv.writer(csvfile)
    for row in biglist:
        writer.writerow(row)
exit(0)

print('writing file')
with open('dummy.json', 'w') as f:
    json.dump(inputData, f, indent=2)

# with open('fiveodatanonulls.json', 'w') as f:
#    json.dump(geocodeFiveData, f, indent=2)
print('done')

'''
https://dev.geoservices.tamu.edu/Api/Geocode/V5/?StreetAddress=25 Summit Street
&City=Newark&State=NJ&Zip=07103&Version=5.0.0.0&APIKey=4eb436346c6b4c24a83478142a9a28b7&Format=json
&Census=TRUE&CensusYear=199020002010&allowTies=FALSE
&tieBreakingStrategy=revertToHierarchy&geom=FALSE&ShouldDoExhaustiveSearch=FALSE
&ConfidenceLevels=7&MinScore=70&UseAliasTable=FALSE&ShouldUseMultithreadedGeocoder=FALSE
&refs=all&notstore=&includeHeader=FALSE&Verbose=TRUE
&r=true,false&ratts=pre,suffix,post,city,zip
'''
