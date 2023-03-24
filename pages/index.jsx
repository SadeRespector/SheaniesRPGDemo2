

import {expABI, expContractAddress,contractAddress} from "../constants/constants.js"

import {NFTCard, App, LoadStats, GetEXPBalance} from "./components/nftCard"

import dynamic from 'next/dynamic';
import Web3 from 'web3';
import { Alchemy, Network } from "alchemy-sdk";

import React, { useState, useEffect } from "react";
//const WEB3 = dynamic(()=>{return import("web3")}, {ssr:false})

const Home = () => {
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('please install MetaMask');
      return;
    }
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
  
      const provider =  new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
  
      console.log('address', address)
    } catch (error) {
      console.log(error)
    }
  }
  

const config = {
  apiKey: "quC0Mx7uJsCxOZ3D4FulnvMG18TncygW",
  network: Network.MATIC_MUMBAI,
};
const alchemy = new Alchemy(config);
const contractAddresses = [];



    const mint = async () =>{
      await window.ethereum.enable();
            const web3 = new Web3(window.ethereum)
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const shauniesNFT = new web3.eth.Contract(abi, contractAddress) 
            await shauniesNFT.methods.mint().send({from: ethereum.selectedAddress})
    }
    const mintDickels = async () =>{
      await window.ethereum.enable();
            const web3 = new Web3(window.ethereum)
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const shauniesNFT = new web3.eth.Contract(expABI, expContractAddress) 
            await shauniesNFT.methods.mint(ethereum.selectedAddress, "100000000000000000000000000").send({from: ethereum.selectedAddress})
    }

  


      const onInit = async () => {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log(accounts[0])
        //console.log(account)
         window.ethereum.on('accountsChanged', function (accounts) {
            // Time to reload your interface with accounts[0]!
            return(
              account
              
            )
           });
    }
   
   
        

  
  // const collection = '0x3Bb1eE174fC8F0a4eBAC55A4C4860A62ba77c0c2'
  //const collection = "0x9f4FC01f18Cd418099c5E0C42d71AA41f8eb9824"
  const collection = "0x6f26186E0B3764ACC7e019f0aea7f74183168bc8"
  const [NFTs, setNFTs] = useState([])
  const [fetchForCollection, setFetchForCollection]=useState(false)
  

  const fetchNFTs = async(Address) => {
    let nfts; 
    console.log("fetching nfts");
    const api_key = "quC0Mx7uJsCxOZ3D4FulnvMG18TncygW"
    const baseURL = `https://polygon-mumbai.alchemyapi.io/v2/${api_key}/getNFTs/`;
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
    
    
    if (!collection.length) {
      var requestOptions = {
        method: 'GET'
      };
     
      const fetchURL = `${baseURL}?owner=${a}`;
  
      //nfts = await  await alchemy.nft.getNftsForOwner(window.ethereum.selectedAddress,contractAddresses[collection])
    } else {
      console.log("fetching nfts for collection owned by address")
      const fetchURL = `${baseURL}?owner=${account}&contractAddresses%5B%5D=${collection}`;
      nfts= await alchemy.nft.getNftsForOwner(window.ethereum.selectedAddress,{contractAddresses:[collection]})//.then(data => data.json());
    }

    if (nfts) {
      console.log("nfts:", nfts)
      setNFTs(nfts.ownedNfts)
    }
  }


  const fetchNFTsForCollection = async () => {
    if (collection.length) {
      var requestOptions = {
        method: 'GET'
      };
      const api_key = "quC0Mx7uJsCxOZ3D4FulnvMG18TncygW"
      const baseURL = `https://polygon-mumbai.alchemyapi.io/v2/${api_key}/getNFTsForCollection/`;
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
      const nfts = await alchemy.nft.getNftsForOwner("0xFa66077F595d9BB4a63cD31252E9f6D9a0aC9051",[collection]).then(data => data.json())
      if (nfts) {
        console.log("NFTs in collection:", nfts)
        setNFTs(nfts.nfts)
      }
    }
  }
 
 
  
  return (
    
    <div className="flex flex-col items-center justify-center py-8 gap-y-3 bg-gd-welcome "  >
      <div className="flex flex-col w-full justify-center items-center gap-y-2 bg-gd-welcome">
      <div class="inline-flex rounded-md shadow-sm" role="group">
        {/* <button ctype="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={connectWallet}>Connect Wallet</button> */}
       </div>
        {/* <input className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50" onChange={(e)=>{setCollectionAddress(e.target.value)}} value={collection} type={"text"} placeholder="Add the collection address"></input> */}
        {/* <label className="text-gray-600 "><input onChange={(e)=>{setFetchForCollection(e.target.checked)}} type={"checkbox"} className="mr-2"></input>Fetch for collection</label> */}
        {/* <button className={"py-5 px-5 bg-blue-500 w-44 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism"} onClick={ async () =>{ await onInit()}}>use me</button> */}
       
        <div class="inline-flex rounded-md shadow-sm" role="group">
        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={
         
         async () => {
          
          
          const Wallet = async () => {await onInit()}
            
          //  console.log(Wallet, "Button clicked")
          //   if (fetchForCollection) {
          //     fetchNFTsForCollection()
          //   }else 
            fetchNFTs(Wallet)
          }
        }>Show me my Seanies!
          
        </button>
        
        <a target={"_blank"} href={"https://ipfs.thirdwebcdn.com/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x6f26186E0B3764ACC7e019f0aea7f74183168bc8&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%7D"} class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" >
          Mint a test Sheanie
        </a>
        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={mintDickels}>
          Mint Some "Dickels"
        </button>
      </div>
        
      </div>
      
      <div className='flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center '>
        {
          NFTs.length && NFTs.map(nft => {
            return (
              
              <NFTCard nft={nft}></NFTCard>
              
            )
          })
        }
        
      </div>
      
     
      
      
      
    </div>
  )
}

export default Home