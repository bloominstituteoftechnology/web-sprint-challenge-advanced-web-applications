import { ResponseTransformer } from '../response';
export declare function set<N extends string | Record<string, string | string[]>>(...args: N extends string ? [N, string] : [N]): ResponseTransformer;
