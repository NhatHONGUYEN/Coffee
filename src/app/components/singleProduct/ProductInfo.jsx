const ProductInfo = ({ product }) => (
  <>
    <p>
      <span className="font-bold">Name:</span> {product.name}
    </p>
    <p className="flex w-96 flex-col">
      <span className="font-bold">Description:</span> {product.description}
    </p>
    <p>
      <span className="font-bold">Price:</span> {product.price} €
    </p>
  </>
);

export default ProductInfo;
