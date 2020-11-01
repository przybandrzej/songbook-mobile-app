# SongbookApi.SongCoauthorResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCoauthorUsingPOST**](SongCoauthorResourceApi.md#createCoauthorUsingPOST) | **POST** /api/coauthors | createCoauthor
[**deleteCoauthorUsingDELETE**](SongCoauthorResourceApi.md#deleteCoauthorUsingDELETE) | **DELETE** /api/coauthors/{id} | deleteCoauthor
[**getAllCoauthorsUsingGET**](SongCoauthorResourceApi.md#getAllCoauthorsUsingGET) | **GET** /api/coauthors | getAllCoauthors
[**getCoauthorByIdUsingGET**](SongCoauthorResourceApi.md#getCoauthorByIdUsingGET) | **GET** /api/coauthors/{id} | getCoauthorById
[**getCoauthorsByAuthorIdUsingGET**](SongCoauthorResourceApi.md#getCoauthorsByAuthorIdUsingGET) | **GET** /api/coauthors/author/{id} | getCoauthorsByAuthorId
[**getCoauthorsByFunctionUsingGET**](SongCoauthorResourceApi.md#getCoauthorsByFunctionUsingGET) | **GET** /api/coauthors/function/{function} | getCoauthorsByFunction
[**getCoauthorsBySongIdUsingGET**](SongCoauthorResourceApi.md#getCoauthorsBySongIdUsingGET) | **GET** /api/coauthors/song/{id} | getCoauthorsBySongId
[**updateCoauthorUsingPUT**](SongCoauthorResourceApi.md#updateCoauthorUsingPUT) | **PUT** /api/coauthors | updateCoauthor


<a name="createCoauthorUsingPOST"></a>
# **createCoauthorUsingPOST**
> SongCoauthorDTO createCoauthorUsingPOST(songCoauthorDTO)

createCoauthor

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let songCoauthorDTO = new SongbookApi.SongCoauthorDTO(); // SongCoauthorDTO | songCoauthorDTO


apiInstance.createCoauthorUsingPOST(songCoauthorDTO, (error, data, response) => {
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
 **songCoauthorDTO** | [**SongCoauthorDTO**](SongCoauthorDTO.md)| songCoauthorDTO | 

### Return type

[**SongCoauthorDTO**](SongCoauthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteCoauthorUsingDELETE"></a>
# **deleteCoauthorUsingDELETE**
> deleteCoauthorUsingDELETE(id)

deleteCoauthor

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let id = 789; // Number | id


apiInstance.deleteCoauthorUsingDELETE(id, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAllCoauthorsUsingGET"></a>
# **getAllCoauthorsUsingGET**
> [SongCoauthorDTO] getAllCoauthorsUsingGET()

getAllCoauthors

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

apiInstance.getAllCoauthorsUsingGET((error, data, response) => {
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

[**[SongCoauthorDTO]**](SongCoauthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getCoauthorByIdUsingGET"></a>
# **getCoauthorByIdUsingGET**
> SongCoauthorDTO getCoauthorByIdUsingGET(id)

getCoauthorById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let id = 789; // Number | id


apiInstance.getCoauthorByIdUsingGET(id, (error, data, response) => {
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

[**SongCoauthorDTO**](SongCoauthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getCoauthorsByAuthorIdUsingGET"></a>
# **getCoauthorsByAuthorIdUsingGET**
> [SongCoauthorDTO] getCoauthorsByAuthorIdUsingGET(id)

getCoauthorsByAuthorId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let id = 789; // Number | id


apiInstance.getCoauthorsByAuthorIdUsingGET(id, (error, data, response) => {
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

[**[SongCoauthorDTO]**](SongCoauthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getCoauthorsByFunctionUsingGET"></a>
# **getCoauthorsByFunctionUsingGET**
> [SongCoauthorDTO] getCoauthorsByFunctionUsingGET(_function)

getCoauthorsByFunction

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let _function = "_function_example"; // String | function


apiInstance.getCoauthorsByFunctionUsingGET(_function, (error, data, response) => {
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
 **_function** | **String**| function | 

### Return type

[**[SongCoauthorDTO]**](SongCoauthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getCoauthorsBySongIdUsingGET"></a>
# **getCoauthorsBySongIdUsingGET**
> [SongCoauthorDTO] getCoauthorsBySongIdUsingGET(id)

getCoauthorsBySongId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let id = 789; // Number | id


apiInstance.getCoauthorsBySongIdUsingGET(id, (error, data, response) => {
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

[**[SongCoauthorDTO]**](SongCoauthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateCoauthorUsingPUT"></a>
# **updateCoauthorUsingPUT**
> SongCoauthorDTO updateCoauthorUsingPUT(songCoauthorDTO)

updateCoauthor

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let songCoauthorDTO = new SongbookApi.SongCoauthorDTO(); // SongCoauthorDTO | songCoauthorDTO


apiInstance.updateCoauthorUsingPUT(songCoauthorDTO, (error, data, response) => {
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
 **songCoauthorDTO** | [**SongCoauthorDTO**](SongCoauthorDTO.md)| songCoauthorDTO | 

### Return type

[**SongCoauthorDTO**](SongCoauthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

