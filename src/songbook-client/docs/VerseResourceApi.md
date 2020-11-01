# SongbookApi.VerseResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLineUsingPATCH**](VerseResourceApi.md#addLineUsingPATCH) | **PATCH** /api/verses/{id}/add-line | addLine
[**getAllVersesUsingGET**](VerseResourceApi.md#getAllVersesUsingGET) | **GET** /api/verses | getAllVerses
[**getVerseByIdUsingGET**](VerseResourceApi.md#getVerseByIdUsingGET) | **GET** /api/verses/{id} | getVerseById
[**getVerseLinesUsingGET**](VerseResourceApi.md#getVerseLinesUsingGET) | **GET** /api/verses/{id}/lines | getVerseLines
[**removeLineUsingPATCH**](VerseResourceApi.md#removeLineUsingPATCH) | **PATCH** /api/verses/{id}/remove-line/{lineId} | removeLine
[**updateVerseUsingPUT**](VerseResourceApi.md#updateVerseUsingPUT) | **PUT** /api/verses | updateVerse


<a name="addLineUsingPATCH"></a>
# **addLineUsingPATCH**
> LineDTO addLineUsingPATCH(id, line)

addLine

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.VerseResourceApi();

let id = 789; // Number | id

let line = new SongbookApi.CreateLineDTO(); // CreateLineDTO | line


apiInstance.addLineUsingPATCH(id, line, (error, data, response) => {
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
 **line** | [**CreateLineDTO**](CreateLineDTO.md)| line | 

### Return type

[**LineDTO**](LineDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAllVersesUsingGET"></a>
# **getAllVersesUsingGET**
> [VerseDTO] getAllVersesUsingGET()

getAllVerses

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.VerseResourceApi();

apiInstance.getAllVersesUsingGET((error, data, response) => {
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

[**[VerseDTO]**](VerseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getVerseByIdUsingGET"></a>
# **getVerseByIdUsingGET**
> VerseDTO getVerseByIdUsingGET(id)

getVerseById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.VerseResourceApi();

let id = 789; // Number | id


apiInstance.getVerseByIdUsingGET(id, (error, data, response) => {
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

[**VerseDTO**](VerseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getVerseLinesUsingGET"></a>
# **getVerseLinesUsingGET**
> [LineDTO] getVerseLinesUsingGET(id)

getVerseLines

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.VerseResourceApi();

let id = 789; // Number | id


apiInstance.getVerseLinesUsingGET(id, (error, data, response) => {
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

[**[LineDTO]**](LineDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="removeLineUsingPATCH"></a>
# **removeLineUsingPATCH**
> removeLineUsingPATCH(id, lineId)

removeLine

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.VerseResourceApi();

let id = 789; // Number | id

let lineId = 789; // Number | lineId


apiInstance.removeLineUsingPATCH(id, lineId, (error, data, response) => {
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
 **id** | **Number**| id | 
 **lineId** | **Number**| lineId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateVerseUsingPUT"></a>
# **updateVerseUsingPUT**
> VerseDTO updateVerseUsingPUT(verseDTO)

updateVerse

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.VerseResourceApi();

let verseDTO = new SongbookApi.VerseDTO(); // VerseDTO | verseDTO


apiInstance.updateVerseUsingPUT(verseDTO, (error, data, response) => {
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
 **verseDTO** | [**VerseDTO**](VerseDTO.md)| verseDTO | 

### Return type

[**VerseDTO**](VerseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

