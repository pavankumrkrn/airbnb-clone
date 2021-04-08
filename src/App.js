import './App.css';
import { Footer } from './Components/Footer/footer';
import { Header } from './Components/Header/header';
import { Home } from './Components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SearchPage } from './Components/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/home' exact={true} component={Home} />
          <Route path='/search' exact={true} component={SearchPage} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
