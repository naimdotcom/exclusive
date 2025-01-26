import {
  ApiResponse,
  ProductApiResponse,
  productCardsInfoType,
  SpecialApiResponse,
} from "../utils/data";

function isSpecialRouteResponse(
  response: ApiResponse
): response is SpecialApiResponse {
  return (
    Array.isArray(response.data) &&
    response.data.length > 0 &&
    "title" in response.data[0]
  );
}
//
function isProductApiResponse(
  response: ApiResponse
): response is ProductApiResponse {
  return (
    Array.isArray(response.data) &&
    response.data.every((item) => "name" in item && "price" in item)
  );
}

//
function processApiResponse(response: ApiResponse): productCardsInfoType[] {
  if (isProductApiResponse(response)) {
    return response.data;
  }
  return response.data.map((item) => item.product);
}

export { isProductApiResponse, isSpecialRouteResponse, processApiResponse };
