import React,{ useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'

function Rating() {
    const [data, setData] = useState([])
    const params = useParams()
    useEffect(() => {
        const fetchData = async () => {
          await fetch('/restaurants.json')
            .then((res) => res.json())
            .then((data) => setData(data.restaurants))
        }
        fetchData()
      }, [])
      const details = data.filter((i)=>i.id==params.id).map((review)=>review.reviews)
      console.log(details);
    return (
        <div>
            
        </div>
    )
}

export default Rating
