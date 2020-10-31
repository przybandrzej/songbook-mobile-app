# SongbookApi.AuthorResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAuthorUsingPOST**](AuthorResourceApi.md#createAuthorUsingPOST) | **POST** /api/authors | createAuthor
[**deleteAuthorUsingDELETE**](AuthorResourceApi.md#deleteAuthorUsingDELETE) | **DELETE** /api/authors/{id} | deleteAuthor
[**getAllAuthorsUsingGET**](AuthorResourceApi.md#getAllAuthorsUsingGET) | **GET** /api/authors | getAllAuthors
[**getAuthorByIdUsingGET**](AuthorResourceApi.md#getAuthorByIdUsingGET) | **GET** /api/authors/{id} | getAuthorById
[**getAuthorByNameFragmentUsingGET**](AuthorResourceApi.md#getAuthorByNameFragmentUsingGET) | **GET** /api/authors/name/{name} | getAuthorByNameFragment
[**getSongsByAuthorIdUsingGET**](AuthorResourceApi.md#getSongsByAuthorIdUsingGET) | **GET** /api/authors/{id}/songs | getSongsByAuthorId
[**updateAuthorUsingPUT**](AuthorResourceApi.md#updateAuthorUsingPUT) | **PUT** /api/authors | updateAuthor


<a name="createAuthorUsingPOST"></a>
# **createAuthorUsingPOST**
> AuthorDTO createAuthorUsingPOST(authorDto)

createAuthor

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let authorDto = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | authorDto


apiInstance.createAuthorUsingPOST(authorDto, (error, data, response) => {
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

<a name="deleteAuthorUsingDELETE"></a>
# **deleteAuthorUsingDELETE**
> deleteAuthorUsingDELETE(id)

deleteAuthor

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let id = 789; // Number | id


apiInstance.deleteAuthorUsingDELETE(id, (error, data, response) => {
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

<a name="getAllAuthorsUsingGET"></a>
# **getAllAuthorsUsingGET**
> [AuthorDTO] getAllAuthorsUsingGET(opts)

getAllAuthors

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getAllAuthorsUsingGET(opts, (error, data, response) => {
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

<a name="getAuthorByIdUsingGET"></a>
# **getAuthorByIdUsingGET**
> AuthorDTO getAuthorByIdUsingGET(id)

getAuthorById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let id = 789; // Number | id


apiInstance.getAuthorByIdUsingGET(id, (error, data, response) => {
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

<a name="getAuthorByNameFragmentUsingGET"></a>
# **getAuthorByNameFragmentUsingGET**
> [AuthorDTO] getAuthorByNameFragmentUsingGET(name, opts)

getAuthorByNameFragment

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let name = "name_example"; // String | name

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getAuthorByNameFragmentUsingGET(name, opts, (error, data, response) => {
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

<a name="updateAuthorUsingPUT"></a>
# **updateAuthorUsingPUT**
> AuthorDTO updateAuthorUsingPUT(authorDto)

updateAuthor

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AuthorResourceApi();

let authorDto = new SongbookApi.AuthorDTO(); // AuthorDTO | authorDto


apiInstance.updateAuthorUsingPUT(authorDto, (error, data, response) => {
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

