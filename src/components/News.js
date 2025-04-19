import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  articles = []

  constructor(props) {
    super(props);
    console.log("I am from constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category || 
        prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ page: 1 }, this.updateNews);
    }
  }

  async updateNews() {
    this.setState({ loading: true });
    
    let url;
    if (this.props.searchQuery) {
      // If search query exists, search for it in all categories
      url = `https://newsapi.org/v2/everything?q=${this.props.searchQuery}&apiKey=84adc46e24d240d996af31e668e927f8&page=${this.state.page}`;
    } else {
      // Otherwise show news from selected category
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=84adc46e24d240d996af31e668e927f8&page=${this.state.page}`;
    }
    
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      
      this.setState({ 
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults || 0,
        loading: false
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  handlePrevClick = async () => {
    console.log("Previous");
    this.setState({
      page: this.state.page - 1
    }, this.updateNews);
  }

  handleNextClick = async () => {
    console.log("Next");
    this.setState({
      page: this.state.page + 1
    }, this.updateNews);
  }

  render() {
    const hasNextPage = this.state.page < Math.ceil(this.state.totalResults / 20);
    
    let title;
    if (this.props.searchQuery) {
      title = `Search Results for "${this.props.searchQuery}"`;
    } else {
      const categoryName = this.props.category ? this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) : 'General';
      title = `Top ${categoryName} Headlines`;
    }
    
    return (
      <div className='container my-3 border border-dark text-center' style={{ borderRadius: '10px' }}>
        <h2>{title}</h2>

        {this.state.loading && <div className="spinner-border text-warning my-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>}

        {!this.state.loading && this.state.articles.length === 0 && (
          <div className="alert alert-info my-4">No articles found. Try a different search term or category.</div>
        )}

        <div className="row my-3">
          {this.state.articles.map((element) => {
            return <div className='col-md-4 mb-4' key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>

        {this.state.articles.length > 0 && (
          <div className="container d-flex justify-content-between mb-3">
            <button 
              disabled={this.state.page <= 1} 
              type='button' 
              className='btn btn-dark' 
              onClick={this.handlePrevClick}
            >
              &larr; Prev
            </button>
            <button 
              disabled={!hasNextPage}
              type='button' 
              className='btn btn-dark' 
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    );
  }
}

News.propTypes = {
  category: PropTypes.string,
  searchQuery: PropTypes.string
}

News.defaultProps = {
  category: 'general',
  searchQuery: ''
}

export default News;
