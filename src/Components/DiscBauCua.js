import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Xoc from '../assets/soc.png'
import { playGameAction } from '../Redux/Action/Action';
import XucXac from './XucXac';

export default function DiscBauCua() {

    let { arrXucXac } = useSelector(state => state.bauCuaReducer);
    let dispatch = useDispatch();

    return (
        <div>
            <div style={{
                width: '250px',
                height: '250px',
                borderRadius: '125px',
                backgroundColor: 'white',
                paddingTop: '30px',
                paddingLeft: '70px',
                margin: 'auto'
            }}>
                <div className='row'>
                    <div className='col-12 my-2'>
                        <XucXac xucXacItem={arrXucXac[0]} />
                    </div>
                    <div className='col-12 my-2'>
                        <XucXac xucXacItem={arrXucXac[1]} />
                    </div>
                    <div className='col-12 my-2'>
                        <XucXac xucXacItem={arrXucXac[2]} />
                    </div>
                </div>
            </div>
            <img
                src={Xoc}
                style={{ width: '50%', marginTop: '10px', cursor: 'pointer' }}
                onClick = {() => { dispatch(playGameAction()) }}
            />
        </div>
    )
}
