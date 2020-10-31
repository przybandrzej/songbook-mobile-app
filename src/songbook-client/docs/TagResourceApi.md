# SongbookApi.TagResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTagUsingPOST**](TagResourceApi.md#createTagUsingPOST) | **POST** /api/tags | createTag
[**deleteTagUsingDELETE**](TagResourceApi.md#deleteTagUsingDELETE) | **DELETE** /api/tags/id/{id} | deleteTag
[**getAllTagsUsingGET**](TagResourceApi.md#getAllTagsUsingGET) | **GET** /api/tags | getAllTags
[**getSongsByTagUsingGET**](TagResourceApi.md#getSongsByTagUsingGET) | **GET** /api/tags/{id}/songs | getSongsByTag
[**getTagByIdUsingGET**](TagResourceApi.md#getTagByIdUsingGET) | **GET** /api/tags/{id} | getTagById
[**getTagByNameUsingGET**](TagResourceApi.md#getTagByNameUsingGET) | **GET** /api/tags/name/{name} | getTagByName
[**updateTagUsingPUT**](TagResourceApi.md#updateTagUsingPUT) | **PUT** /api/tags | updateTag


<a name="createTagUsingPOST"></a>
# **createTagUsingPOST**
> TagDTO createTagUsingPOST(tagDto)

createTag

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let tagDto = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | tagDto


apiInstance.createTagUsingPOST(tagDto, (error, data, response) => {
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

<a name="deleteTagUsingDELETE"></a>
# **deleteTagUsingDELETE**
> deleteTagUsingDELETE(id)

deleteTag

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let id = 789; // Number | id


apiInstance.deleteTagUsingDELETE(id, (error, data, response) => {
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

<a name="getAllTagsUsingGET"></a>
# **getAllTagsUsingGET**
> [TagDTO] getAllTagsUsingGET(opts)

getAllTags

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getAllTagsUsingGET(opts, (error, data, response) => {
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

<a name="getSongsByTagUsingGET"></a>
# **getSongsByTagUsingGET**
> [SongDTO] getSongsByTagUsingGET(id)

getSongsByTag

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let id = 789; // Number | id


apiInstance.getSongsByTagUsingGET(id, (error, data, response) => {
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

<a name="getTagByIdUsingGET"></a>
# **getTagByIdUsingGET**
> TagDTO getTagByIdUsingGET(id)

getTagById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let id = 789; // Number | id


apiInstance.getTagByIdUsingGET(id, (error, data, response) => {
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

<a name="getTagByNameUsingGET"></a>
# **getTagByNameUsingGET**
> [TagDTO] getTagByNameUsingGET(name)

getTagByName

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let name = "name_example"; // String | name


apiInstance.getTagByNameUsingGET(name, (error, data, response) => {
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

<a name="updateTagUsingPUT"></a>
# **updateTagUsingPUT**
> TagDTO updateTagUsingPUT(tagDto)

updateTag

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.TagResourceApi();

let tagDto = new SongbookApi.TagDTO(); // TagDTO | tagDto


apiInstance.updateTagUsingPUT(tagDto, (error, data, response) => {
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

