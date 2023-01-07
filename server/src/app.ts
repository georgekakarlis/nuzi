import express from "express";
import routes from "./api/v1/routes/index";
import configure from "./middleware/configure";
import {createServer} from "http";
import {ExpressPeerServer} from "peer";
import {v4 as uuid} from "uuid";
import * as url from "url";
import {Server} from "socket.io";

//main
const app = express();
const server = createServer(app);
const io = new Server(server, {
  /* options */
});
const PORT = process.env.PORT || 3000;
//peer server
const peerServer = ExpressPeerServer(server, {
  path: "/peerjs",
});
app.use("/peerjs", peerServer);

//routes for websocket
app.get("/join", (req, res) => {
  res.redirect(
    // @ts-ignore
    url.format({
      pathname: `/join/${uuid()}`,
      query: req.query,
    })
  );
});

app.get("/joinold", (req, res) => {
  res.redirect(
    url.format({
      // @ts-ignore
      pathname: req.query.meeting_id,
      query: req.query,
    })
  );
});

app.get("/join/:rooms", (req, res) => {
  res.render("room", {roomid: req.params.rooms, Myname: req.query.name});
});

//socket.io
io.on("connection", (socket: any) => {
  socket.on("join-room", (roomId: any, id: any, myname: any) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", id, myname);

    socket.on("tellName", (myname: any) => {
      console.log(myname);
      socket.to(roomId).broadcast.emit("AddName", myname);
    });

    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", id);
    });
  });
});

//middlewares
configure(app);
app.set("view engine", "ejs");
//routes
app.use("/", routes);

//app listen 👂
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Nuzi is running at http://localhost:${PORT} 👂`);
});
