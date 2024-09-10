import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {

  articles = []

  constructor() {
    super();
    console.log("I am from constructor");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount() {
    console.log("I am from component did mount");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=171e9d195b274cc59c9b8b94060454e3";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles});

    }


    handlePrevClick =async () => {
    console.log("Previous");

    }

  handleNextClick =async () => {
      console.log("Next");
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=171e9d195b274cc59c9b8b94060454e3&page=${this.state.page+1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    // this.setState({articles:parsedData.articles});

      this.setState({
        page:this.state.page+1,
            articles:parsedData.articles
      })

    }


  render()
  {
      return(
      <div className = 'container my-3 border border border-dark  float-right text-center' style={{borderRadius:'10px'}} >
        <h2>Top headlines of today</h2>

        <div className="row my-3  ">
          {this.state.articles.map((element) => {
            return <div className='col-md-4 ' key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}  newsUrl={element.url}/>
            </div>
          })}

            <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Prev </button>
              <button type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>

            </div>
         </div>
      </div>
    );
  }
}

export default News;
