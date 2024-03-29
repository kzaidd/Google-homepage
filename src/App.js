import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Gmail from "./pages/Gmail";
import Images from "./pages/Images";
import Store from "./pages/Store";
import {Switch, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/store" exact component={Store} />
        <Route path="/gmail" exact component={Gmail} />
        <Route path="/images" exact component={Images} />
      </Switch>
    </>
  )}


export default App;
