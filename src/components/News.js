import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {

  articles = [
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

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
    let url = "https://newsapi.org/v2/everything?q=technology&apiKey=171e9d195b274cc59c9b8b94060454e3";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles});

    }


    handlePrevClick = async () => {
console.log("Previous");
    }

    handleNextClick = async () => {
      console.log("Next");
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
              <button type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Prev </button>
              <button type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>

            </div>
        </div>
      </div>
    );
  }
}

export default News;
