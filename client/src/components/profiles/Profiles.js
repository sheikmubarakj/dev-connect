import { connect } from 'react-redux';
import React, { useEffect, Fragment } from 'react'
import { getProfiles } from '../../actions/profile';
import Spinner from "../../components/layout/Spinner";
import ProfileItem from "./ProfileItem";

const Profiles = ({getProfiles, profile: {profiles, loading}}) => {

    useEffect(() => {
        getProfiles();
    },[getProfiles])

        return <Fragment>
        {loading ? <Spinner /> : <Fragment>
            <h1 className="large text-primary"> Developers </h1>
            <p className="lead">
                <i className="fab fa-connectdevelop"></i> Browse and connect with developers
            </p>
  
            <div className="profiles">
                {profiles.length > 0 ? (
                    profiles.map(profile => (
                        <ProfileItem key={profile._id} profile={profile} />
                    ))
                ) : <h4> No profiles found... </h4>}
            </div>    
            </Fragment>
        }
    </Fragment>
}



// export default Profiles;

// const mapStateToProps = (state) => {
//     profile: state.profile
// };

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getProfiles})(Profiles)
