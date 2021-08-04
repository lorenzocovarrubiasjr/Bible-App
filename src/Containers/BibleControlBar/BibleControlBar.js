import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const BibleControlBar = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(books[0].id);

  const handleChange = (event) => {
    setSelectedBook(event.target.value);
    console.log("selected book: ", selectedBook);
  };

  return (
    <div className="control-bar-container">
      <FormControl variant="outlined">
        <Select value={selectedBook} onChange={handleChange}>
          {books.map((book) => (
            <MenuItem key={book.id} value={book.id}>
              {book.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default BibleControlBar;
