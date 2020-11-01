# SongbookApi.AuthenticationResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAccountUsingGET**](AuthenticationResourceApi.md#activateAccountUsingGET) | **GET** /api/activate | activateAccount
[**authenticateUsingPOST**](AuthenticationResourceApi.md#authenticateUsingPOST) | **POST** /api/authenticate | authenticate
[**changeEmailUsingPATCH**](AuthenticationResourceApi.md#changeEmailUsingPATCH) | **PATCH** /api/account/change-email | changeEmail
[**changeFirstNameUsingPATCH**](AuthenticationResourceApi.md#changeFirstNameUsingPATCH) | **PATCH** /api/account/change-first-name | changeFirstName
[**changeImageUrlUsingPATCH**](AuthenticationResourceApi.md#changeImageUrlUsingPATCH) | **PATCH** /api/account/change-image/{url} | changeImageUrl
[**changeLastNameUsingPATCH**](AuthenticationResourceApi.md#changeLastNameUsingPATCH) | **PATCH** /api/account/change-last-name | changeLastName
[**changePasswordUsingPOST**](AuthenticationResourceApi.md#changePasswordUsingPOST) | **POST** /api/account/change-password | changePassword
[**finishPasswordResetUsingPOST**](AuthenticationResourceApi.md#finishPasswordResetUsingPOST) | **POST** /api/account/reset-password/finish | finishPasswordReset
[**getAccountUsingGET**](AuthenticationResourceApi.md#getAccountUsingGET) | **GET** /api/account | getAccount
[**isAuthenticatedUsingGET**](AuthenticationResourceApi.md#isAuthenticatedUsingGET) | **GET** /api/is-authenticated | isAuthenticated
[**registerUsingPOST**](AuthenticationResourceApi.md#registerUsingPOST) | **POST** /api/register | register
[**requestPasswordResetUsingPOST**](AuthenticationResourceApi.md#requestPasswordResetUsingPOST) | **POST** /api/account/reset-password/init | requestPasswordReset


<a name="activateAccountUsingGET"></a>
# **activateAccountUsingGET**
> activateAccountUsingGET(key)

activateAccount

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

let key = "key_example"; // String | key


apiInstance.activateAccountUsingGET(key, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

let form = new SongbookApi.LoginForm(); // LoginForm | form


apiInstance.authenticateUsingPOST(form, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

let emailChangeDTO = new SongbookApi.EmailChangeDTO(); // EmailChangeDTO | emailChangeDTO


apiInstance.changeEmailUsingPATCH(emailChangeDTO, (error, data, response) => {
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
 **emailChangeDTO** | [**EmailChangeDTO**](EmailChangeDTO.md)| emailChangeDTO | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="changeFirstNameUsingPATCH"></a>
# **changeFirstNameUsingPATCH**
> changeFirstNameUsingPATCH(nameChangeDTO)

changeFirstName

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

let nameChangeDTO = new SongbookApi.NameChangeDTO(); // NameChangeDTO | nameChangeDTO


apiInstance.changeFirstNameUsingPATCH(nameChangeDTO, (error, data, response) => {
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
 **nameChangeDTO** | [**NameChangeDTO**](NameChangeDTO.md)| nameChangeDTO | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="changeImageUrlUsingPATCH"></a>
# **changeImageUrlUsingPATCH**
> changeImageUrlUsingPATCH(url)

changeImageUrl

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

let url = "url_example"; // String | url


apiInstance.changeImageUrlUsingPATCH(url, (error, data, response) => {
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
 **url** | **String**| url | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="changeLastNameUsingPATCH"></a>
# **changeLastNameUsingPATCH**
> changeLastNameUsingPATCH(nameChangeDTO)

changeLastName

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

let nameChangeDTO = new SongbookApi.NameChangeDTO(); // NameChangeDTO | nameChangeDTO


apiInstance.changeLastNameUsingPATCH(nameChangeDTO, (error, data, response) => {
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
 **nameChangeDTO** | [**NameChangeDTO**](NameChangeDTO.md)| nameChangeDTO | 

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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

let passwordChangeDto = new SongbookApi.PasswordChangeDTO(); // PasswordChangeDTO | passwordChangeDto


apiInstance.changePasswordUsingPOST(passwordChangeDto, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

let keyAndPassword = new SongbookApi.TokenAndPasswordDTO(); // TokenAndPasswordDTO | keyAndPassword


apiInstance.finishPasswordResetUsingPOST(keyAndPassword, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

apiInstance.getAccountUsingGET((error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

apiInstance.isAuthenticatedUsingGET((error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

let form = new SongbookApi.RegisterNewUserForm(); // RegisterNewUserForm | form


apiInstance.registerUsingPOST(form, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthenticationResourceApi();

let mail = "mail_example"; // String | mail


apiInstance.requestPasswordResetUsingPOST(mail, (error, data, response) => {
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
 **mail** | **String**| mail | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

