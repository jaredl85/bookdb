import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Book from './SingleBook.js';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='books/:id' children={<Book />}/>
    </Switch>
  );
}

export default App;
