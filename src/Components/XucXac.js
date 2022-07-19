import React from 'react';
import { BAU_IMG, CA_IMG, CUA_IMG, NAI_IMG, TOM_IMG } from '../Redux/Constant/Constant';
import styles from '../XucXacItem.css';

export default function XucXac(props) {

    let { xucXacItem } = props;

    return (
        <div>
            <div className='scene'>
                <div className='cube'>
                    <img
                        className='ml-3 cube__face front'
                        src={xucXacItem.img}
                        style={{ width: 50 }}
                    />
                    <img
                        className='ml-3 cube__face back'
                        src={BAU_IMG}
                        style={{ width: 50 }}
                    />
                    <img
                        className='ml-3 cube__face left'
                        src={CUA_IMG}
                        style={{ width: 50 }}
                    />
                    <img
                        className='ml-3 cube__face right'
                        src={TOM_IMG}
                        style={{ width: 50 }}
                    />
                    <img
                        className='ml-3 cube__face top'
                        src={NAI_IMG}
                        style={{ width: 50 }}
                    />
                    <img
                        className='ml-3 cube__face bottom'
                        src={CA_IMG}
                        style={{ width: 50 }}
                    />
                </div>
            </div>
        </div>
    )
}
