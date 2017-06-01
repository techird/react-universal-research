import { MARK_FINISH, ADD_TODO } from "./todoConstants";

let nextId = +new Date();
export const todoReducer = (state = getInitialState(), action) => {
    let { todos } = state;

    switch (action.type) {
        case MARK_FINISH: {
            const [id, finished] = action.payload;
            const idx = todos.map(x => x.id).indexOf(id);
            if (idx > -1) {
                const todo = todos[idx];
                todos = [
                    ...todos.slice(0, idx),
                    { ...todo, finished },
                    ...todos.slice(idx + 1)
                ];
            }
            break;
        }
        case ADD_TODO: {
            const title = action.payload;
            todos = [...todos, { id: nextId++, title, finished: false }];
        }
    }

    return { todos };
};

function getInitialState() {
    return {
        todos: [{ id: "0", title: "体验 React Universal App", finished: false }]
    };
}