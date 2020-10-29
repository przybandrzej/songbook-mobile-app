# SongbookApi.TagResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST5**](TagResourceApi.md#createUsingPOST5) | **POST** /api/tags | create
[**deleteUsingDELETE5**](TagResourceApi.md#deleteUsingDELETE5) | **DELETE** /api/tags/id/{id} | delete
[**getAllUsingGET5**](TagResourceApi.md#getAllUsingGET5) | **GET** /api/tags | getAll
[**getByIdUsingGET5**](TagResourceApi.md#getByIdUsingGET5) | **GET** /api/tags/id/{id} | getById
[**getByNameUsingGET2**](TagResourceApi.md#getByNameUsingGET2) | **GET** /api/tags/name/{name} | getByName
[**getSongsByTagIdUsingGET**](TagResourceApi.md#getSongsByTagIdUsingGET) | **GET** /api/tags/id/{id}/songs | getSongsByTagId
[**updateUsingPUT5**](TagResourceApi.md#updateUsingPUT5) | **PUT** /api/tags | update


<a name="createUsingPOST5"></a>
# **createUsingPOST5**
> TagDTO createUsingPOST5(tagDto)

create

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let tagDto = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | tagDto


apiInstance.createUsingPOST5(tagDto, (error, data, response) => {
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
 **tagDto** | [**UniversalCreateDTO**](UniversalCreateDTO.md)| tagDto | 

### Return type

[**TagDTO**](TagDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUsingDELETE5"></a>
# **deleteUsingDELETE5**
> deleteUsingDELETE5(id)

delete

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let id = 789; // Number | id


apiInstance.deleteUsingDELETE5(id, (error, data, response) => {
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

<a name="getAllUsingGET5"></a>
# **getAllUsingGET5**
> [TagDTO] getAllUsingGET5(opts)

getAll

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getAllUsingGET5(opts, (error, data, response) => {
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

[**[TagDTO]**](TagDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByIdUsingGET5"></a>
# **getByIdUsingGET5**
> TagDTO getByIdUsingGET5(id)

getById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let id = 789; // Number | id


apiInstance.getByIdUsingGET5(id, (error, data, response) => {
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

[**TagDTO**](TagDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByNameUsingGET2"></a>
# **getByNameUsingGET2**
> [TagDTO] getByNameUsingGET2(name)

getByName

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let name = "name_example"; // String | name


apiInstance.getByNameUsingGET2(name, (error, data, response) => {
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

### Return type

[**[TagDTO]**](TagDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongsByTagIdUsingGET"></a>
# **getSongsByTagIdUsingGET**
> [SongDTO] getSongsByTagIdUsingGET(id)

getSongsByTagId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let id = 789; // Number | id


apiInstance.getSongsByTagIdUsingGET(id, (error, data, response) => {
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

<a name="updateUsingPUT5"></a>
# **updateUsingPUT5**
> TagDTO updateUsingPUT5(tagDto)

update

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let tagDto = new SongbookApi.TagDTO(); // TagDTO | tagDto


apiInstance.updateUsingPUT5(tagDto, (error, data, response) => {
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
 **tagDto** | [**TagDTO**](TagDTO.md)| tagDto | 

### Return type

[**TagDTO**](TagDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

