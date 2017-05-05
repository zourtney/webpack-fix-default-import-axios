# Overview

A minimal example demonstrating improper loading of the [Axios](https://github.com/mzabriskie/axios)
library when using the the [webpack-fix-default-import-plugin](https://www.npmjs.com/package/webpack-fix-default-import-plugin)
plugin.

```typescript
import axios from 'axios';
axios.get('/anything');
```

Results in an error:

```
app.bundle.js:836 Uncaught RangeError: Maximum call stack size exceeded
    at assignValue (app.bundle.js:836)
    at forEach (app.bundle.js:811)
    at merge (app.bundle.js:845)
    at assignValue (app.bundle.js:838)
    at forEach (app.bundle.js:811)
    at merge (app.bundle.js:845)
    at assignValue (app.bundle.js:838)
    at forEach (app.bundle.js:811)
    at merge (app.bundle.js:845)
    at assignValue (app.bundle.js:838)
```

# Testing

Clone the repo, then:

    npm install

Start the demo with:

    npm start
