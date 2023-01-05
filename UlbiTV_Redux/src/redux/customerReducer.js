const defaultState = {
  customers: []
}
export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_MANY_CUSTOMERS' :
      return {
        ...state,
        customers: [...state.customers, ...action.payload]
      }
    case 'ADD_CUSTOMER' :
      return {
        ...state,
        customers: [...state.customers, action.payload]
      }
    case 'GET_CUSTOMERS' :
      return {
        ...state,
        customers: state.customers.filter(item => item.id !== action.payload)
      }


    default :
      return state
  }
}
