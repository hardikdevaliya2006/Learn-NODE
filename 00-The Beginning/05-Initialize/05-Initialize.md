# **Initialize a Project**

- If you don’t want to answer questions and need a default file

```
> npm init -y
```

- This will Creates a simple package.json with default values.

```json
{
  "name": "my-first-app",
  "version": "1.0.0",
  "description": "My first Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Scott",
  "license": "ISC"
}
```

1. `"name": "my-first-app"`

- The name of your project/package.
- Example: "express", "react", "my-first-app"

2. `"version": "1.0.0"`

- Tells the current version of your app/package, Uses Semantic Versioning (SemVer): MAJOR.MINOR.PATCH
- Example: 1.0.0 → first release, 1.1.0 → added a feature, 1.1.1 → fixed a bug

3. `"description": "My first Node.js project"`

- A short explanation of your project. Useful when others see your project on npm or GitHub.

4. `"main": "index.js"`

- Entry point of your project → the file Node.js loads first.

- Example: In express, the main file is "index.js" which exports all express features.

5. `"scripts": { "start": "node index.js" }`

- Defines custom commands you can run with npm run `script-name`.

```
> npm start
```

6. `"author": "Hardik"`

- The project’s creator, Can also be written as object:

```js
"author": {
  "name": "Hardik Devaliya",
  "email": "hardik@example.com"
}
```

7. `"license": "ISC"`

- License type (defines how others can use your code). "ISC" = very permissive (anyone can use/modify with minimal restrictions).

## **Run index.js file**

Example Project Structure
```
my-first-app/
 ├── package.json
 └── index.js
```
index.js file content
```
console.log("Hello Node.js 🚀");
```

> Ways to Run `index.js`

1. Run Directly with Node: Open terminal inside your project folder and run
```
> node index.js
```

2. Run with npm start (from package.json) : Since your package.json has

```js
"scripts": {
  "start": "node index.js"
}
```