console.log("Server running at localhost:3000");

Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response(Bun.file("./index.html"));
    if (url.pathname === "/messages/logo.js")
      return new Response(Bun.file("./messages/logo.js"), {
        headers: {
          "Content-Type": "application/javascript",
          "Cache-Control": "max-age=31536000",
        },
      });
    if (url.pathname === "/messages/hiring.js")
      return new Response(Bun.file("./messages/hiring.js"), {
        headers: {
          "Content-Type": "application/javascript",
          "Cache-Control": "max-age=31536000",
        },
      });

    if (url.pathname === "/robots.txt")
      return new Response(Bun.file("./robots.txt"));
    return new Response("404!");
  },
});
