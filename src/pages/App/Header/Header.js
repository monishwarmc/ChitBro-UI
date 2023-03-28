import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CONTRACTS_SUCCESS } from '../../../redux/types';
import { Web3Connect } from '../../../services';
import './Header.scss'
import './header.css'
import logo from '../../../assets/piggy-bank.png';
import Team from '../team/Team.js';

const Header = () => {

    const account = useSelector(state => state.contracts.account);
    const dispatch = useDispatch();

    const handleW3Connect = async () => {
        try {
            const [account, contract] = await Web3Connect();
            dispatch({ type: CONTRACTS_SUCCESS, payload: { account, contract } });
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleConnect = () => {
        if (account) {
            navigator.clipboard.writeText(account);
        }
        else {
            handleW3Connect();
        }
    }

    return (
        <div className="header">
            <img src={logo} alt='logo' id='logo'/>
            <div id="seat">
                CHITZ
            </div>
            <button onClick={handleConnect} title={account ? "Copy to Clipboard" : "Connect"}>{account || "Connect"}</button>
        </div>
    )
}

export default Header
