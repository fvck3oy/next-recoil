/// <reference types="next" />
/// <reference types="next/types/global" />
// declare module '*.css';
// declare module '*.scss';

declare module '*.scss' {
    const content: any;
    export default content;
}

declare module '*.css' {
    const content: any;
    export default content;
}