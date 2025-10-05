import './App.css';
import Provider from './components/Provider';
import RoutesProvider from './pages/user/routesProvider';
import "./services/auth";
function App() {
  return (
    <Provider>
      <RoutesProvider />
    </Provider>
  );
}

export default App;
