import { createSlice } from "@reduxjs/toolkit";
const userLocal = localStorage.getItem("user") || "";
const contractInstanceLocal =
  localStorage.getItem("contractInstance") || "";
const balanceLocal = JSON.parse(localStorage.getItem("balance")) || "";
// const contractLocal = JSON.parse(localStorage.getItem("contract")) || "";
const providerLocal =localStorage.getItem("provider") || {};
const signerLocal = localStorage.getItem("signer") || {};
const initialState = {
  userAddress: userLocal,
  contractInstance: contractInstanceLocal,
  balance: balanceLocal,
  provider: providerLocal,
  signer: signerLocal,
};

const userInstance = createSlice({
  name: "user11",
  initialState,
  reducers: {
    setUserAddress: (state, action) => {
      state.userAddress = action.payload;
      localStorage.setItem("user", state.userAddress);
    },
    setContractInstance: (state, action) => {
      state.contractInstance = action.payload;
      localStorage.setItem(
        "contractInstance",
      state.contractInstance
      );
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
      localStorage.setItem("balance", JSON.stringify(state.balance));
    },
    setSigner: (state, action) => {
      state.signer = action.payload;
      localStorage.setItem("signer", state.signer);
    },
    setProvider: (state, action) => {
      state.provider = action.payload;
      localStorage.setItem("provider", state.provider);
    },
  },
});

export const {
  setUserAddress,
  setContractInstance,
  setBalance,
  setContract,
  setSigner,
  setProvider,
} = userInstance.actions;

export default userInstance.reducer;
