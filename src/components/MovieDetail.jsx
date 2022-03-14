import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { movieCollectionRef } from "../lib/firestore.collections";
// import { db } from "../lib/init-firebase";
import { useTheme } from "../context/ThemeContext";

function MovieDetail() {
  const { theme } = useTheme();

  const borderr = theme === "dark" && "rgb(150, 150, 150)";
  const colorr = theme === "dark" && "rgb(200, 200, 200)";
  const commentt = theme === "dark" && "rgb(255, 255, 255)";
  const cardd = theme === "dark" && "#212529";

  let { movie_id } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(movieCollectionRef, (snapshot) => {
      setMovies(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // function deleteMovie(id) {
  //   const docRef = doc(db, "movies", id);
  //   deleteDoc(docRef)
  //     .then(() => console.log("document deleted"))
  //     .catch((error) => console.log(error.message));
  // }

  return (
    <div className="moviedetail">
      <Navbar />
      <div className="container">
        {movies.map(
          (movie) =>
            movie.id === movie_id && (
              <div key={movie.id} className="rightleft mt-4 border-1">
                <div className="left">
                  <div
                    className="card carddd ps-2 pt-2 pe-2 border-2"
                    style={{
                      width: "18rem",
                      color: borderr,
                      backgroundColor: cardd,
                    }}
                  >
                    <img
                      src={
                        movie.data.img[0] !== "h" || movie.data.img[1] !== "t"
                          ? "https://pbs.twimg.com/media/EbwhU1TX0AYHdMb.jpg"
                          : movie.data.img &&
                            movie.data.img.includes("www.google.com")
                          ? "https://pbs.twimg.com/media/EbwhU1TX0AYHdMb.jpg"
                          : movie.data.img
                      }
                      className="card-img-top"
                      alt="..."
                      style={{ height: "350px", borderRadius: "2%" }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title text-center"
                        style={{ color: colorr }}
                      >
                        {movie.data.name.length < 3
                          ? "undefined"
                          : movie.data.name}
                      </h5>
                    </div>
                  </div>
                </div>
                <br />
                <div
                  className="right ms-5 pt-2"
                  style={{
                    fontSize: "25px",
                    textAlign: "left",
                    color: commentt,
                  }}
                >
                  {movie.data.comment.length < 3
                    ? "thanks for your comment, mr&mrs undefined :)"
                    : movie.data.comment}
                  <br />
                  <br />
                  recommended by{" "}
                  <strong style={{ fontSize: "23px", fontStyle: "italic" }}>
                    {movie.data.Recommender.length < 3
                      ? "undefined"
                      : movie.data.Recommender}
                  </strong>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
