const fastify = require("fastify")({ logger: true });
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

fastify.register(require("@fastify/cors"));

fastify.get("/iden", async (req, reply) => {
  const response = await fetch(
    "https://emapa.fra1.cdn.digitaloceanspaces.com/statuses.json"
  );
  const data = await response.json();
  reply.send(data);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

////// Try with request
// const rp = require("request-promise");

// let data = await rp(
//   "https://emapa.fra1.cdn.digitaloceanspaces.com/statuses.json"
// );
// let rez = await data.json();
// reply.send(rez);

////////
/////
// request(
//   "https://emapa.fra1.cdn.digitaloceanspaces.com/statuses.json",
//   (err, response, body) => {
//     if (err) return reply.status(500).send({ message: "Error" });
//     return reply.send(body);
//   }
// );
//////

// const request = require("request");
// import fetch from "node-fetch";
