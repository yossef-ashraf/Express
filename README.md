### Project file structure
```
application/
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── index.js
└── /routes
├── /app
│ ├── /controllers
│ └── /models
| └── /validations
| └── /middlewares
......

```

### Run project steps

1. **Building and running the image**:
 From the project directory (`node-app`), subscribe to the following:
 ``` bash
 Docker composes --build
 ```

2. **Access the application**:
 After it boots temporarily, you can access the Node.js application via versioning at `http://localhost:3000`.

3. **Access to Mongo Express**:
 You can access the Mongo Express interface via the link `http://localhost:8081`.

### Additional notes
- **Rebuild Content**: If you get new items from project files, you can rebuild the items using:
 ``` bash
 Docker build
 ```

- **Pause**: To pause, you can use:
 ``` bash
 Docker composes below
 ```

- **Accessing the Start**: To access and play the start, you can use:
 ``` bash
 docker-compose exec sh application
 ```