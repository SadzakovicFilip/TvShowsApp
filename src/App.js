
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import Main from "./components/Main";
import SingleShow from "./components/SingleShow";
import NavBar from "./components/navbar/navBarr";

function App() {
  const [shows, setShows] = useState([]);
  useEffect(
    () => async () => {
      const response = await axios.get(`http://api.tvmaze.com/shows`);
      setShows(response.data);
    },[]);

  return (
    <div className="App">
      <BrowserRouter>

        <NavBar data={shows} />

        <Routes>
          <Route path="/" element={<Main shows={shows} />}></Route>
          <Route path="shows/:showId" element={<SingleShow shows={shows} />}></Route>
        </Routes>

        <footer className="footer">Made By Filip Sadzakovic ©</footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
