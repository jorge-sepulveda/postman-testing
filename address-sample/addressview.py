# Load pandas
import pandas as pd
import json

# Read CSV file into DataFrame df
df = pd.read_csv('address-sample/sampled_uniqueAddress_1samples_new_random_error.csv', na_filter=False)

#print(df)
# Show 
completeStreetAddr = pd.DataFrame()

completeStreetAddr['StreetAddress'] = df['AddressRange'] + ' ' + df['PreDirection'] + ' ' + df['BaseStreetName'] + ' ' + df['PostDirection'] + ' ' + df['RoadType']
completeStreetAddr['City'] = df['City']
completeStreetAddr['State'] = df['State']
completeStreetAddr['Zip'] = df['Zip']

randomSample = completeStreetAddr.sample(n=100)
randomSample['id'] = range(1, 1+len(randomSample))
result = {"inputData":[]}
records = randomSample.to_json(orient="records")


json_records = json.loads(records)  

#remove whitespace

for i in json_records:
    address = i['StreetAddress'].split()
    i['StreetAddress'] = " ".join(address)
    i['City'] = i['City'].upper()

result['inputData'] = json_records
print(result)

#print(json.dumps(parsed, indent=4))

with open('sample.json', 'w') as json_file:
    json.dump(result, json_file, indent=4)