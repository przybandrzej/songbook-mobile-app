# SongbookApi.UserRoleResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoleUsingPOST**](UserRoleResourceApi.md#createRoleUsingPOST) | **POST** /api/user_roles | createRole
[**deleteRoleUsingDELETE**](UserRoleResourceApi.md#deleteRoleUsingDELETE) | **DELETE** /api/user_roles/{id} | deleteRole
[**getAllRolesUsingGET**](UserRoleResourceApi.md#getAllRolesUsingGET) | **GET** /api/user_roles | getAllRoles
[**getRoleByIdUsingGET**](UserRoleResourceApi.md#getRoleByIdUsingGET) | **GET** /api/user_roles/{id} | getRoleById
[**getRoleByNameSearchQueryUsingGET**](UserRoleResourceApi.md#getRoleByNameSearchQueryUsingGET) | **GET** /api/user_roles/name/{searchQuery} | getRoleByNameSearchQuery
[**getUserRoleUsersUsingGET**](UserRoleResourceApi.md#getUserRoleUsersUsingGET) | **GET** /api/user_roles/{id}/users | getUserRoleUsers
[**updateRoleUsingPUT**](UserRoleResourceApi.md#updateRoleUsingPUT) | **PUT** /api/user_roles | updateRole


<a name="createRoleUsingPOST"></a>
# **createRoleUsingPOST**
> UserRoleDTO createRoleUsingPOST(userRoleDto)

createRole

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let userRoleDto = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | userRoleDto


apiInstance.createRoleUsingPOST(userRoleDto, (error, data, response) => {
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

<a name="deleteRoleUsingDELETE"></a>
# **deleteRoleUsingDELETE**
> deleteRoleUsingDELETE(id)

deleteRole

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let id = 789; // Number | id


apiInstance.deleteRoleUsingDELETE(id, (error, data, response) => {
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

<a name="getAllRolesUsingGET"></a>
# **getAllRolesUsingGET**
> [UserRoleDTO] getAllRolesUsingGET()

getAllRoles

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

apiInstance.getAllRolesUsingGET((error, data, response) => {
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

<a name="getRoleByIdUsingGET"></a>
# **getRoleByIdUsingGET**
> UserRoleDTO getRoleByIdUsingGET(id)

getRoleById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let id = 789; // Number | id


apiInstance.getRoleByIdUsingGET(id, (error, data, response) => {
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

<a name="getRoleByNameSearchQueryUsingGET"></a>
# **getRoleByNameSearchQueryUsingGET**
> [UserRoleDTO] getRoleByNameSearchQueryUsingGET(searchQuery)

getRoleByNameSearchQuery

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let searchQuery = "searchQuery_example"; // String | searchQuery


apiInstance.getRoleByNameSearchQueryUsingGET(searchQuery, (error, data, response) => {
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

<a name="getUserRoleUsersUsingGET"></a>
# **getUserRoleUsersUsingGET**
> [UserDTO] getUserRoleUsersUsingGET(id)

getUserRoleUsers

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let id = 789; // Number | id


apiInstance.getUserRoleUsersUsingGET(id, (error, data, response) => {
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

<a name="updateRoleUsingPUT"></a>
# **updateRoleUsingPUT**
> UserRoleDTO updateRoleUsingPUT(userRoleDto)

updateRole

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserRoleResourceApi();

let userRoleDto = new SongbookApi.UserRoleDTO(); // UserRoleDTO | userRoleDto


apiInstance.updateRoleUsingPUT(userRoleDto, (error, data, response) => {
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

