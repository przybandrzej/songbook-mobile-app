# SongbookApi.AuthenticationResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAccountUsingGET**](AuthenticationResourceApi.md#activateAccountUsingGET) | **GET** /api/activate | activateAccount
[**authenticateUsingPOST**](AuthenticationResourceApi.md#authenticateUsingPOST) | **POST** /api/authenticate | authenticate
[**changeEmailUsingPATCH**](AuthenticationResourceApi.md#changeEmailUsingPATCH) | **PATCH** /api/account/change-email | changeEmail
[**changePasswordUsingPOST**](AuthenticationResourceApi.md#changePasswordUsingPOST) | **POST** /api/account/change-password | changePassword
[**finishPasswordResetUsingPOST**](AuthenticationResourceApi.md#finishPasswordResetUsingPOST) | **POST** /api/account/reset-password/finish | finishPasswordReset
[**getAccountUsingGET**](AuthenticationResourceApi.md#getAccountUsingGET) | **GET** /api/account | getAccount
[**isAuthenticatedUsingGET**](AuthenticationResourceApi.md#isAuthenticatedUsingGET) | **GET** /api/is-authenticated | isAuthenticated
[**registerUsingPOST**](AuthenticationResourceApi.md#registerUsingPOST) | **POST** /api/register | register
[**requestPasswordResetUsingPOST**](AuthenticationResourceApi.md#requestPasswordResetUsingPOST) | **POST** /api/account/reset-password/init | requestPasswordReset
[**saveAccountUsingPOST**](AuthenticationResourceApi.md#saveAccountUsingPOST) | **POST** /api/account | saveAccount


<a name="activateAccountUsingGET"></a>
# **activateAccountUsingGET**
> activateAccountUsingGET(key)

activateAccount

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthenticationResourceApi();

var key = "key_example"; // String | key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.activateAccountUsingGET(key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="authenticateUsingPOST"></a>
# **authenticateUsingPOST**
> TokenDTO authenticateUsingPOST(form)

authenticate

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthenticationResourceApi();

var form = new SongbookApi.LoginForm(); // LoginForm | form


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authenticateUsingPOST(form, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **form** | [**LoginForm**](LoginForm.md)| form | 

### Return type

[**TokenDTO**](TokenDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="changeEmailUsingPATCH"></a>
# **changeEmailUsingPATCH**
> changeEmailUsingPATCH(emailChangeDTO)

changeEmail

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthenticationResourceApi();

var emailChangeDTO = new SongbookApi.EmailChangeDTO(); // EmailChangeDTO | emailChangeDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changeEmailUsingPATCH(emailChangeDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailChangeDTO** | [**EmailChangeDTO**](EmailChangeDTO.md)| emailChangeDTO | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="changePasswordUsingPOST"></a>
# **changePasswordUsingPOST**
> changePasswordUsingPOST(passwordChangeDto)

changePassword

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthenticationResourceApi();

var passwordChangeDto = new SongbookApi.PasswordChangeDTO(); // PasswordChangeDTO | passwordChangeDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changePasswordUsingPOST(passwordChangeDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordChangeDto** | [**PasswordChangeDTO**](PasswordChangeDTO.md)| passwordChangeDto | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="finishPasswordResetUsingPOST"></a>
# **finishPasswordResetUsingPOST**
> finishPasswordResetUsingPOST(keyAndPassword)

finishPasswordReset

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthenticationResourceApi();

var keyAndPassword = new SongbookApi.TokenAndPasswordDTO(); // TokenAndPasswordDTO | keyAndPassword


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.finishPasswordResetUsingPOST(keyAndPassword, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyAndPassword** | [**TokenAndPasswordDTO**](TokenAndPasswordDTO.md)| keyAndPassword | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAccountUsingGET"></a>
# **getAccountUsingGET**
> UserDTO getAccountUsingGET()

getAccount

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthenticationResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="isAuthenticatedUsingGET"></a>
# **isAuthenticatedUsingGET**
> 'Boolean' isAuthenticatedUsingGET()

isAuthenticated

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthenticationResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.isAuthenticatedUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="registerUsingPOST"></a>
# **registerUsingPOST**
> registerUsingPOST(form)

register

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthenticationResourceApi();

var form = new SongbookApi.RegisterNewUserForm(); // RegisterNewUserForm | form


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.registerUsingPOST(form, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **form** | [**RegisterNewUserForm**](RegisterNewUserForm.md)| form | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="requestPasswordResetUsingPOST"></a>
# **requestPasswordResetUsingPOST**
> requestPasswordResetUsingPOST(mail)

requestPasswordReset

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthenticationResourceApi();

var mail = "mail_example"; // String | mail


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.requestPasswordResetUsingPOST(mail, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mail** | **String**| mail | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="saveAccountUsingPOST"></a>
# **saveAccountUsingPOST**
> UserDTO saveAccountUsingPOST(userDTO)

saveAccount

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AuthenticationResourceApi();

var userDTO = new SongbookApi.UserDTO(); // UserDTO | userDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveAccountUsingPOST(userDTO, callback);
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

