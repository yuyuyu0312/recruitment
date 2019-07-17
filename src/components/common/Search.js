import React, {Component} from 'react'
import './Search.scss'
class Search extends Component{
    render(){
        return(
            <div className="search-box">
                <div className="search-mask"></div>
                <input 
                    placeholder="请输入职位关键字" 
                    maxLength="28"
                />
                <button type="primary">搜索</button>
            </div>
        )
    }
}

export default Search