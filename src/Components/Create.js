import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

const Create = () => {
  const [Descripcion, setDescription] = useState("");
  const [Precio, setPrecio] = useState(0);
  const [Stock, setStock] = useState(0);
  const navigate = useNavigate();

  const carritoCollection = collection(db, "Carrito");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(carritoCollection, {
      Descripcion: Descripcion,
      Precio: Precio,
      Stock: Stock,
    });
    navigate("/");
  };

  return (
    <>
      <div>
        <div>
          <div>
            <h1>Create Product</h1>
            <form onSubmit={store}>
              <div className="mb-3">
                <label className="form-label">Descripcion</label>
                <input
                  value={Descripcion}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Precio</label>
                <input
                  value={Precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  type="number"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input
                  value={Stock}
                  onChange={(e) => setStock(e.target.value)}
                  type="number"
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
