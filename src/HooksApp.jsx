import { FetchApp } from "./components/FetchApp"
import { CounterApp } from "./components/CounterApp"
import { FormsApp } from "./components/FormsApp"

export const HooksApp = () => {
  return (
    <>
        <h1>Aplicacion de Hooks</h1>
        <hr></hr>
        <FetchApp />
        <hr></hr>
        <CounterApp />
        <hr></hr>
        <FormsApp />
       
    </>
  )
}
