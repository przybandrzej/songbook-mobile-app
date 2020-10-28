# SongbookApi.PlaylistResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSongUsingPATCH**](PlaylistResourceApi.md#addSongUsingPATCH) | **PATCH** /api/playlists/{id}/add-song/{songId} | addSong
[**createUsingPOST2**](PlaylistResourceApi.md#createUsingPOST2) | **POST** /api/playlists | create
[**deleteUsingDELETE2**](PlaylistResourceApi.md#deleteUsingDELETE2) | **DELETE** /api/playlists/id/{id} | delete
[**downloadPlaylistPdfSongbookUsingGET**](PlaylistResourceApi.md#downloadPlaylistPdfSongbookUsingGET) | **GET** /api/playlists/download/{id} | downloadPlaylistPdfSongbook
[**getAllUsingGET3**](PlaylistResourceApi.md#getAllUsingGET3) | **GET** /api/playlists | getAll
[**getByIdUsingGET3**](PlaylistResourceApi.md#getByIdUsingGET3) | **GET** /api/playlists/id/{id} | getById
[**getByNameUsingGET1**](PlaylistResourceApi.md#getByNameUsingGET1) | **GET** /api/playlists/name/{name} | getByName
[**getByOwnerIdUsingGET**](PlaylistResourceApi.md#getByOwnerIdUsingGET) | **GET** /api/playlists/ownerId/{id} | getByOwnerId
[**removeSongUsingPATCH**](PlaylistResourceApi.md#removeSongUsingPATCH) | **PATCH** /api/playlists/{id}/remove-song/{songId} | removeSong
[**updateUsingPUT2**](PlaylistResourceApi.md#updateUsingPUT2) | **PUT** /api/playlists | update


<a name="addSongUsingPATCH"></a>
# **addSongUsingPATCH**
> addSongUsingPATCH(id, songId)

addSong

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.PlaylistResourceApi();

var id = 789; // Number | id

var songId = 789; // Number | songId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addSongUsingPATCH(id, songId, callback);
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

<a name="createUsingPOST2"></a>
# **createUsingPOST2**
> PlaylistDTO createUsingPOST2(dto)

create

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.PlaylistResourceApi();

var dto = new SongbookApi.CreatePlaylistDTO(); // CreatePlaylistDTO | dto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUsingPOST2(dto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dto** | [**CreatePlaylistDTO**](CreatePlaylistDTO.md)| dto | 

### Return type

[**PlaylistDTO**](PlaylistDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUsingDELETE2"></a>
# **deleteUsingDELETE2**
> deleteUsingDELETE2(id)

delete

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.PlaylistResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUsingDELETE2(id, callback);
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
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.PlaylistResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadPlaylistPdfSongbookUsingGET(id, callback);
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

<a name="getAllUsingGET3"></a>
# **getAllUsingGET3**
> [PlaylistDTO] getAllUsingGET3(opts)

getAll

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.PlaylistResourceApi();

var opts = { 
  'includePrivate': false, // Boolean | include_private
  'limit': 56 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllUsingGET3(opts, callback);
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

<a name="getByIdUsingGET3"></a>
# **getByIdUsingGET3**
> PlaylistDTO getByIdUsingGET3(id)

getById

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.PlaylistResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByIdUsingGET3(id, callback);
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

<a name="getByNameUsingGET1"></a>
# **getByNameUsingGET1**
> [PlaylistDTO] getByNameUsingGET1(name, opts)

getByName

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.PlaylistResourceApi();

var name = "name_example"; // String | name

var opts = { 
  'includePrivate': false, // Boolean | include_private
  'limit': 56 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByNameUsingGET1(name, opts, callback);
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

<a name="getByOwnerIdUsingGET"></a>
# **getByOwnerIdUsingGET**
> [PlaylistDTO] getByOwnerIdUsingGET(id, opts)

getByOwnerId

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.PlaylistResourceApi();

var id = 789; // Number | id

var opts = { 
  'includePrivate': false // Boolean | include_private
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByOwnerIdUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 
 **includePrivate** | **Boolean**| include_private | [optional] [default to false]

### Return type

[**[PlaylistDTO]**](PlaylistDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="removeSongUsingPATCH"></a>
# **removeSongUsingPATCH**
> removeSongUsingPATCH(id, songId)

removeSong

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.PlaylistResourceApi();

var id = 789; // Number | id

var songId = 789; // Number | songId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeSongUsingPATCH(id, songId, callback);
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

<a name="updateUsingPUT2"></a>
# **updateUsingPUT2**
> PlaylistDTO updateUsingPUT2(dto)

update

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.PlaylistResourceApi();

var dto = new SongbookApi.PlaylistDTO(); // PlaylistDTO | dto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUsingPUT2(dto, callback);
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

