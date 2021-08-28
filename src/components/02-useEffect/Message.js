import React, { useEffect, useState } from 'react'

export const Message = () => {

   const [coordenadas, setCoordenadas] = useState({ x: 0, y: 0 })
   const { x, y } = coordenadas;
   useEffect(() => {

      const mouseMove = (e) => {
         // console.log(e);
         const coordenadas = { x: e.x, y: e.y }
         setCoordenadas(coordenadas)
      }

      // console.log('componente montado');
      window.addEventListener('mousemove', mouseMove)

      return () => {
         window.removeEventListener('mousemove', mouseMove) // se remueve el mouse move
      }
   }, [])

   return (
      <>
         <h3>Eres Genial</h3>
         <p> x : {x} y : {y}</p>
      </>
   )
}
