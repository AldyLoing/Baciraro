import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        "camera-controls"?: string | boolean;
        "auto-rotate"?: string | boolean;
        "rotation-per-second"?: string;
        "shadow-intensity"?: string;
        exposure?: string;
        "camera-orbit"?: string;
        ar?: string | boolean;
        "touch-action"?: string;
        "interaction-prompt"?: string;
        "interaction-prompt-threshold"?: string;
      };
    }
  }
}
