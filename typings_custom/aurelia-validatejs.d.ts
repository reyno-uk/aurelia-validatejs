declare module 'aurelia-validatejs' {
    
    export function required(nameOrConfigOrTarget?: string | Object, key?: any, descriptor?: any): any;
    
    export module ValidationEngine {
        export function getValidationReporter(model: any):any;
    }
 
}