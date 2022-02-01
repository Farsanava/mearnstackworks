import React, { useState, useEffect } from 'react'
import Restaurants from './Restaurants'
import { Col, Row } from 'react-bootstrap'
import {listRestaurants} from '../actions/restaurantAction'
// import for dispatch the action
import {useDispatch,useSelector} from 'react-redux'

function Home() {
    // const [hotels, setHotels] = useState([])    //create state
     const dispatch = useDispatch();

     const restaurantReducer=useSelector(state=>state.restaurantReducer)
     const {restaurants}=restaurantReducer

    useEffect(() => {
        // const fetchData = async () => {
        //     await fetch('./restaurants.json')
        //         // async and await is a keywords og asynchronous functn
        //         //asynch fn is not waiting for anything
        //         .then((res) => res.json())
        //         .then((data) => setHotels(data.restaurants))
        // }
        // fetchData();
        dispatch(listRestaurants())
    }, [dispatch])
    // console.log("data is....", restaurants)
    return (
        <>
            {/* ternary operaation */}
            {restaurants ? (

                <Row>
                    {restaurants.map((item )=> (
                        //    <h1>{item.name}</h1>
                        <Col sm={10} md={8} lg={6} xl={3} >
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
