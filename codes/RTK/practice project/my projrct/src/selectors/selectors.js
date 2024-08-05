// selectors.js
import { createSelector } from 'reselect';

const selectCart = (state) => state.entities.cart.cart;
const selectProducts = (state) => state.entities.products.products;

export const selectCartProducts = createSelector(
  [selectCart, selectProducts],
  (cart, products) => {
    return cart
      .map(({ productId, quantity }) => {
        const cartProduct = products.find(
          (product) => product.id === productId
        );
        if (cartProduct) {
          return { ...cartProduct, quantity };
        }
        return null;
      })
      .filter((item) => item !== null);
  }
);
