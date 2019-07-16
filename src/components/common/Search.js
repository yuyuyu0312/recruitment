import React, {Component, Fragment} from 'react'
import './Search.scss'
class Search extends Component{
    render(){
        return(
            <Fragment>
                <div className = "search-box">
                    <div className = " search-mask ">
                    </div>
                    <input placeholder= "请输入职位关键字" maxlength="28"></input>
                    <button type="primary">搜索</button>
                </div>
            </Fragment>
        )
    }
}

export default Search