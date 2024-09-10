import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-4 mx-4 ml-2px'>
        <div className="card box " style={{ width: '18rem' , border:'2px'}}>
          <img src={!imageUrl?"https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg":imageUrl} className="card-img-top ml-10px" alt="img" style={{ height: '150px', objectFit: 'cover' }} />
          <div className="card-body ml-2px">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-warning">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
