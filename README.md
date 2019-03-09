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

\***\*Structure\*\***
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

## Section 3

---

Use semantic-ui for many styling and the npm package called faker.

Example of a functional component that takes in props

```js
import React from "react";

const CommentDetail = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.text}</div>
                <div className="actions">
                    <a className="reply">Reply</a>
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;
```

This is how you use the CommentDetail component

```js
<CommentDetails avatar={faker.image.avatar() author="Mike" timeAgo="Yesterday" text="Example text"}/>
```

Here's an example of a component using props.children

```js
import React from "react";

const ApprovalCard = props => {
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;
```

Here's how you use this component

```js
<ApprovalCard>
    <span>This is the child</span>
</ApprovalCard>
```
