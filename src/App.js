import "./App.css";
import Divider from "@material-ui/core/Divider";
import NavBar from "./Containers/NavBar/NavBar";
import ReadPage from "./Containers/ReadPage/ReadPage";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Divider></Divider>
      <ReadPage></ReadPage>
    </div>
  );
}

export default App;
