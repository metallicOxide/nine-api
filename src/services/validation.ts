/**
 * Gets the body of the request
 * @param body Body of the request
 */
export const validatePostData = (body: any) => {
  if (!body.payload) {
    throw new Error("Payload is not found in data provided");
  }
  return body.payload;
};
