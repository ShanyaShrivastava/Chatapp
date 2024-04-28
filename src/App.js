import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Chatpage from './pages/Chatpage';

function App() {
  return (
    <div className="App">
      <Route path="/"component={Home} exact/>
      <Route path="/chats"component={Chatpage}/>
    </div>
  );
}

export default App;
