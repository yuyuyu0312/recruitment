import React, {Component} from 'react'
import {Wrapper} from './StyleComponents'
import { HeaderData } from '../../utils/common.js'
import { NavLink,Link} from 'react-router-dom'
import './Head.scss'
const Item = ( props ) => {
    return(
        <li>
            <NavLink to={props.url}>
                {props.title}
            </NavLink>
        </li>
    )
}
class Head extends Component{
    render(){
        return(
           <header id="header">
               <Wrapper>
                   <div className="head-menu">
                       <Link to="/index">
                           <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="XXXX招聘" />
                       </Link>
                       <i className="line">|</i>
                       <i className="title">社招官网</i>   
                       <ul>
                            {this.renderItem()}
                       </ul>
                
                   </div>
                   <div className="login-tips">
                       欢迎来到阿里巴巴集团招聘！
                       <a href="#">登录</a>
                       &nbsp;|&nbsp; 
                       <a href="#">注册</a>   
                    </div>    
               </Wrapper>
           </header>
        )
    }
    renderItem = () =>{
       return  HeaderData.map( (item) => {
           return  <Item {...item} key={item.title}></Item>
        })
    }
}
      

export default Head