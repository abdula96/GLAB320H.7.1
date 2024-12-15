import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import MovieDisplay from "./components/MovieDisplay.jsx";

export default function App() {
  const apiKey = "f969004b"; // Replace with your actual API key

  // State to hold movie data
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchMessage, setSearchMessage] = useState("Search a movie");

  // Function to fetch movie data
  const getMovie = async (searchTerm) => {
    setSearchMessage(""); // Hide the "Search a movie" message once search starts
    try {
      setLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      console.log("API Response:", data); // Log the entire response object
      if (data.Response === "True") {
        setMovie(data);
      } else {
        console.error("Error: Movie not found or invalid search.");
        setMovie(null);
        setSearchMessage("Try a  search"); // Updated message on invalid search
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setSearchMessage("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch a default movie when the app loads
  useEffect(() => {
    getMovie("Clueless");
  }, []); // This only runs on the first render, loading "Clueless"

  // Log movie data to check its structure
  console.log("Current Movie:", movie);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      {searchMessage && <h2>{searchMessage}</h2>}
      {loading ? <h2>Loading...</h2> : <MovieDisplay movie={movie} />}
    </div>
  );
}
