import { createHmac } from "crypto";
import base64UrlEncoded from "./base64urlencoded.js"

const signToken = (payload : object , secret : string , exp : number , algorithm = 'HS256') => {
    const header = {
        alg : algorithm,
        type : "JWT"
    }

    const encodedHeader = base64UrlEncoded(JSON.stringify(header));
    const currentTimeStamp = Math.floor(Date.now()/1000); //time on seconds
    const encodedPayload = base64UrlEncoded(JSON.stringify({...payload,exp :(currentTimeStamp + exp) })); //note that exp must be on seconds
    const dataToSign = `${encodedHeader}.${encodedPayload}`;
    const signature = createHmac('sha256',secret)
                      .update(dataToSign)
                      .digest('base64')
                      .replace(/\+/g, '-')
                      .replace(/\//g, '_')
                      .replace(/=/g, '');
    return `${encodedHeader}.${encodedPayload}.${signature}`
}

export default signToken;