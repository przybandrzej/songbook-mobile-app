# SongbookApi.SongResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCoauthorToSongUsingPATCH**](SongResourceApi.md#addCoauthorToSongUsingPATCH) | **PATCH** /api/songs/{id}/add-coauthor | addCoauthorToSong
[**addTagToSongUsingPATCH**](SongResourceApi.md#addTagToSongUsingPATCH) | **PATCH** /api/songs/{id}/add-tag | addTagToSong
[**addTagsToSongBulkUsingPATCH**](SongResourceApi.md#addTagsToSongBulkUsingPATCH) | **PATCH** /api/songs/{id}/add-tag-bulk | addTagsToSongBulk
[**addVerseToSongUsingPATCH**](SongResourceApi.md#addVerseToSongUsingPATCH) | **PATCH** /api/songs/{id}/add-verse | addVerseToSong
[**approveSongUsingPATCH**](SongResourceApi.md#approveSongUsingPATCH) | **PATCH** /api/songs/{id}/approve | approveSong
[**createSongUsingPOST**](SongResourceApi.md#createSongUsingPOST) | **POST** /api/songs | createSong
[**deleteSongUsingDELETE**](SongResourceApi.md#deleteSongUsingDELETE) | **DELETE** /api/songs/{id} | deleteSong
[**getAllSongsUsingGET**](SongResourceApi.md#getAllSongsUsingGET) | **GET** /api/songs | getAllSongs
[**getSongAddedByUsingGET**](SongResourceApi.md#getSongAddedByUsingGET) | **GET** /api/songs/{id}/added-by | getSongAddedBy
[**getSongAuthorUsingGET**](SongResourceApi.md#getSongAuthorUsingGET) | **GET** /api/songs/{id}/author | getSongAuthor
[**getSongByIdUsingGET**](SongResourceApi.md#getSongByIdUsingGET) | **GET** /api/songs/{id} | getSongById
[**getSongByTitleFragmentUsingGET**](SongResourceApi.md#getSongByTitleFragmentUsingGET) | **GET** /api/songs/title/{title} | getSongByTitleFragment
[**getSongCategoryUsingGET**](SongResourceApi.md#getSongCategoryUsingGET) | **GET** /api/songs/{id}/category | getSongCategory
[**getSongCoauthorsUsingGET**](SongResourceApi.md#getSongCoauthorsUsingGET) | **GET** /api/songs/{id}/coauthors | getSongCoauthors
[**getSongEditsUsingGET**](SongResourceApi.md#getSongEditsUsingGET) | **GET** /api/songs/{id}/edits | getSongEdits
[**getSongPlaylistsUsingGET**](SongResourceApi.md#getSongPlaylistsUsingGET) | **GET** /api/songs/{id}/playlists | getSongPlaylists
[**getSongRatingsUsingGET**](SongResourceApi.md#getSongRatingsUsingGET) | **GET** /api/songs/{id}/ratings | getSongRatings
[**getSongTagsUsingGET**](SongResourceApi.md#getSongTagsUsingGET) | **GET** /api/songs/{id}/tags | getSongTags
[**getSongUserLibrariesUsingGET**](SongResourceApi.md#getSongUserLibrariesUsingGET) | **GET** /api/songs/{id}/users | getSongUserLibraries
[**getSongVersesUsingGET**](SongResourceApi.md#getSongVersesUsingGET) | **GET** /api/songs/{id}/verses | getSongVerses
[**loadSongFromFileUsingPOST**](SongResourceApi.md#loadSongFromFileUsingPOST) | **POST** /api/songs/upload | loadSongFromFile
[**removeCoauthorFromSongUsingPATCH**](SongResourceApi.md#removeCoauthorFromSongUsingPATCH) | **PATCH** /api/songs/{id}/remove-coauthor/{coauthorId} | removeCoauthorFromSong
[**removeTagFromSongUsingPATCH**](SongResourceApi.md#removeTagFromSongUsingPATCH) | **PATCH** /api/songs/{id}/remove-tag/{tagId} | removeTagFromSong
[**removeTagsFromSongBulkUsingPATCH**](SongResourceApi.md#removeTagsFromSongBulkUsingPATCH) | **PATCH** /api/songs/{id}/remove-tag-bulk/{tagIds} | removeTagsFromSongBulk
[**removeVerseFromSongUsingPATCH**](SongResourceApi.md#removeVerseFromSongUsingPATCH) | **PATCH** /api/songs/{id}/remove-verse/{verseId} | removeVerseFromSong
[**setAuthorUsingPATCH**](SongResourceApi.md#setAuthorUsingPATCH) | **PATCH** /api/songs/{id}/set-author/{authorId} | setAuthor
[**setCategoryUsingPATCH**](SongResourceApi.md#setCategoryUsingPATCH) | **PATCH** /api/songs/{id}/set-category/{categoryId} | setCategory
[**updateSongUsingPUT**](SongResourceApi.md#updateSongUsingPUT) | **PUT** /api/songs | updateSong


<a name="addCoauthorToSongUsingPATCH"></a>
# **addCoauthorToSongUsingPATCH**
> SongCoauthorDTO addCoauthorToSongUsingPATCH(coauthor, id)

addCoauthorToSong

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let coauthor = new SongbookApi.CreateCoauthorDTO(); // CreateCoauthorDTO | coauthor

let id = 789; // Number | id


apiInstance.addCoauthorToSongUsingPATCH(coauthor, id, (error, data, response) => {
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
 **coauthor** | [**CreateCoauthorDTO**](CreateCoauthorDTO.md)| coauthor | 
 **id** | **Number**| id | 

### Return type

[**SongCoauthorDTO**](SongCoauthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="addTagToSongUsingPATCH"></a>
# **addTagToSongUsingPATCH**
> TagDTO addTagToSongUsingPATCH(id, tag)

addTagToSong

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id

let tag = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | tag


apiInstance.addTagToSongUsingPATCH(id, tag, (error, data, response) => {
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
 **tag** | [**UniversalCreateDTO**](UniversalCreateDTO.md)| tag | 

### Return type

[**TagDTO**](TagDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="addTagsToSongBulkUsingPATCH"></a>
# **addTagsToSongBulkUsingPATCH**
> [TagDTO] addTagsToSongBulkUsingPATCH(id, tags)

addTagsToSongBulk

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id

let tags = [new SongbookApi.UniversalCreateDTO()]; // [UniversalCreateDTO] | tags


apiInstance.addTagsToSongBulkUsingPATCH(id, tags, (error, data, response) => {
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
 **tags** | [**[UniversalCreateDTO]**](UniversalCreateDTO.md)| tags | 

### Return type

[**[TagDTO]**](TagDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="addVerseToSongUsingPATCH"></a>
# **addVerseToSongUsingPATCH**
> VerseDTO addVerseToSongUsingPATCH(id, verse)

addVerseToSong

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id

let verse = new SongbookApi.CreateVerseDTO(); // CreateVerseDTO | verse


apiInstance.addVerseToSongUsingPATCH(id, verse, (error, data, response) => {
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
 **verse** | [**CreateVerseDTO**](CreateVerseDTO.md)| verse | 

### Return type

[**VerseDTO**](VerseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="approveSongUsingPATCH"></a>
# **approveSongUsingPATCH**
> SongDTO approveSongUsingPATCH(id)

approveSong

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.approveSongUsingPATCH(id, (error, data, response) => {
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

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createSongUsingPOST"></a>
# **createSongUsingPOST**
> SongDTO createSongUsingPOST(obj)

createSong

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let obj = new SongbookApi.CreateSongDTO(); // CreateSongDTO | obj


apiInstance.createSongUsingPOST(obj, (error, data, response) => {
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
 **obj** | [**CreateSongDTO**](CreateSongDTO.md)| obj | 

### Return type

[**SongDTO**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteSongUsingDELETE"></a>
# **deleteSongUsingDELETE**
> deleteSongUsingDELETE(id)

deleteSong

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.deleteSongUsingDELETE(id, (error, data, response) => {
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

<a name="getAllSongsUsingGET"></a>
# **getAllSongsUsingGET**
> [SongDTO] getAllSongsUsingGET(opts)

getAllSongs

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let opts = { 
  'includeAwaiting': true, // Boolean | include_awaiting
  'limit': 56 // Number | limit
};

apiInstance.getAllSongsUsingGET(opts, (error, data, response) => {
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
 **includeAwaiting** | **Boolean**| include_awaiting | [optional] 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[SongDTO]**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongAddedByUsingGET"></a>
# **getSongAddedByUsingGET**
> SongAddDTO getSongAddedByUsingGET(id)

getSongAddedBy

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.getSongAddedByUsingGET(id, (error, data, response) => {
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

[**SongAddDTO**](SongAddDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongAuthorUsingGET"></a>
# **getSongAuthorUsingGET**
> AuthorDTO getSongAuthorUsingGET(id)

getSongAuthor

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.getSongAuthorUsingGET(id, (error, data, response) => {
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

[**AuthorDTO**](AuthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongByIdUsingGET"></a>
# **getSongByIdUsingGET**
> SongDTO getSongByIdUsingGET(id)

getSongById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.getSongByIdUsingGET(id, (error, data, response) => {
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

<a name="getSongByTitleFragmentUsingGET"></a>
# **getSongByTitleFragmentUsingGET**
> [SongDTO] getSongByTitleFragmentUsingGET(title, opts)

getSongByTitleFragment

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let title = "title_example"; // String | title

let opts = { 
  'limit': 56 // Number | limit
};

apiInstance.getSongByTitleFragmentUsingGET(title, opts, (error, data, response) => {
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

<a name="getSongCategoryUsingGET"></a>
# **getSongCategoryUsingGET**
> CategoryDTO getSongCategoryUsingGET(id)

getSongCategory

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.getSongCategoryUsingGET(id, (error, data, response) => {
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

[**CategoryDTO**](CategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongCoauthorsUsingGET"></a>
# **getSongCoauthorsUsingGET**
> [SongCoauthorDTO] getSongCoauthorsUsingGET(id)

getSongCoauthors

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.getSongCoauthorsUsingGET(id, (error, data, response) => {
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

[**[SongCoauthorDTO]**](SongCoauthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongEditsUsingGET"></a>
# **getSongEditsUsingGET**
> [SongEditDTO] getSongEditsUsingGET(id)

getSongEdits

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.getSongEditsUsingGET(id, (error, data, response) => {
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

<a name="getSongPlaylistsUsingGET"></a>
# **getSongPlaylistsUsingGET**
> [PlaylistDTO] getSongPlaylistsUsingGET(id)

getSongPlaylists

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.getSongPlaylistsUsingGET(id, (error, data, response) => {
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

<a name="getSongRatingsUsingGET"></a>
# **getSongRatingsUsingGET**
> [UserSongRatingDTO] getSongRatingsUsingGET(id)

getSongRatings

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.getSongRatingsUsingGET(id, (error, data, response) => {
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

<a name="getSongTagsUsingGET"></a>
# **getSongTagsUsingGET**
> [TagDTO] getSongTagsUsingGET(id)

getSongTags

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.getSongTagsUsingGET(id, (error, data, response) => {
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

[**[TagDTO]**](TagDTO.md)

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
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.getSongUserLibrariesUsingGET(id, (error, data, response) => {
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

[**[UserDTO]**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongVersesUsingGET"></a>
# **getSongVersesUsingGET**
> [VerseDTO] getSongVersesUsingGET(id)

getSongVerses

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id


apiInstance.getSongVersesUsingGET(id, (error, data, response) => {
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

[**[VerseDTO]**](VerseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="loadSongFromFileUsingPOST"></a>
# **loadSongFromFileUsingPOST**
> SongDTO loadSongFromFileUsingPOST(file)

loadSongFromFile

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let file = "/path/to/file.txt"; // File | file


apiInstance.loadSongFromFileUsingPOST(file, (error, data, response) => {
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
 **file** | **File**| file | 

### Return type

[**SongDTO**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

<a name="removeCoauthorFromSongUsingPATCH"></a>
# **removeCoauthorFromSongUsingPATCH**
> removeCoauthorFromSongUsingPATCH(coauthorId, id)

removeCoauthorFromSong

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let coauthorId = 789; // Number | coauthorId

let id = 789; // Number | id


apiInstance.removeCoauthorFromSongUsingPATCH(coauthorId, id, (error, data, response) => {
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
 **coauthorId** | **Number**| coauthorId | 
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="removeTagFromSongUsingPATCH"></a>
# **removeTagFromSongUsingPATCH**
> removeTagFromSongUsingPATCH(id, tagId)

removeTagFromSong

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id

let tagId = 789; // Number | tagId


apiInstance.removeTagFromSongUsingPATCH(id, tagId, (error, data, response) => {
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
 **tagId** | **Number**| tagId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="removeTagsFromSongBulkUsingPATCH"></a>
# **removeTagsFromSongBulkUsingPATCH**
> removeTagsFromSongBulkUsingPATCH(id, tagIds)

removeTagsFromSongBulk

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id

let tagIds = "tagIds_example"; // String | tagIds


apiInstance.removeTagsFromSongBulkUsingPATCH(id, tagIds, (error, data, response) => {
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
 **tagIds** | **String**| tagIds | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="removeVerseFromSongUsingPATCH"></a>
# **removeVerseFromSongUsingPATCH**
> removeVerseFromSongUsingPATCH(id, verseId)

removeVerseFromSong

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let id = 789; // Number | id

let verseId = 789; // Number | verseId


apiInstance.removeVerseFromSongUsingPATCH(id, verseId, (error, data, response) => {
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
 **verseId** | **Number**| verseId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="setAuthorUsingPATCH"></a>
# **setAuthorUsingPATCH**
> setAuthorUsingPATCH(authorId, id)

setAuthor

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let authorId = 789; // Number | authorId

let id = 789; // Number | id


apiInstance.setAuthorUsingPATCH(authorId, id, (error, data, response) => {
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
 **authorId** | **Number**| authorId | 
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="setCategoryUsingPATCH"></a>
# **setCategoryUsingPATCH**
> setCategoryUsingPATCH(categoryId, id)

setCategory

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let categoryId = 789; // Number | categoryId

let id = 789; // Number | id


apiInstance.setCategoryUsingPATCH(categoryId, id, (error, data, response) => {
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
 **categoryId** | **Number**| categoryId | 
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateSongUsingPUT"></a>
# **updateSongUsingPUT**
> SongDTO updateSongUsingPUT(obj)

updateSong

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.SongResourceApi();

let obj = new SongbookApi.SongDTO(); // SongDTO | obj


apiInstance.updateSongUsingPUT(obj, (error, data, response) => {
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
 **obj** | [**SongDTO**](SongDTO.md)| obj | 

### Return type

[**SongDTO**](SongDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

