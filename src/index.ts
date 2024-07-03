import { createServer } from "http";

const PORT = 3000;
const HOST = "localhost"; // 127.0.0.1, ::1

const server = createServer();

server.listen(PORT, HOST, () => {
  console.log(`[server]: listening at http://${HOST}:${PORT}`);
});
