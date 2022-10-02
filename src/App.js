
import './App.scss';
import Header from './components/header';
import Navbar from './components/navbar/narbar_Testimonials';
import Banner from './components/banner';
import Content from './components/content';
import SimpleSlider from './components/sidebarProfile/sidebarProfileTestinonials';
import IndexsidebarClient from './components/sidebarProfile/sidebarProfileClient';
import Sidebarslider from './components/sidebarProfile/sidebarProfileClient/sidebarSlider'
import Sidebarfunfact from './components/sidebarProfile/sidebarProfileFunfact'
import Footer from'./components/footer'
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Banner/>
      <Content/>
      <SimpleSlider></SimpleSlider>
      <IndexsidebarClient/>
      <Sidebarslider></Sidebarslider>
      <Sidebarfunfact/>
      <Footer></Footer>
    </div>
  );
}

export default App;
