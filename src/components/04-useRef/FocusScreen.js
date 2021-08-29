import React, { useRef } from 'react'
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

   const inputRef = useRef();
   const handle = () => {
      inputRef.current.select();
   }
   return (
      <div>
         <h1> Focus Screen</h1>

         <hr />

         <input
            ref={inputRef}
            className='form-control mb-2'
            placeholder='Su nombre'
         >
         </input>

         <button
            className='btn btn-outline-primary'
            onClick={handle}>
            Focus
         </button>
      </div>
   )
}
