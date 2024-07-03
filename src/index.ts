import { createServer } from "http";

const PORT = 3000;
const HOST = "localhost"; // 127.0.0.1, ::1

// Content Type eg
// 1. text/plain
// 2. text/html
// 3. application/json
const server = createServer();

server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end("Hello World");
});

server.listen(PORT, HOST, () => {
  console.log(`[server]: listening at http://${HOST}:${PORT}`);
});
