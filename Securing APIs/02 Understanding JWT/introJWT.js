// Problems with Basic Authentication 

// 1. No encryption, hence not very secure. (It uses encoding and decoding)
// 2. Client needs to store credentials which can be exposed
// 3. Easy to crack using Brute Force Attack

// JSON Web Token

// Encrypted token
// Stateless
// Easy to scale
// Can be used by mobile and web both

// The JWT payload can be read without the secret key as it is base64-encoded, not encrypted. However, including sensitive information in the payload is not recommended due to potential security issues if the token is intercepted or compromised. JWT's main security relies on its signature for data integrity and authenticity.


// npm i jsonwebtoken