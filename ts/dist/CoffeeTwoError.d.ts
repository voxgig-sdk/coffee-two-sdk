import { Context } from './Context';
declare class CoffeeTwoError extends Error {
    isCoffeeTwoError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CoffeeTwoError };
