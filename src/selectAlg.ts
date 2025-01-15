const selectAlg = (input: string) => {
    let alg : string = "";
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
        default : 
           throw new Error("Invalid algorithm");
    }
    return alg;
}
export default selectAlg;