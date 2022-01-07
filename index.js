import http from "http";
// import helloworld from "./helloworld.js";
// import moment from "moment";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  const url = req.url;

  if (url === "/employee") {
    res.write("data employee");
  } else {
    res.write("data apa yang kamu perlukan?");
  }
  res.end();
});

const hostname = "localhost";
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server is running on port :  http://${hostname}:${port}`);
});
