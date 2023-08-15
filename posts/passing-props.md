---
title: 'Passing props from child to parent component'
date: '2023-07-23'
---

-  In React, data can be passed from a child component to a parent component by using a `callback function`
-  The parent component can pass a `function as a prop` to the child component, and the child component can then invoke that function with any data it wants to send back to the parent.

Let's go through the steps of how to pass data from a child to a parent component using this approach:

## Parent Component:

Define the callback function in the parent component and pass it as a prop to the child component.

```tsx
// ParentComponent.tsx 
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
  // State to hold the data received from the child component
  const [dataFromChild, setDataFromChild] = useState<string>("");

  // Callback function to receive data from the child component
  const handleDataFromChild = (data: string) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h1>Data from Child: {dataFromChild}</h1>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;

```

## Child Component:

In the child component, we receive the callback function as a prop and use it to send data back to the parent component.

```tsx
// ChildComponent.tsx
import React from "react";

interface Props {
  sendDataToParent: (data: string) => void; // The callback function type
}

const ChildComponent: React.FC<Props> = ({ sendDataToParent }) => {
  // Function to send data to the parent component
  const sendData = () => {
    const dataToSend = "Hello from the Child!";
    sendDataToParent(dataToSend); // Call the callback function with data
  };

  return (
    <div>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;

```

## Explanation:

-   In the parent component, we define a callback function `handleDataFromChild` that takes a `data` parameter. This function will be responsible for updating the state `dataFromChild` with the data received from the child component.
-   We pass this `handleDataFromChild` function as a prop called `sendDataToParent` to the child component.
-   In the child component, we receive the `sendDataToParent` prop and store it in the `Props` interface. This prop is a function that takes a `data` parameter and returns `void`.
-   When the button in the child component is clicked, the `sendData` function is invoked. Inside this function, we create a variable `dataToSend` with the data we want to send back to the parent.
-   We then call the `sendDataToParent` callback function, passing `dataToSend` as an argument. This sends the data back to the parent component.
-   The `handleDataFromChild` function in the parent component is triggered with the data from the child, and it updates the `dataFromChild` state with the received data.
-   Finally, the updated `dataFromChild` is displayed in the parent component.

This is how you can pass data from a child component to a parent component in React using callback functions. By understanding this concept, you can efficiently manage data flow between components and build more complex applications. *Remember that props are read-only, and to pass data from child to parent, you'll need to pass functions as props and call them with the data you want to send back.*