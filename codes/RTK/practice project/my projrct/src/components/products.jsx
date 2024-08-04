import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { addToWishList, removeFromWishList } from "../slice/wishListSlice";


const Products = () => {
	const dispatch = useDispatch();
	const { products: products } = useSelector((state) => state.entities.products);
	const { wishList } = useSelector((state) => state.entities.wishList);

	console.log(wishList)

	useEffect(() => {
		dispatch({ type: "FETCH_PRODUCTS" });
	}, []);

	const handleAddToCart = (product) => {
		dispatch(addToCart({
			id: product.id,
			title: product.title,
			price: product.price,
			image: product.image
		}));
	}

	const handleAddToWishlist = (product) => {
		dispatch(addToWishList({
			id: product.id,
			title: product.title,
			price: product.price,
			image: product.image,
			rating: product.rating
		}));
	}

	const handleRemoveFromWishlist = (productId) => {
		dispatch(removeFromWishList(productId))
	}

	const isProductInWishlist = (productId) => {
		return wishList.some(item => item.id === productId);
	}


	return (
		<>
			<div className="container gap-2 mx-auto items-center justify-start flex-wrap">
				<h1 className="text-3xl font-bold w-full text-center">Products</h1>
				<div className="products-container place-items-center">
					{products?.map((product) => (
						<div key={product.id} className="product">
							<div className="product-detail-container">
								<div className="product-image relative">
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
								<div className="flex w-full">
									<div className="cta-container w-11/12 ">
										<button onClick={() => { handleAddToCart(product) }}><ShoppingCartIcon /></button>
										<button>Buy Now</button>
									</div>
									{isProductInWishlist(product.id) ? (
										<IconButton
											aria-label="remove from wishlist"
											onClick={() => { handleRemoveFromWishlist(product.id) }}
											sx={{ color: 'crimson' }}
										>
											<FavoriteIcon />
										</IconButton>
									) : (
										<IconButton
											aria-label="add to wishlist"
											onClick={() => { handleAddToWishlist(product) }}
										>
											<FavoriteBorderIcon />
										</IconButton>
									)}
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
