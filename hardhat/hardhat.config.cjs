require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: "./.env.local" });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const privateKey = process.env.WALLET_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      url: process.env.RPC_URL_KEY,
      accounts: [privateKey],
    },
  },
  paths: {
    artifacts: "./artifacts",
  },
};
