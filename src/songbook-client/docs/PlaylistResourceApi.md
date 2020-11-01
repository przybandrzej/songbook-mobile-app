# SongbookApi.PlaylistResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSongToPlaylistUsingPATCH**](PlaylistResourceApi.md#addSongToPlaylistUsingPATCH) | **PATCH** /api/playlists/{id}/add-song/{songId} | addSongToPlaylist
[**deletePlaylistUsingDELETE**](PlaylistResourceApi.md#deletePlaylistUsingDELETE) | **DELETE** /api/playlists/id/{id} | deletePlaylist
[**downloadPlaylistPdfSongbookUsingGET**](PlaylistResourceApi.md#downloadPlaylistPdfSongbookUsingGET) | **GET** /api/playlists/download/{id} | downloadPlaylistPdfSongbook
[**getAllPlaylistsUsingGET**](PlaylistResourceApi.md#getAllPlaylistsUsingGET) | **GET** /api/playlists | getAllPlaylists
[**getPlaylistByIdUsingGET**](PlaylistResourceApi.md#getPlaylistByIdUsingGET) | **GET** /api/playlists/{id} | getPlaylistById
[**getPlaylistByNameUsingGET**](PlaylistResourceApi.md#getPlaylistByNameUsingGET) | **GET** /api/playlists/name/{name} | getPlaylistByName
[**getPlaylistSongsUsingGET**](PlaylistResourceApi.md#getPlaylistSongsUsingGET) | **GET** /api/playlists/{id}/songs | getPlaylistSongs
[**removeSongFromPlaylistUsingPATCH**](PlaylistResourceApi.md#removeSongFromPlaylistUsingPATCH) | **PATCH** /api/playlists/{id}/remove-song/{songId} | removeSongFromPlaylist
[**updatePlaylistUsingPUT**](PlaylistResourceApi.md#updatePlaylistUsingPUT) | **PUT** /api/playlists | updatePlaylist


<a name="addSongToPlaylistUsingPATCH"></a>
# **addSongToPlaylistUsingPATCH**
> addSongToPlaylistUsingPATCH(id, songId)

addSongToPlaylist

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.PlaylistResourceApi();

let id = 789; // Number | id

let songId = 789; // Number | songId


apiInstance.addSongToPlaylistUsingPATCH(id, songId, (error, data, response) => {
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

<a name="deletePlaylistUsingDELETE"></a>
# **deletePlaylistUsingDELETE**
> deletePlaylistUsingDELETE(id)

deletePlaylist

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.PlaylistResourceApi();

let id = 789; // Number | id


apiInstance.deletePlaylistUsingDELETE(id, (error, data, response) => {
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

<a name="downloadPlaylistPdfSongbookUsingGET"></a>
# **downloadPlaylistPdfSongbookUsingGET**
> Resource downloadPlaylistPdfSongbookUsingGET(id)

downloadPlaylistPdfSongbook

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.PlaylistResourceApi();

let id = 789; // Number | id


apiInstance.downloadPlaylistPdfSongbookUsingGET(id, (error, data, response) => {
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

[**Resource**](Resource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAllPlaylistsUsingGET"></a>
# **getAllPlaylistsUsingGET**
> [PlaylistDTO] getAllPlaylistsUsingGET(opts)

getAllPlaylists

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.PlaylistResourceApi();

let opts = { 
  'includePrivate': false, // Boolean | include_private
  'limit': 56 // Number | limit
};

apiInstance.getAllPlaylistsUsingGET(opts, (error, data, response) => {
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
 **includePrivate** | **Boolean**| include_private | [optional] [default to false]
 **limit** | **Number**| limit | [optional] 

### Return type

[**[PlaylistDTO]**](PlaylistDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getPlaylistByIdUsingGET"></a>
# **getPlaylistByIdUsingGET**
> PlaylistDTO getPlaylistByIdUsingGET(id)

getPlaylistById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.PlaylistResourceApi();

let id = 789; // Number | id


apiInstance.getPlaylistByIdUsingGET(id, (error, data, response) => {
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

[**PlaylistDTO**](PlaylistDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getPlaylistByNameUsingGET"></a>
# **getPlaylistByNameUsingGET**
> [PlaylistDTO] getPlaylistByNameUsingGET(name, opts)

getPlaylistByName

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.PlaylistResourceApi();

let name = "name_example"; // String | name

let opts = { 
  'includePrivate': false, // Boolean | include_private
  'limit': 56 // Number | limit
};

apiInstance.getPlaylistByNameUsingGET(name, opts, (error, data, response) => {
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
 **includePrivate** | **Boolean**| include_private | [optional] [default to false]
 **limit** | **Number**| limit | [optional] 

### Return type

[**[PlaylistDTO]**](PlaylistDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getPlaylistSongsUsingGET"></a>
# **getPlaylistSongsUsingGET**
> [SongDTO] getPlaylistSongsUsingGET(id)

getPlaylistSongs

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.PlaylistResourceApi();

let id = 789; // Number | id


apiInstance.getPlaylistSongsUsingGET(id, (error, data, response) => {
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

<a name="removeSongFromPlaylistUsingPATCH"></a>
# **removeSongFromPlaylistUsingPATCH**
> removeSongFromPlaylistUsingPATCH(id, songId)

removeSongFromPlaylist

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.PlaylistResourceApi();

let id = 789; // Number | id

let songId = 789; // Number | songId


apiInstance.removeSongFromPlaylistUsingPATCH(id, songId, (error, data, response) => {
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

<a name="updatePlaylistUsingPUT"></a>
# **updatePlaylistUsingPUT**
> PlaylistDTO updatePlaylistUsingPUT(dto)

updatePlaylist

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.PlaylistResourceApi();

let dto = new SongbookApi.PlaylistDTO(); // PlaylistDTO | dto


apiInstance.updatePlaylistUsingPUT(dto, (error, data, response) => {
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
 **dto** | [**PlaylistDTO**](PlaylistDTO.md)| dto | 

### Return type

[**PlaylistDTO**](PlaylistDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

