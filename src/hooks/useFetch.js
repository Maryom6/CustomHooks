import { useState } from "react"

//Exportacion
export const useFetch = () => {
    
    //Manejador de estato del fetch
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    //Lo que se consume a la hora de exportar
    const {data, isLoading, error } = state

//getfetch se usa en useEffect
const fetchData = async (url, method, bodyData = null) => {
    if(!url) return
    try{
        const options = {
            method: method,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
        } 

        const res = await fetch(url, options)
        const data = await res.json()
        console.log(data)
        //si no capta error
        setState({
            data,
            error: null,
            isLoading: false
            
        })
    }
    catch(error){

        //si capta un error
        setState({
            data: null,
            isLoading: false,
            error: null
        })
    }
  
}


  return {
    data,
    isLoading,
    error,
    fetchData
  }
}
