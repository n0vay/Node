const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header type
  res.setHeader('Content-Type', 'text/html');
  res.write('<head><link rel = "stylesheet" href = "#"></head>');
  res.write('<p>hello, ninjas</p>');
  res.write('<p>hello again, ninjas</p>');
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("we are here for requests on poort 3000");
});
