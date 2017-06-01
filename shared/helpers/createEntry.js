import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

export default function createEntry(Component, reducer) {
    const entry = preloadState => {
        const store = createStore(reducer, preloadState);
        return (
            <Provider store={store}>
                <Component />
            </Provider>
        );
    };
    if (typeof window == 'object') {
        window.getEntryComponent = entry;
    }
    return entry;
}