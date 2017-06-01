import * as React from "react";

export function TodoItem({ title, finished, onToggle }) {
    return (
        <p>
            <label>
                <input
                    type="checkbox"
                    checked={finished}
                    onChange={e => onToggle(e.target.checked)}
                />
                { finished ? <del>{title}</del> : title }
            </label>
        </p>
    );
}