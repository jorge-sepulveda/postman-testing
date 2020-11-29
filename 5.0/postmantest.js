pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test('Verify Version', () => {
    const res = pm.response.json();
    pm.expect(res['data']['version']['major']).to.equal(pm.iterationData.get('data_version_major'))
    pm.expect(res['data']['version']['minor']).to.equal(pm.iterationData.get('data_version_minor'))
    pm.expect(res['data']['version']['build']).to.equal(pm.iterationData.get('data_version_build'))
    pm.expect(res['data']['version']['revision']).to.equal(pm.iterationData.get('data_version_revision'))
    pm.expect(res['data']['version']['majorRevision']).to.equal(pm.iterationData.get('data_version_majorRevision'))
    pm.expect(res['data']['version']['minorRevision']).to.equal(pm.iterationData.get('data_version_minorRevision'))
});

pm.test('Check Response Headers', () => {
    const res = pm.response.json();
    pm.expect(res['data']['apiHost']).to.equal(pm.iterationData.get('data_apiHost'))
    pm.expect(res['data']['clientHost']).to.equal(pm.iterationData.get('data_clientHost'))
    pm.expect(res['data']['queryStatusCode']).to.equal(pm.iterationData.get('data_queryStatusCode'))
});

pm.test('Verify parsedAddress', () => {
    const res = pm.response.json();
    pm.expect(res['data']['parsedAddress']['addressLocationType']).to.equal(pm.iterationData.get('data_parsedAddress_addressLocationType'))
    pm.expect(res['data']['parsedAddress']['addressFormatType']).to.equal(pm.iterationData.get('data_parsedAddress_addressFormatType'))
    pm.expect(res['data']['parsedAddress']['number']).to.equal(pm.iterationData.get('data_parsedAddress_number'))
    pm.expect(res['data']['parsedAddress']['numberFractional']).to.equal(pm.iterationData.get('data_parsedAddress_numberFractional'))
    pm.expect(res['data']['parsedAddress']['preDirectional']).to.equal(pm.iterationData.get('data_parsedAddress_preDirectional'))
    pm.expect(res['data']['parsedAddress']['preQualifier']).to.equal(pm.iterationData.get('data_parsedAddress_preQualifier'))
    pm.expect(res['data']['parsedAddress']['preType']).to.equal(pm.iterationData.get('data_parsedAddress_preType'))
    pm.expect(res['data']['parsedAddress']['preArticle']).to.equal(pm.iterationData.get('data_parsedAddress_preArticle'))
    pm.expect(res['data']['parsedAddress']['name']).to.equal(pm.iterationData.get('data_parsedAddress_name'))
    pm.expect(res['data']['parsedAddress']['postArticle']).to.equal(pm.iterationData.get('data_parsedAddress_postArticle'))
    pm.expect(res['data']['parsedAddress']['postQualifier']).to.equal(pm.iterationData.get('data_parsedAddress_postQualifier'))
    pm.expect(res['data']['parsedAddress']['postDirectional']).to.equal(pm.iterationData.get('data_parsedAddress_postDirectional'))
    pm.expect(res['data']['parsedAddress']['suffix']).to.equal(pm.iterationData.get('data_parsedAddress_suffix'))
    pm.expect(res['data']['parsedAddress']['suiteType']).to.equal(pm.iterationData.get('data_parsedAddress_suiteType'))
    pm.expect(res['data']['parsedAddress']['suiteNumber']).to.equal(pm.iterationData.get('data_parsedAddress_suiteNumber'))
    pm.expect(res['data']['parsedAddress']['city']).to.equal(pm.iterationData.get('data_parsedAddress_city'))
    pm.expect(res['data']['parsedAddress']['minorCivilDivision']).to.equal(pm.iterationData.get('data_parsedAddress_minorCivilDivision'))
    pm.expect(res['data']['parsedAddress']['consolidatedCity']).to.equal(pm.iterationData.get('data_parsedAddress_consolidatedCity'))
    pm.expect(res['data']['parsedAddress']['countySubRegion']).to.equal(pm.iterationData.get('data_parsedAddress_countySubRegion'))
    pm.expect(res['data']['parsedAddress']['county']).to.equal(pm.iterationData.get('data_parsedAddress_county'))
    pm.expect(res['data']['parsedAddress']['state']).to.equal(pm.iterationData.get('data_parsedAddress_state'))
    pm.expect(res['data']['parsedAddress']['zip']).to.equal(pm.iterationData.get('data_parsedAddress_zip'))
    pm.expect(res['data']['parsedAddress']['zipPlus1']).to.equal(pm.iterationData.get('data_parsedAddress_zipPlus1'))
    pm.expect(res['data']['parsedAddress']['zipPlus2']).to.equal(pm.iterationData.get('data_parsedAddress_zipPlus2'))
    pm.expect(res['data']['parsedAddress']['zipPlus3']).to.equal(pm.iterationData.get('data_parsedAddress_zipPlus3'))
    pm.expect(res['data']['parsedAddress']['zipPlus4']).to.equal(pm.iterationData.get('data_parsedAddress_zipPlus4'))
    pm.expect(res['data']['parsedAddress']['zipPlus5']).to.equal(pm.iterationData.get('data_parsedAddress_zipPlus5'))
    pm.expect(res['data']['parsedAddress']['country']).to.equal(pm.iterationData.get('data_parsedAddress_country'))
});

