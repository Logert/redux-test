const initialState = [
    'home playlist',
    'work playlist'
];

export default function playlist(state = initialState, action) {
    switch(action.type){
        case 'ADD_PLAYLIST': return [...state, action.payload];
        case 'DEL_PLAYLIST': return state;
        default: return state;
    }
}