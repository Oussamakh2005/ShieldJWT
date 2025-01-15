const base64UrlEncoded = (input) => {
    return Buffer.from(input)
        .toString("base64")
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
};
export default base64UrlEncoded;
