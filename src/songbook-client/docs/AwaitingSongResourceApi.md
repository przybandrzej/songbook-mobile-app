# SongbookApi.AwaitingSongResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllAwaitingSongsUsingGET**](AwaitingSongResourceApi.md#getAllAwaitingSongsUsingGET) | **GET** /api/awaiting-songs | getAllAwaitingSongs
[**getAwaitingSongByIdUsingGET**](AwaitingSongResourceApi.md#getAwaitingSongByIdUsingGET) | **GET** /api/awaiting-songs/{id} | getAwaitingSongById
[**getAwaitingSongByTitleFragmentUsingGET**](AwaitingSongResourceApi.md#getAwaitingSongByTitleFragmentUsingGET) | **GET** /api/awaiting-songs/title/{title} | getAwaitingSongByTitleFragment


<a name="getAllAwaitingSongsUsingGET"></a>
# **getAllAwaitingSongsUsingGET**
> [SongDTO] getAllAwaitingSongsUsingGET(opts)

getAllAwaitingSongs

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AwaitingSongResourceApi();

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getAllAwaitingSongsUsingGET(opts, (error, data, response) => {
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

[**[SongDTO]**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAwaitingSongByIdUsingGET"></a>
# **getAwaitingSongByIdUsingGET**
> SongDTO getAwaitingSongByIdUsingGET(id)

getAwaitingSongById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AwaitingSongResourceApi();

let id = 789; // Number | id


apiInstance.getAwaitingSongByIdUsingGET(id, (error, data, response) => {
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

[**SongDTO**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAwaitingSongByTitleFragmentUsingGET"></a>
# **getAwaitingSongByTitleFragmentUsingGET**
> [SongDTO] getAwaitingSongByTitleFragmentUsingGET(title, opts)

getAwaitingSongByTitleFragment

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AwaitingSongResourceApi();

let title = "title_example"; // String | title

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getAwaitingSongByTitleFragmentUsingGET(title, opts, (error, data, response) => {
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
 **title** | **String**| title | 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[SongDTO]**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

