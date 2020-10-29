# SongbookApi.AuthorResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST**](AuthorResourceApi.md#createUsingPOST) | **POST** /api/authors | create
[**deleteUsingDELETE**](AuthorResourceApi.md#deleteUsingDELETE) | **DELETE** /api/authors/id/{id} | delete
[**getAllUsingGET**](AuthorResourceApi.md#getAllUsingGET) | **GET** /api/authors | getAll
[**getByIdUsingGET**](AuthorResourceApi.md#getByIdUsingGET) | **GET** /api/authors/id/{id} | getById
[**getByNameFragmentUsingGET**](AuthorResourceApi.md#getByNameFragmentUsingGET) | **GET** /api/authors/name/{name} | getByNameFragment
[**getSongsByAuthorIdUsingGET**](AuthorResourceApi.md#getSongsByAuthorIdUsingGET) | **GET** /api/authors/id/{id}/songs | getSongsByAuthorId
[**updateUsingPUT**](AuthorResourceApi.md#updateUsingPUT) | **PUT** /api/authors | update


<a name="createUsingPOST"></a>
# **createUsingPOST**
> AuthorDTO createUsingPOST(authorDto)

create

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let authorDto = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | authorDto


apiInstance.createUsingPOST(authorDto, (error, data, response) => {
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
 **authorDto** | [**UniversalCreateDTO**](UniversalCreateDTO.md)| authorDto | 

### Return type

[**AuthorDTO**](AuthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUsingDELETE"></a>
# **deleteUsingDELETE**
> deleteUsingDELETE(id)

delete

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let id = 789; // Number | id


apiInstance.deleteUsingDELETE(id, (error, data, response) => {
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

<a name="getAllUsingGET"></a>
# **getAllUsingGET**
> [AuthorDTO] getAllUsingGET(opts)

getAll

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getAllUsingGET(opts, (error, data, response) => {
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
 **limit** | **Number**| limit | [optional] 

### Return type

[**[AuthorDTO]**](AuthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByIdUsingGET"></a>
# **getByIdUsingGET**
> AuthorDTO getByIdUsingGET(id)

getById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let id = 789; // Number | id


apiInstance.getByIdUsingGET(id, (error, data, response) => {
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

[**AuthorDTO**](AuthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByNameFragmentUsingGET"></a>
# **getByNameFragmentUsingGET**
> [AuthorDTO] getByNameFragmentUsingGET(name, opts)

getByNameFragment

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let name = "name_example"; // String | name

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getByNameFragmentUsingGET(name, opts, (error, data, response) => {
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
 **name** | **String**| name | 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[AuthorDTO]**](AuthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongsByAuthorIdUsingGET"></a>
# **getSongsByAuthorIdUsingGET**
> [SongDTO] getSongsByAuthorIdUsingGET(id)

getSongsByAuthorId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let id = 789; // Number | id


apiInstance.getSongsByAuthorIdUsingGET(id, (error, data, response) => {
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

[**[SongDTO]**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateUsingPUT"></a>
# **updateUsingPUT**
> AuthorDTO updateUsingPUT(authorDto)

update

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let authorDto = new SongbookApi.AuthorDTO(); // AuthorDTO | authorDto


apiInstance.updateUsingPUT(authorDto, (error, data, response) => {
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
 **authorDto** | [**AuthorDTO**](AuthorDTO.md)| authorDto | 

### Return type

[**AuthorDTO**](AuthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

