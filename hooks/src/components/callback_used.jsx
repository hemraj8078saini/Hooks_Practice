import React from 'react'

const callback_used = () => {
    const[count,setCount]=useState(0)
    const handlechang=()=>{
        setCount(count +1)
    }
  return (
    <div>
      <button onClick={handlechang}></button>
      <callbackused_child / >
    </div>
  )
}

export default callback_used
