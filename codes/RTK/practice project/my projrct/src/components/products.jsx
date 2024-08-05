// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../slice/cartSlice";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { IconButton, Skeleton, Box } from "@mui/material";
// import { addToWishList, removeFromWishList } from "../slice/wishListSlice";

// const Products = () => {
// 	const dispatch = useDispatch();
// 	const { products, isLoading, error } = useSelector((state) => state.entities.products);
// 	const { wishList } = useSelector((state) => state.entities.wishList);

// 	// console.log(products)

// 	const handleAddToCart = (product) => {
// 		dispatch(addToCart({
// 			productId: product.id,
// 		}));
// 	};

// 	const handleAddToWishlist = (product) => {
// 		dispatch(addToWishList({
// 			id: product.id,
// 			title: product.title,
// 			price: product.price,
// 			image: product.image,
// 			rating: product.rating
// 		}));
// 	};

// 	const handleRemoveFromWishlist = (productId) => {
// 		dispatch(removeFromWishList(productId));
// 	};

// 	const isProductInWishlist = (productId) => {
// 		return wishList.some(item => item.id === productId);
// 	};

// 	const skeletonArray = new Array(8).fill(null);

// 	return (
// 		<>
// 			{error && <h1>{error}</h1>}
// 			<div className="container gap-2 mx-auto items-center justify-start flex-wrap">
// 				<h1 className="text-3xl font-bold w-full text-center">Products</h1>
// 				<div className="products-container place-items-center">
// 					{isLoading ? (
// 						skeletonArray.map((_, index) => (
// 							<div key={index} className="product">
// 								<Skeleton variant="rectangular" width={200} height={250} />
// 								<Box
// 									sx={{
// 										pt: 0.5,
// 										display: 'flex',
// 										flexDirection: 'column',
// 										alignItems: 'center',
// 										justifyContent: 'center',
// 									}}>
// 									<Skeleton width="80%" />
// 									<Skeleton width="60%" />
// 									<Skeleton width="40%" />
// 								</Box>
// 							</div>
// 						))
// 					) : (
// 						products?.map((product) => (
// 							<div key={product.id} className="product">
// 								<div className="product-detail-container">
// 									<div className="product-image relative">
// 										<img src={product.image} alt={product.title} />
// 									</div>
// 									<div className="title-container">
// 										<h3>
// 											<a href="#">{product.title}</a>
// 										</h3>
// 									</div>
// 									<div className="price-rating-container">
// 										<p className="rating">{product.rating.rate} ★ ★ ★ ★</p>
// 										<p className="price">${product.price}</p>
// 									</div>
// 									<div className="flex w-full">
// 										<div className="cta-container w-11/12 ">
// 											<button onClick={() => { handleAddToCart(product) }}><ShoppingCartIcon /></button>
// 											<button>Buy Now</button>
// 										</div>
// 										{isProductInWishlist(product.id) ? (
// 											<IconButton
// 												aria-label="remove from wishlist"
// 												onClick={() => { handleRemoveFromWishlist(product.id) }}
// 												sx={{ color: 'crimson' }}
// 											>
// 												<FavoriteIcon />
// 											</IconButton>
// 										) : (
// 											<IconButton
// 												aria-label="add to wishlist"
// 												onClick={() => { handleAddToWishlist(product) }}
// 											>
// 												<FavoriteBorderIcon />
// 											</IconButton>
// 										)}
// 									</div>
// 								</div>
// 							</div>
// 						))
// 					)}
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Products;
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, Skeleton, Box, TextField, Button } from "@mui/material";
import { addToWishList, removeFromWishList } from "../slice/wishListSlice";
import { useAddProductMutation, useGetProductsQuery } from '../services/productApi';

const Products = () => {
	const dispatch = useDispatch();
	//   const { products, isLoading, error } = useSelector((state) => state.entities.products);
	const { data: products = [], error, isLoading } = useGetProductsQuery();
	const { wishList } = useSelector((state) => state.entities.wishList);

	console.log(products)

	const [addProduct] = useAddProductMutation();
	const [newProduct, setNewProduct] = useState({
		title: '',
		price: 0,
		description: '',
		image: '',
		category: ''
	});

	const handleAddToCart = (product) => {
		dispatch(addToCart({
			productId: product.id,
		}));
	};

	const handleAddToWishlist = (product) => {
		dispatch(addToWishList({
			id: product.id,
			title: product.title,
			price: product.price,
			image: product.image,
			rating: product.rating
		}));
	};

	const handleRemoveFromWishlist = (productId) => {
		dispatch(removeFromWishList(productId));
	};

	const isProductInWishlist = (productId) => {
		return wishList.some(item => item.id === productId);
	};

	const handleAddProduct = async () => {
		try {
			await addProduct(newProduct).unwrap();
			setNewProduct({
				title: '',
				price: 0,
				description: '',
				image: '',
				category: ''
			});
		} catch (error) {
			console.error('Failed to add product:', error);
		}
	};

	const handleChange = (e) => {
		setNewProduct({
			...newProduct,
			[e.target.name]: e.target.value
		});
	};

	const skeletonArray = new Array(8).fill(null);

	return (
		<>
			{error && <h1>{error}</h1>}
			<div className="container gap-2 mx-auto items-center justify-start flex-wrap">
					<h2 className='text-2xl font-bold w-full text-center'>Add a New Product</h2>
			<div className="add-product-form w-full flex justify-center gap-2 items-center">
					<TextField
						label="Title"
						name="title"
						value={newProduct.title}
						onChange={handleChange}
					/>
					<TextField
						label="Price"
						name="price"
						type="number"
						value={newProduct.price}
						onChange={handleChange}
					/>
					<TextField
						label="Description"
						name="description"
						value={newProduct.description}
						onChange={handleChange}
					/>
					<TextField
						label="Image URL"
						name="image"
						value={newProduct.image}
						onChange={handleChange}
					/>
					<TextField
						label="Category"
						name="category"
						value={newProduct.category}
						onChange={handleChange}
					/>
					<Button disableElevation variant="contained" onClick={handleAddProduct}>
						Add Product
					</Button>
				</div>
				<h1 className="text-3xl font-bold w-full text-center">Products</h1>
				<div className="products-container place-items-center">
					{isLoading ? (
						skeletonArray.map((_, index) => (
							<div key={index} className="product">
								<Skeleton variant="rectangular" width={200} height={250} />
								<Box
									sx={{
										pt: 0.5,
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<Skeleton width="80%" />
									<Skeleton width="60%" />
									<Skeleton width="40%" />
								</Box>
							</div>
						))
					) : (
						products?.map((product) => (
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
						))
					)}
				</div>

				
			</div>
		</>
	);
};

export default Products;
