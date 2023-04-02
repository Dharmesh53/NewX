import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class  NewsItem extends Component {
  static propTypes = {}

  render() {
    let { title, description, imgurl, newsurl, published,author,source} = this.props;
    return (
      <>
      <div>
        <div className="card" style={{width:"22rem",position:"relative",height:"29.5rem"}}>
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-secondary">{source}</span>
        <img src={imgurl?imgurl:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/C6JQYJKFYNG45A76DSW4MKPBSA.jpg&w=1200"} className="card-img-top" style={{height:"10rem",objectFit:"cover"}}/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} className="btn btn-outline-info" target='_blank' style={{position:"absolute",bottom:"11%"}} >Know More</a>
            <span className='fs-7 fw-lighter'></span>
        </div>
        <div className="card-footer text-body-secondary">
          <small>Uploaded by {author} on {published}</small>
        </div>
        </div>
      </div>
      </>
    )
  }
}

export default NewsItem 