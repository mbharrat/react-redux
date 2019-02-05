# React Notes

---

## Section 1

---

-   React is a javascript library
-   A component is a basic piece of React (can be a function or a class)
-   JSX: a dialect of JS for React
-   Event handlers: detect user interaction and respond to it
-   React and ReactDOM: react knows what a component is and how they work together while ReactDOM knows how to take a component and make it show up on the DOM

```sh
$npm install -g create-react-app
$create-react-app <nameOfProject>
```

The newer alternative of this is to use npx

```sh
$npx create-react-app <nameOfProject>
```

Create react app has three main things bundled up together: webpack, babel, dev server

_BABEL_

_What is it?_
It provides backwards compatibility

****Structure****
/src = source code
/public = stores static files
/node_modules = project dependencies
/package.json = records project dependencies and configurations
/package.lock.json = records EXACT version
/README.md

## Section 2

---

_JS Module Systems_

```js
import React from "react";
```

import = **We want to reach out to a file or dependancy**
React = **Name of variable we want to assign this import to**
'react' = **Name of dependancy or path to file we are importing**

**JSX**

A component => function or a class => produces HTML to show user (jsx) => handle feedback from user (event handler)

-   Babel is used to convert jsx to js (use the tool babeljs.io to try)

The actual method that is run to convert is:

```js
React.createElement();
```

To have style in JSX:

```js
style={{ backgroundColor: 'blue', color: 'white' }}
```

NOTE: use camel case for the actual style
