import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  apikey = '17550357ca30447eb67b41866da16f5f'
  render() {
    return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={this.state.progress}
        />
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} key='general' apikey={this.apikey} category="general" />}/>
          <Route path="/Business" element={<News setProgress={this.setProgress} key="Business" apikey={this.apikey} category="business" />} />
          <Route path="/Entertainment" element={<News setProgress={this.setProgress} key="Entertainment" apikey={this.apikey}  category="entertainment" />} />
          <Route path="/Health" element={<News setProgress={this.setProgress} key="Health" apikey={this.apikey}  category="health" />} />
          <Route path="/Science" element={<News setProgress={this.setProgress} key="Science" apikey={this.apikey} category="science" />} />
          <Route path="/Sports" element={<News setProgress={this.setProgress} key="Sports" apikey={this.apikey}  category="sports" />} />
          <Route path="/Technology" element={<News setProgress={this.setProgress} key="Technology" apikey={this.apikey}  category="technology" />} />
        </Routes>
      </Router>
    </>
      )
  }
}

export default App