pm.test('Verify Input Parameter', () => {
    const res = pm.response.json();
    pm.expect(res['data']['inputParameterSet']['streetAddress']).to.equal(pm.iterationData.get('data_inputParameterSet_streetAddress'))
    pm.expect(res['data']['inputParameterSet']['city']).to.equal(pm.iterationData.get('data_inputParameterSet_city'))
    pm.expect(res['data']['inputParameterSet']['state']).to.equal(pm.iterationData.get('data_inputParameterSet_state'))
    pm.expect(res['data']['inputParameterSet']['zip']).to.equal(pm.iterationData.get('data_inputParameterSet_zip'))

    pm.expect(res['data']['inputParameterSet']['apiKey']).to.equal(pm.iterationData.get('data_inputParameterSet_apiKey'))
    pm.expect(res['data']['inputParameterSet']['dontStoreTransactionDetails']).to.equal(pm.iterationData.get('data_inputParameterSet_dontStoreTransactionDetails'))
    pm.expect(res['data']['inputParameterSet']['allowTies']).to.equal(pm.iterationData.get('data_inputParameterSet_allowTies'))
    pm.expect(res['data']['inputParameterSet']['tieHandlingStrategyType']).to.equal(pm.iterationData.get('data_inputParameterSet_tieHandlingStrategyType'))

    pm.expect(res['data']['inputParameterSet']['relaxation']).to.equal(pm.iterationData.get('data_inputParameterSet_relaxation'))
    pm.expect(res['data']['inputParameterSet']['substring']).to.equal(pm.iterationData.get('data_inputParameterSet_substring'))
    pm.expect(res['data']['inputParameterSet']['soundex']).to.equal(pm.iterationData.get('data_inputParameterSet_soundex'))
    pm.expect(res['data']['inputParameterSet']['soundexAttributes']).to.equal(pm.iterationData.get('data_inputParameterSet_soundexAttributes'))

    pm.expect(res['data']['inputParameterSet']['featureMatchingSelectionMethod']).to.equal(pm.iterationData.get('data_inputParameterSet_featureMatchingSelectionMethod'))

    pm.expect(res['data']['inputParameterSet']['minimumMatchScore']).to.equal(pm.iterationData.get('data_inputParameterSet_minimumMatchScore'))
    pm.expect(res['data']['inputParameterSet']['confidenceLevels']).to.equal(pm.iterationData.get('data_inputParameterSet_confidenceLevels'))
    pm.expect(res['data']['inputParameterSet']['exhaustiveSearch']).to.equal(pm.iterationData.get('data_inputParameterSet_exhaustiveSearch'))
    pm.expect(res['data']['inputParameterSet']['aliasTables']).to.equal(pm.iterationData.get('data_inputParameterSet_aliasTables'))
    pm.expect(res['data']['inputParameterSet']['multiThreading']).to.equal(pm.iterationData.get('data_inputParameterSet_multiThreading'))
    pm.expect(res['data']['inputParameterSet']['includeHeader']).to.equal(pm.iterationData.get('data_inputParameterSet_includeHeader'))
    pm.expect(res['data']['inputParameterSet']['verbose']).to.equal(pm.iterationData.get('data_inputParameterSet_verbose'))
    pm.expect(res['data']['inputParameterSet']['outputCensusVariables']).to.equal(pm.iterationData.get('data_inputParameterSet_outputCensusVariables'))
    pm.expect(res['data']['inputParameterSet']['outputReferenceFeatureGeometry']).to.equal(pm.iterationData.get('data_inputParameterSet_outputReferenceFeatureGeometry'))
    pm.expect(res['data']['inputParameterSet']['outputFormat']).to.equal(pm.iterationData.get('data_inputParameterSet_outputFormat'))
});

