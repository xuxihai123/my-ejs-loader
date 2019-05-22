## simple ejs loader

example

1. webpack config

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: "my-ejs-loader",
        options: {
          client: true,
          _with: false,
          ...ejs options,
        }
      }
    ]
  }
};
```

2. button.ejs

```ejs
<el-button type="<%= locals.type %>" size="<%= locals.size %>"><%= locals.text %></el-button>
```

3. test.js

```js
import button from "./button.ejs";
const result = button({ text: "test", size: "small" });
console.log(result);
// <el-button type="" size="small">test</el-button>
```
