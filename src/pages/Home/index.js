import React, {Fragment,Component} from 'react'
import IndexMain from './IndexMain'
import IndexFooter from './IndexFooter'



class Home extends Component{
    render(){
        return(
            <Fragment>
             
                <IndexMain></IndexMain>
                <IndexFooter></IndexFooter>
                
            </Fragment>
        )
    }
}

export default Home