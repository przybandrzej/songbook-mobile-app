# SongbookApi.UserRoleResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST6**](UserRoleResourceApi.md#createUsingPOST6) | **POST** /api/user_roles | create
[**deleteUsingDELETE7**](UserRoleResourceApi.md#deleteUsingDELETE7) | **DELETE** /api/user_roles/id/{id} | delete
[**getAllUsingGET7**](UserRoleResourceApi.md#getAllUsingGET7) | **GET** /api/user_roles | getAll
[**getByIdUsingGET7**](UserRoleResourceApi.md#getByIdUsingGET7) | **GET** /api/user_roles/id/{id} | getById
[**getByNameSearchQueryUsingGET**](UserRoleResourceApi.md#getByNameSearchQueryUsingGET) | **GET** /api/user_roles/name/{searchQuery} | getByNameSearchQuery
[**getUsersByUserRoleIdUsingGET**](UserRoleResourceApi.md#getUsersByUserRoleIdUsingGET) | **GET** /api/user_roles/id/{id}/users | getUsersByUserRoleId
[**updateUsingPUT6**](UserRoleResourceApi.md#updateUsingPUT6) | **PUT** /api/user_roles | update


<a name="createUsingPOST6"></a>
# **createUsingPOST6**
> UserRoleDTO createUsingPOST6(userRoleDto)

create

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserRoleResourceApi();

var userRoleDto = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | userRoleDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUsingPOST6(userRoleDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRoleDto** | [**UniversalCreateDTO**](UniversalCreateDTO.md)| userRoleDto | 

### Return type

[**UserRoleDTO**](UserRoleDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUsingDELETE7"></a>
# **deleteUsingDELETE7**
> deleteUsingDELETE7(id)

delete

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserRoleResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUsingDELETE7(id, callback);
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

<a name="getAllUsingGET7"></a>
# **getAllUsingGET7**
> [UserRoleDTO] getAllUsingGET7()

getAll

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserRoleResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllUsingGET7(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[UserRoleDTO]**](UserRoleDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByIdUsingGET7"></a>
# **getByIdUsingGET7**
> UserRoleDTO getByIdUsingGET7(id)

getById

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserRoleResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByIdUsingGET7(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**UserRoleDTO**](UserRoleDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByNameSearchQueryUsingGET"></a>
# **getByNameSearchQueryUsingGET**
> [UserRoleDTO] getByNameSearchQueryUsingGET(searchQuery)

getByNameSearchQuery

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserRoleResourceApi();

var searchQuery = "searchQuery_example"; // String | searchQuery


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByNameSearchQueryUsingGET(searchQuery, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchQuery** | **String**| searchQuery | 

### Return type

[**[UserRoleDTO]**](UserRoleDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getUsersByUserRoleIdUsingGET"></a>
# **getUsersByUserRoleIdUsingGET**
> [UserDTO] getUsersByUserRoleIdUsingGET(id)

getUsersByUserRoleId

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserRoleResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersByUserRoleIdUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**[UserDTO]**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateUsingPUT6"></a>
# **updateUsingPUT6**
> UserRoleDTO updateUsingPUT6(userRoleDto)

update

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserRoleResourceApi();

var userRoleDto = new SongbookApi.UserRoleDTO(); // UserRoleDTO | userRoleDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUsingPUT6(userRoleDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRoleDto** | [**UserRoleDTO**](UserRoleDTO.md)| userRoleDto | 

### Return type

[**UserRoleDTO**](UserRoleDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

