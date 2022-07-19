import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../assets/Logo.png';
import { resetGameAction } from '../Redux/Action/Action';
import CardBauCua from './CardBauCua';
import DiscBauCua from './DiscBauCua';

export default function GameBauCua() {

    let { moneyPlayer } = useSelector(state => state.bauCuaReducer);
    let dispatch = useDispatch();

    return (
        <div id='GameBauCua' className='container py-2 my-2 mx-auto' style={{ backgroundColor: "burlywood" }}>
            <img src={Logo} style={{ width: "60%" }} />
            <div
                style={{
                    backgroundColor: "red",
                    color: "yellow",
                    width: "30%",
                    height: "50px",
                    lineHeight: "50px",
                    margin: "auto",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderRadius: "10px"
                }}
            >Money: <span className='text-white'>{moneyPlayer}</span> $ </div>
            <button className='btn btn-secondary my-2'
                onClick={() => { dispatch(resetGameAction()) }}
            >Reset</button>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%"
            }}>
                <div style={{
                    width: '70%',
                    marginTop: '30px'
                }}>
                    <CardBauCua />
                </div>
                <div style={{
                    width: '30%',
                    marginTop: '30px'
                }}>
                    <DiscBauCua />
                </div>
            </div>
        </div>
    )
};
