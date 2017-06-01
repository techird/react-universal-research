import { Router } from "express";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ServerHTML } from "../components/ServerHTML";
import getTodoEntryComponent from "../../shared/pages/todo";

const router = Router();

router.get('/todo', (req, res) => {
    const preloadState = {
        todos: [{ id: 1001, title: "搭建 Universal App 框架", finished: true }]
    };

    res.send(renderToStaticMarkup(
        <ServerHTML
            title="TODO Universal Example"
            component={getTodoEntryComponent(preloadState)}
            preloadState={preloadState}
            js="http://localhost:3000/static/todo.js"
        />
    ));
});

router.get('/', (req, res) => res.send('<a href="/todo">请跳到 /todo</a>'));

export default router;