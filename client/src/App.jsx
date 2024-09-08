import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages/Landing";
import DashLayout from './layouts/Dashboard'
import Profile from "./pages/dashboard/Profile";
import Home from "./pages/dashboard/Home";
import {
  setUserAddress,
  setBalance,
  setContract,
  setSigner,
  setContractInstance,
} from "../src/reducers/userinstance";
// import BiscuitFactory from "../../../../hardhat/artifacts/contracts/Biscuits.sol/EthBiscuits.json";
import BiscuitFactory from "../../hardhat/artifacts/contracts/Biscuits.sol/EthBiscuits.json"
import { ethers } from "ethers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import UploadVideo from "./pages/dashboard/UploadVideo";
import Subscribed from "./pages/dashboard/Subscribed";
import Analytics from "./pages/dashboard/Analytics";
// import YourVideos from "./pages/dashboard/YourVideos";
import YourVideos from "./pages/dashboard/YourVideos";
import Videopage from "./pages/Videopage";
const networks = {
  polygon: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: [
      "https://polygon-mumbai.node.krypcore.io/api/v0/rpc?apiKey=003b0cc9-d331-4f16-ad0e-76008e327c49&token=3fc1ff34-12d1-4484-9b53-171420d24c9a",
    ],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};
function App() {
  //  const navigate = useNavigate();
   const dispatch = useDispatch();
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xb34bE2b5EE55BE38754a1C3CD226264588ab3Eb9";
      const contractABI = BiscuitFactory.abi;
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        if (provider.network !== "matic") {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                ...networks["polygon"],
              },
            ],
          });
        }
        const account = provider.getSigner();
        const Address = await account.getAddress();
        dispatch(setUserAddress(Address));
        const Balance = ethers.utils.formatEther(await account.getBalance());
        console.log("Balance is: ", Balance);
        dispatch(setBalance(Balance));
        // setNav(true)
        //  const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(contract);
        console.log(signer);
        dispatch(setContractInstance(contract));
        dispatch(setSigner(signer));
        //setNav(true)
      } else {
        // navigate("/");
      }
    };
    connectWallet();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/video/:id/:id1" element={<Videopage/>} />
          {/* <Route path="/searchVideo" element={<SearchVideo />} />
          <Route path="/video" element={<Video />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/insmetamask" element={<ErrorPage />} /> */}
          {/* <Route path="/test" element={<Test />} /> */}
          {/* <Route path="/upload" element={<UploadVideo />} />
          <Route path='/single' element={<SingleVideo/>}/> */}
          <Route element={<DashLayout />}>
            <Route
              path="/dashboard"
              element={<Navigate to="/dashboard/home" replace />}
            />
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/yourvideos" element={<YourVideos />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/uploadvideo" element={<UploadVideo />} />
            <Route path="/dashboard/subscribed" element={<Subscribed />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
