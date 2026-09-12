import { CoffeeEntity } from './entity/CoffeeEntity';
export type * from './CoffeeTwoTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CoffeeTwoEntityBase } from './CoffeeTwoEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class CoffeeTwoSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Coffee(entopts?: Record<string, any>): CoffeeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CoffeeTwoSDK;
    tester(testopts?: any, sdkopts?: any): CoffeeTwoSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CoffeeTwoSDK;
export { stdutil, config, BaseFeature, CoffeeTwoEntityBase, CoffeeTwoSDK, SDK, };
