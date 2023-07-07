import React from "react";
import PropType from "prop-types";

const UsersTable = ({ isLoading, data }) => {
  return <h1>Users Table goes here</h1>;
};

export default UsersTable;

UsersTable.propTypes = {
  isLoading: PropType.bool.isRequired,
  data: PropType.array,
};
