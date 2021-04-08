import { FavoriteBorder, Star, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import './searchResult.css'
export const SearchResult = (props) => {
    return (
        <div className='searchResult'>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-12">
                    <div className="card imageCard">
                        <img src={props.img} alt="" className="card-img-top" />
                    </div>
                </div>
                <div className="col-lg-8 col-sm-12 mt-3">
                    <div className="row">
                        <div className="col-sm-12">
                            <p>{props.location}</p>
                            <h3>{props.title} </h3>
                            <hr />
                            <p>{props.description} </p>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className='col-2' >
                                    <StarBorderOutlined className='star' /><strong>{props.star}</strong>
                                </div>
                                <div className='col-10 text-right' >
                                    <h2>{props.price}</h2>
                                    <p>{props.total}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


