payloads = {
    #you have to include addresses, format and api key from the main script.
    "5.0" : {
        'version': key,  'format': typeToGet,
        'apiKey': apiKey,'Verbose': 'true',
    },
    "4.01" : {
        'Version': "4.01",'census': 'TRUE', 'censusyear': '199020002010',
        'allowTies': 'FALSE', 'tieBreakingStrategy': 'revertToHierarchy',
        'geom': 'FALSE', 'ShouldDoExhaustiveSearch': 'FALSE', 'ConfidenceLevels': 7,
        'MinScore': 70, 'UseAliasTable': 'FALSE', 'ShouldUseMultithreadedGeocoder': 'FALSE',
        'refs': 'all', 'notstore': 'true', 'includeHeader': 'TRUE', 'Verbose': 'TRUE',
        'r': 'true,false', 'ratts': 'pre,suffix,post,city,zip'
    }
}