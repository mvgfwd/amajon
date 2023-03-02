export const initialState = {
  cart: [],
  user: null,
  alamat: "",
};

const reducer = (state, action) => {
  // console.log(action);

  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      cart: [...state.cart, action.item],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const idx = state.cart.findIndex((e) => e.id === action.id);
    let newCart = [...state.cart];
    if (idx >= 0) {
      // At position idx, remove 1 items:
      newCart.splice(idx, 1);
      console.log(`findindex`, idx);
    } else {
      console.log(`tidakbisa`, idx);
    }
    return { ...state, cart: newCart };
  }

  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.user,
    };
  }

  if (action.type === "KOSONGIN") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "ALAMAT") {
    return {
      ...state,
      alamat: action.alamat,
    };
  }

  // switch (action.type) {
  //   case "ADD_ITEM":
  //     return {
  //       ...state,
  //       cart: [...state.cart, action.item],
  //     };
  //   case "REMOVE_ITEM":
  //     return {
  //       ...state,
  //       cart: state.cart.filter((e) => e.id !== action.id),
  //     };
  //   default:
  //     return state;
  // }
};
export default reducer;

//selector harga
export const totalHargaCart = (cart) =>
  cart?.reduce((jumlah, item) => item.harga + jumlah, 0);
