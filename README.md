# postman testing

This repository is a series of Python3 scripts intended to format provided sample data and run it against the different versions of the geocoding API.

## address-sample

This directory can pull a sample of n size from a generated CSV file with addresses. This sample can be used on the scrapers. 

They pull Street Address, City, State, Zip and an autonumbered ID number to identify future test cases.

## csv-test

This script can send and recieve requests in csv or tsv format. The function that takes care of this is fetchData. The parameters for this function is a dictionary of endpoints, the desired format(csv or tsv) and the type of server the final file name should have(prod or live).


## json-test

This script can send and recieve requests in csv or tsv format. The function that takes care of this is fetchData. The parameters for this function is a dictionary of endpoints and the type of server the final file name should have added(prod or live).

## xml-test

This script can send and recieve requests in xml format. The function that takes care of this is fetchData. The parameters for this function is a dictionary of endpoints and the type of server the final file name should have added(prod or live).

update: xml test still needs to be worked on and implemented.

## To Do

These steps are for you, Goldberg.

- find someone who knows Python or can learn it.
- ditto with Azure Pipelines.
- implement a dictionary of all the different versions with their specific parameters so the script "knows" which params to send.