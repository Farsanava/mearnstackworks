import React, { useState, useEffect } from 'react'
import Restaurants from './Restaurants'
import { Col, Row } from 'react-bootstrap'

function Home() {
    const [hotels, setHotels] = useState([])    //create state
    useEffect(() => {
        const fetchData = async () => {
            await fetch('./restaurants.json')
                // async and await is a keywords og asynchronous functn
                //asynch fn is not waiting for anything
                .then((res) => res.json())
                .then((data) => setHotels(data.restaurants))
        }
        fetchData();
    }, [])
    console.log("data is....", hotels)
    return (
        <>
            {/* ternary operaation */}
            {hotels ? (

                <Row>
                    {hotels.map((item )=> (
                        //    <h1>{item.name}</h1>
                        <Col key={item.id}sm={10} md={8} lg={6} xl={3} >
                            {/* is used for responsive */}
                            {/* sm=>small devices , md=>medium , lg=>large, xl=>extra large */}
                            <Restaurants item={item}/>
                        </Col>
                    ))}
                </Row>

            ) : null}
        </>
    )
}

export default Home
