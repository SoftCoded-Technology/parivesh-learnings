import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { addToCart } from "../slice/cartSlice";
import { removeFromWishList } from "../slice/wishListSlice";


const WishList = () => {
	const dispatch = useDispatch();
	const { wishList } = useSelector((state) => state.entities.wishList);

	const handleAddToCart = (product) => {
		dispatch(addToCart({
			productId: product.id,
		}));
	}

	const isProductInWishlist = (productId) => {
		return wishList.some(item => item.id === productId);
	}

	const handleRemoveFromWishlist = (productId) => {
		dispatch(removeFromWishList(productId))
	}

	return (
		<>
			<div className="container gap-2 mx-auto items-center justify-start flex-wrap">
				<h1 className="text-3xl font-bold w-full text-center">Wishlist</h1>
				{wishList.length === 0 && <h1 className="text-xl font-bold w-full text-center">Wishlist is Empty</h1> }
				<div className="products-container place-items-center">
					{wishList?.map((product) => (
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
									{isProductInWishlist(product.id) && (
										<IconButton
											aria-label="remove from wishlist"
											onClick={() => { handleRemoveFromWishlist(product.id) }}
											sx={{ color: 'crimson' }}
										>
											<FavoriteIcon />
										</IconButton>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default WishList
