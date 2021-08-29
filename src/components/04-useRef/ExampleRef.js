import React, { useState } from 'react'
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const ExampleRef = () => {

   const [show, setShow] = useState(false);

   return (
      <div>
         <h1> Focus Screen</h1>

         <hr />

         {show && <MultipleCustomHooks />}

         <button className='btn btn-primary' onClick={() => setShow(!show)}> Show/Hide</button>
      </div>
   )
}
