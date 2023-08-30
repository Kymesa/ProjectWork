function TableHeader() {
  return (
    <>
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th
            scope="col"
            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white "
          >
            <div className="flex items-center gap-x-3">
              <strong>Name</strong>
            </div>
          </th>

          <th
            scope="col"
            className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white "
          >
            <strong>Provider</strong>
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white "
          >
            <strong>Category</strong>
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white "
          >
            <strong>Price</strong>
          </th>
          <th scope="col" className="relative py-3.5 px-4">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
