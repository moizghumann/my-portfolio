---
title: 'React Context API'
date: '2023-07-11'
---

Imagine you have a special toy box at home, and you want to share some toys with your friends who are visiting. Here's how React Context works using this analogy:

## Step 1: Creating the context

- You create a special toy box, which is like creating a "magic sharing box". This box will hold the toys that you want to share with your friends.
    - We create the context using the **`createContext`** function from React. This creates a context object that holds the initial value of the theme.
    
    ```tsx
    // Step 1: Create the context
    import React, { createContext } from 'react';
    
    // Create a context object
    const ThemeContext = createContext();
    ```
    

## Step 2: Wrapping the components with the provider

- You put the toys that you want to share inside the magic sharing box. Then, you invite your friends over to play. But before they can play, you tell them to gather around the magic sharing box. This way, they know that the toys inside the box are the ones they can play with.
    - We wrap the components that need access to the theme with the **`ThemeContext.Provider`** component. In this case, we wrap the **`Header`** and **`Content`** components in the **`App`** component.
    - The **`value`** prop of the provider is set to the current theme value, which is **`'dark'`** in this example.
    
    ```tsx
    // Step 2: Provide the context
    const App = () => {
      const theme = 'dark';
    
      return (
        <ThemeContext.Provider value={theme}>
          <Header />
          <Content />
        </ThemeContext.Provider>
      );
    };
    ```
    

## Step 3: Accessing the context value

- Your friends are now gathered around the magic sharing box. Each friend can take a toy from the box and play with it. They know that the toys inside the box are the ones they can play with because they are close to the box.
    - In the **`Header`** and **`Content`** components, we use the **`useContext`** hook to access the context value. By passing the **`ThemeContext`** to **`useContext`**, we retrieve the current theme value.
    
    ```tsx
    // Step 3: Consume the context
    const Header = () => {
      // Access the context value
      const theme = useContext(ThemeContext);
    
      return <header style={{ background: theme }}>My App Header</header>;
    };
    
    const Content = () => {
      // Access the context value
      const theme = useContext(ThemeContext);
    
      return <div style={{ color: theme }}>Content of the app</div>;
    };
    ```
    

## Summary:

In the same way, in React, the components that need to share data are wrapped with a special component (the provider). The shared data is placed inside the provider, and the components that want to access this data use a special function (the useContext hook) to get the data from the provider.

So, the magic sharing box is like the context, the friends gathering around the box are like the components wrapped with the provider, and the friends taking toys from the box are like the components using the useContext hook to access the shared data.