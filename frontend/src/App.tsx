import './App.css';
import Provider from './components/Provider';
import RoutesProvider from './pages/user/routesProvider';
function App() {
  return (
    <Provider>
      <RoutesProvider />
    </Provider>
  );
}

export default App;
