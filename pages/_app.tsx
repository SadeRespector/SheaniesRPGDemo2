import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { NFTCard} from './components/nftCard';


import "./index.css";
import { GetEXPBalance, Header } from './components/nftCard';






function MyApp({ Component, pageProps }: AppProps) {
  return (
   
    <div className="relative h-32 w-128 py-20 min-h-screen gradient-bg-welcome">
<div className="absolute top-0 right-0">
<GetEXPBalance />
</div>
  <div className="absolute inset-x-0 top-0 h-16 text-white flex justify-center mb-1">Seanies on Polygon Testnet!</div>
 
 
 <div className="min-h-screen gradient-bg-welcome">

  <Component {...pageProps} />

  
    </div>
    <div className='relative bottom-0 gradient-bg-welcome'>
  <div className='text-blue-300 md:text-green-300" flex justify-center'>
    
    <ul className='text-lg '>
      <li className='flex justify-center'>What is this?</li>
      <li className='text-sm flex justify-center '>This is a work in progress Demo app for Seanies to get Stats for PVP and PVE content</li>
      <li className='flex justify-center'>How Does this work?</li>
      <li className='text-sm flex justify-center'>You can spend Dickel tokens to level up your Seanies for Upcoming PVP and PVE content in the works. It also uses ChainLink oracles to give </li>
      <li className='text-sm flex justify-center'>your Levels a bit of randomness</li>
    </ul>
    
    
      
      
      
        
      
    
    </div>
  </div>
  </div>
  

    
   
    
  );
}

export default MyApp;