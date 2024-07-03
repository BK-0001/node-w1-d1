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
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end("Hello World");
});

server.listen(PORT, HOST, () => {
  console.log(`[server]: listening at http://${HOST}:${PORT}`);
});
