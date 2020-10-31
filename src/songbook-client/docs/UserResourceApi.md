# SongbookApi.UserResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPlaylistUsingPATCH**](UserResourceApi.md#addPlaylistUsingPATCH) | **PATCH** /api/users/{id}/add-playlist | addPlaylist
[**addRatingUsingPATCH**](UserResourceApi.md#addRatingUsingPATCH) | **PATCH** /api/users/{id}/add-rating | addRating
[**addSongToLibraryUsingPATCH**](UserResourceApi.md#addSongToLibraryUsingPATCH) | **PATCH** /api/users/{id}/add-song/{songId} | addSongToLibrary
[**deleteUserUsingDELETE**](UserResourceApi.md#deleteUserUsingDELETE) | **DELETE** /api/users/{id} | deleteUser
[**getAddedSongsByUserIdUsingGET**](UserResourceApi.md#getAddedSongsByUserIdUsingGET) | **GET** /api/users/{id}/added-songs | getAddedSongsByUserId
[**getAllUsersUsingGET**](UserResourceApi.md#getAllUsersUsingGET) | **GET** /api/users | getAllUsers
[**getEditedSongsByUserIdUsingGET**](UserResourceApi.md#getEditedSongsByUserIdUsingGET) | **GET** /api/users/{id}/edited-songs | getEditedSongsByUserId
[**getPlaylistsByUserIdUsingGET**](UserResourceApi.md#getPlaylistsByUserIdUsingGET) | **GET** /api/users/{id}/playlists | getPlaylistsByUserId
[**getRatingsByUserIdUsingGET**](UserResourceApi.md#getRatingsByUserIdUsingGET) | **GET** /api/users/{id}/ratings | getRatingsByUserId
[**getRatingsOfSongByUserIdUsingGET**](UserResourceApi.md#getRatingsOfSongByUserIdUsingGET) | **GET** /api/users/{id}/ratings/{songId} | getRatingsOfSongByUserId
[**getSongsByUserIdUsingGET**](UserResourceApi.md#getSongsByUserIdUsingGET) | **GET** /api/users/{id}/songs | getSongsByUserId
[**getUserByIdUsingGET**](UserResourceApi.md#getUserByIdUsingGET) | **GET** /api/users/{id} | getUserById
[**getUserRoleUsingGET**](UserResourceApi.md#getUserRoleUsingGET) | **GET** /api/users/{id}/role | getUserRole
[**removePlaylistUsingPATCH**](UserResourceApi.md#removePlaylistUsingPATCH) | **PATCH** /api/users/{id}/remove-playlist/{playlistId} | removePlaylist
[**removeRatingUsingPATCH**](UserResourceApi.md#removeRatingUsingPATCH) | **PATCH** /api/users/{id}/remove-rating/{ratingId} | removeRating
[**removeSongFromLibraryUsingPATCH**](UserResourceApi.md#removeSongFromLibraryUsingPATCH) | **PATCH** /api/users/{id}/remove-song/{songId} | removeSongFromLibrary
[**updateUserUsingPUT**](UserResourceApi.md#updateUserUsingPUT) | **PUT** /api/users | updateUser


<a name="addPlaylistUsingPATCH"></a>
# **addPlaylistUsingPATCH**
> addPlaylistUsingPATCH(id, playlistDTO)

addPlaylist

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id

let playlistDTO = new SongbookApi.CreatePlaylistDTO(); // CreatePlaylistDTO | playlistDTO


apiInstance.addPlaylistUsingPATCH(id, playlistDTO, (error, data, response) => {
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
 **playlistDTO** | [**CreatePlaylistDTO**](CreatePlaylistDTO.md)| playlistDTO | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="addRatingUsingPATCH"></a>
# **addRatingUsingPATCH**
> addRatingUsingPATCH(id, ratingDTO)

addRating

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id

let ratingDTO = new SongbookApi.UserSongRatingDTO(); // UserSongRatingDTO | ratingDTO


apiInstance.addRatingUsingPATCH(id, ratingDTO, (error, data, response) => {
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
 **ratingDTO** | [**UserSongRatingDTO**](UserSongRatingDTO.md)| ratingDTO | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

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

<a name="deleteUserUsingDELETE"></a>
# **deleteUserUsingDELETE**
> deleteUserUsingDELETE(id)

deleteUser

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id


apiInstance.deleteUserUsingDELETE(id, (error, data, response) => {
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

<a name="getAddedSongsByUserIdUsingGET"></a>
# **getAddedSongsByUserIdUsingGET**
> [SongAddDTO] getAddedSongsByUserIdUsingGET(id)

getAddedSongsByUserId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id


apiInstance.getAddedSongsByUserIdUsingGET(id, (error, data, response) => {
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

[**[SongAddDTO]**](SongAddDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAllUsersUsingGET"></a>
# **getAllUsersUsingGET**
> [UserDTO] getAllUsersUsingGET(opts)

getAllUsers

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getAllUsersUsingGET(opts, (error, data, response) => {
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

<a name="getEditedSongsByUserIdUsingGET"></a>
# **getEditedSongsByUserIdUsingGET**
> [SongEditDTO] getEditedSongsByUserIdUsingGET(id)

getEditedSongsByUserId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id


apiInstance.getEditedSongsByUserIdUsingGET(id, (error, data, response) => {
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

[**[SongEditDTO]**](SongEditDTO.md)

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

<a name="getRatingsOfSongByUserIdUsingGET"></a>
# **getRatingsOfSongByUserIdUsingGET**
> UserSongRatingDTO getRatingsOfSongByUserIdUsingGET(id, songId)

getRatingsOfSongByUserId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id

let songId = 789; // Number | songId


apiInstance.getRatingsOfSongByUserIdUsingGET(id, songId, (error, data, response) => {
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
 **songId** | **Number**| songId | 

### Return type

[**UserSongRatingDTO**](UserSongRatingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongsByUserIdUsingGET"></a>
# **getSongsByUserIdUsingGET**
> [SongDTO] getSongsByUserIdUsingGET(id)

getSongsByUserId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id


apiInstance.getSongsByUserIdUsingGET(id, (error, data, response) => {
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

<a name="getUserByIdUsingGET"></a>
# **getUserByIdUsingGET**
> UserDTO getUserByIdUsingGET(id)

getUserById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id


apiInstance.getUserByIdUsingGET(id, (error, data, response) => {
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

<a name="getUserRoleUsingGET"></a>
# **getUserRoleUsingGET**
> UserRoleDTO getUserRoleUsingGET(id)

getUserRole

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id


apiInstance.getUserRoleUsingGET(id, (error, data, response) => {
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

[**UserRoleDTO**](UserRoleDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="removePlaylistUsingPATCH"></a>
# **removePlaylistUsingPATCH**
> removePlaylistUsingPATCH(id, playlistId)

removePlaylist

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id

let playlistId = 789; // Number | playlistId


apiInstance.removePlaylistUsingPATCH(id, playlistId, (error, data, response) => {
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
 **playlistId** | **Number**| playlistId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="removeRatingUsingPATCH"></a>
# **removeRatingUsingPATCH**
> removeRatingUsingPATCH(id, ratingId)

removeRating

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let id = 789; // Number | id

let ratingId = 789; // Number | ratingId


apiInstance.removeRatingUsingPATCH(id, ratingId, (error, data, response) => {
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
 **ratingId** | **Number**| ratingId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
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

<a name="updateUserUsingPUT"></a>
# **updateUserUsingPUT**
> UserDTO updateUserUsingPUT(userDTO)

updateUser

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.UserResourceApi();

let userDTO = new SongbookApi.UserDTO(); // UserDTO | userDTO


apiInstance.updateUserUsingPUT(userDTO, (error, data, response) => {
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
 **userDTO** | [**UserDTO**](UserDTO.md)| userDTO | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

