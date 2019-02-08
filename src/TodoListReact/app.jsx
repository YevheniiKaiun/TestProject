import * as React from 'react';
import { render } from 'react-dom';
import { TodoApp} from "./components/TodoApp/TodoApp.jsx";

render(<TodoApp />, document.querySelector('#TodoAppReact'));