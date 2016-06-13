export function translate(load) {
  load.metadata.format = 'es6';
  
  // remove cdata if present
  load.source = load.source.replace('/<!\[CDATA\[.*?\]\]>/gm');

  // remove leading and traling spaces
  load.source = load.source.replace(/^\s+|\s+$/gm,'');

  // if we found a leading < we expect that we have a proper html
  if(load.source.substr(0,1) === "<") {
    load.source = `
      import React from 'react';

      export default function(ctx) {
        return ${load.source};
      }`;
  }
}
