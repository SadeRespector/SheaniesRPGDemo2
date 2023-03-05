

import {expABI, expContractAddress,abi,contractAddress} from "../constants/constants.js"

import {NFTCard, App, LoadStats, GetEXPBalance} from "./components/nftCard"

import dynamic from 'next/dynamic';
import Web3 from 'web3';


import React, { useState, useEffect } from "react";
//const WEB3 = dynamic(()=>{return import("web3")}, {ssr:false})

const Home = () => {


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
  const collection = "0x9f4FC01f18Cd418099c5E0C42d71AA41f8eb9824"
  const [NFTs, setNFTs] = useState([])
  const [fetchForCollection, setFetchForCollection]=useState(false)
  

  const fetchNFTs = async(Address) => {
    let nfts; 
    console.log("fetching nfts");
    const api_key = "eSmunca2n2fFJN6CvHqybikEWm9J-ypS"
    const baseURL = `https://eth-goerli.alchemyapi.io/v2/${api_key}/getNFTs/`;
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
    
    
    if (!collection.length) {
      var requestOptions = {
        method: 'GET'
      };
     
      const fetchURL = `${baseURL}?owner=${a}`;
  
      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    } else {
      console.log("fetching nfts for collection owned by address")
      const fetchURL = `${baseURL}?owner=${account}&contractAddresses%5B%5D=${collection}`;
      nfts= await fetch(fetchURL, requestOptions).then(data => data.json())
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
      const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM"
      const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTsForCollection/`;
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
      const nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
      if (nfts) {
        console.log("NFTs in collection:", nfts)
        setNFTs(nfts.nfts)
      }
    }
  }
 
 
  
  return (
    
    <div className="flex flex-col items-center justify-center py-8 gap-y-3 bg-gd-welcome "  >
      <div className="flex flex-col w-full justify-center items-center gap-y-2 bg-gd-welcome">
      
        {/* <input className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50" onChange={(e)=>{setCollectionAddress(e.target.value)}} value={collection} type={"text"} placeholder="Add the collection address"></input> */}
        {/* <label className="text-gray-600 "><input onChange={(e)=>{setFetchForCollection(e.target.checked)}} type={"checkbox"} className="mr-2"></input>Fetch for collection</label> */}
        {/* <button className={"py-5 px-5 bg-blue-500 w-44 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism"} onClick={ async () =>{ await onInit()}}>use me</button> */}
       
        <div class="inline-flex rounded-md shadow-sm" role="group">
        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={
         
         async () => {
          
          
          const Wallet = async () => {await onInit()}
            
           console.log(Wallet, "Button clicked")
            if (fetchForCollection) {
              fetchNFTsForCollection()
            }else fetchNFTs(Wallet)
          }
        }>Show me my Seanies!
          
        </button>
        
        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={mint}>
          Mint a test Sheanie
        </button>
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