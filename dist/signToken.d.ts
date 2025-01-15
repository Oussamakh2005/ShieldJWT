declare const signToken: (payload: object, secret: string, exp: number, algorithm?: string) => string;
export default signToken;
