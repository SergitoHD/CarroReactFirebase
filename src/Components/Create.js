import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

const Create = () => {
  const [nombre, setNombre] = useState("");
  const [sexo, setSexo] = useState("");
  const [talla, setTalla] = useState("");
  const navigate = useNavigate();

  const productosCollection = collection(db, "productos");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(productosCollection, {
      nombre: nombre,
      sexo: sexo,
      talla: talla,
    });
    navigate("/");
  };

  return (
    <>
      <div>
        <div>
          <div>
            <h1>Edit product</h1>
            <form onSubmit={store}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Sexo</label>
                <input
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Talla</label>
                <input
                  value={talla}
                  onChange={(e) => setTalla(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Store
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
