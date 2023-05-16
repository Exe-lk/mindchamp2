import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import RouterConfig from "./router/router.config";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <DndProvider backend={HTML5Backend}>
                    <BrowserRouter>
                        <RouterConfig/>
                    </BrowserRouter>
                </DndProvider>
            </Provider>
        </>
    );
}

export default App;
