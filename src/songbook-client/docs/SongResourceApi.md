# SongbookApi.SongResourceApi

All URIs are relative to *https://stk-uep.pl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTagToSongUsingPATCH**](SongResourceApi.md#addTagToSongUsingPATCH) | **PATCH** /api/songs/{id}/add-tag | addTagToSong
[**addTagsToSongBulkUsingPATCH**](SongResourceApi.md#addTagsToSongBulkUsingPATCH) | **PATCH** /api/songs/{id}/add-tag-bulk | addTagsToSongBulk
[**approveSongUsingPUT**](SongResourceApi.md#approveSongUsingPUT) | **PUT** /api/songs/{id}/approve | approveSong
[**createUsingPOST4**](SongResourceApi.md#createUsingPOST4) | **POST** /api/songs | create
[**deleteUsingDELETE4**](SongResourceApi.md#deleteUsingDELETE4) | **DELETE** /api/songs/id/{id} | delete
[**getAllUsingGET4**](SongResourceApi.md#getAllUsingGET4) | **GET** /api/songs | getAll
[**getByAuthorUsingGET**](SongResourceApi.md#getByAuthorUsingGET) | **GET** /api/songs/author/{authorId} | getByAuthor
[**getByCategoryUsingGET1**](SongResourceApi.md#getByCategoryUsingGET1) | **GET** /api/songs/category/{categoryId} | getByCategory
[**getByIdUsingGET4**](SongResourceApi.md#getByIdUsingGET4) | **GET** /api/songs/id/{id} | getById
[**getByLyricsFragmentUsingGET1**](SongResourceApi.md#getByLyricsFragmentUsingGET1) | **GET** /api/songs/lyrics_fragment/{value} | getByLyricsFragment
[**getByRatingUsingGET**](SongResourceApi.md#getByRatingUsingGET) | **GET** /api/songs/rating | getByRating
[**getByTagUsingGET1**](SongResourceApi.md#getByTagUsingGET1) | **GET** /api/songs/tag/{tagId} | getByTag
[**getByTitleFragmentUsingGET1**](SongResourceApi.md#getByTitleFragmentUsingGET1) | **GET** /api/songs/title/{title} | getByTitleFragment
[**getLatestUsingGET1**](SongResourceApi.md#getLatestUsingGET1) | **GET** /api/songs/latest | getLatest
[**getSongPlaylistsUsingGET**](SongResourceApi.md#getSongPlaylistsUsingGET) | **GET** /api/songs/id/{id}/playlists | getSongPlaylists
[**getSongRatingsUsingGET**](SongResourceApi.md#getSongRatingsUsingGET) | **GET** /api/songs/id/{id}/ratings | getSongRatings
[**getSongUserLibrariesUsingGET**](SongResourceApi.md#getSongUserLibrariesUsingGET) | **GET** /api/songs/id/{id}/users | getSongUserLibraries
[**getSongsAddedByUserUsingGET**](SongResourceApi.md#getSongsAddedByUserUsingGET) | **GET** /api/songs/user/{id}/added | getSongsAddedByUser
[**getSongsEditedByUserUsingGET**](SongResourceApi.md#getSongsEditedByUserUsingGET) | **GET** /api/songs/user/{id}/edited | getSongsEditedByUser
[**getUserSongsUsingGET**](SongResourceApi.md#getUserSongsUsingGET) | **GET** /api/songs/user/{id} | getUserSongs
[**loadFromFileUsingPOST**](SongResourceApi.md#loadFromFileUsingPOST) | **POST** /api/songs/upload | loadFromFile
[**removeTagFromSongUsingPATCH**](SongResourceApi.md#removeTagFromSongUsingPATCH) | **PATCH** /api/songs/{id}/remove-tag/{tagId} | removeTagFromSong
[**removeTagsFromSongBulkUsingPATCH**](SongResourceApi.md#removeTagsFromSongBulkUsingPATCH) | **PATCH** /api/songs/{id}/remove-tag-bulk/{tagIds} | removeTagsFromSongBulk
[**updateUsingPUT4**](SongResourceApi.md#updateUsingPUT4) | **PUT** /api/songs | update


<a name="addTagToSongUsingPATCH"></a>
# **addTagToSongUsingPATCH**
> SongDTO addTagToSongUsingPATCH(id, tag)

addTagToSong

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id

var tag = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | tag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTagToSongUsingPATCH(id, tag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 
 **tag** | [**UniversalCreateDTO**](UniversalCreateDTO.md)| tag | 

### Return type

[**SongDTO**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="addTagsToSongBulkUsingPATCH"></a>
# **addTagsToSongBulkUsingPATCH**
> SongDTO addTagsToSongBulkUsingPATCH(id, tags)

addTagsToSongBulk

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id

var tags = [new SongbookApi.UniversalCreateDTO()]; // [UniversalCreateDTO] | tags


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTagsToSongBulkUsingPATCH(id, tags, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 
 **tags** | [**[UniversalCreateDTO]**](UniversalCreateDTO.md)| tags | 

### Return type

[**SongDTO**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="approveSongUsingPUT"></a>
# **approveSongUsingPUT**
> SongDTO approveSongUsingPUT(id)

approveSong

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.approveSongUsingPUT(id, callback);
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

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createUsingPOST4"></a>
# **createUsingPOST4**
> SongDTO createUsingPOST4(obj)

create

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var obj = new SongbookApi.CreateSongDTO(); // CreateSongDTO | obj


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUsingPOST4(obj, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **obj** | [**CreateSongDTO**](CreateSongDTO.md)| obj | 

### Return type

[**SongDTO**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUsingDELETE4"></a>
# **deleteUsingDELETE4**
> deleteUsingDELETE4(id)

delete

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUsingDELETE4(id, callback);
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

<a name="getAllUsingGET4"></a>
# **getAllUsingGET4**
> [SongDTO] getAllUsingGET4(opts)

getAll

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var opts = { 
  'includeAwaiting': true, // Boolean | include_awaiting
  'limit': 56 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllUsingGET4(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeAwaiting** | **Boolean**| include_awaiting | [optional] 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[SongDTO]**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByAuthorUsingGET"></a>
# **getByAuthorUsingGET**
> [SongDTO] getByAuthorUsingGET(authorId, opts)

getByAuthor

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var authorId = 789; // Number | authorId

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
apiInstance.getByAuthorUsingGET(authorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorId** | **Number**| authorId | 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[SongDTO]**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByCategoryUsingGET1"></a>
# **getByCategoryUsingGET1**
> [SongDTO] getByCategoryUsingGET1(categoryId, opts)

getByCategory

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

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
apiInstance.getByCategoryUsingGET1(categoryId, opts, callback);
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

<a name="getByIdUsingGET4"></a>
# **getByIdUsingGET4**
> SongDTO getByIdUsingGET4(id)

getById

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByIdUsingGET4(id, callback);
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

<a name="getByLyricsFragmentUsingGET1"></a>
# **getByLyricsFragmentUsingGET1**
> [SongDTO] getByLyricsFragmentUsingGET1(value, opts)

getByLyricsFragment

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

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
apiInstance.getByLyricsFragmentUsingGET1(value, opts, callback);
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

<a name="getByRatingUsingGET"></a>
# **getByRatingUsingGET**
> [SongDTO] getByRatingUsingGET(opts)

getByRating

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var opts = { 
  'equal': 1.2, // Number | equal
  'greaterThanEqual': 1.2, // Number | greaterThanEqual
  'lessThanEqual': 1.2 // Number | lessThanEqual
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByRatingUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **equal** | **Number**| equal | [optional] 
 **greaterThanEqual** | **Number**| greaterThanEqual | [optional] 
 **lessThanEqual** | **Number**| lessThanEqual | [optional] 

### Return type

[**[SongDTO]**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getByTagUsingGET1"></a>
# **getByTagUsingGET1**
> [SongDTO] getByTagUsingGET1(tagId, opts)

getByTag

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

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
apiInstance.getByTagUsingGET1(tagId, opts, callback);
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

<a name="getByTitleFragmentUsingGET1"></a>
# **getByTitleFragmentUsingGET1**
> [SongDTO] getByTitleFragmentUsingGET1(title, opts)

getByTitleFragment

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

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
apiInstance.getByTitleFragmentUsingGET1(title, opts, callback);
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

<a name="getLatestUsingGET1"></a>
# **getLatestUsingGET1**
> [SongDTO] getLatestUsingGET1(limit)

getLatest

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var limit = 56; // Number | limit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLatestUsingGET1(limit, callback);
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

<a name="getSongPlaylistsUsingGET"></a>
# **getSongPlaylistsUsingGET**
> [PlaylistDTO] getSongPlaylistsUsingGET(id)

getSongPlaylists

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSongPlaylistsUsingGET(id, callback);
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

<a name="getSongRatingsUsingGET"></a>
# **getSongRatingsUsingGET**
> [UserSongRatingDTO] getSongRatingsUsingGET(id)

getSongRatings

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSongRatingsUsingGET(id, callback);
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

<a name="getSongUserLibrariesUsingGET"></a>
# **getSongUserLibrariesUsingGET**
> [UserDTO] getSongUserLibrariesUsingGET(id)

getSongUserLibraries

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSongUserLibrariesUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**[UserDTO]**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongsAddedByUserUsingGET"></a>
# **getSongsAddedByUserUsingGET**
> [SongDTO] getSongsAddedByUserUsingGET(id)

getSongsAddedByUser

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSongsAddedByUserUsingGET(id, callback);
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

<a name="getSongsEditedByUserUsingGET"></a>
# **getSongsEditedByUserUsingGET**
> [SongDTO] getSongsEditedByUserUsingGET(id)

getSongsEditedByUser

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSongsEditedByUserUsingGET(id, callback);
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

<a name="getUserSongsUsingGET"></a>
# **getUserSongsUsingGET**
> [SongDTO] getUserSongsUsingGET(id)

getUserSongs

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserSongsUsingGET(id, callback);
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

<a name="loadFromFileUsingPOST"></a>
# **loadFromFileUsingPOST**
> SongDTO loadFromFileUsingPOST(file)

loadFromFile

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var file = "/path/to/file.txt"; // File | file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loadFromFileUsingPOST(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| file | 

### Return type

[**SongDTO**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

<a name="removeTagFromSongUsingPATCH"></a>
# **removeTagFromSongUsingPATCH**
> SongDTO removeTagFromSongUsingPATCH(id, tagId)

removeTagFromSong

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id

var tagId = 789; // Number | tagId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeTagFromSongUsingPATCH(id, tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 
 **tagId** | **Number**| tagId | 

### Return type

[**SongDTO**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="removeTagsFromSongBulkUsingPATCH"></a>
# **removeTagsFromSongBulkUsingPATCH**
> SongDTO removeTagsFromSongBulkUsingPATCH(id, tagIds)

removeTagsFromSongBulk

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var id = 789; // Number | id

var tagIds = "tagIds_example"; // String | tagIds


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeTagsFromSongBulkUsingPATCH(id, tagIds, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 
 **tagIds** | **String**| tagIds | 

### Return type

[**SongDTO**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateUsingPUT4"></a>
# **updateUsingPUT4**
> SongDTO updateUsingPUT4(obj)

update

### Example
```javascript
var SongbookApi = require('songbook_api');

var apiInstance = new SongbookApi.SongResourceApi();

var obj = new SongbookApi.SongDTO(); // SongDTO | obj


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUsingPUT4(obj, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **obj** | [**SongDTO**](SongDTO.md)| obj | 

### Return type

[**SongDTO**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

