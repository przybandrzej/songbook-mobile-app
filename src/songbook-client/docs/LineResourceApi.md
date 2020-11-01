# SongbookApi.LineResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGuitarCordUsingPATCH**](LineResourceApi.md#addGuitarCordUsingPATCH) | **PATCH** /api/lines/{id}/add-guitar-cord | addGuitarCord
[**getAllLinesUsingGET**](LineResourceApi.md#getAllLinesUsingGET) | **GET** /api/lines | getAllLines
[**getLineByIdUsingGET**](LineResourceApi.md#getLineByIdUsingGET) | **GET** /api/lines/{id} | getLineById
[**getLineCordsUsingGET**](LineResourceApi.md#getLineCordsUsingGET) | **GET** /api/lines/{id}/guitar-cords | getLineCords
[**removeGuitarCordUsingPATCH**](LineResourceApi.md#removeGuitarCordUsingPATCH) | **PATCH** /api/lines/{id}/remove-guitar-cord/{cordId} | removeGuitarCord
[**updateLineUsingPUT**](LineResourceApi.md#updateLineUsingPUT) | **PUT** /api/lines | updateLine


<a name="addGuitarCordUsingPATCH"></a>
# **addGuitarCordUsingPATCH**
> GuitarCordDTO addGuitarCordUsingPATCH(cord, id)

addGuitarCord

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.LineResourceApi();

let cord = new SongbookApi.CreateGuitarCordDTO(); // CreateGuitarCordDTO | cord

let id = 789; // Number | id


apiInstance.addGuitarCordUsingPATCH(cord, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cord** | [**CreateGuitarCordDTO**](CreateGuitarCordDTO.md)| cord | 
 **id** | **Number**| id | 

### Return type

[**GuitarCordDTO**](GuitarCordDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAllLinesUsingGET"></a>
# **getAllLinesUsingGET**
> [LineDTO] getAllLinesUsingGET()

getAllLines

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.LineResourceApi();

apiInstance.getAllLinesUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[LineDTO]**](LineDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getLineByIdUsingGET"></a>
# **getLineByIdUsingGET**
> LineDTO getLineByIdUsingGET(id)

getLineById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.LineResourceApi();

let id = 789; // Number | id


apiInstance.getLineByIdUsingGET(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**LineDTO**](LineDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getLineCordsUsingGET"></a>
# **getLineCordsUsingGET**
> [GuitarCordDTO] getLineCordsUsingGET(id)

getLineCords

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.LineResourceApi();

let id = 789; // Number | id


apiInstance.getLineCordsUsingGET(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**[GuitarCordDTO]**](GuitarCordDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="removeGuitarCordUsingPATCH"></a>
# **removeGuitarCordUsingPATCH**
> removeGuitarCordUsingPATCH(cordId, id)

removeGuitarCord

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.LineResourceApi();

let cordId = 789; // Number | cordId

let id = 789; // Number | id


apiInstance.removeGuitarCordUsingPATCH(cordId, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cordId** | **Number**| cordId | 
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateLineUsingPUT"></a>
# **updateLineUsingPUT**
> LineDTO updateLineUsingPUT(lineDTO)

updateLine

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.LineResourceApi();

let lineDTO = new SongbookApi.LineDTO(); // LineDTO | lineDTO


apiInstance.updateLineUsingPUT(lineDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lineDTO** | [**LineDTO**](LineDTO.md)| lineDTO | 

### Return type

[**LineDTO**](LineDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

