import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";

export class News extends Component {
  static defaultProps={
    country:'in',
    category:'general',
    setProgress:0
  }

  PropTypes={
    country:PropTypes.string,
    category:PropTypes.string
  }

  articles=[]
  constructor(props){
    super(props);
    this.state={
      articles:this.articles,
      loading:false,
      page:1,
      totalRes:0
    }
    document.title = `NewX - ${
      this.props.category[0].toUpperCase() + this.props.category.slice(1)
    }`;
  }

  async componentDidMount(){
    this.props.setProgress(1)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=19`;
    this.setState({loading:true})
    await fetch(url)
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        this.setState({
          articles:res.articles,
          totalRes:res.totalResults,
          loading:false
        })
      });
      this.props.setProgress(100);
  }

  next=async()=>{
    this.props.setProgress(1);
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=19 `;
    this.setState({ loading: true });
    window.scrollTo(0,0)
      await fetch(url)
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          this.setState({
            articles:res.articles,
            page: this.state.page + 1,
            loading:false
          })
        });
    this.props.setProgress(100);
  }

  prev=async()=>{
    this.props.setProgress(1);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pageSize=19 `;;
    this.setState({ loading: true });
    await fetch(url)
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        this.setState({
          articles:res.articles,
          page: this.state.page - 1,
          loading:false
        })
      });
      window.scrollTo(0, 0);
      this.props.setProgress(100);    
  }

  render() {
    return (
      <div className='d-flex'>
        <button disabled={this.state.page<1} className='prev' onClick={this.prev}> <FaArrowLeft/> </button>
        <div className="container ">
          <h2 className='text-center my-4' >Top Headlines in {this.props.category[0].toUpperCase()+this.props.category.slice(1)} </h2>
          <span className='spinner'>{this.state.loading && <Spinner/>}</span>
          <div className='row'>
            {!this.state.loading && this.state.articles.map((e)=>{
              return <div className='col m-4 ' key={e.url} >
                      <NewsItem title={e.title?e.title.slice(0,70):"Something Wrong"} description={e.description?e.description.slice(0,140):"Kuch toh hua hoga"}
                      published={e.publishedAt.slice(2,10)} author={e.author?e.author.slice(0,20):"Unknown"} 
                      imgurl={e.urlToImage} newsurl={e.url} source={e.source.name?e.source.name:""}/>
                      </div>
            })}
          </div>
        </div>
          <button disabled={this.state.page+1 >Math.ceil(this.state.totalRes/19 )} className='nxt' onClick={this.next}> <FaArrowRight/> </button>
      </div>

    )
  }
}

export default News