import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
const Card = ({ cardInfo, index }) => {
  const contract = useSelector((state) => state.user.contractInstance)
  const [price,setPrice]=useState(0)
  // console.log(cardInfo.imageSource)
  useEffect(() => {
    const priceVideo1 = async () => {
      try {
        const num = Number(await contract.automatedPopularityMaker(index + 1))
        setPrice(num)
      }
      catch (e) {
        console.log(e)
      }
    }
    priceVideo1()
  }, [])
  //console.log(cardInfo[0]);
  return (
    <div className="my-4 w-full max-h-[27rem] bg-slate-200 rounded-xl p-4 shadow-2xl duration-300 hover:scale-105">
      {/* <img src={cardInfo.imageSource} alt="" className="mx-auto w-full h-[15rem]" /> */}
      <div className=" bg-gray-400 relative pt-[56.25%]">
        <ReactPlayer
          className="absolute top-0 left-0"
          url={
            "https://sapphire-brilliant-primate-963.mypinata.cloud/ipfs/" +
            cardInfo[0]
          }
          width="100%"
          height="100%"
          // controls={true}
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="py-2 text-center text-4xl font-bold">{cardInfo.name}</p>
        <p className="text-center text-2xl font-bold">NFT Rate {price / 1e6}</p>
      </div>
      <div className="flex  items-center">
        <p className="py-2 mx-2  text-2xl font-semibold text-gray-600">
          {cardInfo.discription}
        </p>
        <p className="text-center text-2xl font-semibold text-gray-600"></p>
      </div>

      {/* <div className="mt-8 text-center font-medium">
        <ol>
          <li>{cardInfo.storageCapacity}</li>
          <li>{cardInfo.usersAllowed}</li>
          <li>{cardInfo.sendUpTo}</li>
        </ol>
        <TextButton text="Start trial" type="secondary" />
      </div> */}
    </div>
  );
};

export default Card;
