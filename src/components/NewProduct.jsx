import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function NewProduct() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const navigate = useNavigate();
  const handleSumitPost = async (data) => {
    await axios.post(`${import.meta.env.VITE_API}`, data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "CREADO OK!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center">
          PRODUCT NEW
        </h2>

        <form onSubmit={handleSubmit(handleSumitPost)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Name
              </label>
              <input
                {...register("name", {
                  required: { value: true, message: "INGRESE UN NOMBRE" },
                })}
                id="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="provider"
              >
                Provider
              </label>
              <input
                {...register("provider", {
                  required: { value: true, message: "INGRESE UN PROVEEDOR" },
                })}
                id="provider"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwcategoryord"
              >
                Category
              </label>
              <input
                {...register("category", {
                  required: { value: true, message: "INGRESE LA CATEGORIA" },
                })}
                id="category"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="price"
              >
                Price
              </label>
              <input
                {...register("price", {
                  required: { value: true, message: "INGRESE UN PRECIO" },
                })}
                id="price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Link to={"/"}>
              <button
                type="submit"
                className="px-8 mr-2 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-red-600 rounded-md  focus:outline-none focus:bg-gray-600"
              >
                Back
              </button>
            </Link>

            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-green-700 rounded-md "
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewProduct;
