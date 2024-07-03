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

  // url
  // /todos/2a965e79-4f18-4670-b0b4-48aeb9602550
  if (req.method === "PUT" && req.url?.includes("/todos")) {
    // data event to receive the data
    req.on("data", (chunk: Buffer) => {
      // id from url
      const id = req.url!.split("/")[2];

      // check if the resource is existing
      const todoIndex = todos.findIndex((todo) => todo.id === id);

      if (todoIndex === -1) {
        // send 404
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: `Not found with todo id: ${id}` }));
        return;
      }

      // otherwise we are going to update the existing todo

      const data: Todo = JSON.parse(chunk.toString());

      todos.splice(todoIndex, 1, data);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`[server]: listening at http://${HOST}:${PORT}`);
});
