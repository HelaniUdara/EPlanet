import React, { useState, useEffect } from "react"
import Cart from "./Cart"
import "./style.css"

const NewArrivals = () => {
     const [newArrivalList, setNewArrivalList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
               const response = await fetch("http://localhost:8080/product/get-all?limit=6");

                const data = await response.json();
                setNewArrivalList(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
         <section className='NewArrivals background'>
            <div className='container'>
                <div className='heading d_flex'>
                    <div className='heading-left row  f_flex'>
                    <img src='./images/new.png' className="newbtn" />
                    <h2>New Arrivals </h2>
                    </div>
                    <div className='heading-right row '>
                    <span>View all</span>
                    <i className='fa fa-caret-right'></i>
                    </div>
                </div>

            <Cart newArrivalList={newArrivalList}/>
            </div>
      </section>
        </>
    )
}

export default NewArrivals