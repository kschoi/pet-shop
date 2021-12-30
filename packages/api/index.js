import express from "express";

export const config = {
  port: process.env.PORT || 3003,
};

const app = express();

app.listen(config.port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`> Ready on http://localhost:${config.port}`);
});
