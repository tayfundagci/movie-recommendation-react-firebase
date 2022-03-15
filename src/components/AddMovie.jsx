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
        localStorage.setItem("name", JSON.stringify(response.id));
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
        <div className="form-group">
          <label style={{ color: colorr }}>Movie Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label style={{ color: colorr }}>Movie Image (URL):</label>
          <input
            type="text"
            placeholder="You should add image url on this area"
            className="form-control"
            value={img}
            id="img"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label style={{ color: colorr }}>Your Name, Surname:</label>
          <input
            type="text"
            className="form-control"
            value={Recommender}
            id="Recommended"
            onChange={(e) => setRecommender(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label style={{ color: colorr }}>
            Your thoughts about movie (Dizi/Film hakkındaki düşünceleriniz):
          </label>
          <textarea
            className="form-control"
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
  );
}
