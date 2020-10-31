# SongbookApi.CategoryResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategoryUsingPOST**](CategoryResourceApi.md#createCategoryUsingPOST) | **POST** /api/categories | createCategory
[**deleteCategoryUsingDELETE**](CategoryResourceApi.md#deleteCategoryUsingDELETE) | **DELETE** /api/categories/{id} | deleteCategory
[**getAllCategoriesUsingGET**](CategoryResourceApi.md#getAllCategoriesUsingGET) | **GET** /api/categories | getAllCategories
[**getCategoryByIdUsingGET**](CategoryResourceApi.md#getCategoryByIdUsingGET) | **GET** /api/categories/{id} | getCategoryById
[**getCategoryByNameUsingGET**](CategoryResourceApi.md#getCategoryByNameUsingGET) | **GET** /api/categories/name/{name} | getCategoryByName
[**getSongsByCategoryIdUsingGET**](CategoryResourceApi.md#getSongsByCategoryIdUsingGET) | **GET** /api/categories/{id}/songs | getSongsByCategoryId
[**updateCategoryUsingPUT**](CategoryResourceApi.md#updateCategoryUsingPUT) | **PUT** /api/categories | updateCategory


<a name="createCategoryUsingPOST"></a>
# **createCategoryUsingPOST**
> CategoryDTO createCategoryUsingPOST(categoryDto)

createCategory

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.CategoryResourceApi();

let categoryDto = new SongbookApi.UniversalCreateDTO(); // UniversalCreateDTO | categoryDto


apiInstance.createCategoryUsingPOST(categoryDto, (error, data, response) => {
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
 **categoryDto** | [**UniversalCreateDTO**](UniversalCreateDTO.md)| categoryDto | 

### Return type

[**CategoryDTO**](CategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteCategoryUsingDELETE"></a>
# **deleteCategoryUsingDELETE**
> deleteCategoryUsingDELETE(id)

deleteCategory

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.CategoryResourceApi();

let id = 789; // Number | id


apiInstance.deleteCategoryUsingDELETE(id, (error, data, response) => {
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

<a name="getAllCategoriesUsingGET"></a>
# **getAllCategoriesUsingGET**
> [CategoryDTO] getAllCategoriesUsingGET()

getAllCategories

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.CategoryResourceApi();

apiInstance.getAllCategoriesUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CategoryDTO]**](CategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getCategoryByIdUsingGET"></a>
# **getCategoryByIdUsingGET**
> CategoryDTO getCategoryByIdUsingGET(id)

getCategoryById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.CategoryResourceApi();

let id = 789; // Number | id


apiInstance.getCategoryByIdUsingGET(id, (error, data, response) => {
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

<a name="getCategoryByNameUsingGET"></a>
# **getCategoryByNameUsingGET**
> [CategoryDTO] getCategoryByNameUsingGET(name)

getCategoryByName

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.CategoryResourceApi();

let name = "name_example"; // String | name


apiInstance.getCategoryByNameUsingGET(name, (error, data, response) => {
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

### Return type

[**[CategoryDTO]**](CategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSongsByCategoryIdUsingGET"></a>
# **getSongsByCategoryIdUsingGET**
> [SongDTO] getSongsByCategoryIdUsingGET(id)

getSongsByCategoryId

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.CategoryResourceApi();

let id = 789; // Number | id


apiInstance.getSongsByCategoryIdUsingGET(id, (error, data, response) => {
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

<a name="updateCategoryUsingPUT"></a>
# **updateCategoryUsingPUT**
> CategoryDTO updateCategoryUsingPUT(categoryDto)

updateCategory

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.CategoryResourceApi();

let categoryDto = new SongbookApi.CategoryDTO(); // CategoryDTO | categoryDto


apiInstance.updateCategoryUsingPUT(categoryDto, (error, data, response) => {
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
 **categoryDto** | [**CategoryDTO**](CategoryDTO.md)| categoryDto | 

### Return type

[**CategoryDTO**](CategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

