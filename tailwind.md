# Tailwind configs

### Install dependencies

```bash
npm i -D tailwindcss postcss postcss-cli 
```

### Generate tailwind.js

```bash
npx tailwind init tailwind.js --full
```

### Create postcss.config.js file

```js
const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}
```

### Create tailwind.css file

```bash
mkdir src/assets

touch src/assets/tailwind.css
```

tailwind.css content:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

### Create and import main.css file

```bash
touch src/assets/main.css
```

__import main.css in index.js on root directory__


### Add scripts in package.json

```json
  "scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
```

### Run

```
npm start
```