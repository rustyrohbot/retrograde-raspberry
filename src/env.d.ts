/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RECIPIENT_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
