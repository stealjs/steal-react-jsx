export function translate(load) {
  load.metadata.format = 'es6';

  let hasES6Export = /^\s*?export\s/m.test(load.source);

  if(!hasES6Export) {
    load.source = `
      import React from 'react';

      export default function(ctx) {
        return ${load.source};
      }
    `;
  }
}
