import React from 'react'

// function Random({value,item}) {
function Random({value,item}) {
    return (   // ui portion  (viewed portion)dom
        <div className="random">
            {/* <h1>haiii allllll</h1>
            <p>hai everyone...i'm so excited to study react</p> */}
            {/* <h1>{props.value}</h1>
            <h1>{props.item}</h1> */}
            <h1>{value}</h1>
            <h1>{item}</h1>
        </div>
    )
}

export default Random
