import React from 'react';
import {connect} from "react-redux";
// import PropTypes from 'prop-types' //check props type


const Alert = ({alerts}) => 
     
            alerts !== null && alerts.length > 0 && 
                        alerts.map(alert => (
                            <div className={`alert alert-${alert.alertType}`}>
                                {alert.msg}
                            </div>
                        ))

// Alert.propTypes = {
//     alerts : PropTypes.array.isRequired
// }

const mapStateToProps = state => ({
    alerts:state.alert
})

export default connect(mapStateToProps)(Alert)
