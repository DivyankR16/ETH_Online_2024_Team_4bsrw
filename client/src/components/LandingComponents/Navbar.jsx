import React, { useState,useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ReactLogo from "./ReactLogo";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setUserAddress,
  setBalance,
  setContract,
  setSigner,
  setContractInstance,
} from "../../reducers/userinstance";
// import BiscuitFactory from "../../../hardhat/artifacts/contracts/EthBiscuits.sol/EthBiscuits.json";
import BiscuitFactory from "../../../../hardhat/artifacts/contracts/Biscuits.sol/EthBiscuits.json"
//  const networks = {
//    polygon: {
//      chainId: `0x${Number(80001).toString(16)}`,
//      chainName: "Polygon Testnet",
//      nativeCurrency: {
//        name: "MATIC",
//        symbol: "MATIC",
//        decimals: 18,
//      },
//      rpcUrls: [
//        "https://polygon-mumbai.node.krypcore.io/api/v0/rpc?apiKey=003b0cc9-d331-4f16-ad0e-76008e327c49&token=3fc1ff34-12d1-4484-9b53-171420d24c9a",
//      ],
//      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
//    },
//  };
const Navbar = () => {
  const address = useSelector((state) => state.user.userAddress);
  const balance = useSelector((state) => state.user.balance);
  console.log(balance)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // window.ethereum.on("accountsChanged", async function (accounts) {
  //   const connectWallet = async () => {
  //     const contractAddress = "0xb39C387b2DB8E264F8fD16e4FccD60E347C5fD97";
  //     const contractABI = BiscuitFactory.abi;
  //     if (window.ethereum) {
  //       await window.ethereum.request({ method: "eth_requestAccounts" });
  //       const provider = new ethers.providers.Web3Provider(
  //         window.ethereum,
  //         "any"
  //       );
  //       if (provider.network !== "matic") {
  //         await window.ethereum.request({
  //           method: "wallet_addEthereumChain",
  //           params: [
  //             {
  //               ...networks["polygon"],
  //             },
  //           ],
  //         });
  //       }
  //       const account = provider.getSigner();
  //       const Address = await account.getAddress();
  //       dispatch(setUserAddress(Address));
  //       const Balance = ethers.utils.formatEther(await account.getBalance());
  //       console.log("Balance is: ", Balance);
  //       dispatch(setBalance(Balance));
  //       // setNav(true)
  //       //  const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();

  //       const contract = new ethers.Contract(
  //         contractAddress,
  //         contractABI,
  //         signer
  //       );
  //       console.log(contract);
  //       console.log(signer);
  //       dispatch(setContractInstance(contract));
  //       dispatch(setSigner(signer));
  //       //setNav(true)
  //     } else {
  //       navigate("/");
  //     }
  //   };
  //   connectWallet();
  // });
  // useEffect(() => {
  //   const connectWallet = async () => {
  //     const contractAddress = "0xb39C387b2DB8E264F8fD16e4FccD60E347C5fD97";
  //     const contractABI = BiscuitFactory.abi;
  //     if (window.ethereum) {
  //       await window.ethereum.request({ method: "eth_requestAccounts" });
  //       const provider = new ethers.providers.Web3Provider(
  //         window.ethereum,
  //         "any"
  //       );
  //       if (provider.network !== "matic") {
  //         await window.ethereum.request({
  //           method: "wallet_addEthereumChain",
  //           params: [
  //             {
  //               ...networks["polygon"],
  //             },
  //           ],
  //         });
  //       }
  //       const account = provider.getSigner();
  //       const Address = await account.getAddress();
  //       dispatch(setUserAddress(Address));
  //       const Balance = ethers.utils.formatEther(await account.getBalance());
  //       console.log("Balance is: ", Balance);
  //       dispatch(setBalance(Balance));
  //       // setNav(true)
  //       //  const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();

  //       const contract = new ethers.Contract(
  //         contractAddress,
  //         contractABI,
  //         signer
  //       );
  //       console.log(contract);
  //       console.log(signer);
  //       dispatch(setContractInstance(contract));
  //       dispatch(setSigner(signer));
  //       //setNav(true)
  //     } else {
  //       navigate("/");
  //     }
  //   };
  //   connectWallet()
  // },[])
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  // const [ConnectWallet,setConnectWallet]=useState(true);
  return (
    <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-4 text-white">
      <Link to='/'>
        {" "}
        <img src="/assets/ip.png" width='200px' height='200px'/>
      </Link>
      <div className="hidden md:flex items-center">
        <Link className="header-link mx-4">Home</Link>
        <Link className="header-link mx-4">About Us</Link>

        {address === "" && balance === "" ? (
          <button
            className="bg-white text-gray-800 px-6 py-2 rounded-full"
          >
            Connect Wallet
          </button>
        ) : (
          <>
            <Link to="/dashboard/home" className="header-link mx-4">
              Dashboard
            </Link>
            <p className="text-gray-900 font-semibold  bg-slate-300 px-6 py-2 rounded-full">
              Address: <span>{address.slice(0, 6)}</span>{" "}
              <span className="font-extrabold text-2xl">&nbsp;&nbsp;||</span>
              &nbsp;&nbsp; {balance.slice(0, 4)} Matic
            </p>
          </>
        )}
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] max-w-[300px] border-r border-gray-800 bg-gray-950 duration-500 ease-in-out"
            : "fixed left-[-100vw]"
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-emerald-400">
          Navbar
        </h1>
        <ul className="flex-col  ">
          <Link className="header-link mx-4 my-2 block">Home</Link>
          <Link className="header-link mx-4  my-2 block">About Us</Link>

          {address === "" && balance === "" ? (
            <button
              className="bg-white text-gray-800 px-6 py-2 rounded-full"
            >
              Connect Wallet
            </button>
          ) : (
            <>
              <Link className="header-link mx-4 block my-2">Dashboard</Link>
              <p className="text-gray-900 font-semibold  bg-slate-300 px-6 py-2 rounded-full">
                Address: <span>{address.slice(0, 6)}</span>{" "}
                <span className="font-extrabold text-2xl">&nbsp;&nbsp;||</span>
                &nbsp;&nbsp; {balance.slice(0, 4)} Matic
              </p>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
