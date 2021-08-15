import Products from "./productData";
import "./productmap.css";
import { Product } from "./Product";

export const ProductMap = () => {
  return (
    <div id="productMapHolder">
      {Products.map((product) => (
        <Product
          name={product["name"]}
          price={product["price"]}
          image={product["img"]}
          description={product["desc"]}
        />
      ))}
    </div>
  );
};
