# SongbookApi.GuitarCordResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllGuitarCordsUsingGET**](GuitarCordResourceApi.md#getAllGuitarCordsUsingGET) | **GET** /api/guitar-cords | getAllGuitarCords
[**getGuitarCordByIdUsingGET**](GuitarCordResourceApi.md#getGuitarCordByIdUsingGET) | **GET** /api/guitar-cords/{id} | getGuitarCordById
[**updateGuitarCordUsingPUT**](GuitarCordResourceApi.md#updateGuitarCordUsingPUT) | **PUT** /api/guitar-cords | updateGuitarCord


<a name="getAllGuitarCordsUsingGET"></a>
# **getAllGuitarCordsUsingGET**
> [GuitarCordDTO] getAllGuitarCordsUsingGET()

getAllGuitarCords

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.GuitarCordResourceApi();

apiInstance.getAllGuitarCordsUsingGET((error, data, response) => {
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

[**[GuitarCordDTO]**](GuitarCordDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getGuitarCordByIdUsingGET"></a>
# **getGuitarCordByIdUsingGET**
> GuitarCordDTO getGuitarCordByIdUsingGET(id)

getGuitarCordById

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.GuitarCordResourceApi();

let id = 789; // Number | id


apiInstance.getGuitarCordByIdUsingGET(id, (error, data, response) => {
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

[**GuitarCordDTO**](GuitarCordDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateGuitarCordUsingPUT"></a>
# **updateGuitarCordUsingPUT**
> GuitarCordDTO updateGuitarCordUsingPUT(guitarCordDTO)

updateGuitarCord

### Example
```javascript
import {SongbookApi} from 'songbook_api';

let apiInstance = new SongbookApi.GuitarCordResourceApi();

let guitarCordDTO = new SongbookApi.GuitarCordDTO(); // GuitarCordDTO | guitarCordDTO


apiInstance.updateGuitarCordUsingPUT(guitarCordDTO, (error, data, response) => {
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
 **guitarCordDTO** | [**GuitarCordDTO**](GuitarCordDTO.md)| guitarCordDTO | 

### Return type

[**GuitarCordDTO**](GuitarCordDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

