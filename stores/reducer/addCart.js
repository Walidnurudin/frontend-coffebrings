// // redux || keranjang
// const orderitem = [
//   {
//     idproduk: 1,
//     qty: 2,
//     totalharga: 10000,
//   },
//   { nasi, qty, price, id },
//   { roti, qty, price, id },
// ];

// // PriceProduk = orderitem.qty * orderitem.price [1]
// // subtotal = priceproduk + priceproduk [2] (looping)
// // tax = subtotal * 10% [3] (itung pajak)
// // diskon = subtotal * promo  [4] ( promo c/: 20%)
// // total = subtotal + pajak - diskon [5]
// const order = { iduser, PriceProduk, tax, promo, totalprice, orderitem };

// // ke DB

// // ORDER dari FE
// const orders = {
//   iduser: 1,
//   idpromo: "promo1",
//   paymentmethod: "bca",
//   subtotal: 20000,
//   tax: "10%",
//   toal: 20000000000000000,
//   // redux (produk by id, qty, priceProduk) store = dipilih: produkid :{},
//   // qty : dri inputan, priceProduk : ambil price dari produk by id dikali qty, subtotal, total

//   order: [
//     {
//       produkid: "pd1",
//       qty: 2,
//       size: "l",
//       total: 10000,
//     },
//     {
//       produkid: "pd2",
//       qty: 2,
//       total: 10000,
//     },
//   ],
// };

const initialState = {
  cart: [],
};

const addCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        // cart: cart.push(action.payload.item),
        cart: [...state.cart, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

console.log(initialState.cart);

export default addCart;
