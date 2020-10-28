# SongbookApi.CategoryResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST1**](CategoryResourceApi.md#createUsingPOST1) | **POST** /api/categories | create
[**deleteUsingDELETE1**](CategoryResourceApi.md#deleteUsingDELETE1) | **DELETE** /api/categories/id/{id} | delete
[**getAllUsingGET2**](CategoryResourceApi.md#getAllUsingGET2) | **GET** /api/categories | getAll
[**getByIdUsingGET2**](CategoryResourceApi.md#getByIdUsingGET2) | **GET** /api/categories/id/{id} | getById
[**getByNameUsingGET**](CategoryResourceApi.md#getByNameUsingGET) | **GET** /api/categories/name/{name} | getByName
[**getSongsByCategoryIdUsingGET**](CategoryResourceApi.md#getSongsByCategoryIdUsingGET) | **GET** /api/categories/id/{id}/songs | getSongsByCategoryId
[**updateUsingPUT1**](CategoryResourceApi.md#updateUsingPUT1) | **PUT** /api/categories | update


<a name="createUsingPOST1"></a>
# **createUsingPOST1**
> CategoryDTO createUsingPOST1(categoryDto)

create

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.CategoryResourceApi();

var categoryDto = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | categoryDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUsingPOST1(categoryDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryDto** | [**UniversalCreateDTO**](UniversalCreateDTO.md)| categoryDto | 

### Return type

[**CategoryDTO**](CategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUsingDELETE1"></a>
# **deleteUsingDELETE1**
> deleteUsingDELETE1(id)

delete

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.CategoryResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUsingDELETE1(id, callback);
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

<a name="getAllUsingGET2"></a>
# **getAllUsingGET2**
> [CategoryDTO] getAllUsingGET2()

getAll

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.CategoryResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllUsingGET2(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CategoryDTO]**](CategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByIdUsingGET2"></a>
# **getByIdUsingGET2**
> CategoryDTO getByIdUsingGET2(id)

getById

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.CategoryResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByIdUsingGET2(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**CategoryDTO**](CategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByNameUsingGET"></a>
# **getByNameUsingGET**
> [CategoryDTO] getByNameUsingGET(name)

getByName

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.CategoryResourceApi();

var name = "name_example"; // String | name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByNameUsingGET(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name | 

### Return type

[**[CategoryDTO]**](CategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongsByCategoryIdUsingGET"></a>
# **getSongsByCategoryIdUsingGET**
> [SongDTO] getSongsByCategoryIdUsingGET(id)

getSongsByCategoryId

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.CategoryResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSongsByCategoryIdUsingGET(id, callback);
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

<a name="updateUsingPUT1"></a>
# **updateUsingPUT1**
> CategoryDTO updateUsingPUT1(categoryDto)

update

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.CategoryResourceApi();

var categoryDto = new SongbookApi.CategoryDTO(); // CategoryDTO | categoryDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUsingPUT1(categoryDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryDto** | [**CategoryDTO**](CategoryDTO.md)| categoryDto | 

### Return type

[**CategoryDTO**](CategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

