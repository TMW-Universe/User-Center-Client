/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_HOST: string;
  readonly VITE_AUTH_CLIENT_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
