import "./App.css";
import { useEffect, useState } from "react";
import { apiKey } from "./api";
import Divider from "@material-ui/core/Divider";
import NavBar from "./Containers/NavBar/NavBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import BibleControlBar from "./Containers/BibleControlBar/BibleControlBar";

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://api.scripture.api.bible/v1/bibles/bba9f40183526463-01/books",
      {
        headers: {
          "api-key": apiKey,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.data.length > 0) {
          setBooks(result.data);
          setIsLoading(false);
        }
      });
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Divider></Divider>
      <div className="scripture-content">
        {!isLoading && books.length > 0 ? (
          <BibleControlBar books={books} />
        ) : (
          <CircularProgress />
        )}
      </div>
      <Divider></Divider>
      Scripture Context
    </div>
  );
}

export default App;
