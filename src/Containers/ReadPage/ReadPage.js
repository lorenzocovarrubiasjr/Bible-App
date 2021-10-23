import "./ReadPage.css";
import React, { useEffect, useState } from "react";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";

import BibleControlBar from "../BibleControlBar/BibleControlBar";
import ScriptureContent from "../../Components/ScriptureContent/ScriptureContent";

import { apiKey } from "../../api";

function ReadPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [chapterContent, setChapterContent] = useState(null);

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
          fetch(
            "https://api.scripture.api.bible/v1/bibles/bba9f40183526463-01/books/GEN/chapters",
            {
              headers: {
                "api-key": apiKey,
              },
            }
          )
            .then((res) => res.json())
            .then((result) => {
              fetch(
                "https://api.scripture.api.bible/v1/bibles/bba9f40183526463-01/chapters/GEN.1?content-type=json&include-notes=false&include-titles=false&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=false",
                {
                  headers: {
                    "api-key": apiKey,
                  },
                }
              )
                .then((res) => res.json())
                .then((resp) => {
                  console.log(resp);
                  setChapterContent(
                    resp.data.content
                      .map((verse) => verse.items[1]?.text)
                      .join(" ")
                  );
                });
            });
        }
      });
  }, []);

  return (
    <>
      <div className="scripture-content">
        {!isLoading && books.length > 0 ? (
          <BibleControlBar books={books} />
        ) : (
          <CircularProgress />
        )}
      </div>
      <Divider></Divider>
      <ScriptureContent content={chapterContent}></ScriptureContent>
    </>
  );
}

export default ReadPage;
