/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />


/**
 * Also see create-react-app definitions:
 *   https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/lib/react-app.d.ts
 */

declare module '*.png';
declare module '*.jpg';
declare module '*.gif';

declare module '*.css' {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent:
    React.FunctionComponent<React.SVGProps<SVGSVGElement>
      & { title?: string }>;

  const src: string;
  export default src;
}
