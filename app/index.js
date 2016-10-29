/*
  This is the entry point for the front end. Do not rename or move this file without changing the "entry" property inside of webpack.config.js
*/
const React = require('react');
const ReactDOM = require('react-dom');

// React router goodies
import { Router, Route, browserHistory, IndexRoute } from 'react-router'; //All pieces of the router object

const App = require('./components/App');
const EditPage = require('./components/EditPage');
const UserProfile = require('./components/UserProfile');
const Book = require('./components/Book');
const AuthorDeets = require('./components/AuthorDeets');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path="users/:userid" component={UserProfile}/>
      <Route path="users/:userid/edit" component={EditPage}/>
      <Route path="books/:bookid" component={Book} />
      <Route path="authors/:authorname" component={AuthorDeets} />
    </Route>
  </Router>,
  document.getElementById('app')
);

