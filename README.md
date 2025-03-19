# React + Redux Training

## Learning Objectives
- Master React component lifecycle.
- Implement state management using Redux or Context API.
- Utilize React Hooks effectively.
- Redux Toolkit 
## What is React ?
- React is a JavaScript library for building user interfaces (UIs). 
- Focuses on creating reusable UI components. 
- Uses a **declarative** approach, meaning you describe _what_ you want the UI to look like, and React handles **_how  _**to achieve it. 


![image.png](https://eraser.imgix.net/workspaces/Ax4EcPmaWvtDzZWaIT4e/LdhcCiEaS0g94a1cXU52xt8E1KE3/DPsoqozjpPFab8XOqOQUG.png?ixlib=js-3.7.0 "image.png")

## Key Concepts
### Component
- It is small reusable function which generates JSX.
- Building blocks of React applications. They encapsulate UI elements and logic.
### JSX (JavaScript XML)
- A syntax extension that allows you to write HTML-like structures within JavaScript code.
### Virtual DOM
- A lightweight copy of the actual DOM. React uses it to efficiently update the UI.
### Props (Properties)
- Data passed from parent components to child components.
- It is always **Read-Only Data**
### State
- Data managed within a component that can change over time. (**Mutable** in nature)
## Lifecycle of Component
It consist of 3 stages 

1. Initialization
2. Mounting
3. Updation
4. Unmounting
Ref Link - [﻿projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) 

![image.png](https://eraser.imgix.net/workspaces/Ax4EcPmaWvtDzZWaIT4e/LdhcCiEaS0g94a1cXU52xt8E1KE3/mxjUfPSQXrdNb64RUHzkX.png?ixlib=js-3.7.0 "image.png")



## Difference b/w Class & Functional Component


**Function components** are a means to create components in React that do not have their state and only return JSX.

In comparison to functional components, **Class Components** are more complex. To develop class-based components in React, we can use **JavaScript ES6 classes**. 

**Class Components** must have a render method that returns a React element by extending from **React.Component. **

## Hooks
- Introduced in React 16.8
- useState, useEffect, useMemo, , useLayoutEffect

### Key points:
    - useRef is essential for storing previous values of props and state or react element.
    - useEffect is the workhorse of functional lifecycles.
    - useMemo is used for performance optimization.
    - useLayoutEffect is used to get dom information before the browser paints.
    - useState is used to manage state.



