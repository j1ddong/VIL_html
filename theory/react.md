

# Render and Commit

## Steps before components are displayed

### 1. Trigger a render

- initial render (by calling `createRoot` with the target DOM node and its `render` method)

- The component's (or one of its ancestors') state has been updated. (by updating its state with the `set` function)

### 2. React renders your components

- On initial render, React will call the root component.

- For subsequent renders, React will call the function component whose state update triggered the render.

### 3. React commits changes to the DOM

After rendering(calling) your components, React will modify the DOM

- For the initial render, React will use the `appendChild()` DOM API to put all the DOM nodes it has created on the screen.

- For re-renders, React will apply the minimal necessary operations to make the DOM match the latest rendering output.

**React only changes the DOM nodes if there’s a difference between renders.**

---

## Hook

> **Hooks—functions starting with `use`—can only be called at the top level of your components or your own Hooks.** 

- can’t call Hooks inside conditions, loops, or other nested functions.

- Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs.

- “use” React features at the top of your component similar to how you “import” modules at the top of your file.

---

## useState

> `useState` is a React Hook that lets you add a state variable to your component.

### Why have to use useState?

1. Local variables don't persist between renders. When React renders this component a second time, it renders it from scratch - it doesn't consider any changes to the local variables.

2. Changes to local variables won't trigger renders

### Solutions

1. Retain the data between renders. => `state variable`

2. Trigger React to render the component with new data(re-rendering) => `state setter function`

### Adding a state variable

To add a state variable, import `useState` from React at the top of the file:

```
import { useState } from 'react';


const [state, setState] = useState(initialState)
```

### Returns

An array with two values - current state and set function

### set functions

Parameters : The value that you want the state to be. It can be a value of any type, but there is a special behavior for functions.

-  Functions must be pure, should take the <u>pending state</u> as its only argument, and should return the next state.

set functions do not have a return value

### Features

- State is fully private to the component declaring it

- The set function only updates the state variable for the next render. Reading the state variable after calling the set function, you will get the old value that was on the screen before your call.
  
  If you need to use the next state, you can save it in a variable before passing it to the `set` function:
  
  ```javascript
  const nextCount = count + 1;
  setCount(nextCount);
  console.log(count);     // 0
  console.log(nextCount); // 1
  ```

- React batches state updates. It updates the screen **after all the event handlers have run** and have called their `set` functions.
  
  ```jsx
  import { useState } from 'react';
  
  export default function Counter() {
    const [number, setNumber] = useState(0);
  
    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}>+3</button>
      </>
    )
  }
  // The value of the number inside the first render’s event handler is always 0,
  // no matter how many times you call setNumber(1):
  // React waits until all code in the event has run before processing state updates
  // number is 1
  
       
  ```
  
  ```jsx
  import { useState } from 'react';
  
  export default function Counter() {
    const [number, setNumber] = useState(0);
  
    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(n => n + 1);
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }}>+3</button>
      </>
    )
  }
  // next state based on the previous one in the queue
  // number is 3
  ```

- You can put objects and arrays into state. In React, state is considered read-only, so **you should *replace* it rather than *mutate* your existing objects**.
  
  ```jsx
  // ✅ Replace state with a new object
  setForm({
    ...form,
    firstName: 'Taylor'
  });
  ```

- Avoiding recreating the initial state 
  
  ```jsx
  function TodoList() {
    // Although the result of createInitialTodos() is only used for the initial render, 
    // you’re still calling this function on every render.
    const [todos, setTodos] = useState(createInitialTodos());
    // pass it as an initializer function to useState
    const [todos, setTodos] = useState(createInitialTodos);
    // ...
  ```

- Resetting state with a key
  
  ```jsx
  import { useState } from 'react';
  
  // You can reset a component’s state by passing a different key to a component.export default function App() {
    const [version, setVersion] = useState(0);
  
    function handleReset() {
      setVersion(version + 1);
    }
  
    return (
      <>
        <button onClick={handleReset}>Reset</button>
        <Form key={version} />
        <p>{version}</p>
      </>
    );
  }
  // When the key changes
  // React re-creates the Form component (and all of its children) from scratch
  // so its state gets reset.
  
  function Form() {
    const [name, setName] = useState('Taylor');
  
    return (
      <>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <p>Hello, {name}.</p>
      </>
    );
  }
  
  ```

---

## useEffect

> `useEffect` is a React Hook that lets you synchronize a component with an external system.

### Reference

```jsx
useEffect(setup, dependencies?)
```

- setup: The function with your Effect's logic. 
  
  - Your setup code runs when your component is added to the page *(mounts)*
  
  - After every re-render of your component where the dependencies have changed
    
    - First, your cleanup code runs with the old props and state.
    
    - Then, your setup code runs with the new props and state.
  
  - Your cleanup code runs one final time after your component is removed from the page *(unmounts).*

- dependencies: all reactive values referenced inside of the `setup` code(props, state, variables and functions declared directly inside your component body)
  
  - If you omit this argument, your Effect will re-run after every re-render of the component.

- Effects **only run on the client.** They don’t run during server rendering.

### Usage

- Connection to an external system, Controlling a non-React widget
  
  - A timer managed with `setInterval()` and `clearInterval()`
  
  - An event subscription using `window.addEventListener()` and `window.removeEventListener()`
  
  - A third-party animation library with an API like `animation.start()` and `animation.reset()`.

