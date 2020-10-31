# SongbookApi.UserSongRatingResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRatingUsingPOST**](UserSongRatingResourceApi.md#createRatingUsingPOST) | **POST** /api/ratings | createRating
[**deleteRatingUsingDELETE**](UserSongRatingResourceApi.md#deleteRatingUsingDELETE) | **DELETE** /api/ratings/{id} | deleteRating
[**getAllRatingsUsingGET**](UserSongRatingResourceApi.md#getAllRatingsUsingGET) | **GET** /api/ratings | getAllRatings
[**getRatingByIdUsingGET**](UserSongRatingResourceApi.md#getRatingByIdUsingGET) | **GET** /api/ratings/{id} | getRatingById
[**getRatingByUserIdAndSongIdUsingGET**](UserSongRatingResourceApi.md#getRatingByUserIdAndSongIdUsingGET) | **GET** /api/ratings/{userId}/{songId} | getRatingByUserIdAndSongId
[**updateRatingUsingPUT**](UserSongRatingResourceApi.md#updateRatingUsingPUT) | **PUT** /api/ratings | updateRating


<a name="createRatingUsingPOST"></a>
# **createRatingUsingPOST**
> UserSongRatingDTO createRatingUsingPOST(dto)

createRating

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let dto = new SongbookApi.UserSongRatingDTO(); // UserSongRatingDTO | dto


apiInstance.createRatingUsingPOST(dto, (error, data, response) => {
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

<a name="deleteRatingUsingDELETE"></a>
# **deleteRatingUsingDELETE**
> deleteRatingUsingDELETE(id)

deleteRating

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let id = 789; // Number | id


apiInstance.deleteRatingUsingDELETE(id, (error, data, response) => {
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

<a name="getAllRatingsUsingGET"></a>
# **getAllRatingsUsingGET**
> [UserSongRatingDTO] getAllRatingsUsingGET(opts)

getAllRatings

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let opts = { 
  'equal': 8.14, // Number | equal
  'greaterThanEqual': 8.14, // Number | greaterThanEqual
  'lessThanEqual': 8.14 // Number | lessThanEqual
};

apiInstance.getAllRatingsUsingGET(opts, (error, data, response) => {
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

<a name="getRatingByIdUsingGET"></a>
# **getRatingByIdUsingGET**
> UserSongRatingDTO getRatingByIdUsingGET(id)

getRatingById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let id = 789; // Number | id


apiInstance.getRatingByIdUsingGET(id, (error, data, response) => {
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

[**UserSongRatingDTO**](UserSongRatingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getRatingByUserIdAndSongIdUsingGET"></a>
# **getRatingByUserIdAndSongIdUsingGET**
> UserSongRatingDTO getRatingByUserIdAndSongIdUsingGET(songId, userId)

getRatingByUserIdAndSongId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let songId = 789; // Number | songId

let userId = 789; // Number | userId


apiInstance.getRatingByUserIdAndSongIdUsingGET(songId, userId, (error, data, response) => {
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

<a name="updateRatingUsingPUT"></a>
# **updateRatingUsingPUT**
> UserSongRatingDTO updateRatingUsingPUT(dto)

updateRating

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserSongRatingResourceApi();

let dto = new SongbookApi.UserSongRatingDTO(); // UserSongRatingDTO | dto


apiInstance.updateRatingUsingPUT(dto, (error, data, response) => {
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

