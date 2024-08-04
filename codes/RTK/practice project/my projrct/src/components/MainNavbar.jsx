import Badge from '@mui/material/Badge';
import { Box, IconButton, Stack, Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Navbar = () => {

    const cart = useSelector((state) => state.entities.cart.cart)



    return (
        <>
            <Stack
                direction={"row"} sx={{
                    p: 2,
                    gap: 2,
                    bgcolor: "#949494",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "fixed",
                    width: "100%",
                    top: 0,
                    zIndex: "1000"
                }}>
                <Link to='/'>
                    <Box sx={{
                        width: "50px",
                        height: "max-content",
                    }}>
                        <img src="https://t3.ftcdn.net/jpg/03/65/42/00/360_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg" alt="logo" />
                    </Box>
                </Link>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                }}>
                    <Typography variant="h6" sx={{ color: "#000000" }}>
                        <Link to='/'>
                            Home
                        </Link>
                    </Typography>
                    <Typography variant="h6" sx={{
                        color: "#000000",
                        cursor: "pointer",
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
                        <Link to='/cart'>
                            Cart
                        </Link>
                        <Link to='/cart'>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={cart.length} color="primary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        <Link to='/wishlist'>
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Link>
                    </Typography>
                </Box>
            </Stack>
        </>
    )
}

export default Navbar
