/**
 * Evaluates a promises value.
 * @param fn <Value>() => Promise<Value>: Function to be evaluated.
 * @returns Promise
 */
export declare const tryCatchPromise: (fn: <Value, ReturnType_1>(value: Value) => Promise<ReturnType_1>) => <Value_1, ReturnType_2>(value: Value_1) => Promise<Error | ReturnType_2>;
//# sourceMappingURL=tryCatchPromise.d.ts.map