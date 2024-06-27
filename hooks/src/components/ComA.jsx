import React, { useState } from 'react'                    // use State hook in react

const ComA = () => {
    const [form, setform] = useState({
        name: "hemraj",
        email: "hemraj@gmail.com",
        address: "jaipur"
    })
    const onClicks=(prev)=>{
      setform(prev => ({ ...prev, name: "dhruv" }))
    }

    return (
        <div>
            <p>Name: {form.name}</p>
            <p>Email: {form.email}</p>
            <p>Address: {form.address}</p>
           
            <button onClick={onClicks}> changename</button>{form.name}
        </div>
    )
}

export default ComA
