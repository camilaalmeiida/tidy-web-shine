import express from "express";

const app = express();

app.get("*", (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>Inove Max Facilities</title>
      </head>
      <body>
        <div id="root">SSR funcionando na Vercel 🚀</div>
      </body>
    </html>
  `);
});

export default app;
