import { useEffect, useState } from "react"

export const useFetch = (url) => {

   const [state, setstate] = useState({ date: null, loading: true, error: null })

   useEffect(() => {

      setstate({ date: null, loading: true, error: null });

      fetch(url)
         .then(resp => resp.json())
         .then(data => {
            setstate({
               loading: false,
               error: null,
               data
            })
         });
   }, [url])

   return state;
}
