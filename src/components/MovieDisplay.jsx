export default function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <>
        <h1>{movie?.Title || "No Title Available"}</h1>
        <h2>{movie?.Genre || "No Genre Available"}</h2>
        <img
          src={movie?.Poster || "default-image-url.jpg"}
          alt={movie?.Title || "Movie"}
        />
        <h2>{movie?.Year || "No Year Available"}</h2>
      </>
    );
  };

  const loading = () => {
    return <h1>Movie will display here</h1>;
  };

  return movie ? loaded() : loading();
}
