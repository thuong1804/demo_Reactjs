
import './App.scss';
import Header from './components/header';
import Navbar from './components/navbar/navbarAboutMySelf';
import Banner from './components/banner';
import Content from './components/content';
import SimpleSlider from './components/sidebarprofile/sidebarselfgoals';
import IndexsidebarClient from './components/sidebarprofile/sidebarprofile_Client';
import Sidebarslider from './components/sidebarprofile/sidebarprofile_Client/sidebarslider'
import SidebarEvaluateYourself from './components/sidebarprofile/sidebarprofileEvaluateYourself'
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
      <SidebarEvaluateYourself/>
      <Footer></Footer>
    </div>
  );
}

export default App;
