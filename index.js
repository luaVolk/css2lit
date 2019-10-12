#!/usr/bin/env node

const replace = require('replace-in-file');


console.log(process.argv[1]);

const options = {
  files: process.argv[2],
  from: /(.+)/s,
  to:`
import {css} from 'lit-element';
export const style = css\`$1\`;
`.trim(),
};

replace(options, (error, results) => {
  if (error) {
    return console.error('Error occurred:', error);
  }
  console.log('Replacement results:', results);
});