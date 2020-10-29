# SongbookApi.AwaitingSongResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllUsingGET1**](AwaitingSongResourceApi.md#getAllUsingGET1) | **GET** /api/awaiting-songs | getAll
[**getByCategoryUsingGET**](AwaitingSongResourceApi.md#getByCategoryUsingGET) | **GET** /api/awaiting-songs/category/{categoryId} | getByCategory
[**getByIdUsingGET1**](AwaitingSongResourceApi.md#getByIdUsingGET1) | **GET** /api/awaiting-songs/id/{id} | getById
[**getByLyricsFragmentUsingGET**](AwaitingSongResourceApi.md#getByLyricsFragmentUsingGET) | **GET** /api/awaiting-songs/lyrics_fragment/{value} | getByLyricsFragment
[**getByTagUsingGET**](AwaitingSongResourceApi.md#getByTagUsingGET) | **GET** /api/awaiting-songs/tag/{tagId} | getByTag
[**getByTitleFragmentUsingGET**](AwaitingSongResourceApi.md#getByTitleFragmentUsingGET) | **GET** /api/awaiting-songs/title/{title} | getByTitleFragment
[**getLatestUsingGET**](AwaitingSongResourceApi.md#getLatestUsingGET) | **GET** /api/awaiting-songs/latest | getLatest


<a name="getAllUsingGET1"></a>
# **getAllUsingGET1**
> [SongDTO] getAllUsingGET1(opts)

getAll

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AwaitingSongResourceApi();

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getAllUsingGET1(opts, (error, data, response) => {
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

<a name="getByCategoryUsingGET"></a>
# **getByCategoryUsingGET**
> [SongDTO] getByCategoryUsingGET(categoryId, opts)

getByCategory

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AwaitingSongResourceApi();

let categoryId = 789; // Number | categoryId

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getByCategoryUsingGET(categoryId, opts, (error, data, response) => {
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
 **categoryId** | **Number**| categoryId | 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[SongDTO]**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByIdUsingGET1"></a>
# **getByIdUsingGET1**
> SongDTO getByIdUsingGET1(id)

getById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AwaitingSongResourceApi();

let id = 789; // Number | id


apiInstance.getByIdUsingGET1(id, (error, data, response) => {
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

<a name="getByLyricsFragmentUsingGET"></a>
# **getByLyricsFragmentUsingGET**
> [SongDTO] getByLyricsFragmentUsingGET(value, opts)

getByLyricsFragment

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AwaitingSongResourceApi();

let value = "value_example"; // String | value

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getByLyricsFragmentUsingGET(value, opts, (error, data, response) => {
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
 **value** | **String**| value | 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[SongDTO]**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByTagUsingGET"></a>
# **getByTagUsingGET**
> [SongDTO] getByTagUsingGET(tagId, opts)

getByTag

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AwaitingSongResourceApi();

let tagId = 789; // Number | tagId

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getByTagUsingGET(tagId, opts, (error, data, response) => {
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
 **tagId** | **Number**| tagId | 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[SongDTO]**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByTitleFragmentUsingGET"></a>
# **getByTitleFragmentUsingGET**
> [SongDTO] getByTitleFragmentUsingGET(title, opts)

getByTitleFragment

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AwaitingSongResourceApi();

let title = "title_example"; // String | title

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getByTitleFragmentUsingGET(title, opts, (error, data, response) => {
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

<a name="getLatestUsingGET"></a>
# **getLatestUsingGET**
> [SongDTO] getLatestUsingGET(limit)

getLatest

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.AwaitingSongResourceApi();

let limit = 56; // Number | limit


apiInstance.getLatestUsingGET(limit, (error, data, response) => {
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
 **limit** | **Number**| limit | 

### Return type

[**[SongDTO]**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

