import React from 'react'
import PropTypes from 'prop-types';
import {Route,Redirect} from "react-router-dom";
import { connect } from "react-redux";

// const PrivateRoute = ({ component:Component, auth:{isAuthenticated,loading}, ...rest }) => (
//     // console.log('rest', rest)
//     // ...rest - props(component + route_path), 
//     // render={ (props) - histor,match
//     // path="/dashboard"
//     <Route 
//     {...rest} 
//     render={ (props) => !isAuthenticated && !loading ? 
//     (<Redirect to="/login" />) 
//      :
//     (
//      <Component {...props} />
//      ) 

//      }
//      />

// )

// {/* <Route path="/dashboard" */}
// {/* <Route path="/dashboard" render={(props)=> <Dashboard {...props} />} */}


const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => {
    // console.log("sakfdsajdghsdaf", { ...rest })
    // console.log('isAuthenticated', isAuthenticated)
    // console.log('loading', loading)
    return (
        <Route
            {...rest}
            render={(props) => !isAuthenticated && loading ?
                (<Redirect to="/login" />)
                :
                (
                    <Component {...props} />
                )

            }
        />
    )
}
           
               

PrivateRoute.propTypes = {
   auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
