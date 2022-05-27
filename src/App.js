import './App.css';
import Login from './Session/login.js'
import Logout from './Session/logout.js'
import { AuthProvider } from './Session/AuthContext'
import Home from './Home.js'


function App() {


  return (
    <AuthProvider>
      <div className="App">
    
        <Home></Home>
        <Login />
        <Logout/>
      </div>
    </AuthProvider>
  );
}

export default App;
