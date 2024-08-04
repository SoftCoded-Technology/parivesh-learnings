import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart,increseQuantity, decreseQuantity } from '../slice/cartSlice';
import { Typography, IconButton, Button, TextField, TableCell, TableRow, TableBody, TableContainer, Table, TableHead, Paper, Stack, TableFooter } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.entities.cart.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  const handleIncreseQuantity = (id)=>{
    dispatch(increseQuantity({id:id}))
  }

  const handleDecreseQuantity = (id)=>{
    dispatch(decreseQuantity({id:id}))
  }
  

  return (
    <>
      <div className="container flex flex-col gap-6 mx-auto p-4">
        <Typography variant="h4" component="h1" className="text-center">
          Shopping Cart
        </Typography>
        {cart.length === 0 ? (
          <Typography variant="h6" component="p" className="text-center">
            Your cart is empty.
          </Typography>
        ) : (
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="cart table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>Image</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Title</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Actions</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((product) => {
                  return ( <TableRow key={product.id}>
                      <TableCell
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          '& img': {
                            objectFit: 'contain',
                            height: '100px',
                            width: '100px',
                          },
                        }}
                      >
                        <img src={product.image} alt={product.title} />
                      </TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>${product.price}</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                         <Stack direction={"row"} className='w-fit items-center justify-center'>
                         <Button  disableElevation variant='contained' onClick={()=>handleDecreseQuantity(product.id)}
                         sx={{
                          minWidth: '30px',
                          height: '30px',
                          padding: '4px',
                          fontSize: '12px'
                        }}
                          >-</Button>
					<TextField
					value={product.quantity}
					// onChange={(e) => handleQuantityChange(e, product.id)}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '40px',
						height: '30px',
						textAlign: 'center',
						borderRadius: '4px',
						margin: '0 2px',
						'& .MuiInputBase-root': {
						height: '100%', // Ensure the input base covers the full height of the TextField
						'& .MuiInputBase-input': {
							textAlign: 'center',
							fontSize: '20px',
							padding: '0', // Remove padding to ensure text is centered vertically
						},
						},
					}}
					variant="outlined"
					size="small"
					/>

                          <Button disableElevation size='' variant='contained' onClick={()=>handleIncreseQuantity(product.id)}
                            sx={{
                              minWidth: '30px',
                              height: '30px',
                              padding: '4px',
                              fontSize: '12px'
                            }}
                            >+</Button>
                         </Stack>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <IconButton onClick={() => handleRemoveFromCart(product.id)} aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>${product.price * product.quantity}</TableCell>
                    </TableRow>)
                  
                })}
              </TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={5} sx={{ textAlign: "right" }}>
							Total:
						</TableCell>
						<TableCell sx={{ textAlign: "center" }}>
							${cart.reduce((total, product) => total + product.price * product.quantity, 0)}
						</TableCell>
					</TableRow>
				</TableFooter>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
};

export default Cart;



















































// <List disableElevation >
          //   {cart.map((product) => (

          //     <ListItem key={product.id}>
          //       <Card className="flex flex-col items-center md:flex-row">
          //       <img width="100px" src={product.image} alt="" />
          //       <CardContent className="flex-grow w-full md:w-2/3">
          //         <Typography variant="h6" component="h2">
          //           {product.title}
          //         </Typography>
          //         <Typography variant="body2" component="p" className="mb-2">
          //           ${product.price}
          //         </Typography>
          //         <Typography variant="body2" component="p">
          //           Quantity:
          //           <ButtonGroup
          //             sx={{
          //               '& .MuiButton-root': {
          //                 backgroundColor: '#949494',
          //                 color: 'black',
          //                 border: '1px solid grey',
          //                 minWidth: '10px',  
          //                 padding: 'px',    
          //                 '&:hover': {
          //                   backgroundColor: 'darkgrey',
          //                 },
          //               },
          //             }}
          //             variant="outlined"
          //             size="small"
          //             disableElevation>
          //             <Button>
          //               -
          //             </Button>
          //               <input className='w-8 text-center' type="text" name="" id="" value={product.quantity} />
          //             <Button>
          //               +
          //             </Button>
          //           </ButtonGroup>
          //         </Typography>
          //         <div className="mt-4">
          //           <IconButton
          //             aria-label="delete"
          //             // onClick={() => handleeDcreseQuantityCart(product)}
          //           >
          //             <DeleteIcon />
          //           </IconButton>
          //         </div>
          //       </CardContent>
          //     </Card>
          //     </ListItem>
          //   ))}
          // </List>