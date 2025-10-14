# **nodeMone Install**

- `nodemon` automatically restarts your Node.js app when files change — `install` it globally (npm i -g nodemon) or per-project as a dev dependency (npm i -D nodemon) and run nodemon yourFile.js or add a "dev" script in package.json.

> ## Install globally (available system-wide)

```
> npm install -g nodemon
```

> ## Install locally (available system-wide)

```
> npm init -y        # if you don't have package.json yet
> npm install --save-dev nodemon
```

- Then add an npm script in `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```
Run
```
> npm run dev
```