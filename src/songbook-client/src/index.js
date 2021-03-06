/*
 * Songbook API
 * Tourist songs application
 *
 * OpenAPI spec version: 1.5.5
 * Contact: andrzej.przybysz01@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuthorDTO', 'model/CategoryDTO', 'model/CreateCoauthorDTO', 'model/CreatePlaylistDTO', 'model/CreateSongDTO', 'model/EmailChangeDTO', 'model/File', 'model/InputStream', 'model/LoginForm', 'model/PasswordChangeDTO', 'model/PlaylistDTO', 'model/RegisterNewUserForm', 'model/Resource', 'model/SongAddDTO', 'model/SongCoauthorDTO', 'model/SongDTO', 'model/SongEditDTO', 'model/TagDTO', 'model/TokenAndPasswordDTO', 'model/TokenDTO', 'model/URI', 'model/URL', 'model/UniversalCreateDTO', 'model/UserDTO', 'model/UserRoleDTO', 'model/UserSongRatingDTO', 'api/AdminResourceApi', 'api/AuthenticationResourceApi', 'api/AuthorResourceApi', 'api/AwaitingSongResourceApi', 'api/CategoryResourceApi', 'api/PlaylistResourceApi', 'api/SongCoauthorResourceApi', 'api/SongResourceApi', 'api/TagResourceApi', 'api/UserResourceApi', 'api/UserRoleResourceApi', 'api/UserSongRatingResourceApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AuthorDTO'), require('./model/CategoryDTO'), require('./model/CreateCoauthorDTO'), require('./model/CreatePlaylistDTO'), require('./model/CreateSongDTO'), require('./model/EmailChangeDTO'), require('./model/File'), require('./model/InputStream'), require('./model/LoginForm'), require('./model/PasswordChangeDTO'), require('./model/PlaylistDTO'), require('./model/RegisterNewUserForm'), require('./model/Resource'), require('./model/SongAddDTO'), require('./model/SongCoauthorDTO'), require('./model/SongDTO'), require('./model/SongEditDTO'), require('./model/TagDTO'), require('./model/TokenAndPasswordDTO'), require('./model/TokenDTO'), require('./model/URI'), require('./model/URL'), require('./model/UniversalCreateDTO'), require('./model/UserDTO'), require('./model/UserRoleDTO'), require('./model/UserSongRatingDTO'), require('./api/AdminResourceApi'), require('./api/AuthenticationResourceApi'), require('./api/AuthorResourceApi'), require('./api/AwaitingSongResourceApi'), require('./api/CategoryResourceApi'), require('./api/PlaylistResourceApi'), require('./api/SongCoauthorResourceApi'), require('./api/SongResourceApi'), require('./api/TagResourceApi'), require('./api/UserResourceApi'), require('./api/UserRoleResourceApi'), require('./api/UserSongRatingResourceApi'));
  }
}(function(ApiClient, AuthorDTO, CategoryDTO, CreateCoauthorDTO, CreatePlaylistDTO, CreateSongDTO, EmailChangeDTO, File, InputStream, LoginForm, PasswordChangeDTO, PlaylistDTO, RegisterNewUserForm, Resource, SongAddDTO, SongCoauthorDTO, SongDTO, SongEditDTO, TagDTO, TokenAndPasswordDTO, TokenDTO, URI, URL, UniversalCreateDTO, UserDTO, UserRoleDTO, UserSongRatingDTO, AdminResourceApi, AuthenticationResourceApi, AuthorResourceApi, AwaitingSongResourceApi, CategoryResourceApi, PlaylistResourceApi, SongCoauthorResourceApi, SongResourceApi, TagResourceApi, UserResourceApi, UserRoleResourceApi, UserSongRatingResourceApi) {
  'use strict';

  /**
   * Tourist_songs_application.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SongbookApi = require('index'); // See note below*.
   * var xxxSvc = new SongbookApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SongbookApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SongbookApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SongbookApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.5.5
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuthorDTO model constructor.
     * @property {module:model/AuthorDTO}
     */
    AuthorDTO: AuthorDTO,
    /**
     * The CategoryDTO model constructor.
     * @property {module:model/CategoryDTO}
     */
    CategoryDTO: CategoryDTO,
    /**
     * The CreateCoauthorDTO model constructor.
     * @property {module:model/CreateCoauthorDTO}
     */
    CreateCoauthorDTO: CreateCoauthorDTO,
    /**
     * The CreatePlaylistDTO model constructor.
     * @property {module:model/CreatePlaylistDTO}
     */
    CreatePlaylistDTO: CreatePlaylistDTO,
    /**
     * The CreateSongDTO model constructor.
     * @property {module:model/CreateSongDTO}
     */
    CreateSongDTO: CreateSongDTO,
    /**
     * The EmailChangeDTO model constructor.
     * @property {module:model/EmailChangeDTO}
     */
    EmailChangeDTO: EmailChangeDTO,
    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File: File,
    /**
     * The InputStream model constructor.
     * @property {module:model/InputStream}
     */
    InputStream: InputStream,
    /**
     * The LoginForm model constructor.
     * @property {module:model/LoginForm}
     */
    LoginForm: LoginForm,
    /**
     * The PasswordChangeDTO model constructor.
     * @property {module:model/PasswordChangeDTO}
     */
    PasswordChangeDTO: PasswordChangeDTO,
    /**
     * The PlaylistDTO model constructor.
     * @property {module:model/PlaylistDTO}
     */
    PlaylistDTO: PlaylistDTO,
    /**
     * The RegisterNewUserForm model constructor.
     * @property {module:model/RegisterNewUserForm}
     */
    RegisterNewUserForm: RegisterNewUserForm,
    /**
     * The Resource model constructor.
     * @property {module:model/Resource}
     */
    Resource: Resource,
    /**
     * The SongAddDTO model constructor.
     * @property {module:model/SongAddDTO}
     */
    SongAddDTO: SongAddDTO,
    /**
     * The SongCoauthorDTO model constructor.
     * @property {module:model/SongCoauthorDTO}
     */
    SongCoauthorDTO: SongCoauthorDTO,
    /**
     * The SongDTO model constructor.
     * @property {module:model/SongDTO}
     */
    SongDTO: SongDTO,
    /**
     * The SongEditDTO model constructor.
     * @property {module:model/SongEditDTO}
     */
    SongEditDTO: SongEditDTO,
    /**
     * The TagDTO model constructor.
     * @property {module:model/TagDTO}
     */
    TagDTO: TagDTO,
    /**
     * The TokenAndPasswordDTO model constructor.
     * @property {module:model/TokenAndPasswordDTO}
     */
    TokenAndPasswordDTO: TokenAndPasswordDTO,
    /**
     * The TokenDTO model constructor.
     * @property {module:model/TokenDTO}
     */
    TokenDTO: TokenDTO,
    /**
     * The URI model constructor.
     * @property {module:model/URI}
     */
    URI: URI,
    /**
     * The URL model constructor.
     * @property {module:model/URL}
     */
    URL: URL,
    /**
     * The UniversalCreateDTO model constructor.
     * @property {module:model/UniversalCreateDTO}
     */
    UniversalCreateDTO: UniversalCreateDTO,
    /**
     * The UserDTO model constructor.
     * @property {module:model/UserDTO}
     */
    UserDTO: UserDTO,
    /**
     * The UserRoleDTO model constructor.
     * @property {module:model/UserRoleDTO}
     */
    UserRoleDTO: UserRoleDTO,
    /**
     * The UserSongRatingDTO model constructor.
     * @property {module:model/UserSongRatingDTO}
     */
    UserSongRatingDTO: UserSongRatingDTO,
    /**
     * The AdminResourceApi service constructor.
     * @property {module:api/AdminResourceApi}
     */
    AdminResourceApi: AdminResourceApi,
    /**
     * The AuthenticationResourceApi service constructor.
     * @property {module:api/AuthenticationResourceApi}
     */
    AuthenticationResourceApi: AuthenticationResourceApi,
    /**
     * The AuthorResourceApi service constructor.
     * @property {module:api/AuthorResourceApi}
     */
    AuthorResourceApi: AuthorResourceApi,
    /**
     * The AwaitingSongResourceApi service constructor.
     * @property {module:api/AwaitingSongResourceApi}
     */
    AwaitingSongResourceApi: AwaitingSongResourceApi,
    /**
     * The CategoryResourceApi service constructor.
     * @property {module:api/CategoryResourceApi}
     */
    CategoryResourceApi: CategoryResourceApi,
    /**
     * The PlaylistResourceApi service constructor.
     * @property {module:api/PlaylistResourceApi}
     */
    PlaylistResourceApi: PlaylistResourceApi,
    /**
     * The SongCoauthorResourceApi service constructor.
     * @property {module:api/SongCoauthorResourceApi}
     */
    SongCoauthorResourceApi: SongCoauthorResourceApi,
    /**
     * The SongResourceApi service constructor.
     * @property {module:api/SongResourceApi}
     */
    SongResourceApi: SongResourceApi,
    /**
     * The TagResourceApi service constructor.
     * @property {module:api/TagResourceApi}
     */
    TagResourceApi: TagResourceApi,
    /**
     * The UserResourceApi service constructor.
     * @property {module:api/UserResourceApi}
     */
    UserResourceApi: UserResourceApi,
    /**
     * The UserRoleResourceApi service constructor.
     * @property {module:api/UserRoleResourceApi}
     */
    UserRoleResourceApi: UserRoleResourceApi,
    /**
     * The UserSongRatingResourceApi service constructor.
     * @property {module:api/UserSongRatingResourceApi}
     */
    UserSongRatingResourceApi: UserSongRatingResourceApi
  };

  return exports;
}));
