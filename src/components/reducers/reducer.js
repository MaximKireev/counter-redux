
export const reducer = (state = 0, action) => {

    switch (action.type) {
        case 'INC':
            return state = state + 1;
        case 'DEC':
            return state = state - 1;
        case 'RND':
            return state = state + action.payload;
        case 'CLN':
            return state = 0;
        default:
            return state;
    }

}