pm.test("inputParameterSet - version", function () {
    const res = pm.response.json();
    pm.expect(res['data']['inputParameterSet']['version']['major']).to.equal(pm.iterationData.get('data_inputParameterSet_version_major'))
    pm.expect(res['data']['inputParameterSet']['version']['minor']).to.equal(pm.iterationData.get('data_inputParameterSet_version_minor'))
    pm.expect(res['data']['inputParameterSet']['version']['build']).to.equal(pm.iterationData.get('data_inputParameterSet_version_build'))
    pm.expect(res['data']['inputParameterSet']['version']['revision']).to.equal(pm.iterationData.get('data_inputParameterSet_version_revision'))
    pm.expect(res['data']['inputParameterSet']['version']['majorRevision']).to.equal(pm.iterationData.get('data_inputParameterSet_version_majorRevision'))
    pm.expect(res['data']['inputParameterSet']['version']['minorRevision']).to.equal(pm.iterationData.get('data_inputParameterSet_version_minorRevision'))
});

pm.test("inputParameterSet - relaxableAttributes", function () {
    const res = pm.response.json();
    pm.expect(res['data']['inputParameterSet']['relaxableAttributes'][0]).to.equal(pm.iterationData.get('data_inputParameterSet_relaxableAttributes_0'))
    pm.expect(res['data']['inputParameterSet']['relaxableAttributes'][1]).to.equal(pm.iterationData.get('data_inputParameterSet_relaxableAttributes_1'))
    pm.expect(res['data']['inputParameterSet']['relaxableAttributes'][2]).to.equal(pm.iterationData.get('data_inputParameterSet_relaxableAttributes_2'))
    pm.expect(res['data']['inputParameterSet']['relaxableAttributes'][3]).to.equal(pm.iterationData.get('data_inputParameterSet_relaxableAttributes_3'))
    pm.expect(res['data']['inputParameterSet']['relaxableAttributes'][4]).to.equal(pm.iterationData.get('data_inputParameterSet_relaxableAttributes_4'))
});

pm.test("inputParameterSet - referenceSources", function () {
    const res = pm.response.json();
    pm.expect(res['data']['inputParameterSet']['referenceSources'][0]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_0'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][1]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_1'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][2]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_2'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][3]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_3'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][4]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_4'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][5]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_5'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][6]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_6'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][7]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_7'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][8]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_8'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][9]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_9'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][10]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_10'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][11]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_11'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][12]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_12'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][13]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_13'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][14]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_14'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][15]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_15'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][16]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_16'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][17]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_17'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][18]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_18'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][19]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_19'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][20]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_20'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][21]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_21'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][22]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_22'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][23]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_23'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][24]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_24'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][25]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_25'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][26]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_26'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][27]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_27'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][28]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_28'))
    pm.expect(res['data']['inputParameterSet']['referenceSources'][29]).to.equal(pm.iterationData.get('data_inputParameterSet_referenceSources_29'))
});

pm.test("inputParameterSet - attributeWeightingScheme", function () {
    const res = pm.response.json();
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['number']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_number'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['numberParity']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_numberParity'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['preDirectional']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_preDirectional'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['preType']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_preType'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['preQualifier']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_preQualifier'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['preArticle']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_preArticle'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['name']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_name'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['postArticle']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_postArticle'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['suffix']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_suffix'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['postDirectional']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_postDirectional'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['postQualifier']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_postQualifier'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['city']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_city'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['zip']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_zip'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['zipPlus4']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_zipPlus4'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['state']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_state'))
    pm.expect(res['data']['inputParameterSet']['attributeWeightingScheme']['totalWeight']).to.equal(pm.iterationData.get('data_inputParameterSet_attributeWeightingScheme_totalWeight'))
});

pm.test("Check Results", function () {
    const res = pm.response.json();
    pm.expect(res['data']['results'][0]['latitude']).to.equal(pm.iterationData.get('data_results_0_latitude'))
    pm.expect(res['data']['results'][0]['longitude']).to.equal(pm.iterationData.get('data_results_0_longitude'))
    pm.expect(res['data']['results'][0]['matchScore']).to.equal(pm.iterationData.get('data_results_0_matchScore'))
    pm.expect(res['data']['results'][0]['geocodeQualityType']).to.equal(pm.iterationData.get('data_results_0_geocodeQualityType'))
    pm.expect(res['data']['results'][0]['featureMatchingGeographyType']).to.equal(pm.iterationData.get('data_results_0_featureMatchingGeographyType'))
    pm.expect(res['data']['results'][0]['matchType']).to.equal(pm.iterationData.get('data_results_0_matchType'))
    pm.expect(res['data']['results'][0]['matchedLocationType']).to.equal(pm.iterationData.get('data_results_0_matchedLocationType'))
    pm.expect(res['data']['results'][0]['featureMatchingResultType']).to.equal(pm.iterationData.get('data_results_0_featureMatchingResultType'))
});

