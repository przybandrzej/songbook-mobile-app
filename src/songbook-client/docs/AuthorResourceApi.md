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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthorResourceApi();

var authorDto = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | authorDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUsingPOST(authorDto, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthorResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUsingDELETE(id, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthorResourceApi();

var opts = { 
  'limit': 56 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllUsingGET(opts, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthorResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByIdUsingGET(id, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthorResourceApi();

var name = "name_example"; // String | name

var opts = { 
  'limit': 56 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByNameFragmentUsingGET(name, opts, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthorResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSongsByAuthorIdUsingGET(id, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthorResourceApi();

var authorDto = new SongbookApi.AuthorDTO(); // AuthorDTO | authorDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUsingPUT(authorDto, callback);
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

