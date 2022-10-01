
import './App.scss';
import Header from './components/header';
import Navbar from './components/navbar/narbar_Testimonials';
import Banner from './components/banner';
import Content from './components/content';
import SimpleSlider from './components/sidebarprofile/sidebarprofile_Testinonials';
import IndexsidebarClient from './components/sidebarprofile/sidebarprofile_Client';
import Sidebarslider from './components/sidebarprofile/sidebarprofile_Client/sidebarslider'
import Sidebarfunfact from './components/sidebarprofile/sidebarprofile_Funfact'
import Footer from'./components/footer'
function App() {
  return (
    <div className="App">
     <Header />
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
