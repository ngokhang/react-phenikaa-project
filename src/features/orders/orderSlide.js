import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  deleteOrder,
  getOrderList,
  postCreateOrder,
  putUpdateOrder,
  checkoutOrder,
} from '../../shared/services/http-client';
import axiosInstance from '../../shared/services/http-client';
const initialState = {
  orderList: [],
  quantityOrders: 0,
  quantityProduct: 1,
};

export const fetchOrdereList = createAsyncThunk(
  'orders/getOrderList',
  async userId => {
    const response = await getOrderList(userId);
    return response.data;
  }
);


export const updateOrder = createAsyncThunk(
  'orders/updateOrder',
  async ({ orderId, quantity, userId }) => {
    const res = await putUpdateOrder(orderId, quantity);
  }
);

export const deleteOrderAPI = createAsyncThunk(
  'orders/deleteOrder',
  async ({ orderId, userId }) => {
    const res = await deleteOrder(orderId);
  }
);

export const createOrderAPI = createAsyncThunk(
  'orders/createOrder',
  async ({ quantity, product, user, total }) => {
    const res = await postCreateOrder(quantity, product, user, total);
    await getOrderList(user);
  }
);
export const checkoutOrderAPIs = createAsyncThunk(
  'orders/checkoutOrderAPI',
  async ({ orders, total, userID }, thunkAPI) => {
    const orderIDs = orders.map(order => order.id);
    
    try {
      const data = {
        total: total,
        orders: orderIDs,
      };
      await Promise.all([
        axiosInstance.post('/payments', { data }),
        ...orders.map(order => axiosInstance.delete(`/orders/${order.id}`))
      ]);

      await thunkAPI.dispatch(fetchOrdereList(userID));
    } catch (error) {
      console.log(error);
    }
  }
);


export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.orderList.splice(action.payload, 1);
    },
    increaseQuantity: state => {
      state.quantityOrders = state.quantityOrders + 1;
    },
    decreaseQuantity: state => {
      state.quantityOrders = state.quantityOrders - 1;
    },
    updateWhenRemoveQuantityOrder: (state, action) => {
      state.quantityOrders =
        state.quantityOrders -
        state.orderList[action.payload].attributes.quantity;
    },
    getQuantityProduct: (state, action) => {
      state.quantityProduct =
        state.orderList[
          state.orderList.findIndex(
            item => item.attributes.product.data.id === action.payload
          )
        ].attributes.quantity;
    },
    decreaseQuantityProduct: state => {
      state.quantityProduct = state.quantityProduct - 1;
    },
    increaseQuantityProduct: state => {
      state.quantityProduct = state.quantityProduct + 1;
    },
  },
  extraReducers: {
    [fetchOrdereList.pending]: (state, action) => {},
    [fetchOrdereList.fulfilled]: (state, action) => {
      state.orderList = action.payload;
      state.quantityOrders = state.orderList.reduce((curr, next) => {
        return next.attributes.quantity + curr;
      }, 0);
    },
  },
});

export const {
  removeQuantityZero,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  updateWhenRemoveQuantityOrder,
  getQuantityProduct,
  decreaseQuantityProduct,
  increaseQuantityProduct,
} = orderSlice.actions;

export default orderSlice.reducer;
