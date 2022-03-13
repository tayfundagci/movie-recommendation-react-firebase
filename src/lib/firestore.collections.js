import { collection } from "firebase/firestore";
import { db } from "./init-firebase";

export const movieCollectionRef = collection(db, "moviecollection");
