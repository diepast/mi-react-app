import "./styles/App.css";
import {Home, HomeDOS} from "./components/home";

function App() {

  let autor = "Diego"

  return (
    <div className="App">
      <Home/>
      <HomeDOS autor = {autor}/>
      <Home/>
    </div>
  );
}

export default App;
