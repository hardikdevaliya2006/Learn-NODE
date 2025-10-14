# **Route**

> 🧭 What is a Route?

- A Route is a path or URL that defines how an application responds to a client request. In web development, a route decides which code or component should be executed when a user visits a specific URL.

> 🔢 Types of Routes in Node.js (Express.js)

1. Static Routes : Used when the route path is fixed (doesn’t change).    
```
Ex. https://localhost:3000/about
```

2. Nested Routes : Nested Routes are routes defined inside another route, usually to reflect a hierarchy or relationship between resources.
```   
Ex. https://localhost:3000/dashboard → Dashboard Home
    https://localhost:3000/dashboard/profile → User Profile
    https://localhost:3000/dashboard/settings → Settings
```

3. Query Routes : Query routes use query strings in the URL to pass data.

```
Ex. http://localhost:3000/search?term=shoes&category=men
```

4. Dynamic Routes (Parameterized Routes) : Used when part of the URL is variable (like user ID, product ID).

```
Ex. http://localhost:3000/user/10 → “User ID: 10”
    http://localhost:3000/user/45 → “User ID: 45”
```