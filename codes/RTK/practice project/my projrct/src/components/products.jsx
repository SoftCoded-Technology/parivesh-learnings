import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slice/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const {products:products} = useSelector((state) => state.entities.products);
  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS" });
  }, [dispatch]);
  
  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image:product.image
    }));
  }
  

  return (
    <>
      <div className="container mt-24 gap-2 mx-auto items-center justify-start flex-wrap">
      <h1 className="text-3xl font-bold w-full text-center">Products</h1>
      <div className="products-container place-items-center">
        {products?.map((product) => (
          <div key={product.id} className="product">
            <div className="product-detail-container">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="title-container">
              <h3>
                <a href="#">{product.title}</a>
              </h3>
            </div>
            <div className="price-rating-container">
              <p className="rating">{product.rating.rate} ★ ★ ★ ★</p>
              <p className="price">${product.price}</p>
            </div>
            <div className="cta-container">
              <button onClick={()=>{handleAddToCart(product)}}>Add to Cart</button>
              <button>Buy Now</button>
            </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Products;
