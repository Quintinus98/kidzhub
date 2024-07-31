import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="my-8 w-full">
      <hr />
      <h2 className="font-bold w-full text-center text-3xl my-4">
        Product List
      </h2>
      <table className="table-auto mx-auto">
        <thead>
          <tr>
            <th className="">Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="mx-4 px-4 my-4">{product.name}</td>
              <td className="mx-4 px-4 my-4">{product.price}</td>
              <td className="flex flex-row gap-4 mx-4">
                {/* <button onClick={() => onEdit(product)} type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</button> */}
                <button
                  onClick={() => onDelete(product.id)}
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 m-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
