import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex justify-center bg-blue-800 h-screen w-full">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
