/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WebComponentStencil {
        "name": string;
    }
}
declare global {
    interface HTMLWebComponentStencilElement extends Components.WebComponentStencil, HTMLStencilElement {
    }
    var HTMLWebComponentStencilElement: {
        prototype: HTMLWebComponentStencilElement;
        new (): HTMLWebComponentStencilElement;
    };
    interface HTMLElementTagNameMap {
        "web-component-stencil": HTMLWebComponentStencilElement;
    }
}
declare namespace LocalJSX {
    interface WebComponentStencil {
        "name"?: string;
        "onButton-clicked"?: (event: CustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "web-component-stencil": WebComponentStencil;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "web-component-stencil": LocalJSX.WebComponentStencil & JSXBase.HTMLAttributes<HTMLWebComponentStencilElement>;
        }
    }
}
