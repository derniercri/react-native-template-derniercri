import { configureStore, createSlice } from 'redux-starter-kit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
