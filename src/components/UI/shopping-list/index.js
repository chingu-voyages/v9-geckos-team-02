import React from 'react';
import "./list.css"

const List = ({ click, pageTitle, resultItems }) => (

    <div className="container my-3">
        <div className="page-title mt-4">{pageTitle}</div>
    
        <div className="row">
            {resultItems && resultItems.map((item, index) => <div
                key={index}
                className="col-md-3 col-lg-3 col-sm-6 my-3 d-flex align-items-stretch"
                onClick={() => click(item.itemId, item.title)}
            >
                <figure className="card card-sm card-product ">
                    <div className="card-img text-center mt-4"><img src={item.galleryURL} className="figure-img img-fluid rounded " alt="" /></div>

                    <figcaption className="info-wrap text-center card-body ">
                        {pageTitle === "Shop by Category"
                            ? <h1 className="title text-truncate text-secondary"><strong>{item.title}</strong></h1>
                            : <p className="card-text item-title">{item.title}</p>}
                        <div className="price">
                            {item.sellingStatus&&"USD "+item.sellingStatus[0].currentPrice[0].__value__}
                        </div>
                    </figcaption>
                </figure>
            </div>
            )}
        </div>
    </div>



)

export default List;