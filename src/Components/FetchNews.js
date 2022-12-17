import React, { useState } from 'react'
import axios from 'axios'

function FetchNews() {
    const [news, setnews] = useState([])
    const fatchname = () => {
        // console.log("clicked")
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=0cdb92896e824bc59234e8fb15d79dc8").then((res) => {
            console.log(res);
            setnews(res.data.articles)
        })
    }
    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-4">

                        <button className='btn btn-primary' onClick={fatchname}>FatchNames</button>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        news.map((value)=>{
                            return(
                                <div className="col-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={value.urlToImage
} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{value.description}</p>
                                <a href="#" className="btn btn-primary">{value.url}</a>
                            </div>
                        </div>

                    </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FetchNews
