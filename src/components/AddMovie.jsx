import { useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { movieCollectionRef } from "../lib/firestore.collections";
import Navbar from "./Navbar";
import { useTheme } from "../context/ThemeContext";

export default function AddMovie() {
  const { theme } = useTheme();

  const [name, setName] = useState([]);
  const [img, setImg] = useState("");
  const [comment, setComment] = useState("");
  const [Recommender, setRecommender] = useState("");

  const colorr = theme === "dark" && "rgb(235, 235, 235)";

  async function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || img === "" || comment === "" || Recommender === "") {
      return window.alert("You cannot leave the fields blank.");
    }
    await addDoc(movieCollectionRef, {
      name,
      img,
      comment,
      Recommender,
      timestamp: serverTimestamp(),
    })
      .then((response) => {
        // localStorage.setItem("name", JSON.stringify(response.id));
        setName("");
        setImg("");
        setComment("");
        setRecommender("");
        window.alert("Movie Added");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="addmovie">
      <Navbar />
      <form className="container mt-5" onSubmit={handleSubmit}>
        <div class="form-group">
          <label style={{ color: colorr }}>Movie Name:</label>
          <input
            type="text"
            class="form-control"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label style={{ color: colorr }}>Movie Image (URL):</label>
          <input
            type="text"
            class="form-control"
            value={img}
            id="img"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label style={{ color: colorr }}>Your Name, Surname:</label>
          <input
            type="text"
            class="form-control"
            value={Recommender}
            id="Recommended"
            onChange={(e) => setRecommender(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label style={{ color: colorr }}>
            Your thoughts about movie (Dizi/Film hakkındaki düşünceleriniz):
          </label>
          <textarea
            class="form-control"
            id="comment"
            value={comment}
            rows="3"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit" className="btn-sm mt-2">
            Add Movie
          </button>
        </div>
      </form>
    </div>

    // <div className="addmovie">
    //   <Navbar />
    //   <div className="moviename mt-5" style={{ textAlign: "center" }}>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         className="ps-2"
    //         id="name"
    //         placeholder="Movie Name"
    //         type="text"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <br />
    //       <input
    //         className="mt-2 ps-2"
    //         placeholder="Movie Image (URL)"
    //         id="img"
    //         type="text"
    //         value={img}
    //         onChange={(e) => setImg(e.target.value)}
    //       />
    //       <br />
    //       <input
    //         className="mt-2 ps-2"
    //         placeholder="Your Name, Surname"
    //         id="Recommended"
    //         type="text"
    //         value={Recommender}
    //         onChange={(e) => setRecommender(e.target.value)}
    //       />
    //       <br />
    //       <textarea
    //         className="mt-2 ps-2"
    //         rows="4"
    //         cols="50"
    //         placeholder="Your thoughts about movie.. (Dizi/Film hakkındaki düşünceleriniz)"
    //         id="comment"
    //         type="text"
    //         value={comment}
    //         onChange={(e) => setComment(e.target.value)}
    //       />
    //       <br />

    //       <button type="submit" className="btn-sm mt-2">
    //         Add Movie
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}
