import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increseQuantity, decreseQuantity } from '../slice/cartSlice';
import { Typography, IconButton, Button, TextField, TableCell, TableRow, TableBody, TableContainer, Table, TableHead, Paper, Stack, TableFooter } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectCartProducts } from '../selectors/selectors';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);

  const isLoading = useSelector((state) => state.entities.products.isLoading);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreseQuantity = (id) => {
    dispatch(increseQuantity({ productId: id }));
  };

  const handleDecreseQuantity = (id) => {
    dispatch(decreseQuantity({ productId: id }));
  };

  return (
    <div className="container flex flex-col gap-6 mx-auto p-4">
      <Typography variant="h4" component="h1" className="text-center">
        Shopping Cart
      </Typography>
      {isLoading ? (
        <h2 className="w-full text-center">Loading...</h2>
      ) : cartProducts.length === 0 ? (
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
              {cartProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "& img": {
                        objectFit: "contain",
                        height: "100px",
                        width: "100px",
                      },
                    }}
                  >
                    <img src={product.image} alt={product.title} />
                  </TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    ${product.price}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Stack
                      direction={"row"}
                      className="w-full items-center justify-center"
                    >
                      <Button
                        disableElevation
                        variant="contained"
                        onClick={() => handleDecreseQuantity(product.id)}
                        sx={{
                          minWidth: "30px",
                          height: "30px",
                          padding: "4px",
                          fontSize: "12px",
                        }}
                      >
                        -
                      </Button>
                      <TextField
                        value={product.quantity}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "40px",
                          height: "30px",
                          textAlign: "center",
                          borderRadius: "4px",
                          margin: "0 2px",
                          "& .MuiInputBase-root": {
                            height: "100%",
                            "& .MuiInputBase-input": {
                              textAlign: "center",
                              fontSize: "20px",
                              padding: "0",
                            },
                          },
                        }}
                        variant="outlined"
                        size="small"
                      />
                      <Button
                        disableElevation
                        size=""
                        variant="contained"
                        onClick={() => handleIncreseQuantity(product.id)}
                        sx={{
                          minWidth: "30px",
                          height: "30px",
                          padding: "4px",
                          fontSize: "12px",
                        }}
                      >
                        +
                      </Button>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <IconButton
                      onClick={() => handleRemoveFromCart(product.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      ${(product.price * product.quantity).toFixed(2)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5} sx={{ textAlign: "right" }}>
                  Total:
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  $
                  {cartProducts
                    .reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    )
                    .toFixed(2)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Cart;
