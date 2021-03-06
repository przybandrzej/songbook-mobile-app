# songbook_api

SongbookApi - JavaScript client for songbook_api
Tourist songs application
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.5.5
- Package version: 1.5.5
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install songbook_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your songbook_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('songbook_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SongbookApi = require('songbook_api');

var api = new SongbookApi.AdminResourceApi()

var userId = 789; // {Number} userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.activateUserUsingPATCH(userId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://stk-uep.pl*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SongbookApi.AdminResourceApi* | [**activateUserUsingPATCH**](docs/AdminResourceApi.md#activateUserUsingPATCH) | **PATCH** /api/admin/activate-user/{userId} | activateUser
*SongbookApi.AdminResourceApi* | [**updateUserRoleUsingPATCH**](docs/AdminResourceApi.md#updateUserRoleUsingPATCH) | **PATCH** /api/admin/update-role/{userId}/{roleId} | updateUserRole
*SongbookApi.AdminResourceApi* | [**updateUserUsingPUT**](docs/AdminResourceApi.md#updateUserUsingPUT) | **PUT** /api/admin/update-user | updateUser
*SongbookApi.AuthenticationResourceApi* | [**activateAccountUsingGET**](docs/AuthenticationResourceApi.md#activateAccountUsingGET) | **GET** /api/activate | activateAccount
*SongbookApi.AuthenticationResourceApi* | [**authenticateUsingPOST**](docs/AuthenticationResourceApi.md#authenticateUsingPOST) | **POST** /api/authenticate | authenticate
*SongbookApi.AuthenticationResourceApi* | [**changeEmailUsingPATCH**](docs/AuthenticationResourceApi.md#changeEmailUsingPATCH) | **PATCH** /api/account/change-email | changeEmail
*SongbookApi.AuthenticationResourceApi* | [**changePasswordUsingPOST**](docs/AuthenticationResourceApi.md#changePasswordUsingPOST) | **POST** /api/account/change-password | changePassword
*SongbookApi.AuthenticationResourceApi* | [**finishPasswordResetUsingPOST**](docs/AuthenticationResourceApi.md#finishPasswordResetUsingPOST) | **POST** /api/account/reset-password/finish | finishPasswordReset
*SongbookApi.AuthenticationResourceApi* | [**getAccountUsingGET**](docs/AuthenticationResourceApi.md#getAccountUsingGET) | **GET** /api/account | getAccount
*SongbookApi.AuthenticationResourceApi* | [**isAuthenticatedUsingGET**](docs/AuthenticationResourceApi.md#isAuthenticatedUsingGET) | **GET** /api/is-authenticated | isAuthenticated
*SongbookApi.AuthenticationResourceApi* | [**registerUsingPOST**](docs/AuthenticationResourceApi.md#registerUsingPOST) | **POST** /api/register | register
*SongbookApi.AuthenticationResourceApi* | [**requestPasswordResetUsingPOST**](docs/AuthenticationResourceApi.md#requestPasswordResetUsingPOST) | **POST** /api/account/reset-password/init | requestPasswordReset
*SongbookApi.AuthenticationResourceApi* | [**saveAccountUsingPOST**](docs/AuthenticationResourceApi.md#saveAccountUsingPOST) | **POST** /api/account | saveAccount
*SongbookApi.AuthorResourceApi* | [**createUsingPOST**](docs/AuthorResourceApi.md#createUsingPOST) | **POST** /api/authors | create
*SongbookApi.AuthorResourceApi* | [**deleteUsingDELETE**](docs/AuthorResourceApi.md#deleteUsingDELETE) | **DELETE** /api/authors/id/{id} | delete
*SongbookApi.AuthorResourceApi* | [**getAllUsingGET**](docs/AuthorResourceApi.md#getAllUsingGET) | **GET** /api/authors | getAll
*SongbookApi.AuthorResourceApi* | [**getByIdUsingGET**](docs/AuthorResourceApi.md#getByIdUsingGET) | **GET** /api/authors/id/{id} | getById
*SongbookApi.AuthorResourceApi* | [**getByNameFragmentUsingGET**](docs/AuthorResourceApi.md#getByNameFragmentUsingGET) | **GET** /api/authors/name/{name} | getByNameFragment
*SongbookApi.AuthorResourceApi* | [**getSongsByAuthorIdUsingGET**](docs/AuthorResourceApi.md#getSongsByAuthorIdUsingGET) | **GET** /api/authors/id/{id}/songs | getSongsByAuthorId
*SongbookApi.AuthorResourceApi* | [**updateUsingPUT**](docs/AuthorResourceApi.md#updateUsingPUT) | **PUT** /api/authors | update
*SongbookApi.AwaitingSongResourceApi* | [**getAllUsingGET1**](docs/AwaitingSongResourceApi.md#getAllUsingGET1) | **GET** /api/awaiting-songs | getAll
*SongbookApi.AwaitingSongResourceApi* | [**getByCategoryUsingGET**](docs/AwaitingSongResourceApi.md#getByCategoryUsingGET) | **GET** /api/awaiting-songs/category/{categoryId} | getByCategory
*SongbookApi.AwaitingSongResourceApi* | [**getByIdUsingGET1**](docs/AwaitingSongResourceApi.md#getByIdUsingGET1) | **GET** /api/awaiting-songs/id/{id} | getById
*SongbookApi.AwaitingSongResourceApi* | [**getByLyricsFragmentUsingGET**](docs/AwaitingSongResourceApi.md#getByLyricsFragmentUsingGET) | **GET** /api/awaiting-songs/lyrics_fragment/{value} | getByLyricsFragment
*SongbookApi.AwaitingSongResourceApi* | [**getByTagUsingGET**](docs/AwaitingSongResourceApi.md#getByTagUsingGET) | **GET** /api/awaiting-songs/tag/{tagId} | getByTag
*SongbookApi.AwaitingSongResourceApi* | [**getByTitleFragmentUsingGET**](docs/AwaitingSongResourceApi.md#getByTitleFragmentUsingGET) | **GET** /api/awaiting-songs/title/{title} | getByTitleFragment
*SongbookApi.AwaitingSongResourceApi* | [**getLatestUsingGET**](docs/AwaitingSongResourceApi.md#getLatestUsingGET) | **GET** /api/awaiting-songs/latest | getLatest
*SongbookApi.CategoryResourceApi* | [**createUsingPOST1**](docs/CategoryResourceApi.md#createUsingPOST1) | **POST** /api/categories | create
*SongbookApi.CategoryResourceApi* | [**deleteUsingDELETE1**](docs/CategoryResourceApi.md#deleteUsingDELETE1) | **DELETE** /api/categories/id/{id} | delete
*SongbookApi.CategoryResourceApi* | [**getAllUsingGET2**](docs/CategoryResourceApi.md#getAllUsingGET2) | **GET** /api/categories | getAll
*SongbookApi.CategoryResourceApi* | [**getByIdUsingGET2**](docs/CategoryResourceApi.md#getByIdUsingGET2) | **GET** /api/categories/id/{id} | getById
*SongbookApi.CategoryResourceApi* | [**getByNameUsingGET**](docs/CategoryResourceApi.md#getByNameUsingGET) | **GET** /api/categories/name/{name} | getByName
*SongbookApi.CategoryResourceApi* | [**getSongsByCategoryIdUsingGET**](docs/CategoryResourceApi.md#getSongsByCategoryIdUsingGET) | **GET** /api/categories/id/{id}/songs | getSongsByCategoryId
*SongbookApi.CategoryResourceApi* | [**updateUsingPUT1**](docs/CategoryResourceApi.md#updateUsingPUT1) | **PUT** /api/categories | update
*SongbookApi.PlaylistResourceApi* | [**addSongUsingPATCH**](docs/PlaylistResourceApi.md#addSongUsingPATCH) | **PATCH** /api/playlists/{id}/add-song/{songId} | addSong
*SongbookApi.PlaylistResourceApi* | [**createUsingPOST2**](docs/PlaylistResourceApi.md#createUsingPOST2) | **POST** /api/playlists | create
*SongbookApi.PlaylistResourceApi* | [**deleteUsingDELETE2**](docs/PlaylistResourceApi.md#deleteUsingDELETE2) | **DELETE** /api/playlists/id/{id} | delete
*SongbookApi.PlaylistResourceApi* | [**downloadPlaylistPdfSongbookUsingGET**](docs/PlaylistResourceApi.md#downloadPlaylistPdfSongbookUsingGET) | **GET** /api/playlists/download/{id} | downloadPlaylistPdfSongbook
*SongbookApi.PlaylistResourceApi* | [**getAllUsingGET3**](docs/PlaylistResourceApi.md#getAllUsingGET3) | **GET** /api/playlists | getAll
*SongbookApi.PlaylistResourceApi* | [**getByIdUsingGET3**](docs/PlaylistResourceApi.md#getByIdUsingGET3) | **GET** /api/playlists/id/{id} | getById
*SongbookApi.PlaylistResourceApi* | [**getByNameUsingGET1**](docs/PlaylistResourceApi.md#getByNameUsingGET1) | **GET** /api/playlists/name/{name} | getByName
*SongbookApi.PlaylistResourceApi* | [**getByOwnerIdUsingGET**](docs/PlaylistResourceApi.md#getByOwnerIdUsingGET) | **GET** /api/playlists/ownerId/{id} | getByOwnerId
*SongbookApi.PlaylistResourceApi* | [**removeSongUsingPATCH**](docs/PlaylistResourceApi.md#removeSongUsingPATCH) | **PATCH** /api/playlists/{id}/remove-song/{songId} | removeSong
*SongbookApi.PlaylistResourceApi* | [**updateUsingPUT2**](docs/PlaylistResourceApi.md#updateUsingPUT2) | **PUT** /api/playlists | update
*SongbookApi.SongCoauthorResourceApi* | [**createUsingPOST3**](docs/SongCoauthorResourceApi.md#createUsingPOST3) | **POST** /api/coauthors | create
*SongbookApi.SongCoauthorResourceApi* | [**deleteUsingDELETE3**](docs/SongCoauthorResourceApi.md#deleteUsingDELETE3) | **DELETE** /api/coauthors/{songId}/{authorId}/{function} | delete
*SongbookApi.SongCoauthorResourceApi* | [**getByAuthorIdUsingGET**](docs/SongCoauthorResourceApi.md#getByAuthorIdUsingGET) | **GET** /api/coauthors/author/{id} | getByAuthorId
*SongbookApi.SongCoauthorResourceApi* | [**getByFunctionUsingGET**](docs/SongCoauthorResourceApi.md#getByFunctionUsingGET) | **GET** /api/coauthors/function/{function} | getByFunction
*SongbookApi.SongCoauthorResourceApi* | [**getBySongIdUsingGET**](docs/SongCoauthorResourceApi.md#getBySongIdUsingGET) | **GET** /api/coauthors/song/{id} | getBySongId
*SongbookApi.SongCoauthorResourceApi* | [**updateUsingPUT3**](docs/SongCoauthorResourceApi.md#updateUsingPUT3) | **PUT** /api/coauthors | update
*SongbookApi.SongResourceApi* | [**addTagToSongUsingPATCH**](docs/SongResourceApi.md#addTagToSongUsingPATCH) | **PATCH** /api/songs/{id}/add-tag | addTagToSong
*SongbookApi.SongResourceApi* | [**addTagsToSongBulkUsingPATCH**](docs/SongResourceApi.md#addTagsToSongBulkUsingPATCH) | **PATCH** /api/songs/{id}/add-tag-bulk | addTagsToSongBulk
*SongbookApi.SongResourceApi* | [**approveSongUsingPUT**](docs/SongResourceApi.md#approveSongUsingPUT) | **PUT** /api/songs/{id}/approve | approveSong
*SongbookApi.SongResourceApi* | [**createUsingPOST4**](docs/SongResourceApi.md#createUsingPOST4) | **POST** /api/songs | create
*SongbookApi.SongResourceApi* | [**deleteUsingDELETE4**](docs/SongResourceApi.md#deleteUsingDELETE4) | **DELETE** /api/songs/id/{id} | delete
*SongbookApi.SongResourceApi* | [**getAllUsingGET4**](docs/SongResourceApi.md#getAllUsingGET4) | **GET** /api/songs | getAll
*SongbookApi.SongResourceApi* | [**getByAuthorUsingGET**](docs/SongResourceApi.md#getByAuthorUsingGET) | **GET** /api/songs/author/{authorId} | getByAuthor
*SongbookApi.SongResourceApi* | [**getByCategoryUsingGET1**](docs/SongResourceApi.md#getByCategoryUsingGET1) | **GET** /api/songs/category/{categoryId} | getByCategory
*SongbookApi.SongResourceApi* | [**getByIdUsingGET4**](docs/SongResourceApi.md#getByIdUsingGET4) | **GET** /api/songs/id/{id} | getById
*SongbookApi.SongResourceApi* | [**getByLyricsFragmentUsingGET1**](docs/SongResourceApi.md#getByLyricsFragmentUsingGET1) | **GET** /api/songs/lyrics_fragment/{value} | getByLyricsFragment
*SongbookApi.SongResourceApi* | [**getByRatingUsingGET**](docs/SongResourceApi.md#getByRatingUsingGET) | **GET** /api/songs/rating | getByRating
*SongbookApi.SongResourceApi* | [**getByTagUsingGET1**](docs/SongResourceApi.md#getByTagUsingGET1) | **GET** /api/songs/tag/{tagId} | getByTag
*SongbookApi.SongResourceApi* | [**getByTitleFragmentUsingGET1**](docs/SongResourceApi.md#getByTitleFragmentUsingGET1) | **GET** /api/songs/title/{title} | getByTitleFragment
*SongbookApi.SongResourceApi* | [**getLatestUsingGET1**](docs/SongResourceApi.md#getLatestUsingGET1) | **GET** /api/songs/latest | getLatest
*SongbookApi.SongResourceApi* | [**getSongPlaylistsUsingGET**](docs/SongResourceApi.md#getSongPlaylistsUsingGET) | **GET** /api/songs/id/{id}/playlists | getSongPlaylists
*SongbookApi.SongResourceApi* | [**getSongRatingsUsingGET**](docs/SongResourceApi.md#getSongRatingsUsingGET) | **GET** /api/songs/id/{id}/ratings | getSongRatings
*SongbookApi.SongResourceApi* | [**getSongUserLibrariesUsingGET**](docs/SongResourceApi.md#getSongUserLibrariesUsingGET) | **GET** /api/songs/id/{id}/users | getSongUserLibraries
*SongbookApi.SongResourceApi* | [**getSongsAddedByUserUsingGET**](docs/SongResourceApi.md#getSongsAddedByUserUsingGET) | **GET** /api/songs/user/{id}/added | getSongsAddedByUser
*SongbookApi.SongResourceApi* | [**getSongsEditedByUserUsingGET**](docs/SongResourceApi.md#getSongsEditedByUserUsingGET) | **GET** /api/songs/user/{id}/edited | getSongsEditedByUser
*SongbookApi.SongResourceApi* | [**getUserSongsUsingGET**](docs/SongResourceApi.md#getUserSongsUsingGET) | **GET** /api/songs/user/{id} | getUserSongs
*SongbookApi.SongResourceApi* | [**loadFromFileUsingPOST**](docs/SongResourceApi.md#loadFromFileUsingPOST) | **POST** /api/songs/upload | loadFromFile
*SongbookApi.SongResourceApi* | [**removeTagFromSongUsingPATCH**](docs/SongResourceApi.md#removeTagFromSongUsingPATCH) | **PATCH** /api/songs/{id}/remove-tag/{tagId} | removeTagFromSong
*SongbookApi.SongResourceApi* | [**removeTagsFromSongBulkUsingPATCH**](docs/SongResourceApi.md#removeTagsFromSongBulkUsingPATCH) | **PATCH** /api/songs/{id}/remove-tag-bulk/{tagIds} | removeTagsFromSongBulk
*SongbookApi.SongResourceApi* | [**updateUsingPUT4**](docs/SongResourceApi.md#updateUsingPUT4) | **PUT** /api/songs | update
*SongbookApi.TagResourceApi* | [**createUsingPOST5**](docs/TagResourceApi.md#createUsingPOST5) | **POST** /api/tags | create
*SongbookApi.TagResourceApi* | [**deleteUsingDELETE5**](docs/TagResourceApi.md#deleteUsingDELETE5) | **DELETE** /api/tags/id/{id} | delete
*SongbookApi.TagResourceApi* | [**getAllUsingGET5**](docs/TagResourceApi.md#getAllUsingGET5) | **GET** /api/tags | getAll
*SongbookApi.TagResourceApi* | [**getByIdUsingGET5**](docs/TagResourceApi.md#getByIdUsingGET5) | **GET** /api/tags/id/{id} | getById
*SongbookApi.TagResourceApi* | [**getByNameUsingGET2**](docs/TagResourceApi.md#getByNameUsingGET2) | **GET** /api/tags/name/{name} | getByName
*SongbookApi.TagResourceApi* | [**getSongsByTagIdUsingGET**](docs/TagResourceApi.md#getSongsByTagIdUsingGET) | **GET** /api/tags/id/{id}/songs | getSongsByTagId
*SongbookApi.TagResourceApi* | [**updateUsingPUT5**](docs/TagResourceApi.md#updateUsingPUT5) | **PUT** /api/tags | update
*SongbookApi.UserResourceApi* | [**addSongToLibraryUsingPATCH**](docs/UserResourceApi.md#addSongToLibraryUsingPATCH) | **PATCH** /api/users/{id}/add-song/{songId} | addSongToLibrary
*SongbookApi.UserResourceApi* | [**deleteUsingDELETE6**](docs/UserResourceApi.md#deleteUsingDELETE6) | **DELETE** /api/users/id/{id} | delete
*SongbookApi.UserResourceApi* | [**getAllUsingGET6**](docs/UserResourceApi.md#getAllUsingGET6) | **GET** /api/users | getAll
*SongbookApi.UserResourceApi* | [**getByIdUsingGET6**](docs/UserResourceApi.md#getByIdUsingGET6) | **GET** /api/users/id/{id} | getById
*SongbookApi.UserResourceApi* | [**getPlaylistsByUserIdUsingGET**](docs/UserResourceApi.md#getPlaylistsByUserIdUsingGET) | **GET** /api/users/id/{id}/playlists | getPlaylistsByUserId
*SongbookApi.UserResourceApi* | [**getRatingsByUserIdUsingGET**](docs/UserResourceApi.md#getRatingsByUserIdUsingGET) | **GET** /api/users/id/{id}/ratings | getRatingsByUserId
*SongbookApi.UserResourceApi* | [**removeSongFromLibraryUsingPATCH**](docs/UserResourceApi.md#removeSongFromLibraryUsingPATCH) | **PATCH** /api/users/{id}/remove-song/{songId} | removeSongFromLibrary
*SongbookApi.UserRoleResourceApi* | [**createUsingPOST6**](docs/UserRoleResourceApi.md#createUsingPOST6) | **POST** /api/user_roles | create
*SongbookApi.UserRoleResourceApi* | [**deleteUsingDELETE7**](docs/UserRoleResourceApi.md#deleteUsingDELETE7) | **DELETE** /api/user_roles/id/{id} | delete
*SongbookApi.UserRoleResourceApi* | [**getAllUsingGET7**](docs/UserRoleResourceApi.md#getAllUsingGET7) | **GET** /api/user_roles | getAll
*SongbookApi.UserRoleResourceApi* | [**getByIdUsingGET7**](docs/UserRoleResourceApi.md#getByIdUsingGET7) | **GET** /api/user_roles/id/{id} | getById
*SongbookApi.UserRoleResourceApi* | [**getByNameSearchQueryUsingGET**](docs/UserRoleResourceApi.md#getByNameSearchQueryUsingGET) | **GET** /api/user_roles/name/{searchQuery} | getByNameSearchQuery
*SongbookApi.UserRoleResourceApi* | [**getUsersByUserRoleIdUsingGET**](docs/UserRoleResourceApi.md#getUsersByUserRoleIdUsingGET) | **GET** /api/user_roles/id/{id}/users | getUsersByUserRoleId
*SongbookApi.UserRoleResourceApi* | [**updateUsingPUT6**](docs/UserRoleResourceApi.md#updateUsingPUT6) | **PUT** /api/user_roles | update
*SongbookApi.UserSongRatingResourceApi* | [**createUsingPOST7**](docs/UserSongRatingResourceApi.md#createUsingPOST7) | **POST** /api/ratings | create
*SongbookApi.UserSongRatingResourceApi* | [**deleteUsingDELETE8**](docs/UserSongRatingResourceApi.md#deleteUsingDELETE8) | **DELETE** /api/ratings/{userId}/{songId} | delete
*SongbookApi.UserSongRatingResourceApi* | [**getAllUsingGET8**](docs/UserSongRatingResourceApi.md#getAllUsingGET8) | **GET** /api/ratings | getAll
*SongbookApi.UserSongRatingResourceApi* | [**getBySongIdUsingGET1**](docs/UserSongRatingResourceApi.md#getBySongIdUsingGET1) | **GET** /api/ratings/song/{id} | getBySongId
*SongbookApi.UserSongRatingResourceApi* | [**getByUserIdAndSongIdUsingGET**](docs/UserSongRatingResourceApi.md#getByUserIdAndSongIdUsingGET) | **GET** /api/ratings/{userId}/{songId} | getByUserIdAndSongId
*SongbookApi.UserSongRatingResourceApi* | [**getByUserIdUsingGET**](docs/UserSongRatingResourceApi.md#getByUserIdUsingGET) | **GET** /api/ratings/user/{id} | getByUserId
*SongbookApi.UserSongRatingResourceApi* | [**updateUsingPUT7**](docs/UserSongRatingResourceApi.md#updateUsingPUT7) | **PUT** /api/ratings | update


## Documentation for Models

 - [SongbookApi.AuthorDTO](docs/AuthorDTO.md)
 - [SongbookApi.CategoryDTO](docs/CategoryDTO.md)
 - [SongbookApi.CreateCoauthorDTO](docs/CreateCoauthorDTO.md)
 - [SongbookApi.CreatePlaylistDTO](docs/CreatePlaylistDTO.md)
 - [SongbookApi.CreateSongDTO](docs/CreateSongDTO.md)
 - [SongbookApi.EmailChangeDTO](docs/EmailChangeDTO.md)
 - [SongbookApi.File](docs/File.md)
 - [SongbookApi.InputStream](docs/InputStream.md)
 - [SongbookApi.LoginForm](docs/LoginForm.md)
 - [SongbookApi.PasswordChangeDTO](docs/PasswordChangeDTO.md)
 - [SongbookApi.PlaylistDTO](docs/PlaylistDTO.md)
 - [SongbookApi.RegisterNewUserForm](docs/RegisterNewUserForm.md)
 - [SongbookApi.Resource](docs/Resource.md)
 - [SongbookApi.SongAddDTO](docs/SongAddDTO.md)
 - [SongbookApi.SongCoauthorDTO](docs/SongCoauthorDTO.md)
 - [SongbookApi.SongDTO](docs/SongDTO.md)
 - [SongbookApi.SongEditDTO](docs/SongEditDTO.md)
 - [SongbookApi.TagDTO](docs/TagDTO.md)
 - [SongbookApi.TokenAndPasswordDTO](docs/TokenAndPasswordDTO.md)
 - [SongbookApi.TokenDTO](docs/TokenDTO.md)
 - [SongbookApi.URI](docs/URI.md)
 - [SongbookApi.URL](docs/URL.md)
 - [SongbookApi.UniversalCreateDTO](docs/UniversalCreateDTO.md)
 - [SongbookApi.UserDTO](docs/UserDTO.md)
 - [SongbookApi.UserRoleDTO](docs/UserRoleDTO.md)
 - [SongbookApi.UserSongRatingDTO](docs/UserSongRatingDTO.md)


## Documentation for Authorization

 All endpoints do not require authorization.

