// To install the module, run:
// npm i shield-jwt

/**
 * How to use the `shield-jwt` module:
 *
 * 1. Generate Token:
 *    Use the `signToken` function to generate a token.
 *    - Required parameters:
 *      - `data` (object): The data to store in the token.
 *      - `secret` (string): The secret key to sign the token.
 *      - `expiresIn` (number): Token expiration time in seconds.
 *    - Optional parameter:
 *      - `algorithm` (string): The algorithm to use (choose between `HS256`, `HS384`, `HS512`).
 *        - Default: `HS256`
 *    - Returns: A signed JWT token.
 *
 * 2. Verify Token:
 *    Use the `verifyToken` function to verify the token.
 *    - Required parameters:
 *      - `token` (string): The JWT token to verify.
 *      - `secret` (string): The secret key used to sign the token.
 *    - Returns: The payload object if the token is valid.
 *    - Throws:
 *      - "Invalid token" error if the token is invalid.
 *      - "Expired token" error if the token is expired.
 *      - "Invalid algorithm" error if the algorithm is not supported.
 *
 * Importing the functions:
 * - To import the `signToken` function:
 *   import { signToken } from "shield-jwt";
 * - To import the `verifyToken` function:
 *   import { verifyToken } from "shield-jwt";
 */

// Example usage:

import { signToken, verifyToken } from "shield-jwt";

try {
  // 1. Generate a token
  const data = { id: 123, username: "Oussama" };
  const secret = "mySecretKey";
  const expiresIn = 3600; // Token expires in 1 hour

  const token = signToken(data, secret, expiresIn, "HS512");
  console.log("Generated Token:", token);

  // 2. Verify the token
  const verifiedPayload = verifyToken(token, secret);
  console.log("Verified Payload:", verifiedPayload);
} catch (error) {
  console.error("Error:", error.message);
}