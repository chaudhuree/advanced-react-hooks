// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
//? : normal exercise
// const countReducer = (state, action) => {
//   return action
// }
//? : extra credit 01
// const countReducer = (state, action) => {
//   return action + state
// }

//? : extra credit 02
// const countReducer = (state, action) => {
//   return ({...state,...action})  //* ({...state=({count:initialCount=0}),...action=({count:count+step=>1,2,3})})
// }
//? ex cr: 03
const countReducer = (state, action) => {
  return {...state, ...(typeof action === 'function' ? action(state) : action)}
}
function Counter({initialCount = 0, step = 1}) {
  //? : normal exercise
  // const [count, setCount] = React.useReducer(countReducer,initialCount)

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount

  // const increment = () => setCount(count + step)
  //? : extra credit 01
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)
  // const increment = () => changeCount(step)

  //? : extra credit 02
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () => setState({count: count + step})

  //? ex cr: 03
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
