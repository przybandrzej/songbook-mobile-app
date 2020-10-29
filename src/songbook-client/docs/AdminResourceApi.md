# SongbookApi.AdminResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateUserUsingPATCH**](AdminResourceApi.md#activateUserUsingPATCH) | **PATCH** /api/admin/activate-user/{userId} | activateUser
[**updateUserRoleUsingPATCH**](AdminResourceApi.md#updateUserRoleUsingPATCH) | **PATCH** /api/admin/update-role/{userId}/{roleId} | updateUserRole
[**updateUserUsingPUT**](AdminResourceApi.md#updateUserUsingPUT) | **PUT** /api/admin/update-user | updateUser


<a name="activateUserUsingPATCH"></a>
# **activateUserUsingPATCH**
> UserDTO activateUserUsingPATCH(userId)

activateUser

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AdminResourceApi();

let userId = 789; // Number | userId


apiInstance.activateUserUsingPATCH(userId, (error, data, response) => {
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
 **userId** | **Number**| userId | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateUserRoleUsingPATCH"></a>
# **updateUserRoleUsingPATCH**
> UserDTO updateUserRoleUsingPATCH(roleId, userId)

updateUserRole

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AdminResourceApi();

let roleId = 789; // Number | roleId

let userId = 789; // Number | userId


apiInstance.updateUserRoleUsingPATCH(roleId, userId, (error, data, response) => {
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
 **roleId** | **Number**| roleId | 
 **userId** | **Number**| userId | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateUserUsingPUT"></a>
# **updateUserUsingPUT**
> UserDTO updateUserUsingPUT(userDTO)

updateUser

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AdminResourceApi();

let userDTO = new SongbookApi.UserDTO(); // UserDTO | userDTO


apiInstance.updateUserUsingPUT(userDTO, (error, data, response) => {
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
 **userDTO** | [**UserDTO**](UserDTO.md)| userDTO | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

