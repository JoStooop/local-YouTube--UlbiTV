
export const fetchCustomers = () => {

  return function (dispatch)  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch({type: 'ADD_MANY_CUSTOMERS', payload: json}))

    console.log(dispatch)
  }
}

