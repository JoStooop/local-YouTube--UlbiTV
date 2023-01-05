import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncAction/customers";

function App() {
  const dispatch = useDispatch()
  const { cash } = useSelector(state => state.cash)
  const { customers } = useSelector(state => state.customers)
  const selectCustomersCount = state => state.customers.customers.length
  const customersCount = useSelector(selectCustomersCount)

  const addCash = () => {
    dispatch({
      type: 'ADD_CASH',
      payload: 5
    })
  }
  const getCash = (amount) => {
    dispatch({
      type: 'GET_CASH',
      payload: amount
    })
  }

  const addCustomer = (name) => {
    const user = {
      id: Date.now(),
      name,
    }


    dispatch({
      type: 'ADD_CUSTOMER',
      payload: user
    })
  }

  const test = () => {
    return one => {
      return `one ${one}`
    }
  }
  console.log(fetchCustomers())


  const deleteCustomers = id => dispatch({type: 'GET_CUSTOMERS', payload: id})

  return (
    <div className="App">
      <p>{cash}</p>
      <button onClick={addCash}>Пополнить</button>
      <button onClick={() => getCash(5)}>Снять</button>
      <div>
        {!!customersCount &&
          customers.map((item, i) =>
            <p key={i} onClick={() => deleteCustomers(item.id)}>{item.name}</p>
          )
        }
      </div>
      <button onClick={() => addCustomer(prompt())}>Добавить</button>
      <button>Удалить</button>
      <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
    </div>
  )
}

export default App
