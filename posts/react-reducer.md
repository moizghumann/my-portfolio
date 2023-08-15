---
title: 'React Reducer Hook'
date: '2023-06-23'
---

## Typical Flow of Reduce hook

Typical flow when using **`useReducer`**:

- The **`useReducer`** hook is called with the reducer function and initial state.
    - You set up the **`useReducer`** hook by providing the reducer function and the initial state value.
    - The reducer function defines how state updates should be handled based on the provided actions.

```tsx
useReducer(reducer, 0)
```

- It returns an array with two elements: the current state **`value`** and the **`dispatch`** function.
    - The hook returns an array with two elements: the current state and the dispatch function.
    - You can destructure the array to access these values: **`[currentState, dispatch] = useReducer(reducer, initialState)`**.

```tsx
const [value, dispatch] = useReducer(reducer, 0)
```

- In the component, you can access the current state value and use it as needed.
    - The **`value`** variable holds the current state value.
    - You can use this value in your component to display or perform any logic based on the state.

```tsx
return (
    <div>
      Counter ({value})
		</div>
)
```

- When an action needs to be performed to update the state, you call the **`dispatch`** function and pass an action object as an argument.
    - When you want to update the state, you call the **`dispatch`** function and pass an action object.
    - The action object describes the type of state update you want to perform.
    - It can also include additional data necessary for the update.

```tsx
<button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: 'RESET' })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
```

- The **`dispatch`** function triggers the reducer function, which updates the state based on the action type and returns the new state.
    - The **`reducer`** function receives the current state and the action object as parameters.
    - It examines the action type and performs the necessary state update.
    - The reducer function must always return a new state value to maintain immutability.

```tsx
// Actions are plain JavaScript objects that describe the type of state update you want to perform.
interface Action {
    type: 'INCREMENT' | 'RESET';
}

// counterReducer is a reducer function that takes in the current state and an action and returns a new state. 
// It follows the signature (state, action) => newState. 
// The reducer function is responsible for updating the state based on the action type.
const reducer = (state: number, action: Action): number => {
    // Updating the state
    // always return a new state from the reducer function to maintain immutability.
    if (action.type === 'INCREMENT') return state + 1;
    if (action.type === 'RESET') return 0;
    return state;
}
```

- The new state is stored as the current state, and any components that depend on the state will be re-rendered with the updated value.
    - After the reducer function returns the new updated current state  **`value`** , React re-renders the component.
    - Any components that depend on the state will receive the updated value and re-render accordingly.

```tsx
const [**value**, dispatch] = useReducer(counterReducer, 0)
```

Here is the whole code for updating counter by managing state globally using useReducer.
```tsx
// Actions are plain JavaScript objects that describe the type of state update you want to perform.
interface Action {
    type: 'INCREMENT' | 'RESET';
}

// counterReducer is a reducer function that takes in the current state and an action and returns a new state. 
// It follows the signature (state, action) => newState. 
// The reducer function is responsible for updating the state based on the action type.
const counterReducer = (state: number, action: Action): number => {
    // Updating the state
    // always return a new state from the reducer function to maintain immutability.
    if (action.type === 'INCREMENT') return state + 1;
    if (action.type === 'RESET') return 0;
    return state;
}

export default counterReducer;
```

```tsx
import { useReducer, useState } from 'react';
import counterReducer from './reducers/counterReducer';

const Counter = () => {

  // const [value, setValue] = useState(0)

  // The first parameter of useReducer is a reducer function (counterReducer here) that takes in the current state and an action and returns a new state
  // The second parameter of useReducer is the initial state value (0 here). It represents the initial value of the state before any actions are dispatched
  const [value, dispatch] = useReducer(counterReducer, 0)

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: 'RESET' })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
```