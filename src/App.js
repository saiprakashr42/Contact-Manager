import Header from '../src/Components/layout/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from '../src/context';
import Contacts from '../src/Components/contacts/Contacts';
import AddContact from './Components/contacts/AddContact';
import About from '../src/Components/pages/About';
import NotFound from './Components/pages/NotFound';
import EditContact from './Components/contacts/EditContact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path='/contact/add' component={AddContact} />
              <Route exact path='/contact/edit/:id' component={EditContact} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />

            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
