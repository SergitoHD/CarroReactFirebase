import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

const Show = () => {
  //Configuración de hooks
  const [products, SetProducts] = useState([]);

  //Referencia a la BD de firebase
  const carritoCollection = collection(db, "Carrito");

  //Función para mostrar todos los docs
  const getProducts = async () => {
    const data = await getDocs(carritoCollection);
    //console.log(data.docs);
    SetProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //console.log(products);
  };

  //Función para eliminar un doc
  const deleteProduct = async (id) => {
    const productDoc = doc(db, "Carrito", id);
    await deleteDoc(productDoc);
    getProducts();
  };

  //Función para confirmación para Sweet Alert 2
  const confirmDelete = (id) => {
    mySwal
      .fire({
        title: "¿Quieres eliminar este producto?",
        text: "No podrás revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Si, quiero eliminarlo",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteProduct(id);
          Swal.fire("Eliminado", "Tu producto ha sido eliminado", "success");
        }
      });
  };
  //Usamos useEffect
  useEffect(() => {
    getProducts();
  }, []);

  //Retorno
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap2">
              <Link to="/create" className="btn btn-secondary mt-2 mb-2">
                Create
              </Link>
            </div>

            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Descripcion</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.Descripcion}</td>
                    <td>{product.Precio}</td>
                    <td>{product.Stock}</td>
                    <td>
                      <Link
                        to={`/edit/${product.id}`}
                        className="btn btn-light mx-2"
                      >
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                      <button
                        onClick={() => {
                          confirmDelete(product.id);
                        }}
                        className="btn btn-danger mx-2"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
