import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

const Edit = () => {
  const [nombre, setNombre] = useState("");
  const [sexo, setSexo] = useState("");
  const [talla, setTalla] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "productos", id);
    const data = { nombre: nombre, sexo: sexo, talla: talla };
    await updateDoc(product, data);
    navigate("/");
  };

  const getProductById = async (id) => {
    const product = doc(db, "productos", id);
    const docSnap = await getDoc(product);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setNombre(docSnap.data().nombre);
      setSexo(docSnap.data().sexo);
      setTalla(docSnap.data().talla);
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
