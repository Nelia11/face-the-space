import Header from './components/navBar/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex justify-center bg-blue-800 h-screen">
      <Header />
      <Home />
    </div>
  );
}

export default App;
