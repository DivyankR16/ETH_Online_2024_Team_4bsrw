// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ConsensusProtocol {
    address public moderator;
    uint256 public stakingAmount;
    uint256 public rewardAmount;

    enum Vote { Undecided, Approve, Reject }

    struct Video {
        address uploader;
        uint256 approvalCount;
        uint256 rejectCount;
        mapping(address => Vote) votes;
    }

    mapping(uint256 => Video) public videos;

    modifier onlyModerator() {
        require(msg.sender == moderator, "Only the moderator can call this function");
        _;
    }

    modifier videoExists(uint256 videoId) {
        require(videos[videoId].uploader != address(0), "Video does not exist");
        _;
    }

    modifier notUploader(uint256 videoId) {
        require(msg.sender != videos[videoId].uploader, "Uploader cannot participate in consensus");
        _;
    }

    event VideoUploaded(address uploader, uint256 videoId);
    event VoteCasted(address voter, uint256 videoId, Vote vote);
    event ConsensusReached(uint256 videoId, bool approved);

    constructor(uint256 _stakingAmount, uint256 _rewardAmount) {
        moderator = msg.sender;
        stakingAmount = _stakingAmount;
        rewardAmount = _rewardAmount;
    }

    function uploadVideo(uint256 ID) external {
        uint256 videoId = ID;
        videos[videoId].uploader = msg.sender;
        videos[videoId].approvalCount = 0;
        videos[videoId].rejectCount = 0;

        emit VideoUploaded(msg.sender, videoId);
    }

    function castVote(uint256 videoId, Vote vote) external videoExists(videoId) notUploader(videoId) {
        require(videos[videoId].votes[msg.sender] == Vote.Undecided, "You have already voted");

        videos[videoId].votes[msg.sender] = vote;

        if (vote == Vote.Approve) {
            videos[videoId].approvalCount++;
        } else if (vote == Vote.Reject) {
            videos[videoId].rejectCount++;
        }

        emit VoteCasted(msg.sender, videoId, vote);
        checkConsensus(videoId);
    }

    function checkConsensus(uint256 videoId) internal {
        Video storage video = videos[videoId];

        if (video.approvalCount > video.rejectCount) {
            // Consensus reached, reward the uploader
            // IERC20(StakeToken).transfer(video.uploader, rewardAmount);
            emit ConsensusReached(videoId, true);
        } else if (video.rejectCount >= video.approvalCount) {
            // Consensus not reached, slash the staking amount
            // IERC20(StakeToken).transferFrom(msg.sender, address(this), stakingAmount);
            emit ConsensusReached(videoId, false);
        }
    }
}
