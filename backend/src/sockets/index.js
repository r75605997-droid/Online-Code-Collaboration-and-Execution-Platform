/**
 * Socket.IO handler registry.
 * This is scaffolding only for this phase — real-time collaborative editing
 * (room joins, live code sync, cursors) will be implemented in a later phase.
 */
const initSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // Placeholder event — confirms the socket pipeline works end-to-end.
    socket.on("ping-server", () => {
      socket.emit("pong-client", { message: "pong", socketId: socket.id });
    });

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
};

module.exports = initSocket;
