import pandas as pd
import json

prodfile = pd.read_csv(r'output/csv/4.01-test-file-prod.csv', na_filter=False)
livefile = pd.read_csv(r'output/csv/4.01-test-file-live.csv', na_filter=False)

pd.set_option('display.max_rows', None)

prodset = prodfile[['StreetAddress','City','State','Zip','FSource']]
liveset = livefile[['StreetAddress','City','State','Zip','FSource']]


print(liveset.compare(prodset ,keep_shape=True, keep_equal=True))

#print(liveset.compare(prodset))