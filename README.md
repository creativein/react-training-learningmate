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

**Class Components** must have a render method that returns a React element by extending from **React.Component.**

## Hooks
- Introduced in React 16.8
- useState, useEffect, useMemo, , useLayoutEffect

### Key points:
    - useRef is essential for storing previous values of props and state or react element.
    - useEffect is the workhorse of functional lifecycles.
    - useMemo is used for performance optimization.
    - useLayoutEffect is used to get dom information before the browser paints.
    - useState is used to manage state.



**What is TanStack Query?**

* Formerly known as React Query.
* A powerful asynchronous data fetching, caching, synchronization, and updating library for React.
* Simplifies fetching, caching, and updating asynchronous data in your React applications.
* Provides hooks to easily handle server state in your components.



**Key Features:**

* **Caching:** Automatic caching of fetched data for improved performance.
* **Deduplication:** Deduplicates identical requests to prevent unnecessary network calls.
* **Background Updates:** Keeps data fresh by fetching updates in the background.
* **Optimistic Updates:** Provides a smooth user experience by immediately updating the UI before receiving server confirmation.
* **Pagination and Infinite Loading:** Built-in support for handling paginated and infinite loading data.
* **Prefetching:** Prefetch data before it's needed for faster loading times.
* **DevTools:** Powerful devtools for inspecting and debugging queries.


**Basic `useQuery` Hook:**

```javascript
import { useQuery } from '@tanstack/react-query';

function MyComponent() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('/api/todos').then(res => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map(todo => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}
```



queryKey: A unique key for the query, used for caching and refetching.
queryFn: An asynchronous function that fetches the data.
Returns isLoading, isError, data, and error states.


### Caching and Refetching:

- TanStack Query automatically caches fetched data.
- Data is cached based on the queryKey.
- You can configure cache time and stale time.
- refetch() function allows manual refetching.
- refetchInterval allows refetching at set intervals.
- staleTime determines how long data is considered fresh.


### StaleTime, GC - QueryOptions

```javascript
import { useQuery } from '@tanstack/react-query';

// Example: User Profile with Caching and Garbage Collection

function UserProfile({ userId }) {
  const { isLoading, isError, data: user, error } = useQuery({
    queryKey: ['user', userId], // Unique key for this user's data
    queryFn: async () => {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return response.json();
    },
    staleTime: 60 * 1000, // 1 minute: Data is considered fresh for 1 minute
    cacheTime: 5 * 60 * 1000, // 5 minutes: Data remains in cache for 5 minutes after last use.
    gcTime: 10 * 60 * 1000, // 10 minutes: Data is garbage collected after 10 minutes of inactivity.
  });

  if (isLoading) return <div>Loading user profile...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  if (!user) return <div>User not found.</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
      {/* ... other user details ... */}
    </div>
  );
}

// How these options work in real scenarios:

// 1. Caching (staleTime & cacheTime):

//    * Imagine a social media profile. Users frequently view their own profiles and those of their friends.
//    * `staleTime: 60 * 1000` means if a user views a profile, and then views it again within a minute, the data is pulled directly from the cache, avoiding an unnecessary network request. This enhances performance and reduces server load.
//    * `cacheTime: 5 * 60 * 1000` ensures that even if the user navigates away from the profile, the data remains in the cache for 5 minutes. If they return within that time, the data is still readily available.
//    * If the user views the profile after 1 minute, the data is refetched in background, and the old data is shown until the new data arrives, giving a better user experience.

// 2. Garbage Collection (gcTime):

//    * In a large application with many user profiles, keeping all profile data in memory indefinitely would be inefficient.
//    * `gcTime: 10 * 60 * 1000` means that if a user profile hasn't been viewed for 10 minutes, TanStack Query will automatically remove it from the cache. This frees up memory and prevents the application from becoming bloated.
//    * This is especially useful in scenarios where users might view a large number of profiles during a session, but only a few are accessed repeatedly.

// Practical benefits:

//    * **Reduced server load:** Caching minimizes redundant requests, reducing the load on your backend servers.
//    * **Improved performance:** Data is served from the cache, resulting in faster load times and a smoother user experience.
//    * **Memory management:** Garbage collection prevents the application from consuming excessive memory, especially in long-running sessions.
//    * **Offline Support (to some degree):** While not full offline support, cache allows the user to see previously viewed data, even if the connection is momentarily lost.
//    * **Better user experience:** The user does not see constant loading indicators, and the application feels more responsive.

// Key takeaways:

//    * `staleTime` determines when data is considered "fresh" and when it should be refetched.
//    * `cacheTime` controls how long data remains in the cache after it's no longer actively being used.
//    * `gcTime` governs when inactive data is removed from the cache to free up memory.
```

### Questions 

**staleTime**- Does it mean that network call will happen after statTime set in query ?

```
When discussing staleTime in TanStack Query, it's crucial to understand that it dictates when data is considered "outdated," not necessarily when a network call will happen. Here's a breakdown:

Stale Data:

`staleTime` defines the duration for which data in the cache is considered "fresh." After this time elapses, the data is marked as "stale."

"Stale" does not mean the data is immediately refetched. It means that TanStack Query will consider fetching new data when certain events occur.
When Refetching Occurs:

TanStack Query will typically refetch stale data in the background when:
- A new component mounts that uses the query.
- The browser window regains focus.
- The network connection is re-established.
- If a refetchInterval is set, it will refetch at those intervals.
  
So, just because staleTime has passed, a network request won't happen unless one of those triggers occurs.
```

Reference - https://www.youtube.com/watch?v=mPaCnwpFvZY


Other Use Cases

- useSuspenseQuery
- useQueries


### RTK Query  (Redux Toolkit Query) Overview

- **Part of Redux Toolkit**: RTK Query is included in the Redux Toolkit package, providing an integrated solution for data fetching within Redux applications.

- **Purpose**: It aims to simplify data fetching, caching, and updating in Redux, reducing boilerplate code and improving maintainability.

- **Declarative API**: Uses a declarative approach to define API endpoints and data fetching logic.

- **Automatic Caching**: Handles caching, invalidation, and background updates automatically.

- **Redux Integration**: Leverages Redux for state management, making it well-suited for applications that already use Redux.


### Key Differences from TanStack Query

- **Redux Integration**: RTK Query is tightly integrated with Redux, making it a natural fit for Redux-based applications. 
**TanStack Query** is framework agnostic, but often used with react.

- **State Management**: RTK Query relies on Redux for state management, while TanStack Query manages its own internal cache.

- **API Definition**: RTK Query uses `createApi` to define API endpoints, while TanStack Query uses `useQuery` and `useMutation` hooks.

- **Boilerplate**: RTK Query can reduce Redux-related boilerplate by handling data fetching and caching within the Redux store.

- **Tag invalidation**: RTK Query uses tag invalidation, which is a very powerful way to manage cache invalidation.

### When to Use RTK Query

- When you're already using Redux in your application.
- When you want a tightly integrated solution for data fetching and state management.
- When you want to reduce Redux-related boilerplate.
- When you want to use the tag invalidation system.

### When to Use TanStack Query

- When you want a framework-agnostic data fetching library.
- When you prefer a more flexible and customizable solution.
- When you don't need Redux for state management.
- When you want very fine grained control over the caching.