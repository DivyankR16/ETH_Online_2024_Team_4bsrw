import React,{useEffect,useState} from 'react'
import Card from './Card';
import { useSelector } from "react-redux";
import ScrollableFeed from 'react-scrollable-feed'
import SingleUserImage from "../../assets/single_user.png"
import PartnershipImage from "../../assets/partnership.png";
import GroupAccountImage from "../../assets/group_account.png";
import TextButton from "./TextButton";
import { Link } from 'react-router-dom';
class CardInfo {
    constructor(
      link,
      imageSource,
      title,
      price,
      storageCapacity,
      usersAllowed,
      sendUpTo,
    ) {
      this.link=link;
      this.imageSource = imageSource;
      this.title = title;
      this.price = "$" + price;
      this.storageCapacity = storageCapacity + " Storage";
      this.usersAllowed = usersAllowed;
      this.sendUpTo = "Send up to " + sendUpTo;
    }
  }
const cardDataArray = [
    new CardInfo(
        "https://youtu.be/WdzaSSG70Jo?si=SIyV2B8Yidr8mlXR",
        "https://i.ytimg.com/vi/YgoSbPyVYw4/maxresdefault.jpg",
      "Single User",
      149,
      "500 GB",
      "1 Granted User",
      "2 GB"
    ),
    new CardInfo(
       "",
      PartnershipImage,
      "Partnership",
      199,
      "1 TB",
      "3 Users Allowed",
      "10 GB"
    ),
    new CardInfo(
        "",
        GroupAccountImage,
      "Group Account",
      299,
      "5 TB",
      "10 Users allowed",
      "20 GB"
    ),
    new CardInfo(
      "",
      SingleUserImage,
      "Single User",
      149,
      "500 GB",
      "1 Granted User",
      "2 GB"
    ),
    new CardInfo(
      "",
      PartnershipImage,
      "Partnership",
      199,
      "1 TB",
      "3 Users Allowed",
      "10 GB"
    ),
    new CardInfo(
      "",
      GroupAccountImage,
      "Group Account",
      299,
      "5 TB",
      "10 Users allowed",
      "20 GB"
    ),
  ];
const Videos = ({videos}) => {
  console.log(videos)
  return (
    <>
    <div className='w-full bg-black  flex justify-center px-4 py-6'>
        <p className='max-w-sm flex justify-center  bg-emerald-400 px-[20rem] py-4 my-[2rem] font-semibold text-white text-5xl rounded-full'><span>Trending</span>&nbsp; <span>Videos</span></p>
    </div>

    <div className="w-full bg-black px-[5rem] py-10">
      <div className="mx-auto grid max-w-screen-3xl gap-10 md:grid-cols-3">
          {videos.map((cardData, index) => (
        
          <Link key={ index} to={`/video/${cardData.VideoURI}/${index}`}>
          <Card cardInfo={cardData} index={index} />
          </Link>
        ))}
      </div>
    </div>
    
    </>
    
  )
}

export default Videos