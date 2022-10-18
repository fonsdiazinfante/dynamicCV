import ImgOne from "./components/ImgOne";
import ImgThree from "./components/ImgThree";
import ImgTwo from "./components/ImgTwo";
import TextBox from "./components/TextBox";
import Facts from "./components/Facts";

function App() {
  return (
    
    <div className="App">
      <head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
     <ImgOne />
     <TextBox />
     <ImgTwo />
     <Facts />
     <ImgThree />
    </div>
  );
}

export default App;
