import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-4 mx-4 ml-2px'>
        <div className="card box" style={{ width: '18rem' }}>
          <img src={!imageUrl?"https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg":imageUrl} className="card-img-top" alt="img" style={{ height: '150px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-warning">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
