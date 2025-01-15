const selectAlg = (input) => {
    let alg = "";
    switch (input) {
        case "HS256":
            alg = "sha256";
            break;
        case "HS384":
            alg = "sha384";
            break;
        case "HS512":
            alg = "sha512";
            break;
        default:
            throw new Error("Invalid algorithm");
    }
    return alg;
};
export default selectAlg;
//# sourceMappingURL=selectAlg.js.map