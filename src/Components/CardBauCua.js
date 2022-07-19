import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePointScoreAction } from '../Redux/Action/Action';
import { useSpring, animated } from 'react-spring';

const increaseValue = 100;
const decreaseValue = -100;

export default function CardBauCua(props) {

    let { itemCard } = useSelector(state => state.bauCuaReducer);
    let dispatch = useDispatch();

    const [toggle, setToggle] = useState(true);
    const [propsSpringIncrease, set] = useSpring(() => {
        return {
            to: { scale: 1.2 },
            from: { scale: 1 },
            reset: true
        }
    });

    const renderCardBauCua = () => {
        return itemCard.map((item, index) => {
            return <div key={index} style={{
            }}>
                <img src={item.img} style={{ width: '50%' }} />
                <div style={{
                    display: 'flex',
                    marginTop: "10px",
                    height: "20%",
                }}>
                    <animated.button
                        style={{ transform: propsSpringIncrease.scale.to(scale => `scale(${scale})`) }}
                        className='btn btn-danger mx-2 my-auto'
                        onClick={() => {
                            const toggleValue = !toggle;
                            if (toggleValue) {
                                set.start({ scale: 1.2 })
                            } else {
                                set.start({ scale: 1 })
                            }
                            setToggle(toggleValue);
                            dispatch(changePointScoreAction(item.id, decreaseValue))
                        }}
                    >-</animated.button>

                    <div style={{ backgroundColor: 'yellow', borderRadius: "5px", marginTop: "7px", width: "90%", fontWeight: 'bold' }}
                    >Choose: {item.point}</div>

                    <animated.button
                        style={{ transform: propsSpringIncrease.scale.to(scale => `scale(${scale})`) }}
                        className='btn btn-success mx-2 my-auto'
                        onClick={() => {
                            const toggleValue = !toggle;
                            if (toggleValue) {
                                set.start({ scale: 1.2 })
                            } else {
                                set.start({ scale: 1 })
                            }
                            setToggle(toggleValue);
                            dispatch(changePointScoreAction(item.id, increaseValue))
                        }}
                    >+</animated.button>
                </div>

            </div>
        })
    }
    return (
        <div style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            gridRowGap: '20px'
        }}>
            {renderCardBauCua()}
        </div>
    )
}
