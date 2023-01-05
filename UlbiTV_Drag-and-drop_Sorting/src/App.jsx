import React, {useState} from 'react'
import './App.css'

function App() {
  const [cardList, setCardList] = useState([
    {id: 1, order: 3, text: 'card 3'},
    {id: 2, order: 1, text: 'card 1'},
    {id: 3, order: 2, text: 'card 2'},
    {id: 4, order: 4, text: 'card 4'},
  ])

  const [currentCard, setCurrentCard] = useState(null)


  function dragStartHandler(e, card) {
    console.log('drag', card)
    setCurrentCard(card)

  }

  function dragEndHandler(e) {
    e.target.style.background = 'white'

  }


  function dragOverHandler(e) {
    e.preventDefault()
    e.target.style.background = 'lightgray'
  }

  function dropHandler(e, card) {
    e.preventDefault()
    setCardList(cardList.map(c => {
      if(c.id === card.id) {
        return {...c, order: currentCard.order}
      }
      if(c.id === currentCard.id) {
        return {...c, order: card.order}
      }
      return c;
    }))

    e.target.style.background = 'white'
    console.log('drop', card)
  }

  const sortCards = (a, b) => {
    if (a.order > b.order){
      return 1
    } else {
      return -1
    }
  }


  return (
    <div className="App">
      {cardList.sort(sortCards).map(card =>
        <div key={card.id}
             className='card'
             draggable={true}
             onDragStart={(e) => dragStartHandler(e, card)}
             onDragLeave={(e) => dragEndHandler(e)}
             onDragEnd={(e) => dragEndHandler(e)}
             onDragOver={(e) => dragOverHandler(e)}
             onDrop={(e) => dropHandler(e, card)}
        >
          {card.text}
        </div>
      )}
    </div>
  )
}

export default App


// draggable={true}   // чтобы элемент можно было перемещать
// onDragStart={}     // срабатывает в тот момент когда взяли карточку
// onDragLeave={}     // срабатывает когда мы вышли за пределы другой карточки
// onDragEnd={}       // Если мы отпустили перемещение
// onDragOver={}      // Если мы находимся над другим объектом
// onDrop={}          // Если мы отпустили карточку и рассчитываем что должно произойти с связанное действие
//

















