import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import * as todoActions from "./redux/todoActions";
import { TodoItem, TodoCreator } from "./components";

@connect(
    function mapStateToProps(state) {
        return {
            todos: state.todos
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(todoActions, dispatch)
        }
    }
)
export class TodoPage extends React.Component {
    render() {
        const { todos, actions } = this.props;
        return (
            <div>
                <Header>Todo 应用 Universal</Header>
                { todos.map(todo =>
                    <TodoItem 
                        key={todo.id}
                        title={todo.title}
                        finished={todo.finished}
                        onToggle={finished => actions.finish(todo.id, finished)}
                    />
                )}
                <TodoCreator onCreate={title => actions.add(title)} />
            </div>
        )
    }
}