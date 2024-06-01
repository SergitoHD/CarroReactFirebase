import React from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Show = () => {
  return <div>Show</div>;
};

export default Show;
