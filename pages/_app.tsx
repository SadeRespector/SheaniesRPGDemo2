import '../styles/globals.css';

import type { AppProps } from 'next/app';


import "./index.css";
import { GetEXPBalance } from './components/nftCard';





function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen gradient-bg-welcome">
      <GetEXPBalance></GetEXPBalance>
    <div >
    
      
      
      
        <Component {...pageProps} />
      
    
    </div>
    </div>
  );
}

export default MyApp;