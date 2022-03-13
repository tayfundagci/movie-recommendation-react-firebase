import { useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { movieCollectionRef } from "../lib/firestore.collections";
import Navbar from "./Navbar";

export default function AddMovie() {
  const [name, setName] = useState([]);
  const [img, setImg] = useState("");
  const [comment, setComment] = useState("");
  const [Recommender, setRecommender] = useState("");

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
      <div className="moviename mt-5" style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <input
            className="ps-2"
            id="name"
            placeholder="Movie Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className="mt-2 ps-2"
            placeholder="Movie Image (URL)"
            id="img"
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <br />
          <input
            className="mt-2 ps-2"
            placeholder="Your Name, Surname"
            id="Recommended"
            type="text"
            value={Recommender}
            onChange={(e) => setRecommender(e.target.value)}
          />
          <br />
          <textarea
            className="mt-2 ps-2"
            rows="4"
            cols="50"
            placeholder="Your thoughts about movie.. (Dizi/Film hakkındaki düşünceleriniz)"
            id="comment"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />

          <button type="submit" className="btn-sm mt-2">
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
}
