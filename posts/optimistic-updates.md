---
title: 'Implementing Optimistic Updates in Mutations with React Query v4'
date: '2023-07-23'
---

Optimistic updates are a way to update your app's state optimistically before the actual mutation request is completed. It helps provide a smooth user experience by instantly reflecting the expected changes on the UI. However, there's a possibility that the mutation request may fail for various reasons.

## **onMutate()** implements the Optimistic Update

Within the **`onMutate`** function, the following steps are performed for optimistic updates

1. Outgoing refetches are canceled to prevent them from overwriting the optimistic update.
2. The previous value of the 'todos' query is captured using **`getQueryData`** (allows you to modify the cache directly without updating the server state).
3. The 'todos' query data is optimistically updated by adding the **`newTodo`** to the existing data using **`setQueryData` ,** thus updating the UI with newTodo.
4. A context object is returned, containing the snapshotted value of the previous 'todos' data.

```tsx
// onMutate is 
onMutate: async (newTodo) => {
  // Cancel any outgoing refetches
  // (so they don't overwrite our optimistic update)
  await queryClient.cancelQueries({ queryKey: ['todos'] })

  // Snapshot the previous value
  const previousTodos = queryClient.getQueryData(['todos'])

  // Optimistically update to the new value, updating UI
  queryClient.setQueryData(['todos'], 
(oldTodos) => [newTodo, ...(oldTodos || [])])

  // Return a context object with the snapshotted value
	// later can be accessed as context.previousTodos
  return { previousTodos }
},
```

## **Handling Failed Mutations with Rollback to update UI**

There are situations where refetching may not work correctly. For example, the mutation error could be due to a server issue that prevents the data from being fetched correctly. In such cases, you can choose to rollback your optimistic updates. Rolling back means undoing the optimistic changes and returning the UI to its previous state before the failed mutation.

```tsx
	// If the mutation fails,
  // use the context returned from onMutate to roll back
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(['todos'], context.previousTodos)
  },
```

## Handling Failed Mutations with Refetching

The `onSettled` callback is used to handle the result of a mutation, regardless of success or failure. 

In this case, when a mutation fails, the `onSettled` callback is triggered. It calls the `queryClient.invalidateQueries` function with the `queryKey` parameter set to `['todos']`. 

This invalidates the 'todos' query, indicating that its data is no longer up to date and is stale.

By doing this, React Query will automatically refetch the data for the 'todos' query, ensuring that the UI displays the latest and accurate information. 

In summary, `onSettled` with `queryClient.invalidateQueries` helps handle failed mutations by triggering a refetch of the affected query, updating the UI accordingly.

```tsx
// Handling failed mutation -> refetching optimistic queries  
// Always refetch after error or success:
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
```

Rolling back your updates is a way to handle scenarios where refetching is not a viable solution. It ensures that your UI remains consistent with the actual server state, even if the mutation fails. By rolling back, you prevent displaying incorrect or inconsistent data to the user.

## Conclusion

Overall, optimistic updates provide a way to make your app feel responsive and provide immediate feedback to the user. However, when mutations fail, you should handle them appropriately by either refetching the data or rolling back the optimistic updates, depending on the situation.