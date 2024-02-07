# Strict Mode

> `StrictMode` lets you find common bugs in your components early during development

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- re-render an extra time to find bugs caused by impure rendering

- re-run Effects an extra time to find bugs caused by missing Effect cleanup

- Be checked for usage of deprecated APIs

## Usage

1. Enabling Strict Mode for the entire app
   
   - only run in development, do not impact the production build 

2. Enabling Strict Mode for a part of the app 
   
   ```jsx
   import { StrictMode } from 'react';
   
   function App() {
     return (
       <>
         <Header />
         <StrictMode>
           <main>
             <Sidebar />
             <Content />
           </main>
         </StrictMode>
         <Footer />
       </>
     );
   }
   ```

3. Fixing bugs found by double rendering in development
   
   - React assumes that every component you write is a pure function.
   
   - To find impure code, Strict Mode calls some of your functions (only the ones that should be pure) **twice in development.** 
     
     - Component function body (only top-level logic, not including inside event handlers)
     
     - Functions that you pass to `useState`, `set functions`, `useMemo`, `useReducer` 

4. Fixing bugs found by re-running Effects in development 
   
   - Every Effect has some setup code and may have some cleanup code.
   
   - React calls cleanup and setup again if its dependencies changed since the last render.
   
   - Run **one extra setup+cleanup cycle in development for every Effect**
