/**
 * Evaluates if a value is nullish.
 *
 * @public
 * @param None   T | (value: T) => T: Fallback function.
 * @param Some   T | (value: T) => T: Function to be evaluated.
 * @returns Right if truthy else, returns left.
 */
export declare const optionPromise: <N, S>(none: N, some: S) => <Value>(value: Value) => Promise<Value>;
//# sourceMappingURL=optionPromise.d.ts.map