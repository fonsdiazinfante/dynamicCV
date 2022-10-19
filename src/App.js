import ParallaxImg from "./components/ParallaxImg";
import Intro from "./components/Introduction";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Alfonso from './img/ISC.jpeg';
import code from './img/code.jpeg';
import bg_computer from './img/bg_computer.jpeg';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
     <ParallaxImg img={Alfonso} text={"Alfonso Díaz-Infante Camarena"}/>
     <Intro />
     <ParallaxImg img={bg_computer} text={"Skills"}/>
     <Skills />
     <ParallaxImg img={code} text={"Education"}/>
     <Education />
    </div>
  );
}

export default App;
