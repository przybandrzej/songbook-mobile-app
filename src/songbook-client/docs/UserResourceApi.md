# SongbookApi.UserResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSongToLibraryUsingPATCH**](UserResourceApi.md#addSongToLibraryUsingPATCH) | **PATCH** /api/users/{id}/add-song/{songId} | addSongToLibrary
[**deleteUsingDELETE6**](UserResourceApi.md#deleteUsingDELETE6) | **DELETE** /api/users/id/{id} | delete
[**getAllUsingGET6**](UserResourceApi.md#getAllUsingGET6) | **GET** /api/users | getAll
[**getByIdUsingGET6**](UserResourceApi.md#getByIdUsingGET6) | **GET** /api/users/id/{id} | getById
[**getPlaylistsByUserIdUsingGET**](UserResourceApi.md#getPlaylistsByUserIdUsingGET) | **GET** /api/users/id/{id}/playlists | getPlaylistsByUserId
[**getRatingsByUserIdUsingGET**](UserResourceApi.md#getRatingsByUserIdUsingGET) | **GET** /api/users/id/{id}/ratings | getRatingsByUserId
[**removeSongFromLibraryUsingPATCH**](UserResourceApi.md#removeSongFromLibraryUsingPATCH) | **PATCH** /api/users/{id}/remove-song/{songId} | removeSongFromLibrary


<a name="addSongToLibraryUsingPATCH"></a>
# **addSongToLibraryUsingPATCH**
> addSongToLibraryUsingPATCH(id, songId)

addSongToLibrary

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id

let songId = 789; // Number | songId


apiInstance.addSongToLibraryUsingPATCH(id, songId, (error, data, response) => {
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
 **songId** | **Number**| songId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUsingDELETE6"></a>
# **deleteUsingDELETE6**
> deleteUsingDELETE6(id)

delete

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id


apiInstance.deleteUsingDELETE6(id, (error, data, response) => {
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

<a name="getAllUsingGET6"></a>
# **getAllUsingGET6**
> [UserDTO] getAllUsingGET6(opts)

getAll

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getAllUsingGET6(opts, (error, data, response) => {
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

[**[UserDTO]**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByIdUsingGET6"></a>
# **getByIdUsingGET6**
> UserDTO getByIdUsingGET6(id)

getById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id


apiInstance.getByIdUsingGET6(id, (error, data, response) => {
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

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getPlaylistsByUserIdUsingGET"></a>
# **getPlaylistsByUserIdUsingGET**
> [PlaylistDTO] getPlaylistsByUserIdUsingGET(id)

getPlaylistsByUserId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id


apiInstance.getPlaylistsByUserIdUsingGET(id, (error, data, response) => {
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

[**[PlaylistDTO]**](PlaylistDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getRatingsByUserIdUsingGET"></a>
# **getRatingsByUserIdUsingGET**
> [UserSongRatingDTO] getRatingsByUserIdUsingGET(id)

getRatingsByUserId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id


apiInstance.getRatingsByUserIdUsingGET(id, (error, data, response) => {
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

<a name="removeSongFromLibraryUsingPATCH"></a>
# **removeSongFromLibraryUsingPATCH**
> removeSongFromLibraryUsingPATCH(id, songId)

removeSongFromLibrary

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id

let songId = 789; // Number | songId


apiInstance.removeSongFromLibraryUsingPATCH(id, songId, (error, data, response) => {
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
 **songId** | **Number**| songId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

