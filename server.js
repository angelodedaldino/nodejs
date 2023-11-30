const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");
  let path = "./";
  switch (request.url) {
    case "/":
      path+="index.html";
      request.statusCode = 200;
      break;
    case "/about":
      path+="about.html";  
      request.statusCode = 200;
      break;
    default:
      // path+="404.html";
      response.setHeader("Location","./");
      request.statusCode = 301;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      response.end();
    } else {
      response.end(data);
    }
  });
});

server.listen(PORT, () => console.log(`server is running on ${PORT}`));
