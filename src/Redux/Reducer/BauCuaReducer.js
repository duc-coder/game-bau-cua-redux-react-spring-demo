import { BAU, BAU_IMG, CA, CA_IMG, CHANGE_POINT_SCORE, CUA, CUA_IMG, GA, GA_IMG, NAI, NAI_IMG, PLAY_GAME, RESET_GAME, TOM, TOM_IMG } from "../Constant/Constant"

const initialState = {
    moneyPlayer: 1000,
    itemCard: [
        {
            id: 0,
            name: NAI,
            img: NAI_IMG,
            point: 0
        },
        {
            id: 1,
            name: BAU,
            img: BAU_IMG,
            point: 0
        },
        {
            id: 2,
            name: CA,
            img: CA_IMG,
            point: 0
        },
        {
            id: 3,
            name: GA,
            img: GA_IMG,
            point: 0
        },
        {
            id: 4,
            name: CUA,
            img: CUA_IMG,
            point: 0
        },
        {
            id: 5,
            name: TOM,
            img: TOM_IMG,
            point: 0
        },
    ],
    arrXucXac: [
        {
            id: 0,
            name: NAI,
            img: NAI_IMG,
            point: 0
        },
        {
            id: 1,
            name: BAU,
            img: BAU_IMG,
            point: 0
        },
        {
            id: 2,
            name: CA,
            img: CA_IMG,
            point: 0
        },
    ]
}

export const bauCuaReducer = (state = initialState, { type, payload, value }) => {
    switch (type) {
        case CHANGE_POINT_SCORE: {
            let itemCardUpdate = [...state.itemCard];
            let moneyPlayerUpdate = state.moneyPlayer;
            let index = itemCardUpdate.findIndex((item) => {
                return item.id === payload
            });

            if (index !== -1 && value <= moneyPlayerUpdate) {
                if (value > 0) {
                    itemCardUpdate[index].point += value;
                    moneyPlayerUpdate -= value;

                } else {
                    if (itemCardUpdate[index].point > 0) {
                        itemCardUpdate[index].point += value;
                        moneyPlayerUpdate -= value;
                    } else {
                        itemCardUpdate[index].point = 0;
                    }
                }
            };

            state.moneyPlayer = moneyPlayerUpdate;
            state.itemCard = itemCardUpdate;

            return { ...state }
        }

        case RESET_GAME: {
            state.itemCard = state.itemCard.map((item) => {
                return { ...item, point: 0 }
            });
            state.moneyPlayer = 100;
            state.arrXucXac = [];

            return { ...state }
        }

        case PLAY_GAME: {
            let arrXucXacUpdate = [];

            for (let i = 0; i < 3; i++) {
                let randomNum = Math.floor(Math.random() * 6);
                let randomXucXac = state.itemCard[randomNum];
                arrXucXacUpdate.push(randomXucXac);
            };
            state.arrXucXac = arrXucXacUpdate;

            arrXucXacUpdate.forEach((randomXucXacItem) => {
                let index = state.itemCard.findIndex((item) => {
                    return item.id === randomXucXacItem.id
                });
                if (index !== -1) {
                    state.moneyPlayer += state.itemCard[index].point;
                }
            });

            state.itemCard.forEach((item) => {
                let index = arrXucXacUpdate.findIndex((randomXucXacItem) => {
                    return randomXucXacItem.id === item.id
                });
                if (index !== -1) {
                    state.moneyPlayer += state.itemCard[index].point;
                };
            });

            state.itemCard = state.itemCard.map((item) => {
                return { ...item, point: 0 }
            });

            return { ...state }
        }

        default:
            return state
    }
}
