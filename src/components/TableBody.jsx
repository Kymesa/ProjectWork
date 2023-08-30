/* eslint-disable no-unused-vars */

import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
function TableBody({
  name,
  provider,
  category,
  price,
  id,
  setProducts,
  products,
}) {
  const handleCLickDelete = async (id, name) => {
    Swal.fire({
      title: "Estas Seguro?",
      text: "No se prodra recuperar esta informacion, " + name,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si Borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API}/${id}`);
        setProducts(products.filter((p) => p._id !== id));
        Swal.fire("Eliminado!", "Ha sido ELimnado.", "success");
      }
    });
  };

  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        <tr>
          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div className="inline-flex items-center gap-x-3">
              <div className="flex items-center gap-x-2">
                <div>
                  <h2 className="font-medium text-gray-800 dark:text-white ">
                    {name}
                  </h2>
                </div>
              </div>
            </div>
          </td>
          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

              <h2 className="text-sm font-normal text-emerald-500">
                {provider}
              </h2>
            </div>
          </td>
          <td className="px-4 py-4 text-sm text-white dark:text-gray-300 whitespace-nowrap">
            {category}
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center gap-x-2">
              <p className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-pink-100/60">
                ${price}
              </p>
            </div>
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center gap-x-6">
              <div className="bg-blue-600">
                <Link
                  to={"/edit/" + id}
                  state={{ name, provider, category, price, id }}
                >
                  <button className="text-white transition-colors duration-200 dark:hover:text-blue-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="bg-red-600">
                <button
                  onClick={() => handleCLickDelete(id, name)}
                  className="text-white transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default TableBody;
