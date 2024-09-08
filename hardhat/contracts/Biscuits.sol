// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract EthBiscuits is ERC1155{

    // Variables :

    // Structure and mapping for User

    struct User{
        string name;
        address useraddress;
        uint256 subscribe;
        address[] subscribersAddress;
        uint256[] videoID;
    }
    mapping(address => User) users;
    

    // Structure and mapping for Videos

    uint256 private id=1;

    struct Video{
        string VideoURI;
        string ImageURI;
        string name;
        string discription;
        address owner;
        uint256 views;
        uint256 likes;
        uint256 dislikes;
        uint256 duration;
        bool gaming;
        bool movies;
        bool music;
        bool comedy;
        bool action;
        bool education;
        uint256 uploadDate;
    }
    mapping(uint256 => Video) videos;

    // Events :

    // Create Video Event:

    event VideoUploaded(
        uint256 id,
        string name,
        address owner,
        uint256 duration,
        bool gaming,
        bool movies,
        bool music,
        bool comedy,
        bool action,
        bool education,
        uint256 uploadDate
    );

    // // Update video Event:

    event Liked(
        uint256 likes,
        uint256 vid
    );

    event DisLiked(
        uint256 dislikes,
        uint256 vid
    );

    event View(
        uint256 View,
        uint256 vid
    );

    // Subscribe Event:

    event Subscribed(
        uint256 subscribe,
        address subscribedaddress
    );

    // Constructor :

    constructor() ERC1155("") {
        _mint(msg.sender,1,10000000000*10**6,"");
    }


    // Functions :

    // Upload Video Function    
    function uploadVideo(string memory _VideoURI, string memory _ImageURI, uint256 _duration, string memory _name, string memory _description, bool _gaming, bool _movies, bool _music, bool _comedy, bool _action, bool _education) external {
        id +=1;
        videos[id].VideoURI = _VideoURI;
        videos[id].ImageURI = _ImageURI;
        videos[id].owner = msg.sender;
        videos[id].name = _name;
        videos[id].discription = _description;
        videos[id].views = 0;
        videos[id].likes = 0;
        videos[id].dislikes = 0;
        videos[id].duration = _duration;
        videos[id].gaming = _gaming;
        videos[id].movies = _movies;
        videos[id].music = _music;
        videos[id].comedy = _comedy;
        videos[id].action = _action;
        videos[id].education = _education;
        videos[id].uploadDate = block.timestamp;

        _mint(msg.sender,id,1,bytes(""));

        users[msg.sender].videoID.push(id);

         emit VideoUploaded(
            id,
            _name, 
            msg.sender,
            _duration,
            _gaming,
            _movies,
            _music,
            _comedy,
            _action,
            _education,
            videos[id].uploadDate
        );

    }

    // Function to get users video
    function getUserVideo(address user) external view returns (Video[] memory){
        uint256[] memory vid = users[user].videoID;
        Video[] memory VideoList = new Video[](vid.length);
        for (uint256 i = 0; i <= vid.length-1; i++) {          
            VideoList[i]=Video(videos[vid[i]].VideoURI,videos[vid[i]].ImageURI,videos[vid[i]].name,videos[vid[i]].discription,videos[vid[i]].owner,videos[vid[i]].views,videos[vid[i]].likes,videos[vid[i]].dislikes, videos[vid[i]].duration,videos[vid[i]].gaming,videos[vid[i]].movies,videos[vid[i]].music,videos[vid[i]].comedy,videos[vid[i]].action,videos[vid[i]].education,videos[vid[i]].uploadDate);
        }

        return VideoList;
    }
    
    // Function to get all the videos
    function getALLVideos() external view returns (Video[] memory){
        Video[] memory VideoList = new Video[](id-1);

        for (uint256 i = 2; i <= id; i++) {
            VideoList[i-2]=Video(videos[i].VideoURI,videos[i].ImageURI,videos[i].name,videos[i].discription,videos[i].owner,videos[i].views,videos[i].likes,videos[i].dislikes,videos[i].duration,videos[i].gaming,videos[i].movies,videos[i].music,videos[i].comedy,videos[i].action,videos[i].education,videos[i].uploadDate);
        }

        return VideoList;
    }

    // Function to Change Authority
    function authorityChange(address newowner, uint256 videoId ) external {
        require(videos[videoId].owner == msg.sender, "You are not the owner of this video");
        require(balanceOf(msg.sender,videoId)>0,"You do not have video nft");
        safeTransferFrom(msg.sender, newowner, videoId, 1, bytes(""));
        videos[videoId].owner = newowner;
        uint256[] memory vididuser = new uint256[](users[msg.sender].videoID.length);
        for(uint256 i=0;i<users[msg.sender].videoID.length;i++){
            if(videoId!=users[msg.sender].videoID[i]){
                vididuser[i]=users[msg.sender].videoID[i];
            }
            else{
                vididuser[i]=0;
            }
        }
        // removed from previous user
        users[msg.sender].videoID = vididuser;

        // assigned to new user
        users[newowner].videoID.push(videoId);
    }

    // Like Fucntion
    function like(uint256 _VideoId) external{
        videos[_VideoId].likes++;

        emit Liked(
            videos[_VideoId].likes,
            _VideoId
        );
    }

    // Dislike Function
    function disLike(uint256 _VideoId) external{
        videos[_VideoId].dislikes++;

        emit DisLiked(
            videos[_VideoId].dislikes,
            _VideoId
        );
    }

    // Popukarity Checker Function
    function popularity(uint256 _VideoId) public view returns (uint256){
        // Vaibhav-Pandey-Khajuriya Equation
        uint256 popu = (10**6 +videos[_VideoId].likes);
        return popu;
    }

    // Automated Popularity Maker
    function automatedPopularityMaker(uint256 _VideoId) public view returns (uint256){
        uint256 price = videos[_VideoId].duration * popularity(_VideoId);
        return price;
    }

    // Fucntion to View Video
    function viewUpdate(uint256 _VideoId) external{
        uint256 price = automatedPopularityMaker(_VideoId);
        // console.log(price);
        videos[_VideoId].views++;
        safeTransferFrom(msg.sender, videos[_VideoId].owner, 1, price, "");
    }

    // Function to Subscribe
    function subscribe(address to) external{
        users[to].subscribe++;
        users[to].subscribersAddress.push(msg.sender);

        emit Subscribed(
            users[to].subscribe,
            to
        );
    }

    // Function to Register NEw User
    function registerUSer(string memory _name) external{
        users[msg.sender].name = _name;
        users[msg.sender].useraddress = msg.sender;
        users[msg.sender].subscribe = 0;
        _mint(msg.sender,1,20000*(10**6),"");
    }

    // Function to mint tokens
    function mintToken() external{
        _mint(msg.sender,1,10000*(10**6),"");
    }

    // View User Function
    function viewUser(address user) external view returns (User memory){
        return users[user];
    }

    // View Video Function
    function viewVideo(uint256 _id) external view returns (Video memory){
        return videos[_id];
    }

    function checkbalance(address user) external view returns (uint256){
        uint256 balance = balanceOf(user, 1);
        return balance;
    }
}