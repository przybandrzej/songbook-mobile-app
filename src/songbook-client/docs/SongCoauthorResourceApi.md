# SongbookApi.SongCoauthorResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST3**](SongCoauthorResourceApi.md#createUsingPOST3) | **POST** /api/coauthors | create
[**deleteUsingDELETE3**](SongCoauthorResourceApi.md#deleteUsingDELETE3) | **DELETE** /api/coauthors/{songId}/{authorId}/{function} | delete
[**getByAuthorIdUsingGET**](SongCoauthorResourceApi.md#getByAuthorIdUsingGET) | **GET** /api/coauthors/author/{id} | getByAuthorId
[**getByFunctionUsingGET**](SongCoauthorResourceApi.md#getByFunctionUsingGET) | **GET** /api/coauthors/function/{function} | getByFunction
[**getBySongIdUsingGET**](SongCoauthorResourceApi.md#getBySongIdUsingGET) | **GET** /api/coauthors/song/{id} | getBySongId
[**updateUsingPUT3**](SongCoauthorResourceApi.md#updateUsingPUT3) | **PUT** /api/coauthors | update


<a name="createUsingPOST3"></a>
# **createUsingPOST3**
> SongCoauthorDTO createUsingPOST3(songCoauthorDTO)

create

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let songCoauthorDTO = new SongbookApi.SongCoauthorDTO(); // SongCoauthorDTO | songCoauthorDTO


apiInstance.createUsingPOST3(songCoauthorDTO, (error, data, response) => {
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

<a name="deleteUsingDELETE3"></a>
# **deleteUsingDELETE3**
> deleteUsingDELETE3(authorId, _function, songId)

delete

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let authorId = 789; // Number | authorId

let _function = "_function_example"; // String | function

let songId = 789; // Number | songId


apiInstance.deleteUsingDELETE3(authorId, _function, songId, (error, data, response) => {
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
 **authorId** | **Number**| authorId | 
 **_function** | **String**| function | 
 **songId** | **Number**| songId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByAuthorIdUsingGET"></a>
# **getByAuthorIdUsingGET**
> [SongCoauthorDTO] getByAuthorIdUsingGET(id)

getByAuthorId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let id = 789; // Number | id


apiInstance.getByAuthorIdUsingGET(id, (error, data, response) => {
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

<a name="getByFunctionUsingGET"></a>
# **getByFunctionUsingGET**
> [SongCoauthorDTO] getByFunctionUsingGET(_function)

getByFunction

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let _function = "_function_example"; // String | function


apiInstance.getByFunctionUsingGET(_function, (error, data, response) => {
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

<a name="getBySongIdUsingGET"></a>
# **getBySongIdUsingGET**
> [SongCoauthorDTO] getBySongIdUsingGET(id)

getBySongId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let id = 789; // Number | id


apiInstance.getBySongIdUsingGET(id, (error, data, response) => {
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

<a name="updateUsingPUT3"></a>
# **updateUsingPUT3**
> SongCoauthorDTO updateUsingPUT3(songCoauthorDTO)

update

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongCoauthorResourceApi();

let songCoauthorDTO = new SongbookApi.SongCoauthorDTO(); // SongCoauthorDTO | songCoauthorDTO


apiInstance.updateUsingPUT3(songCoauthorDTO, (error, data, response) => {
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

