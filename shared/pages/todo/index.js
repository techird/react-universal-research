import createEntry from "../../helpers/createEntry";
import { todoReducer } from "./redux/todoReducer";
import { TodoPage } from "./TodoPage";

export default createEntry(TodoPage, todoReducer);
