import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import  {countryRoutes}  from "./src/routers/country.routes";
import  {userRoutes}  from "./src/routers/user.routes";

export let server: Server;

export const init = async function (): Promise<any> {
  server = Hapi.server({
    port: process.env.PORT || 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  });

  server.route(countryRoutes);
  server.route(userRoutes);

  return server;
};

export const start = async (): Promise<void> => {
  console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
  return server.start();
};

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection");
  console.error(err);
  process.exit(1);
});

init().then(() => start());
