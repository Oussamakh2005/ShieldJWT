import { createHmac } from "crypto";
const verifyToken = (input, secret) => {
    const [header, payload, signature] = input.split('.');
    const expectedSignature = createHmac('sha256', secret)
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
        if (decodedPayload.exp < (Date.now() / 1000)) {
            throw new Error("Token has expired");
        }
        else {
            return decodedPayload;
        }
    }
};
export default verifyToken;
//# sourceMappingURL=verifyToken.js.map