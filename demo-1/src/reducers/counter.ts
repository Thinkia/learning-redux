export default function counterReducer(state: {count: number} ={count:0} ,action: {type:string}) {

    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}