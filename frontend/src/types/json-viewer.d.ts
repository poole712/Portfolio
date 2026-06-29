declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
    "andypf-json-viewer": {
      data?: string;
      [key: string]: unknown;
    };
  }
}
