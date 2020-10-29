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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let userRoleDto = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | userRoleDto


apiInstance.createUsingPOST6(userRoleDto, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let id = 789; // Number | id


apiInstance.deleteUsingDELETE7(id, (error, data, response) => {
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

<a name="getAllUsingGET7"></a>
# **getAllUsingGET7**
> [UserRoleDTO] getAllUsingGET7()

getAll

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

apiInstance.getAllUsingGET7((error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let id = 789; // Number | id


apiInstance.getByIdUsingGET7(id, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let searchQuery = "searchQuery_example"; // String | searchQuery


apiInstance.getByNameSearchQueryUsingGET(searchQuery, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let id = 789; // Number | id


apiInstance.getUsersByUserRoleIdUsingGET(id, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let userRoleDto = new SongbookApi.UserRoleDTO(); // UserRoleDTO | userRoleDto


apiInstance.updateUsingPUT6(userRoleDto, (error, data, response) => {
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
 **userRoleDto** | [**UserRoleDTO**](UserRoleDTO.md)| userRoleDto | 

### Return type

[**UserRoleDTO**](UserRoleDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

