const initialState = [];

export default function playlist(state = initialState, action) {
    switch(action.type){
        case 'ADD_TRACK': return [...state, action.payload];
        case 'DEL_TRACK': return state;
        default: return state;
    }
}