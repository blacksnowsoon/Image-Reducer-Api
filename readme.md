# Image Reducer Api

## Table of content

>[Introduction](#introduction)
>[API URL](#api-url)
>[Reduce Endpoint](#reduce-endpoint)
>[Conclusion](#conclusion)

## Introduction

- Welcome to the documentation for the image reducer api. This API allows you to resize images by specifying the desired width and height as a search params and a payload is the image base64 format.

## API URL

The base URL for the API is: <https://api.example.com>

## Reduce Endpoint

### Endpoint

 ```text
 /reduce
 ```

### Method

 ```text
 POST
 ```
  
### Request Payload

The request payload should be sent as a base64 encoded string representing the image file. The payload should be sent in the body of the POST request.

### Parameters

| Parameter | Type    | Required | Description                              |
| --------- | ------- | -------- | ------------                             |
|width      | string  | Yes      | The desired width of the image.  |
|height     | string  | Yes      | The desired height of the image. |
|image      | string  | Yes      | The base64 encoded image file.           |

### Example Request

```http
  POST /reduce?width='300'&height='200'

  Content-type: application/json

  {
    "image": "base64-encoded-image-string"
  }
```

### Example Response

```json
{
  "status": "success",
  "message": "Image resized successfully",
  "data": "base64-encoded-image-string"
}
```

### Response Codes

| Status Code | Description                     |
|-------------|---------------------------------|
| 200         | Successful resize operation.    |
| 400         | Bad request. Missing parameters |
| 500         | Internal server error.          |

### Error Response

```json
  {
    "status": "error",
    "message": "Invalid parameter: width must be a positive number"
  }
```

## Conclusion

The Image Reduce API provides a simple and convenient way to resize images by providing the desired width and height along with the base64 encoded image file. It returns image base64 encoded as well. Please make sure to handle any error responses as described above.

If you have any questions or need further assistance, please contact our support team at
<balcksnow.soon@gmail.com>
