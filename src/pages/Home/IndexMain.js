import React, { Fragment, Component } from 'react'
import { Wrapper } from 'common/StyleComponents'
import Search from 'common/Search'
import { NavData } from 'utils/common.js'
import { Link } from "react-router-dom"
import './IndexMain.scss'

const Item = (props) =>{
    return(
        <li>
            <Link to={{
                path:"/positionList",
                query:{
                    title:props.title
                }
            }}>{props.title}</Link>
        </li>
    )
}
class IndexMain extends Component{
    render(){
        return(
            <Fragment>            
                <div className="index-main">
                    <img src= "https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt="XX"></img>
                    <div className ="mask"></div>
                    <Wrapper>
                        <div className="form">
                            <div className="word">
                                <p className="en-word"> 
                                If not now, when?
                                </p>
                                <p className=" en-word "> 
                                If not me, who?
                                </p>
                                <p className=" zn-word ">
                                此时此刻，非我莫属！
                                </p>
                            </div>
                            <Search></Search>
                            <div className="hot-search">
                            热门搜索：
                                <ul>
                                    {this.renderItem()}
                                </ul>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </Fragment>
        )
    }
    renderItem = () =>{
        return NavData.map( ( item )=>{
            return <Item key={item.title} {...item} />
        })
    }
}

export default IndexMain