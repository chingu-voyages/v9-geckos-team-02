import React from 'react';
import List from '../UI/shopping-list';

import { connect } from 'react-redux';

const ItemsByKeywords = props => (
    <div className="row">
                <div className="container text-center my-4">
                    <h1>Search Results</h1>
                </div>
                {
                    props.itemsByKeywords.map((item, index) => (
                        <List
                            key={index}
                            src={item.galleryURL}
                            name={item.title}
                            id={item.itemId}
                        />
                    ))
                }
            </div >
);

const mapStateToProps = state => {
    return {
        itemsByKeywords: state.itemsByKeywords.data,
    }
}
export default connect(mapStateToProps)(ItemsByKeywords);