import React, { Component } from 'react';
import  PropTypes from 'prop-types';

export default class NewsItem extends Component {

    render() {
        let {title , description , imgUrl ,link}= this.props;
        return (
            <div className="my-3">
                <div className="card">
                <img src={imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <form target="_blank" action={link} >
                    <button className="learn-more" title={"thisis title"}>
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Read More</span>
                    </button>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}

NewsItem.propTypes = {
    // Set defaultt PropTypes
    title : PropTypes.string,
    description : PropTypes.string,
}
NewsItem.defaultProps = {
    title : "title",
    description : "description",
}
