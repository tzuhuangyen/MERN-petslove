import React, { useState, useEffect, useReducer } from 'react';

// import { useContext } from 'react';
import axios from 'axios';
import { CiShoppingCart } from 'react-icons/ci';
import { MdFavoriteBorder } from 'react-icons/md';
// import CartNavbar from "../components/CartNavbar";
// import { CartContext } from './component/Context';
// import Cart from './component/Cart';

// const cartReducer = (state, action) => {
//   // 從 state 中解構出的購物車列表
//   const { cartList } = state;
//   console.log(action);
//   //用於存儲更新後的購物車列表
//   let updatedCartList;
//   //cartItemId: product's ID in the cart list
//   const cartItemId = cartList.findIndex(
//     (item) => item.id === action.payload.id
//   );
//   console.log('index:', cartItemId);
//   let jsonItemId;

//   switch (action.type) {
//     case 'ADD_TO_CART':
//       console.log('action:', action);
//       //if no item in the cartList, add to cart list
//       if (cartItemId === -1) {
//         // POST request to add a new item into API cart
//         axios
//           .post('http://localhost:3000/carts', {
//             productName: action.payload.name,
//             quantity: 1,
//             price: action.payload.price,
//             total: action.payload.price,
//           })
//           .then((response) => {
//             console.log('New item added to cart successfully', response.data);
//             // save db.json'cart newItemId ID for change qty
//             jsonItemId = response.data.id;

//             // Add the new item to the cart list
//             updatedCartList = [
//               ...cartList,
//               { ...action.payload, quantity: 1, id: jsonItemId },
//             ];
//           })
//           .catch(
//             (error) => console.error('Error adding new item to cart:', error)
//             //ReferenceError: dispatch is not defined
//           );
//       } else {
//         // If item already exists, update its quantity
//         //在卡片內加入購物車按鈕可觸發 找到購物車的index去變更數量
//         updatedCartList = cartList.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );

//         //save data in localstorage
//         localStorage.setItem(
//           'cart',
//           JSON.stringify({ cartList: updatedCartList })
//         );

//         return {
//           //購物車列表狀態
//           ...state,
//           cartList: updatedCartList,
//           total: caleTotalPrice(updatedCartList),
//         };
//       }

//     // case "STORE_ITEM_ID":
//     //   return {
//     //     ...state,
//     //     lastAddedItemId: action.payload,
//     //   };
//     //change qty from cartList
//     // case "CHANGE_CART_QUANTITY":
//     //   //要有兩個ID 一個是購物車的index 一個是db.json id
//     //   //先复制购物车数组避免變更原始購物車列表
//     //   updatedCartList = [...cartList];
//     //   //購物車的indexID product's ID in the cart list
//     //   const cartItemId = updatedCartList.findIndex(
//     //     (item) => item.id === action.payload.id
//     //   );
//     //   // 更新購物車內商品数量
//     //   updatedCartList[cartItemId].quantity = action.payload.quantity;
//     //   // axios.patch update json server's cart data
//     //   axios
//     //     .patch(`http://localhost:3000/carts/${jsonItemId}`, {
//     //       quantity: action.payload.quantity,
//     //       total: action.payload.quantity * updatedCartList[index].price,
//     //     })
//     //     .then((response) =>
//     //       console.log("Cart item updated successfully", response.data)
//     //     )
//     //     .catch((error) => console.error("Error updating cart:", error));

//     //   localStorage.setItem(
//     //     "cart",
//     //     JSON.stringify({ cartList: updatedCartList })
//     //   );

//     //   return {
//     //     ...state,
//     //     cartList: updatedCartList,
//     //     total: caleTotalPrice(updatedCartList),
//     //   };

//     case 'REMOVE_CART_ITEM':
//       const itemIdToRemove = action.payload.id;
//       updatedCartList = cartList.filter((item) => item.id !== itemIdToRemove);

//       // Update cart in local storage
//       localStorage.setItem(
//         'cart',
//         JSON.stringify({ cartList: updatedCartList })
//       );

//       return {
//         ...state,
//         cartList: updatedCartList,
//         total: caleTotalPrice(updatedCartList),
//       };

//     // Handle other cases as needed
//     // case "LOAD_CART":
//     //   return {
//     //     ...state,
//     //     cartList: action.payload.cartList,
//     //     total: caleTotalPrice(action.payload.cartList),
//     //   };

//     // Handle other cases as needed
//     default:
//       return state;
//   }
// };

const Shop = () => {
  //add to cart dispatch function
  // const [state, dispatch] = useReducer(cartReducer, { cartList: [] });
  //取得原始資料
  const [initData, setInitData] = useState([]);

  //create products card
  const ProductCard = (initData) => {
    return (
      <>
        <div className='col'>
          <div className='card mb-4 shadow-sm productCard'>
            <img
              key={initData._id}
              src={initData.filepath}
              className='card-img-top object-fit '
              alt={initData.productName}
            />
            <div className='card-body'>
              <p className='card-title'>
                {initData.productName}
                <span className='card-text float-end'>${initData.price}</span>
              </p>
              <div className='d-flex justify-content-between align-end  '>
                <p className='card-text'>Type: {initData.type}</p>
                <span className='card-text'>{initData.order}</span>
              </div>
              <div className='btns cardBtns'>
                <button
                // className={`btnHeart btn-purple-outline ${
                //   isProductFavorite ? 'favorited' : ''
                // }`}
                // onClick={() => toggleFavorite(productType.id)}
                >
                  <MdFavoriteBorder />
                </button>
                <button
                  type='button'
                  className=' btnCart'
                  // onClick={() => {
                  //   dispatch({
                  //     type: 'ADD_TO_CART',
                  //     payload: { ...productType, quantity: 1 },
                  //   });
                  // }}
                >
                  <CiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  // 取得資料 Use useEffect to set the initial state
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:8080/products/');

        // 从API响应中获取数据并更新状态变量
        setInitData(response.data);
        // setInitDatas(response.data);
        console.log('productsData:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  return (
    <div>
      <h1 className='mt-5 mb-4'>products list</h1>
      <div className='row'>
        {initData.map((data) => (
          <ProductCard
            key={data._id}
            img={data.filename}
            productName={data.productName}
            type={data.type}
            order={data.order}
            price={data.price}
          />
        ))}
        {/* <div className='col-md-5'>cart</div> */}
      </div>
    </div>
  );

  {
    /* {jsonData.map((data) => {
        return <CreateCard jsonData={data} key={data.id} />;
      })} */
  }
};

{
  /* function caleTotalPrice(cartList) {
  return cartList
    .map((item) => item.quantity * item.price)
    .reduce((a, b) => a + b, 0);
} */
}
export default Shop;
