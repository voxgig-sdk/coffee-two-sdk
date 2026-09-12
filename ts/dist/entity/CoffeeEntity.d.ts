import { CoffeeTwoEntityBase } from '../CoffeeTwoEntityBase';
import type { CoffeeTwoSDK } from '../CoffeeTwoSDK';
import type { Control } from '../types';
import type { Coffee, CoffeeLoadMatch } from '../CoffeeTwoTypes';
declare class CoffeeEntity extends CoffeeTwoEntityBase<Coffee> {
    constructor(client: CoffeeTwoSDK, entopts: any);
    make(this: CoffeeEntity): CoffeeEntity;
    load(this: any, reqmatch?: CoffeeLoadMatch, ctrl?: Control): Promise<CoffeeEntity>;
}
export { CoffeeEntity };
