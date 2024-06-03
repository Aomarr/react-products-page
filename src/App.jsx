import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'

function App() {
  let [items, setItems] = useState([])
      fetch('https://dummyjson.com/products?limit=8')
      .then(res => res.json())
      .then((data) => {
        setItems(items = data.products)
      });
  return (
    <>
    <Navbar></Navbar>
    <div className="products-container">
      {items.map((item) => (
            <div className="card">
            <div className="product-image">
              <img src={item.images[0]}></img>
            </div>
            <div className="product-info">
              <h1 className='item-title'>{item.title}</h1>
              <p className='describe'>{item.description}</p>
              <div className="prices">
                <span className='new'>{(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}$</span>
                <span className='old'>{item.price}$</span>
              </div>
            </div>
            <div className="actions">
              <button className='cart'><span className='bag'><img src='../public/bag.svg'></img></span>Add to cart</button>
              <button className='fav'><span className='heart'><img src='../public/Favorite.svg'></img></span></button>
            </div>
          </div>
      ))}
    </div>
    </>
  )
}

export default App
