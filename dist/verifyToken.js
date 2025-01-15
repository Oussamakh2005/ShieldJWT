import { createHmac } from "crypto";
const verifyToken = (input, secret) => {
    const [header, payload, signature] = input.split('.');
    const decodedHeader = JSON.parse(Buffer.from(header, 'base64').toString());
    const expectedSignature = createHmac(decodedHeader.alg, secret)
        .update(`${header}.${payload}`)
        .digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    if (signature !== expectedSignature) {
        throw new Error("Invalid token");
    }
    else {
        const decodedPayload = JSON.parse(Buffer.from(payload, 'base64').toString());
        if (decodedPayload.exp < Math.floor((Date.now() / 1000))) {
            throw new Error("Token has expired");
        }
        else {
            return decodedPayload;
        }
    }
};
export default verifyToken;
//# sourceMappingURL=verifyToken.js.map