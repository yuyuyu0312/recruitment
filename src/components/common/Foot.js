import React, {Component} from 'react'
import {Wrapper} from './StyleComponents'

import './Foot.scss'

class Foot extends Component{
    render(){
        return(
           <footer id="footer">
               <Wrapper>
                   <div className="footer-content">
		                阿里巴巴集团 Copyright ©1999-2019 版权所有
                   </div>
                 
               </Wrapper>
           </footer>
        )
    }
}

export default Foot