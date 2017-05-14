import { h, render } from 'preact';
import App from './app';
// import 'todomvc-common';
// import 'todomvc-common/base.css';
// import 'todomvc-app-css/index.css';

localStorage.removeItem('preact-todos');

render(<App />, document.querySelector('.todoapp'));
