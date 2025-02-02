export type BuildType =
  | 'browser'
  | 'mini-css-extract'
  | 'style-loader'
  | 'esbuild'
  | 'vite'
  | 'parcel';

export interface TestServer {
  type: BuildType;
  url: string;
  close: () => Promise<void>;
  stylesheet?: string;
}
