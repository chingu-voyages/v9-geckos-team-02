import React, { PureComponent } from 'react';
import {NavLink} from 'react-router-dom';

export default class aboutslider extends PureComponent {
    render() {
        return (
            <section>
                <div className="contact-info">
                <div className="container">
                    <div className="showcase-content">
                        <h1><span className="text-main">Enjoy</span> Your Day </h1>
                        <p className="lead">SHOP DEAL OF THE DAY</p>
                        <NavLink className="btn" to="about">About Our Site</NavLink>
                    </div>
                </div>
                </div>
            </section>
            
        )
    }
}
