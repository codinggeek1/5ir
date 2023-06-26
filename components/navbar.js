import Image from 'next/image';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';
// import { ethers } from 'ethers';
import {useEffect, useState} from "react";


const Navbar = () => {
    const [currentAccount, setCurrentAccount] = useState();
    const [active, setActive] = useState('menu');
    const [toggleIcon, setToggleIcon] = useState('hamburger');
  
    const toggle = () => {
      active === 'menu' ? setActive('menu active') 
      : setActive('menu');
  
      toggleIcon === 'hamburger' ? setToggleIcon('hamburger toggle')
      : setToggleIcon('hamburger');
    }

    const isWalletDetected = async () => {
        try{
            const {ethereum} = window;
            
            if(!ethereum) {
                alert("Please install metamask for easy experience ");
                
            }
        } catch {

        }
    }
   


    const isWalletConnected = async () => {
        try{
            const { ethereum } = window;

            const accounts = await ethereum.request({ method: "eth_accounts"});

            if (accounts.length !== 0) {
                const account = accounts[0];

                setCurrentAccount(account);
                alert(" Wallet is connected");

            } else{
                alert("Please connect your wallet");
            }
        } catch {

        }
    }

    const connectWallet = async () => {
        try{
            const { ethereum } = window;

            if(!ethereum) {
                alert("Please install metamask for easy experience ");
                
            }

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });

            setCurrentAccount(accounts[0]);

        } catch (error) {
            console.log(error);
        }
   
      }

      const shortenAddress = (currentAccount) => `${currentAccount.slice(0, 3)}...${currentAccount.slice(currentAccount.length - 4)}`
      


      useEffect(()=> {
        isWalletConnected();
        isWalletDetected();
      }, []);

    return (
        <div className={styles.navbar}>
            <div className={styles.logoSection}>
                <h1>5ire X USDC</h1>
            </div>
            <div className={active}>
                <Link href='/'>Home</Link>
                <Link href='/campaigns'>Campaigns</Link>
                <Link href='/listing'>List a campaign</Link>
            </div>

              <div className={styles.btn_container}>
                  {!currentAccount ?  <button style={{padding:"1rem 1rem", borderRadius:"10px",fontSize:"20px",border:"none",color:"#fff"}} onClick={connectWallet} className={styles.btn}>Connect Wallet</button> :
                  <button style={{padding:"1rem 1rem", borderRadius:"10px",fontSize:"20px",border:"none",color:"#fff"}} className={styles.btn}>Wallet Connected</button>}
              </div>

              <div className={toggleIcon} onClick={toggle} >
                <div></div>
                <div></div>
                <div></div>
              </div>
            

        </div>
    );
}
 
export default Navbar;
