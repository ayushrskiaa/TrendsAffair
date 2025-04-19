import React, { Component } from 'react'
import './NewsItem.css'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    
    return (
      <div className='news-item-container'>
        <div className="news-card">
          <div className="image-container">
            <img 
              src={!imageUrl ? "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg" : imageUrl} 
              className="card-image" 
              alt="News" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg";
              }}
            />
            <div className="image-overlay"></div>
          </div>
          <div className="card-content">
            <h5 className="card-title">{title ? (title.length > 60 ? title.slice(0, 60) + '...' : title) : 'News Title'}</h5>
            <p className="card-text">
              {description ? (description.length > 120 ? description.slice(0, 120) + '...' : description) : "Click 'Read more' to view the full article..."}
            </p>
            <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="read-more-btn">
              Read more <i className="fas fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
