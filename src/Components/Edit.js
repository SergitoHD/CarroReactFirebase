import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

const Edit = () => {
  const [Descripcion, setDescription] = useState("");
  const [Precio, setPrecio] = useState(0);
  const [Stock, setStock] = useState(0);
  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "Carrito", id);
    const data = { Descripcion: Descripcion, Precio: Precio, Stock: Stock };
    await updateDoc(product, data);
    navigate("/");
  };

  const getProductById = async (id) => {
    const product = doc(db, "Carrito", id);
    const docSnap = await getDoc(product);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setDescription(docSnap.data().Descripcion);
      setPrecio(docSnap.data().Precio);
      setStock(docSnap.data().Stock);
    } else {
      console.log("Producto no encontrado");
    }
  };

  useEffect(() => {
    getProductById(id);
  }, []);

  return (
    <>
      <div>
        <div>
          <div>
            <h1>Edit product</h1>
            <form onSubmit={update}>
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
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
