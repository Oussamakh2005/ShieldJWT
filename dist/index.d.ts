declare const _default: {
    signToken: (payload: object, secret: string, exp: number, algorithm?: string) => string;
    verifyToken: (input: string, secret: string) => any;
};
export default _default;
