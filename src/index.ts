import { createServer } from "http";

const PORT = 3000;
const HOST = "localhost"; // 127.0.0.1, ::1

// Content Type eg
// 1. text/plain
// 2. text/html
// 3. application/json
const server = createServer();

// endpoints
// /users/1
// /categories/12/computers/12
// /projects
// /projects/1
// /projects/123/tasks
// /projects/123/tasks/12

// search params
// ?name=yui&age=19

// /projects/123/tasks/12?name=yui&age=19

type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const todos: Todo[] = [
  {
    id: "6e7b820f-82d8-45ac-89ba-1153766d0730",
    title: "My First Task",
    isCompleted: false
  }
];

server.on("request", (req, res) => {
  // GET request with endpoint /todos
  // req.method and req.url

  if (req.method === "GET" && req.url === "/todos") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todos));
  }

  if (req.method === "POST" && req.url === "/todos") {
    // receive data using data event
    req.on("data", (chunk) => {
      // convert uint8array to js object
      const data = JSON.parse(chunk.toString());

      // create new todo object with id
      const newTodo = {
        id: crypto.randomUUID(),
        ...data
      };

      // store the new todo
      todos.push(newTodo);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newTodo));
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`[server]: listening at http://${HOST}:${PORT}`);
});
