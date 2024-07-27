import { useState } from "react";
// import './App.css'
// import Navbar from './components/Navbar'
// import Cart from './components/Cart'

function App() {
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  // const [Cart, setCart] = useState({
  //   discount: 0.2,
  //   items: [
  //     { id: 1, name: "product1", quantity: 1 },
  //     { id: 2, name: "product2", quantity: 1 },
  //   ],
  // });

  // const handleclick = () =>{
  //   setCart({...Cart,items:[ Cart.items.map(item => item.id === 1 ? {...item,quantity: item.quantity + 1}:item)]})
  //   console.log(Cart)
  // }

  // return (
  //   <>
  //     {Cart.items.map(item => (
  //           <h1 key={item.id}>{item.quantity}</h1>
  //     ))}
  //     <button onClick={handleclick}>quantity</button>
  //   </>
  // );

  // const [pizza, setpizza] = useState({
  //   name:"peproni",
  //   toppings:['mushroon']
  // })

  // const handleadd = () =>{
  //   setpizza({...pizza,toppings:[...pizza.toppings, 'cheese']})
  //   console.log(pizza)
  // }
  // const handelremove = (toppingsToRemove) =>{
  //   console.log(toppingsToRemove )
  //   setpizza({...pizza,toppings:[...pizza.toppings.filter(toppings => toppings !== toppingsToRemove)]})
  //   console.log(pizza)
  // }

  // return(
  //   <>
  //     {pizza.toppings.map((topping, index) => (
  //       <h1>{topping}</h1>
  //     ))}
  //     <button onClick={handleadd}>add</button>
  //     <button onClick={()=>handelremove(pizza.toppings[0])} >remove</button>
  //   </>
  // )

  // const [Game, setGame] = useState({
  //   id:1,
  //   player:{
  //     name: "amit",
  //   },
  // })

  // const handleclick = () => {
  //   setGame({...Game,player:{...Game.player,name:"Parivesh"}})
  // }

  // return (
  //   <>
  //     <h2>{Game.id}</h2>
  //     <h1>{Game.player.name}</h1>
  //     <button onClick={handleclick}>name change</button>
  //   </>
  // )

  // const [Products, setProducts] = useState(['product1','product2','product3'])

  // const   onclear = () => {
  //   setProducts([])
  // }

  // return (
  //   <>
  //     <Navbar ProductCount={Products.length}/>
  //     <Cart onclear={onclear} products = {Products}/>
  //   </>
  // )
}

export default App;
