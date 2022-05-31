import React from "react";
import { FormRow } from ".";
import FormRowSelect from "./FormRowSelect";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainerStudent = () => {
  const {
    isLoading,
    searchStudent,
    handleChange,
    sortOptionStudent,
    sortStudent,
    searchTypeStudent,
    searchTypeOptions,
    searchStatusStudent,
    empStatusvalue,
    empStatus,
    clearFiltersStudent,
  } = useAppContext();

  const handleSearchStudent = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmissionStudent = (e) => {
    e.preventDefault();
    clearFiltersStudent();
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
            name="searchStudent"
            value={searchStudent}
            handleChange={handleSearchStudent}
          ></FormRow>
          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchStatusStudent"
            value={searchStatusStudent}
            handleChange={handleSearchStudent}
            list={["all", ...empStatus]}
          ></FormRowSelect>
          <FormRowSelect
            labelText="sort"
            name="sortStudent"
            value={sortStudent}
            handleChange={handleSearchStudent}
            list={sortOptionStudent}
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

export default SearchContainerStudent;
