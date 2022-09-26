
import './App.scss';
import Header from './components/header';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Content from './components/content';
function App() {
  return (
    <div className="App">
     <Header />
     <Navbar/>
      <Banner/>
      <Content/>
    </div>
  );
}

export default App;
