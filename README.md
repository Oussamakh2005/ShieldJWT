# Shield JWT Module

The `shield-jwt` module is a Node.js library designed to simplify the process of generating and verifying JSON Web Tokens (JWT). This guide will walk you through the installation, usage, and examples of the module.

---

## Installation

To install the `shield-jwt` module, run the following command:

```bash
npm i shield-jwt
```
## Usage
### Importing the Module
To use the functions provided by the shield-jwt module, import them into your project:
```js
import { signToken, verifyToken } from "shield-jwt";
```
### Generating a Token
Use the signToken function to generate a JWT. This function requires at least three parameters:

- data: The data to store in the token (must be an object).

- secret: The secret key used to sign the token.

- expireIn: The expiration time for the token in seconds.

- Optionally, you can specify the algorithm to use for signing the token. The available options are HS256, HS384, and HS512. By default, the function uses HS256.

Example: Generating a Token
```js
const data = { userId: 123, role: "admin" };
const secret = "your-secret-key";
const expireIn = 3600; // 1 hour
const token = signToken(data, secret, expireIn, "HS256");
console.log("Generated Token:", token);
```
### Verifying a Token
Use the verifyToken function to verify a JWT. This function requires two parameters:

- token: The JWT you want to verify.

- secret: The secret key used to sign the token.

If the token is valid, the function will return the payload object. If the token is invalid or expired, the function will throw an error.

Example: Verifying a Token
```js
try {
  const payload = verifyToken(token, secret);
  console.log("Token Payload:", payload);
} catch (error) {
  console.error("Token Verification Failed:", error.message);
}
```
### Error Handling
Both signToken and verifyToken functions will throw an "Invalid algorithm" error if the provided algorithm is not supported.

- signToken will throw an "Invalid algorithm" error if the algorithm is not one of HS256, HS384, or HS512.

- verifyToken will throw an "Invalid token" error if the token is invalid or an "expired token" error if the token has expired.

Example: Handling Errors
```js
//signToken
try {
  const token = signToken(data, secret, expireIn, "HS999"); // Unsupported algorithm
} catch (error) {
  console.error("Error:", error.message); // Output: "Invalid algorithm"
}
//verifyToken
try {
  const payload = verifyToken("invalid.token.here", secret);
} catch (error) {
  console.error("Error:", error.message); // Output: "Invalid token" or "expired token"
}
```
## Conclusion
The shield-jwt module provides a simple and efficient way to handle JWT generation and verification in Node.js. By following the examples above, you can easily integrate JWT functionality into your application.

For more information, please refer to the official documentation or the source code of the shield-jwt module.
