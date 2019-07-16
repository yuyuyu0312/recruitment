import React, {Fragment,Component} from 'react'
import Head from 'common/Head'
import IndexMain from './IndexMain'
class Home extends Component{
    render(){
        return(
            <Fragment>
                <Head></Head>
                <IndexMain></IndexMain>
                <div className = "index-footer"></div>
            </Fragment>
        )
    }
}

export default Home