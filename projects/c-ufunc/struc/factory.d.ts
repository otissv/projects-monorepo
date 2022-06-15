declare type FactoryReturnType<Value> = {
    readonly flatMap: <F extends Function>(f: F) => FactoryReturnType<Value>;
    readonly fold: () => Value;
    readonly log: () => FactoryReturnType<Value>;
    readonly map: <F extends Function>(f: F) => FactoryReturnType<Value>;
};
export declare const factory: <Value>(value: Value) => FactoryReturnType<Value>;
export {};
//# sourceMappingURL=factory.d.ts.map