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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let dto = new SongbookApi.UserSongRatingDTO(); // UserSongRatingDTO | dto


apiInstance.createUsingPOST7(dto, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let songId = 789; // Number | songId

let userId = 789; // Number | userId


apiInstance.deleteUsingDELETE8(songId, userId, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let opts = { 
  'equal': 8.14, // Number | equal
  'greaterThanEqual': 8.14, // Number | greaterThanEqual
  'lessThanEqual': 8.14 // Number | lessThanEqual
};

apiInstance.getAllUsingGET8(opts, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let id = 789; // Number | id


apiInstance.getBySongIdUsingGET1(id, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let songId = 789; // Number | songId

let userId = 789; // Number | userId


apiInstance.getByUserIdAndSongIdUsingGET(songId, userId, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let id = 789; // Number | id


apiInstance.getByUserIdUsingGET(id, (error, data, response) => {
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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let dto = new SongbookApi.UserSongRatingDTO(); // UserSongRatingDTO | dto


apiInstance.updateUsingPUT7(dto, (error, data, response) => {
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
 **dto** | [**UserSongRatingDTO**](UserSongRatingDTO.md)| dto | 

### Return type

[**UserSongRatingDTO**](UserSongRatingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

