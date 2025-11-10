/* tslint:disable */
/* eslint-disable */
export function run_web(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly run_web: () => void;
  readonly wasm_bindgen__convert__closures_____invoke__h3582b8193531a1bc: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h00e05b2488093631: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h5fa0da6349526fa0: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__hc385fff3b1404f20: (a: number, b: number, c: any, d: any) => void;
  readonly wasm_bindgen__convert__closures_____invoke__hdbd1cd9b6de00d99: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h28799d0f5be37cb0: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h9bb25172cdfdd125: (a: number, b: number) => void;
  readonly wasm_bindgen__closure__destroy__h21d4833e9c000c51: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
