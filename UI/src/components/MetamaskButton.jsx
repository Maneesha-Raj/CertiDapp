import { BrowserProvider } from 'ethers';
import React from 'react'

const MetamaskButton = () => {
  const provider = new BrowserProvider(window.ethereum);
  async function connectToMetamask() {
    try {
        const signer = await provider.getSigner();
        const address = await signer.getAddress(); 
        console.log("Address", address);
    } catch (error) {
        console.error("Failed to connect to Metamask:", error);
    }
}
 
  return (
    <div>
      <button className='border-2 bg-orange-700 hover:bg-orange-400 mt-6 ml-96 p-6' onClick={connectToMetamask}>Connect to Metamask</button>
    </div>
  )
}

export default MetamaskButton
