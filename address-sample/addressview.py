# Load pandas
import pandas as pd
import json

# Read CSV file into DataFrame df
df = pd.read_csv('sampled_uniqueAddress_1samples_new_random_error.csv', na_filter=False)

#print(df)
# Show 
completeStreetAddr = pd.DataFrame()
preDir = str(df['PreDirection']) if len(str(df['PreDirection'])) > 0 else ''
completeStreetAddr['StreetAddress'] = df['AddressRange'] + ' ' + preDir + ' ' + df['BaseStreetName'] + ' ' + df['PostDirection'] + ' ' + df['RoadType']
completeStreetAddr['City'] = df['City']
completeStreetAddr['State'] = df['State']
completeStreetAddr['Zip'] = df['Zip']

randomSample = completeStreetAddr.sample(n=100)
result = {"inputData":[]}
records = randomSample.to_json(orient="records")


json_records = json.loads(records)  
result['inputData'] = json_records
print(result)

#print(json.dumps(parsed, indent=4))

with open('sample.json', 'w') as json_file:
    json.dump(result, json_file, indent=4)