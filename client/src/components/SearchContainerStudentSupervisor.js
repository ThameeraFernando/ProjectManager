import React from "react";
import { FormRow } from ".";
import FormRowSelect from "./FormRowSelect";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainerStudentSupervisor = () => {
  const {
    isLoading,
    searchStudentsupervisor,
    handleChange,
    sortOptionStudentsupervisor,
    sortStudentsupervisor,
    searchStatusStudentsupervisor,
    empStatus,
    clearFiltersStudentSupervisor,
  } = useAppContext();

  const handleSearchStudent = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmissionStudent = (e) => {
    e.preventDefault();
    clearFiltersStudentSupervisor();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow
            type="text"
            labelText="Search"
            name="searchStudentsupervisor"
            value={searchStudentsupervisor}
            handleChange={handleSearchStudent}
          ></FormRow>
          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchStatusStudentsupervisor"
            value={searchStatusStudentsupervisor}
            handleChange={handleSearchStudent}
            list={["all", ...empStatus]}
          ></FormRowSelect>
          <FormRowSelect
            labelText="sort"
            name="sortStudentsupervisor"
            value={sortStudentsupervisor}
            handleChange={handleSearchStudent}
            list={sortOptionStudentsupervisor}
          ></FormRowSelect>

          <button
            onClick={handleSubmissionStudent}
            disabled={isLoading}
            className="btn btn-block btn-danger"
          >
            Clear Filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainerStudentSupervisor;
