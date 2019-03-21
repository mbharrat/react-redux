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

## Section 4

---

What are class based components?

Functional components are good for simple content while **Class** components are good for everything else.

Benefits of class componenets

-   easier code organization
-   can use 'state'
    -   easier to handle user input
-   understands lifecycle events
    -   easier to do things when the app first starts

How does a class component look?

```js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            //success callback
            position => console.log(position),
            //failure callback
            err => console.log(err)
        );
        return <div>Latitude: </div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

\*\*note the extends keyword and the fact that everything is in a render method now

**Rules of Class Components**

-   Must be a JS class
-   Must extend (subclass) React.Component
-   Must define a 'render' method that returns some amount of JSX

**Rules of State**

-   Only usable with class components
-   'State' is a JS object that contains data relevant to component
-   Updating state on comp. causes component to almost instantly rerender
-   state must be initialized when a component is created
-   state can only be updated by function `setState`

**App Lifecycle Walkthrough**

1. JS file loaded by browser
2. Instance of App comp is created
3. App comp. `constructor` function gets called
4. State object is created and assigned to `this.state` property
5. We call geolocation service
6. React called components render method
7. App returns JSX and gets rendered to page as HTML
8. Time passes...
9. We get result of geolocation
10. We update our state object with call to `this.setState`
11. React sees that we updated the state of a component
12. React calls our `render` method a second time
13. Render method returns some (updated) JSX
14. React takes that JSX and updates content on the screen

Here's that App component with a graceful handling of errors! Ternary operators for the win:

```js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: "Loading", errorMessage: "" };

        window.navigator.geolocation.getCurrentPosition(
            //success callback
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            //failure callback
            err =>
                this.setState({
                    errorMessage: err.message
                })
        );
    }

    // React says we have to define render!!
    render() {
        const msg =
            this.state.errorMessage === ""
                ? `Latitude: ${this.state.lat}`
                : `Error: ${this.state.errorMessage}`;
        return <div>{msg}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```
