import json
import csv
import requests as re
from tqdm import *
from itertools import chain, starmap
import smasher


def cleanNullTerms(d):
    clean = {}
    for k, v in d.items():
        if isinstance(v, dict):
            nested = cleanNullTerms(v)
            if len(nested.keys()) > 0:
                clean[k] = nested
        elif v is not None:
            clean[k] = v
    return clean


StreetAddress = ''
City = ''
State = ''
Zip = 0

geocodeFiveData = {"data": []}

apiKey = '4eb436346c6b4c24a83478142a9a28b7'

endpoint = 'https://dev.geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_05.aspx?'

with open('postmandata.json', 'r') as jsonFile:
    inputData = json.load(jsonFile)
# print(inputData)

print("Requesting and Processing Data")
# for i in (range(len(inputData['inputData']))):
for i in tqdm(range(len(inputData['inputData']))):
    payload = {
        'StreetAddress': inputData['inputData'][i]['StreetAddress'], 'City': inputData['inputData'][i]['City'],
        'State': inputData['inputData'][i]['State'], 'zip': inputData['inputData'][i]['Zip'],
        'Version': '4.05', 'format': 'json', 'census': 'TRUE', 'censusyear': '199020002010',
        'apiKey': apiKey, 'allowTies': 'FALSE', 'tieBreakingStrategy': 'revertToHierarchy',
        'geom': 'FALSE', 'ShouldDoExhaustiveSearch': 'FALSE', 'ConfidenceLevels': 7,
        'MinScore': 70, 'UseAliasTable': 'FALSE', 'ShouldUseMultithreadedGeocoder': 'FALSE',
        'refs': 'all', 'notstore': '', 'includeHeader': 'FALSE', 'Verbose': 'TRUE',
        'r': 'true,false', 'ratts': 'pre,suffix,post,city,zip'
    }

    res = re.get(endpoint, params=payload)
    returnedObject = res.json()
    # print(returnedObject)
    hopeThisWorks = smasher.flatten_json_iterative_solution(returnedObject)
    inputData['inputData'][i].update(hopeThisWorks)
    # check two headers, make sure values
    # all of them fields in parsedaddress, all the fields in results

print('Writing file')
with open('four_five_input_file.json', 'w') as f:
    json.dump(inputData, f, indent=2)
'''with open('postman_100_noheader.csv') as csvfile:
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
geocodeFiveData = cleanNullTerms(geocodeFiveData)
'''

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