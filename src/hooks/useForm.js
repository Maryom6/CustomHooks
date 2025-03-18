import { useState } from "react"


export const useForm = (initialForm = {}) => {
    
    const [formState, setformState] = useState(initialForm)
    
  
    
        const onInputChange = ({target}) => {
    
            const { name, value } = target
            //Con esto la informacion que este se va a mantener la iformacion asignada como valores
            setformState({
    
                ...formState,
                [name]: value
            })
    
        }

    //Colocamos llaves para que devuelva lo que queremos
  return {
    ...formState,
    onInputChange
  }
}
