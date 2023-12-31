import { useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Table() {
  const [products, setProducts] = useState(null);

  const getAllProducts = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API}`);
    setProducts(data.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            <strong>PRODUCTS :)</strong>
          </h2>
          <Link to={"/new"}>
            <button className="text-white bg-blue-600 p-1">NEW</button>
          </Link>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <TableHeader />
                  {products ? (
                    products.map((p) => (
                      <TableBody
                        setProducts={setProducts}
                        products={products}
                        key={p._id}
                        name={p.name}
                        provider={p.provider}
                        category={p.category}
                        price={p.price}
                        id={p._id}
                      />
                    ))
                  ) : (
                    <>
                      <tfoot>
                        <tr>
                          <td>
                            <div className="w-[30vh]  animate-pulse p-9">
                              <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

                              <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                              <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                              <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                              <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Table;
