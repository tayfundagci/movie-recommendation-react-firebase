import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { onSnapshot, orderBy, query } from "firebase/firestore";
// import { onSnapshot, orderBy, query, deleteDoc, doc } from "firebase/firestore";
import { movieCollectionRef } from "../lib/firestore.collections";
// import { db } from "../lib/init-firebase";

import { useTheme } from "../context/ThemeContext";

function List() {
  const { theme } = useTheme();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const borderr = theme === "dark" && "rgb(150, 150, 150)";
  const colorr = theme === "dark" && "rgb(200, 200, 200)";
  const cardd = theme === "dark" && "#212529";

  const filtered = movies.filter((movie) =>
    movie.data.name.toUpperCase().includes(search.toUpperCase())
  );

  useEffect(() => {
    const q = query(movieCollectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMovies(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // function deleteMovie(id) {
  //   localStorage.clear();
  //   const docRef = doc(db, "moviecollection", id);
  //   deleteDoc(docRef)
  //     .then(() => window.alert("Movie Deleted"))
  //     .catch((error) => console.log(error.message));
  // }

  return (
    <div className="listt">
      <Navbar movies={movies} search={search} setSearch={setSearch} />
      <div className="container mt-3">
        <div className="row mt-3" style={{ justifyContent: "center" }}>
          {filtered.map((movie) => (
            <div
              key={movie.id}
              className="card carddd ps-2 pt-2 pe-2 border-2 m-3   "
              style={{
                width: "18rem",
                color: borderr,
                backgroundColor: cardd,
              }}
            >
              <img
                src={
                  movie.data.img[0] !== "h" ||
                  movie.data.img[1] !== "t" ||
                  movie.data.img[2] !== "t" ||
                  movie.data.img[3] !== "p"
                    ? "https://pbs.twimg.com/media/EbwhU1TX0AYHdMb.jpg"
                    : movie.data.img &&
                      movie.data.img.includes("www.google.com")
                    ? "https://pbs.twimg.com/media/EbwhU1TX0AYHdMb.jpg"
                    : movie.data.img
                }
                className="card-img-top"
                alt={movie.data.name}
                style={{ height: "350px", borderRadius: "2%" }}
              />

              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={{ color: colorr }}
                >
                  {movie.data.name.length < 2 ? "undefined" : movie.data.name}
                  {/* {JSON.parse(localStorage.getItem("name")) === movie.id && (
                    <button
                      onClick={() => deleteMovie(movie.id)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "orangered",
                      }}
                    >
                      X
                    </button>
                  )} */}
                </h5>

                <Link
                  to={`/movie/${movie.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <h5 className="card-title text-center text-primary">
                    Click for details
                  </h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
