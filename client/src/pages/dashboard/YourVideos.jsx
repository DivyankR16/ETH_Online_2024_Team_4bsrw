// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import { useSelector } from "react-redux";
// import ScrollableFeed from "react-scrollable-feed";
// import SingleUserImage from "../../assets/single_user.png";
// import PartnershipImage from "../../assets/partnership.png";
// import GroupAccountImage from "../../assets/group_account.png";
// import TextButton from "./TextButton";
// import { Link } from "react-router-dom";

// const Videos = () => {
//   const contract = useSelector((state) => state.user.contractInstance);
//   // console.log(contract);
//   const [videos, setVideos] = useState([]);
//   // console.log(videos);
//   // useEffect(() => {
//   //   const allvide = async () => {
//   //     try {
//   //       const arr = await contract.get();
//   //       // console.log(arr);
//   //       setVideos(arr);
//   //     } catch (e) {
//   //       console.log(e);
//   //     }
//   //   };
//   //   allvide();
//   // }, [contract]);
//   // console.log(videos);
//   return (
//     <>
//       <div className="w-full bg-black  flex justify-center px-4 py-6">
//         <p className="max-w-sm flex justify-center  bg-emerald-400 px-[20rem] py-4 my-[2rem] font-semibold text-white text-5xl rounded-full">
//           <span>Trending</span>&nbsp; <span>Videos</span>
//         </p>
//       </div>

//       <div className="w-full bg-black px-[5rem] py-10">
//         <div className="mx-auto grid max-w-screen-3xl gap-10 md:grid-cols-3">
//           {videos.map((cardData, index) => (
//             <Link key={index} to={`/video/${cardData.VideoURI}`}>
//               <Card cardInfo={cardData} index={index} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Videos;
import React from 'react'

const YourVideos = () => {
  return (
    <div>YourVideos</div>
  )
}

export default YourVideos
