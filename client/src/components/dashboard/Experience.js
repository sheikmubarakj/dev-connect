import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profile";
import { bindActionCreators } from "redux";

const Experience = ({ experience, deleteExperience }) => {

  // const deleteExperience

  const experiences =
    experience &&
    experience.length > 0 &&
    experience.map((exp) => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td className="hide-sm">{exp.title}</td>
        <td className="hide-sm">
          <Moment format="YYYY/MM/DD">{exp.form}</Moment> -{" "}
          {exp.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deleteExperience(exp._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>

        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    deleteExperience
  }, dispatch)
};

export default connect(null, mapDispatchToProps)(Experience);