- Wrapping Effects in custom Hooks
  
  ```jsx
  function useChatRoom({ serverUrl, roomId }) {
    useEffect(() => {
      const options = {
        serverUrl: serverUrl,
        roomId: roomId
      };
      const connection = createConnection(options);
      connection.connect();
      return () => connection.disconnect();
    }, [roomId, serverUrl]);
  }
  
  function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  
    useChatRoom({
      roomId: roomId,
      serverUrl: serverUrl
    });
    // ...
  ```

- Fetching data with Effects
  
  ```jsx
  import { useState, useEffect } from 'react';
  import { fetchBio } from './api.js';
  
  export default function Page() {
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);
  
    useEffect(() => {
      let ignore = false;
      setBio(null);
      fetchBio(person).then(result => {
        if (!ignore) {
          setBio(result);
        }
      });
      // clean up code to prevent race conditions
      return () => {
        ignore = true;
      };
    }, [person]);
  
    // ...
  ```

- Specifying reactive dependencies
  
  1. Passing a dependency array => Effect runs **after the initial render *and* after re-renders with changed dependencies.**
  
  2. Passing an empty dependency array => it will only run **after the initial render.**
  
  3. Passing no dependency array at all => Effect runs **after every single render (and re-render)** of your component.

---

## useRef

> `useRef` is a React Hook that lets you reference a value that’s not needed for rendering.

### Reference

```jsx
const ref = useRef(initialValue)
```

- initialValue: The value you want the ref object’s `current` property to be initially.

- Returns: `useRef` returns an object with a single current property:

- When you change the `ref.current` property, React does not re-render your component

### Usage

- Referencing a value with a ref
  
  - You can **store information** between re-renders (unlike regular variables, which reset on every render).
  
  - Changing it **does not trigger a re-render** (unlike state variables, which trigger a re-render).
  
  - The **information is local** to each copy of your component (unlike the variables outside, which are shared).

- Manipulating the DOM with a ref
  
  ```jsx
  import { useRef } from 'react';
  
  function MyComponent() {
    const inputRef = useRef(null);
    // pass your ref object as the ref attribute
    // to the JSX of the DOM node you want to manipulate:
    return <input ref={inputRef} />;
  };
  ```
  
  - React will set the `current` property of your ref object to that DOM node
  
  - you can access the `<input>`'s  DOM node
  
  - React will set the `current` property back to `null` when the node is removed from the screen.

---

## useCallback

> `useCallback` is a React Hook that lets you cache a function definition between re-renders.

### Reference

```jsx
const cachedFn = useCallback(fn, dependencies)
```

- fn: you want to cache between re-renders.
  
  - On the initial render, the returned function you’ll get from `useCallback` will be the function you passed.
  
  - If none of the dependencies have changed `useCallback` will return the same function as before. Otherwise, `useCallback` will return the function you passed on *this* render.

- dependencies: every value within the component that's used inside the function

- returns: `fn` function you have passed

### Usage

- Skipping re-rendering of components
  
  - **By wrapping `a function` in `useCallback`, you ensure that it’s the *same* function between the re-renders** (until dependencies change).

- Optimizing a custom Hook
  
  ```jsx
  // If you’re writing a custom Hook
  // it’s recommended to wrap any functions that it returns into useCallback:
  function useRouter() {
    const { dispatch } = useContext(RouterStateContext);
  
    const navigate = useCallback((url) => {
      dispatch({ type: 'navigate', url });
    }, [dispatch]);
  
    const goBack = useCallback(() => {
      dispatch({ type: 'back' });
    }, [dispatch]);
  
    return {
      navigate,
      goBack,
    };
  }
  ```

---

## useMemo

> `useMemo` is a React Hook that lets you cache the result of a calculation between re-renders.

### Reference

```jsx
const cachedValue = useMemo(calculateValue, dependencies)
```

- calculateValue: The function calculating the value that you want to cache. It should be pure, <u>should take no arguments</u>, and should return a value of any type.

- dependencies: every relative value within the component that is referenced inside of the `calculateValue` code.

- returns: the result of calling `calculateValue`
  
  - On the initial render, the value you’ll get from `useMemo` will be the result of calling your calculation.
  
  - If none of the dependencies have changed, `useMemo` will return the value you already calculated before
  
  - Otherwise, React will re-run your calculation and return the new value.

### Usage

- Skipping expensive recalculations and Skipping re-rendering of components
  
  ```jsx
  export default function TodoList({ todos, tab, theme }) {
    // Tell React to cache your calculation between re-renders...
    const visibleTodos = useMemo(
      () => filterTodos(todos, tab),
      [todos, tab] // ...so as long as these dependencies don't change...
    );
    return (
      <div className={theme}>
        {/* ...List will receive the same props and can skip re-rendering */}
        <List items={visibleTodos} />
      </div>
    );
  }
  ```

- Memoizing a dependency of another Hook 
  
  ```jsx
  function Dropdown({ allItems, text }) {
    const visibleItems = useMemo(() => {
      const searchOptions = { matchMode: 'whole-word', text };
      return searchItems(allItems, searchOptions);
    }, [allItems, text]); // ✅ Only changes when allItems or text changes
    // ...
  ```
  
  
