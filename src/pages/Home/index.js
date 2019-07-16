import React, {Fragment,Component} from 'react'
import Head from 'common/Head'
import IndexMain from './IndexMain'
// import IndexFooter from './IndexFooter'
class Home extends Component{
    render(){
        return(
            <Fragment>
                <Head></Head>
                <IndexMain></IndexMain>
                {/* <IndexFooter></IndexFooter> */}
               
            </Fragment>
        )
    }
}

export default Home