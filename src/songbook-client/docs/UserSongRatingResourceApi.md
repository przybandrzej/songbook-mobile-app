# SongbookApi.UserSongRatingResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST7**](UserSongRatingResourceApi.md#createUsingPOST7) | **POST** /api/ratings | create
[**deleteUsingDELETE8**](UserSongRatingResourceApi.md#deleteUsingDELETE8) | **DELETE** /api/ratings/{userId}/{songId} | delete
[**getAllUsingGET8**](UserSongRatingResourceApi.md#getAllUsingGET8) | **GET** /api/ratings | getAll
[**getBySongIdUsingGET1**](UserSongRatingResourceApi.md#getBySongIdUsingGET1) | **GET** /api/ratings/song/{id} | getBySongId
[**getByUserIdAndSongIdUsingGET**](UserSongRatingResourceApi.md#getByUserIdAndSongIdUsingGET) | **GET** /api/ratings/{userId}/{songId} | getByUserIdAndSongId
[**getByUserIdUsingGET**](UserSongRatingResourceApi.md#getByUserIdUsingGET) | **GET** /api/ratings/user/{id} | getByUserId
[**updateUsingPUT7**](UserSongRatingResourceApi.md#updateUsingPUT7) | **PUT** /api/ratings | update


<a name="createUsingPOST7"></a>
# **createUsingPOST7**
> UserSongRatingDTO createUsingPOST7(dto)

create

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserSongRatingResourceApi();

var dto = new SongbookApi.UserSongRatingDTO(); // UserSongRatingDTO | dto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUsingPOST7(dto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dto** | [**UserSongRatingDTO**](UserSongRatingDTO.md)| dto | 

### Return type

[**UserSongRatingDTO**](UserSongRatingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUsingDELETE8"></a>
# **deleteUsingDELETE8**
> deleteUsingDELETE8(songId, userId)

delete

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserSongRatingResourceApi();

var songId = 789; // Number | songId

var userId = 789; // Number | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUsingDELETE8(songId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songId** | **Number**| songId | 
 **userId** | **Number**| userId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAllUsingGET8"></a>
# **getAllUsingGET8**
> [UserSongRatingDTO] getAllUsingGET8(opts)

getAll

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserSongRatingResourceApi();

var opts = { 
  'equal': 8.14, // Number | equal
  'greaterThanEqual': 8.14, // Number | greaterThanEqual
  'lessThanEqual': 8.14 // Number | lessThanEqual
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllUsingGET8(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **equal** | **Number**| equal | [optional] 
 **greaterThanEqual** | **Number**| greaterThanEqual | [optional] 
 **lessThanEqual** | **Number**| lessThanEqual | [optional] 

### Return type

[**[UserSongRatingDTO]**](UserSongRatingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getBySongIdUsingGET1"></a>
# **getBySongIdUsingGET1**
> [UserSongRatingDTO] getBySongIdUsingGET1(id)

getBySongId

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserSongRatingResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBySongIdUsingGET1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**[UserSongRatingDTO]**](UserSongRatingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByUserIdAndSongIdUsingGET"></a>
# **getByUserIdAndSongIdUsingGET**
> UserSongRatingDTO getByUserIdAndSongIdUsingGET(songId, userId)

getByUserIdAndSongId

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserSongRatingResourceApi();

var songId = 789; // Number | songId

var userId = 789; // Number | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByUserIdAndSongIdUsingGET(songId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songId** | **Number**| songId | 
 **userId** | **Number**| userId | 

### Return type

[**UserSongRatingDTO**](UserSongRatingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByUserIdUsingGET"></a>
# **getByUserIdUsingGET**
> [UserSongRatingDTO] getByUserIdUsingGET(id)

getByUserId

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserSongRatingResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByUserIdUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**[UserSongRatingDTO]**](UserSongRatingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateUsingPUT7"></a>
# **updateUsingPUT7**
> UserSongRatingDTO updateUsingPUT7(dto)

update

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.UserSongRatingResourceApi();

var dto = new SongbookApi.UserSongRatingDTO(); // UserSongRatingDTO | dto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUsingPUT7(dto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dto** | [**UserSongRatingDTO**](UserSongRatingDTO.md)| dto | 

### Return type

[**UserSongRatingDTO**](UserSongRatingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

