const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req.url);

  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>This is node js tutorial</h1> <p> Learning about http </p>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end(
      "<h1>This is ABOUT node js tutorial</h1> <p> Learning about http </p>"
    );
  } else {
    // res.harry();
    res.statusCode = 400;
    res.end("<h1>Page was not found</h1> <p> Not found </p>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
