import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { bindActionCreators } from 'redux';

import { deleteEducation } from "../../actions/profile";

const Education = ({ education, deleteEducation }) => {
  const educations =
    education &&
    education.length > 0 &&
    education.map((edu) => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className="hide-sm">{edu.degree}</td>
        <td className="hide-sm">
          <Moment format="YYYY/MM/DD">{edu.form}</Moment> -{" "}
          {edu.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deleteEducation(edu._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>

        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    deleteEducation
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Education);
