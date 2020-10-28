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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AwaitingSongResourceApi();

var opts = { 
  'limit': 56 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllUsingGET1(opts, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AwaitingSongResourceApi();

var categoryId = 789; // Number | categoryId

var opts = { 
  'limit': 56 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByCategoryUsingGET(categoryId, opts, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AwaitingSongResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByIdUsingGET1(id, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AwaitingSongResourceApi();

var value = "value_example"; // String | value

var opts = { 
  'limit': 56 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByLyricsFragmentUsingGET(value, opts, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AwaitingSongResourceApi();

var tagId = 789; // Number | tagId

var opts = { 
  'limit': 56 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByTagUsingGET(tagId, opts, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AwaitingSongResourceApi();

var title = "title_example"; // String | title

var opts = { 
  'limit': 56 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByTitleFragmentUsingGET(title, opts, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.AwaitingSongResourceApi();

var limit = 56; // Number | limit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLatestUsingGET(limit, callback);
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

