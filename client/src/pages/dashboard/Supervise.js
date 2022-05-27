import React,{ useEffect, useState } from 'react'
import FormRow from "../../components/FormRow";
import Alert from "../../components/Alert";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";



const Supervise = () => {

    const { isLoading, showAlert, displayAlert, isEditing, user, editSupervise,supervise, specificSupervise } = useAppContext();
    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const [specif, setspecifstate] = useState(specificSupervise);

    const initialState = {name:name, email:email, type: specif.type||"supervisor", field: specif.field||"AI", userId: user._id };
    const [values, setValues] = useState(initialState);

    // console.log(specif.type||'hi');
    const onSubmit = (e) => {
        e.preventDefault();
        if(!values.name || !values.email || !values.type || !values.field || !values.userId ){
            displayAlert()
            return
        }
        if(isEditing){
          editSupervise({name:name,email:email,type:values.type,field:values.field,userId:values.userId}) 
          return
        }
        // console.log({name:name,email:email,type:values.type,field:values.field,userId:values.userId});
        supervise({name:name,email:email,type:values.type,field:values.field,userId:values.userId})
        
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

  return (
    <div>
      <Wrapper>
      <form className="form" onSubmit={onSubmit}>
      <h3>{isEditing ? 'edit details' : 'Supervise'} </h3>
        {showAlert && <Alert />}
        <div className='form-center'>
        <FormRow
            type="text"
            name="name"
            handleChange={handleChange}
            value={values.name}
        />
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
        />
        <div className="form-row">
            <label htmlFor="type" className="form-label">
                Type
            </label>
            <select
                name="type"
                value={values.type}
                onChange={handleChange}
                className="form-input"
            >
                <option value="supervisor" >supervisor</option>
                <option value="co-supervisor">co-supervisor</option>
            </select>
        </div>
        <div className="form-row">
            <label htmlFor="type" className="form-label">
                Research Field
            </label>
            <select
                name="field"
                value={values.field}
                onChange={handleChange}
                className="form-input"
            >
                <option value="AI">AI</option>
                <option value="ML">ML</option>
                <option value="DataScience">Data Science</option>
                <option value="SoftwareEngineering">Software Engineering</option>
            </select>
        </div>
        

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isEditing?'Update':'Submit'}
        </button>
        </div>
      </form>
    </Wrapper>
    </div>
  )
}

export default Supervise
