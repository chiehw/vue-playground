/// <reference types="vite/client" />
declare module '*.vue' {
    import type { DefineCompnent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}