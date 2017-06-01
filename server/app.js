import * as React from "react";
import express from "express";
import pages from "./middlewares/pages";

const app = express();
app.use(pages);

const port = 9996;
app.listen(port);
console.log(`Listening at http://127.0.0.1:${port}`);