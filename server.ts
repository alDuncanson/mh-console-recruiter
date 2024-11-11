console.log("Server running at localhost:3000");

Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response(Bun.file("./index.html"));
    if (url.pathname === "/messages/logo.js")
      return new Response(Bun.file("./messages/logo.js"));
    return new Response("404!");
  },
});
