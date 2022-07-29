const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
const db = [
  {
    name: "Hari Bahadur",
    serviceProviderId: "35",
  },
  {
    name: "Raju Dangol",
    serviceProviderId: "11",
  },
];
io.on("connection", (socket) => {
  console.log("Socket server is Active");
  socket.onAny((event, data) => {
    /**
     * data: {
     * userId: <userId>,
     * serviceId: <serviceId>
     * }
     */
    // console.log(`Event name: ${event}`);
    // console.log(`Args: ${args}`);
    const serviceProviderId = event;
    console.log(serviceProviderId, data);
    io.emit(serviceProviderId, data);
  });
});

server.listen(3000, () => {
  console.log("Server is listening at port 3000...");
});
