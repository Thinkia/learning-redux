export default function InfoReducer(state={ name :'name',description:'description'}, action:{type:string,name:string,description:string}) {

    switch (action.type) {
      case 'SET_NAME':
        return {
          ...state,
          name: action.name
        }
      case 'SET_DESCRIPTION':
        return {
          ...state,
          description: action.description
        }
      default:
        return state;
    }
  }