//pm.test("Template Fucking Template", function () {
//    const res = pm.response.json();
//});

pm.test("Check naaccr", function () {
    const res = pm.response.json();
    pm.expect(res['data']['results'][0]['naaccr']['gisCoordinateQualityCode']).to.equal(pm.iterationData.get('data_results_0_naaccr_gisCoordinateQualityCode'))
    pm.expect(res['data']['results'][0]['naaccr']['gisCoordinateQualityType']).to.equal(pm.iterationData.get('data_results_0_naaccr_gisCoordinateQualityType'))
    pm.expect(res['data']['results'][0]['naaccr']['censusTractCertaintyCode']).to.equal(pm.iterationData.get('data_results_0_naaccr_censusTractCertaintyCode'))
    pm.expect(res['data']['results'][0]['naaccr']['censusTractCertaintyType']).to.equal(pm.iterationData.get('data_results_0_naaccr_censusTractCertaintyType'))
    pm.expect(res['data']['results'][0]['naaccr']['microMatchStatus']).to.equal(pm.iterationData.get('data_results_0_naaccr_microMatchStatus'))
});

pm.test("Naaccr - Penalty Codes", function () {
    const res = pm.response.json();
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCode']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCode'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['matchScore']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_matchScore'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['inputType']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_inputType'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['streetType']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_streetType'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['streetName']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_streetName'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['city']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_city'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['cityRefs']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_cityRefs'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['zipPenalty']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_zipPenalty'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['directionals']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_directionals'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['qualifiers']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_qualifiers'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['distance']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_distance'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['outlierDistance']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_outlierDistance'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['censusBlocks']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_censusBlocks'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['censusTracts']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_censusTracts'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['county']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_county'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['recordCount']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_recordCount'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['matchScoreSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_matchScoreSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['inputTypeSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_inputTypeSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['streetTypeSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_streetTypeSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['streetNameSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_streetNameSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['citySummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_citySummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['cityRefsSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_cityRefsSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['zipPenaltySummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_zipPenaltySummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['directionalsSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_directionalsSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['qualifiersSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_qualifiersSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['distanceSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_distanceSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['outlierDistanceSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_outlierDistanceSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['censusBlocksSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_censusBlocksSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['censusTractsSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_censusTractsSummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['countySummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_countySummary'))
    pm.expect(res['data']['results'][0]['naaccr']['penaltyCodeDetails']['recordCountSummary']).to.equal(pm.iterationData.get('data_results_0_naaccr_penaltyCodeDetails_recordCountSummary'))
});

pm.test("huh?", function () {
    const res = pm.response.json();
    pm.expect(res['data']['results'][0]['queryStatusCodes']).to.equal(pm.iterationData.get('data_results_0_queryStatusCodes'))
    pm.expect(res['data']['results'][0]['tieHandlingStrategyType']).to.equal(pm.iterationData.get('data_results_0_tieHandlingStrategyType'))
    pm.expect(res['data']['results'][0]['featureMatchingSelectionMethod']).to.equal(pm.iterationData.get('data_results_0_featureMatchingSelectionMethod'))
});

pm.test("Check matchedAddress", function () {
    const res = pm.response.json();
    pm.expect(res['data']['results'][0]['matchedAddress']['addressLocationType']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_addressLocationType'))
    pm.expect(res['data']['results'][0]['matchedAddress']['addressFormatType']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_addressFormatType'))
    pm.expect(res['data']['results'][0]['matchedAddress']['number']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_number'))
    pm.expect(res['data']['results'][0]['matchedAddress']['numberFractional']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_numberFractional'))
    pm.expect(res['data']['results'][0]['matchedAddress']['preDirectional']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_preDirectional'))
    pm.expect(res['data']['results'][0]['matchedAddress']['preQualifier']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_preQualifier'))
    pm.expect(res['data']['results'][0]['matchedAddress']['preType']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_preType'))
    pm.expect(res['data']['results'][0]['matchedAddress']['preArticle']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_preArticle'))
    pm.expect(res['data']['results'][0]['matchedAddress']['name']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_name'))
    pm.expect(res['data']['results'][0]['matchedAddress']['postArticle']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_postArticle'))
    pm.expect(res['data']['results'][0]['matchedAddress']['postQualifier']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_postQualifier'))
    pm.expect(res['data']['results'][0]['matchedAddress']['postDirectional']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_postDirectional'))
    pm.expect(res['data']['results'][0]['matchedAddress']['suffix']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_suffix'))
    pm.expect(res['data']['results'][0]['matchedAddress']['suiteType']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_suiteType'))
    pm.expect(res['data']['results'][0]['matchedAddress']['suiteNumber']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_suiteNumber'))
    pm.expect(res['data']['results'][0]['matchedAddress']['city']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_city'))
    pm.expect(res['data']['results'][0]['matchedAddress']['minorCivilDivision']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_minorCivilDivision'))
    pm.expect(res['data']['results'][0]['matchedAddress']['consolidatedCity']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_consolidatedCity'))
    pm.expect(res['data']['results'][0]['matchedAddress']['countySubRegion']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_countySubRegion'))
    pm.expect(res['data']['results'][0]['matchedAddress']['county']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_county'))
    pm.expect(res['data']['results'][0]['matchedAddress']['state']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_state'))
    pm.expect(res['data']['results'][0]['matchedAddress']['zip']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_zip'))
    pm.expect(res['data']['results'][0]['matchedAddress']['zipPlus1']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_zipPlus1'))
    pm.expect(res['data']['results'][0]['matchedAddress']['zipPlus2']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_zipPlus2'))
    pm.expect(res['data']['results'][0]['matchedAddress']['zipPlus3']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_zipPlus3'))
    pm.expect(res['data']['results'][0]['matchedAddress']['zipPlus4']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_zipPlus4'))
    pm.expect(res['data']['results'][0]['matchedAddress']['zipPlus5']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_zipPlus5'))
    pm.expect(res['data']['results'][0]['matchedAddress']['country']).to.equal(pm.iterationData.get('data_results_0_matchedAddress_country'))
});



pm.test("Check Reference Feature", function () {
    const res = pm.response.json();
    pm.expect(res['data']['results'][0]['referenceFeature']['area']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_area'))
    pm.expect(res['data']['results'][0]['referenceFeature']['areaType']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_areaType'))
    pm.expect(res['data']['results'][0]['referenceFeature']['geometrySRID']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_geometrySRID'))
    pm.expect(res['data']['results'][0]['referenceFeature']['geometry']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_geometry'))
    pm.expect(res['data']['results'][0]['referenceFeature']['source']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_source'))
    pm.expect(res['data']['results'][0]['referenceFeature']['vintage']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_vintage'))
    pm.expect(res['data']['results'][0]['referenceFeature']['primaryIdField']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_primaryIdField'))
    pm.expect(res['data']['results'][0]['referenceFeature']['primaryIdValue']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_primaryIdValue'))
    pm.expect(res['data']['results'][0]['referenceFeature']['secondaryIdField']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_secondaryIdField'))
    pm.expect(res['data']['results'][0]['referenceFeature']['secondaryIdValue']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_secondaryIdValue'))
    pm.expect(res['data']['results'][0]['referenceFeature']['interpolationType']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_interpolationType'))
    pm.expect(res['data']['results'][0]['referenceFeature']['interpolationSubType']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_interpolationSubType'))
});

pm.test("referenceFeature - Address", function () {
    const res = pm.response.json();
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['addressLocationType']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_addressLocationType'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['addressFormatType']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_addressFormatType'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['number']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_number'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['numberFractional']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_numberFractional'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['preDirectional']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_preDirectional'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['preQualifier']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_preQualifier'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['preType']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_preType'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['preArticle']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_preArticle'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['name']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_name'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['postArticle']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_postArticle'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['postQualifier']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_postQualifier'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['postDirectional']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_postDirectional'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['suffix']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_suffix'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['suiteType']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_suiteType'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['suiteNumber']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_suiteNumber'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['city']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_city'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['minorCivilDivision']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_minorCivilDivision'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['consolidatedCity']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_consolidatedCity'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['countySubRegion']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_countySubRegion'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['county']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_county'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['state']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_state'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['zip']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_zip'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['zipPlus1']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_zipPlus1'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['zipPlus2']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_zipPlus2'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['zipPlus3']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_zipPlus3'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['zipPlus4']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_zipPlus4'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['zipPlus5']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_zipPlus5'))
    pm.expect(res['data']['results'][0]['referenceFeature']['address']['country']).to.equal(pm.iterationData.get('data_results_0_referenceFeature_address_country'))
});