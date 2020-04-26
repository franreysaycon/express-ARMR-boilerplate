import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import useragent from "express-useragent";
import authRouter from "./routes/auth";
import config from "./config";
import connectDb from "./lib/connect-db";
import errorMiddleware from "./middlewares/error";

const server = express();

server.use(bodyParser.json());
server.use(useragent.express());
server.use(cookieParser());
server.use("/", authRouter);
server.use(errorMiddleware);

const startServer = async () => {
  await connectDb();
  server.listen(config.PORT);
};

startServer();
