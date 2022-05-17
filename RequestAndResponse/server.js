const http = require("http");
const fs = require("fs");
const { isAbsolute } = require("path");

// whnever we made change we have to refresh
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //   res.setHeader("Content-Type", "text/plain");
  //   res.write("plain text type");
  //   res.end();

  //   setting content header type check this is text/html
  res.setHeader("Content-Type", "text/html");
  let path = "./RequestAndResponse//views/";

  if (req.url == "/") {
    path += "index.html";
    res.statusCode = 200;
  } else if (req.url == "/about") {
    path += "about.html";
    res.statusCode = 200;
  } else if (req.url == "/about-me") {
    // example of redirects
    res.statusCode = 301;
    res.setHeader("Location", "/about");
    res.end();
  } else {
    path += "404.html";
    res.statusCode = 404;
  }
  //   res.write("<h1>Mohit Rana</h1>");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      //   res.end();
      // instead of above two method we can use
      res.end(data);
    }
  });
  //   res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
