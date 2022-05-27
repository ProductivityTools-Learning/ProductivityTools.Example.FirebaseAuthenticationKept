import './App.css';
import Login from './Session/login.js'
import { AuthProvider } from './Session/AuthContext'


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <p>dd</p>
        <Login />
      </div>
    </AuthProvider>
  );
}

export default App;
