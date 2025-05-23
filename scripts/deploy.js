const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance), "ETH");

  const Lock = await ethers.getContractFactory("Lock");

  const unlockTime = Math.floor(Date.now() / 1000) + 60;

  const lock = await Lock.deploy(unlockTime, {
    value: ethers.parseEther("0.01"),
  });

  console.log("Contract deployed to:", lock.target); // برای ethers v6 باید از target استفاده کنی
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});