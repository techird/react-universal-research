import React from "react";

export class TodoCreator extends React.Component {
    state = {
        editing: ""
    }

    render() {
        const { onCreate } = this.props;
        const { editing } = this.state;

        return (
            <p>
                <input
                    autoFocus
                    placeholder="添加代办事项"
                    value={editing}
                    onChange={e => this.setState({ editing: e.target.value })}
                    onKeyDown={e => {
                        if (e.keyCode == 13 && this.state.editing) {
                            onCreate(this.state.editing);
                            this.setState({ editing: "" });
                            e.preventDefault();
                        }
                    }}
                />
            </p>
        );
    }
}