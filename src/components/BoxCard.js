import { useState } from "react"
import './boxcard.css'

export const BoxCard = ({result, children}) => {
  const [show, setShow] = useState(true);

  return (
    <div className='container'>

     <div className={`box ${result}`}>
      {children}
      <button onClick={() =>setShow(!show)} className="trigger">Hide</button>
     </div>
    
     </div>
  )
}
