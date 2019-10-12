# CSS2Lit

Executable that converts css file to a lit-element css export

## Instalation

  ```bash
  $ npm install particles.ts
  ```

## Usage

```bash
$ npx css2lit path/to/file
```

## Example

```css
.body { color: blue }
```

Output:

```js
import {css} from 'lit-element';
export const style = css`.body { color: blue }`;
```