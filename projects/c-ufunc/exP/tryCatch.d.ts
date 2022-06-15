/**
 * Tries to execute a function.
 * @param fn  -Function to be executed.
 * @returns function value if no errors thrown, else returns an Error object.
 */
export declare const tryCatch: (fn: <Value, ReturnType_1>(value: Value) => ReturnType_1) => <Value_1, ReturnType_2>(value: Value_1) => Error | ReturnType_2;
//# sourceMappingURL=tryCatch.d.ts.map