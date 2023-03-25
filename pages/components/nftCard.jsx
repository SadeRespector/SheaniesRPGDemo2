
import styles from "/styles/Home.module.css";

const contractAddressTest = '0x6f26186E0B3764ACC7e019f0aea7f74183168bc8'
 const battlerContract = "0xCdB2bc313C5bA979110bD1c71e75A0Cd38b2F2ad"
const battlerABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "inductShaunie",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "moveIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tmId",
				"type": "uint256"
			}
		],
		"name": "moveSetChange",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "randomWords",
				"type": "uint256[]"
			}
		],
		"name": "rawFulfillRandomWords",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "subscriptionId",
				"type": "uint64"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "have",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "want",
				"type": "address"
			}
		],
		"name": "OnlyCoordinatorCanFulfill",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "tokenIsEntered",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "randomWords",
				"type": "uint256[]"
			}
		],
		"name": "RequestFulfilled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "numWords",
				"type": "uint32"
			}
		],
		"name": "RequestSent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "requestStats",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_shauniesAddress",
				"type": "address"
			}
		],
		"name": "setShauniesaddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tmAddress",
				"type": "address"
			}
		],
		"name": "setTMAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "setTokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "characters",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "Level",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "hp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Atk",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "spAtk",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Def",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "spDef",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Speed",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "enteredIds",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastRequestId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "requestIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "s_requests",
		"outputs": [
			{
				"internalType": "bool",
				"name": "fulfilled",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "Level",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "hp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Atk",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "spAtk",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Def",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "spDef",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Speed",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "viewMoves",
		"outputs": [
			{
				"internalType": "uint256[4]",
				"name": "",
				"type": "uint256[4]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "viewStats",
		"outputs": [
			{
				"internalType": "uint256[7]",
				"name": "",
				"type": "uint256[7]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


const expABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContract",
				"type": "address"
			}
		],
		"name": "setContractAsAuthorizedMinter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
 const expContractAddress = "0x43078Ec1D37F0F0F042aa22bE8Bd0b0408e032b0"
 const TMAddress = "0x64097C118e7653D2f70c823ACE11342d21D39B4E"
 const TMABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tmId",
				"type": "uint256"
			}
		],
		"name": "getTmNum",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTokenIds",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tms",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "TMnumber",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

import Web3 from "web3";
import { useState, useEffect } from 'react'

import {ethers} from 'ethers'
import { contractAddress } from "../../constants/constants";
export function GetEXPBalance() {
  
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        const loadPost = async () => {
            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum)
            await window.ethereum.request({ method: "eth_requestAccounts" });
            
            const EXP = new web3.eth.Contract(expABI, expContractAddress)  
           
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its result
            const response = await EXP.methods.balanceOf(window.ethereum.selectedAddress).call({from: ethereum.selectedAddress})
            // After fetching data stored it in posts state.
            const balance = ethers.utils.formatEther( response )

            setPosts(balance);
  
            // Closed the loading page
            setLoading(false);
            console.log(balance, "this is the balance")
        }
  
        // Call the function
        loadPost();
    }, []);
  
    return (
<div><p className="py-1 px-1 justify-left bg-grey-500 w-13 h-100 text-left rounded-full text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism">Dickels:{posts}</p></div>
       
    );
}
const inductSeanie = async (tokenId) =>{
    await window.ethereum.enable();
          const web3 = new Web3(window.ethereum)
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const shauniesNFT = new web3.eth.Contract(battlerABI, battlerContract) 
          await shauniesNFT.methods.inductShaunie(tokenId).send({from: ethereum.selectedAddress})
  }
  const levelUp = async (tokenId) =>{
    await window.ethereum.enable();
          const web3 = new Web3(window.ethereum)
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const shauniesNFT = new web3.eth.Contract(battlerABI, battlerContract) 
          await shauniesNFT.methods.requestStats(tokenId).send({from: ethereum.selectedAddress})
  }
  export function Header() {
  
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        const loadPost = async () => {
            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum)
            await window.ethereum.request({ method: "eth_requestAccounts" });
            
            
           
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its result
            //const response = await EXP.methods.balanceOf(window.ethereum.selectedAddress).call({from: ethereum.selectedAddress})
            // After fetching data stored it in posts state.
            const connectedWallet = window.ethereum.selectedAddress  

            setPosts(connectedWallet);
  
            // Closed the loading page
            setLoading(false);
            console.log(connectedWallet, "this is the balance")
        }
  
        // Call the function
        loadPost();
    }, []);
  
    return (
        <button type="button" className="py-1 px-1 justify-left bg-grey-500 w-13 h-100 text-left rounded-full text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism" >{posts}</button>
       
    );
}
  




// export function App(tokenId) {
  
//     const [loading, setLoading] = useState(false);
//     const [posts, setPosts] = useState([]);
  
//     useEffect(() => {
//         const loadPost = async () => {
//             await window.ethereum.enable();
//             const web3 = new Web3(window.ethereum)
//             await window.ethereum.request({ method: "eth_requestAccounts" });
//             const shauniesNFT = new web3.eth.Contract(abi, contractAddress)  
           
