import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";
import News from "./News";

function Search(){
  const[Ser,setSer]=useState('')
  const[ShowNews,setShowNews]=useState(true)
    return (
      <div className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Any Topic" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" onClick={this.search}  ><GoSearch/></button>
      </div>
    )
}

export default Search
