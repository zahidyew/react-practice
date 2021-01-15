import { useState } from 'react'

const Counter = () => {
   const [counter, setCounter] = useState(0)

   return (
      <>
         <p>Counter: {counter}</p>
         <button type="button"
            onClick={
               () => setCounter(counter + 1)
            }
         >
            Increase
         </button>
      </>
   )
}

export default Counter
