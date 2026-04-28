import axios from "axios"
import './App.css';
import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";

const productsInitialState = {
  allProducts: [],
  allCartItems: []
};

const API_URL = 'https://fakestoreapi.com/products';

const fetchProductsSuccess = (products) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: products
});

const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: {
    ...product,
    id: Math.random().toString(36).substr(2, 9)
  }
});

const removeFromCart = (product) => ({
  type: "REMOVE_FROM_CART",
  payload: product
})

const Header = () => {
  return (
    <h2 className="header1">Products</h2>
  )
}

const Header1 = () => {
  return (
    <h2 className="header2">Shopping cart</h2>
  )
}

const CartTotal = () => {
  const allCartItems = useSelector((state) => state.allCartItems);

  const totalPrice = allCartItems.reduce(
    (acc, curr) => acc + curr.payload.price,
    0
  );

  return (
    <div className="cartTotal">
      {totalPrice !== 0 ? (
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      ) : <p></p>}
    </div>
  );
};

const Product = ({ product }) => {
  const dispatch = useDispatch();
  
  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="page">
    <div className="Container">
    <button className="button" onClick={addToCartHandler}>Add to cart</button>
      <div>
      <img src={product.image} alt={product.title} className="img"/>
      </div>
      <h3>{product.title}</h3>
      <p className="dis">{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
    </div>
  );
};

const Cart = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(item.payload.id));
  };
  return(
    <div className="cartPage">
      <div className="CartContainer">
        {item !== null ? (
            <div key={item.id}>
              <img src={item.payload.image} alt="Kuva" />
              <button className="button" onClick={() => removeFromCartHandler(item.id)}>
                X
              </button>
              <div className="cartItemText">
              <h3>{item.payload.title}</h3>
              <p>Price: ${item.payload.price}</p>
              </div>
            </div>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    </div>
  )
}

const CartItems = () => {
  const allCartItems = useSelector(state => state.allCartItems);

  return (
    <div>
       {allCartItems.map(item => (
        <Cart
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);

  useEffect(() => {
    const fetchProducts = () => {
      axios.get(API_URL)
      .then(response => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(error => {
        console.log('Error fetching products: ', error);
      });
    };
  
    fetchProducts();
  },[dispatch]);

  return (
    <div>
       {allProducts.map(product => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};


const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        allProducts: action.payload
      };
    case "ADD_TO_CART":
      return {
        ...state,
        allCartItems: [...state.allCartItems, { payload: action.payload, id: action.id}]
      };
      case "REMOVE_FROM_CART":
        const newCartItems = state.allCartItems.filter(item => item.payload.id !== action.payload);
        return {
          ...state,
          allCartItems: newCartItems
        }
    default:
      return state;
  }
};

const store = createStore(productsReducer);

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Header1 />
        <Products />
        <CartItems/>
        <CartTotal/>
    </Provider>
  );
}

export default App;