//             // Till the data is fetch using API 
//             // the Loading page will show.
//             setLoading(true);
  
//             // Await make wait until that 
//             // promise settles and return its result
//             const response = await shauniesNFT.methods.TOKEN_URI().call({from: ethereum.selectedAddress})
//             // After fetching data stored it in posts state.
//             setPosts(response);
  
//             // Closed the loading page
//             setLoading(false);
//             //console.log(posts)
//         }
  
//         // Call the function
//         loadPost();
//     }, []);
  
//     return (
//         posts
       
//     );
// }
export function LoadStats(tokenId) {
  
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        const loadPost = async () => {
            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum)
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const RPGimporttes = new web3.eth.Contract(battlerABI, battlerContract)  
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its result
            const response = await RPGimporttes.methods.tokenIds(tokenId).call({from: ethereum.selectedAddress})
            // After fetching data stored it in posts state.
            setPosts(response);
  
            // Closed the loading page
            setLoading(false);
            console.log(posts)
        }
  
        // Call the function
        loadPost();
    }, []);
  
    return (
        posts
    );
}

 


    

export const NFTCard = ({ nft }) => {
  
    
    
    
    
        
    
    const Input = ({ placeholder, name, type, value, handleChange }) => (
        <input
          placeholder={placeholder}
          type={type}
          step="0.0001"
          value={value}
          onChange={(e) => handleChange(e, name)}
          className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
      );

      
        

    //   const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
    
    return (
        
        <div className="w-1/4 flex flex-col blue-glassmorphism  ">
            
        <div className="rounded-md blue-glassmorphism" >
        
        {/* <img className="object-cover h-128 w-full rounded-t-md" src={App(nft.id.tokenId)} ></img> */}
            <img className="object-cover h-128 w-full rounded-t-md" src={`https://bafybeib2nrxj63id5m7j4markx476fn7ljundfhc52ilv73jf7eesvvlzu.ipfs.dweb.link/${nft.tokenId}.png`}></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-transparent rounded-b-md h-110 blue-glassmorphism ">
            <div className="bg-transparent blue-glassmorphism">
                <h2 className="text-xl text-white flex justify-center">{nft.title}</h2>
				
                {/* <p className="text-white flex justify-center mb-1">Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 1)}</p>  */}
                <p className="text-white flex justify-center mb-1">Level: {LoadStats(nft.tokenId)[0]}</p>
                {/* <p className="text-white flex justify-center mb-1" >TokenId: {nft.tokenId}</p> */}
            </div>

            <div className="flex flex-col y-gap-2 px-2 py-3 bg-transparent rounded-t-medium h-110 blue-glassmorphism ">
                {/* <p className="text-gray-600">{nft.description}</p> */}
                
                <p className="text-white flex justify-center mb-1">HP: {LoadStats(nft.tokenId)[1]}</p> 
                <p className="text-white flex justify-center mb-1">Attack: {LoadStats(nft.tokenId)[2]}</p> 
                <p className="text-white flex justify-center mb-1">Special Attack: {LoadStats(nft.tokenId)[3]}</p> 
                <p className="text-white flex justify-center mb-1">Defense: {LoadStats(nft.tokenId)[4]}</p> 
                <p className="text-white flex justify-center mb-1">Special Defense: {LoadStats(nft.tokenId)[5]}</p>
                <p className="text-white flex justify-center mb-1">Speed: {LoadStats(nft.tokenId)[6]}</p>  
            </div>
            
            
            <div className="flex justify-center mb-1">
            {/* <button className="py-1 px-2 bg-blue-500 w-22 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism" onClick={(e)=>{inductSeanie(nft.tokenId)}}>Induct me!</button> */}
            </div>
            <div className="flex justify-center mb-1">
                
            <button className="py-1 px-2 bg-blue-500 w-22 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism" onClick={(e)=>{levelUp(nft.tokenId)}}>Level Me up!</button>
            {/* <button className="py-1 px-2 bg-blue-500 w-22 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism" onClick={(e)=>{levelUp(nft.id.tokenId)}}>Level Me up!</button> */}
            </div>
			<div className="flex justify-center mb-1">
                
                <a target={"_blank"} href={`https://mumbai.polygonscan.com/token/${nft.contract.address}?a=${nft.tokenId}`} className="py-2 px-2 bg-blue-500 w-22 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism">Polygon scan</a>
                
            </div>
            <div>
                
            </div>
        </div>

    </div>
    )
}

export const dropDownMenu = () =>{
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
	  setOpen(!open);
	};
  
	const handleMenuOne = () => {
	  // do something
	  setOpen(false);
	};
  
	const handleMenuTwo = () => {
	  // do something
	  setOpen(false);
	};
  
	return (
	  <div className="dropdown">
		<button onClick={handleOpen}>Dropdown</button>
		{open ? (
		  <ul className="menu">
			<li className="menu-item">
			  <button onClick={handleMenuOne}>Menu 1</button>
			</li>
			<li className="menu-item">
			  <button onClick={handleMenuTwo}>Menu 2</button>
			</li>
		  </ul>
		) : null}
	  </div>
	);
  };
  
  

export default function Home1() {
    return <>{/* nothing */}</>;
  }




