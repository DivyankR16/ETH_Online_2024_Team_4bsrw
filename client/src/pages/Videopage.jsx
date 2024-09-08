import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/LandingComponents/Navbar';
import Footer from '../components/LandingComponents/Footer';
import { AiTwotoneLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
const Videopage = () => {
  const contract=useSelector((state)=>state.user.contractInstance)
  const { id,id1 } = useParams();
  // console.log(id)
  const handlelike = () => { }
  const handledislike = () => { }
  const handlePlay = async () => {
    const options = {
      gasLimit: 3000000, // Set an appropriate gas limit for your transaction
    };
      await contract.viewUpdate(id1,options)
  }
  // console.log(id);
  const urlll=`https://sapphire-brilliant-primate-963.mypinata.cloud/ipfs/${id}`
    return (
      <div className="bg-gray-950">
        <Navbar />
        <div className="max-w-full p-[3rem]">
          <div className=" bg-gray-400 relative pt-[56.25%]">
            <ReactPlayer
              className="absolute top-0 left-0"
              url={urlll}
              width="100%"
              height="100%"
              controls={true}
              onPlay={handlePlay}
            />
          </div>
          <div className="mt-3 p-3 rounded-xl bg-gray-1000">
            <div className="flex justify-between">
              <div className="flex justify-normal">
                <p
                  onClick={handlelike}
                  className="mr-2 font-semibold text-white text-4xl"
                >
                  Video Title
                </p>
                <p
                  onClick={handledislike}
                  className="ml-2 font-semibold text-white text-4xl "
                >
                  2 Coin DCT
                </p>
              </div>
              <div className="flex justify-normal">
                <p className="mr-2 cursor-pointer font-semibold text-white  flex justify-center items-center rounded-full text-2xl bg-slate-600 py-3 px-4 ">
                  <AiTwotoneLike />
                </p>
                <p className="mr-2 cursor-pointer font-semibold text-white  flex justify-center items-center rounded-full text-2xl bg-slate-600 py-3 px-4 ">
                  <AiFillDislike />
                </p>
              </div>
            </div>

            <div className=" bg-gray-950 mt-4">
              <div className=" flex  m-2 justify-between">
                <p className="font-semibold text-white text-2xl">Owner Name</p>
                <p className="font-semibold text-white text-2xl">
                  Owner Address
                </p>
              </div>
              <div className=" flex  m-2 justify-between">
                <p className="font-semibold text-white text-1xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam iste quas blanditiis pariatur commodi accusantium,
                  quasi debitis, molestiae vel natus ad aliquam veritatis quod
                  labore in quidem dolores quisquam eum! commodi accusantium,
                  quasi debitis, molestiae vel natus ad aliquam veritatis quod
                  labore in quidem dolores quisquam eum!
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <Footer />
      </div>
    );
}

export default Videopage