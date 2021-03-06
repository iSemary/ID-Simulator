import React, {Component} from 'react';
import {Formik, Field, Form} from "formik";
import * as yup from 'yup';
import Result from "./Result";

class FormFill extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    onSubmit = (values) => {
    }
    FormSchema = () => {
        let schema = yup.object().shape({
            name: yup.string().required(),
        });
        return schema;
    }
    handleChange = (event) => {
        // console.log(event.target.name)

        this.setState({
            name: event.target.name === 'name' ? event.target.value:this.state.name,
            address: event.target.name === 'address' ? event.target.value:this.state.address,
            center: event.target.name === 'center' ? event.target.value:this.state.center,
            city: event.target.name === 'city' ? event.target[event.target.selectedIndex].text:this.state.city,
            city_code: event.target.name === 'city' ? event.target.value:this.state.city_code,
            dateofbirth: event.target.name === 'dateofbirth' ? event.target.value:this.state.dateofbirth,
            status: event.target.name === 'status' ? event.target.value:this.state.status,
            gender: event.target.name === 'gender' ? event.target.value:this.state.gender,
            religion: event.target.name === 'religion' ? event.target.value:this.state.religion,
            job: event.target.name === 'job' ? event.target.value:this.state.job,
            last_digits: event.target.name === 'last_digits' ? event.target.value:this.state.last_digits,
            avatar: event.target.name === 'avatar' ? event.target.files:this.state.avatar,
        });
    }

    handleChangeAvatar = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    form = (props) => {
        return (
            <Form>
                <div className="row my-2">
                    <div className="col-6 inputs-content">
                        <h4>Front Side</h4>
                        <Field name="name"
                               value={this.state.name} onChange={this.handleChange}
                               className="form-control" type="text" placeholder="Enter your name"/>
                        <Field name="address" value={this.state.address} onChange={this.handleChange}
                               className="form-control" type="text" placeholder="Enter your address"/>
                        <Field name="center" value={this.state.center} onChange={this.handleChange}
                               className="form-control" type="text" placeholder="Enter your center"/>
                        <Field
                            component="select"
                            name="city"
                            value={this.state.city} onChange={this.handleChange}
                            multiple={false}
                            className="form-control">
                            <option defaultValue>City</option>
                            <option value="01">??????????????</option>
                            <option value="16">??????????????</option>
                            <option value="02">????????????????????</option>
                            <option value="19">??????????????????????</option>
                            <option value="15">?????? ??????????</option>
                            <option value="28">??????????</option>
                            <option value="25">??????????</option>
                            <option value="29">????????????</option>
                            <option value="32">???????????? ????????????</option>
                            <option value="34">???????? ??????????</option>
                            <option value="18">??????????????</option>
                            <option value="22">?????? ????????</option>
                            <option value="03">??????????????</option>
                            <option value="31">?????????? ????????????</option>
                            <option value="21">????????????</option>
                            <option value="12">????????????????</option>
                            <option value="35">???????? ??????????</option>
                            <option value="11">??????????</option>
                            <option value="26">??????????</option>
                            <option value="04">????????????</option>
                            <option value="13">??????????????</option>
                            <option value="16">??????????????</option>
                            <option value="23">????????????</option>
                            <option value="14">??????????????????</option>
                            <option value="27">??????</option>
                            <option value="33">??????????</option>
                            <option value="17">????????????????</option>
                            <option value="24">????????????</option>
                        </Field>
                        <Field name="dateofbirth"
                               value={this.state.dateofbirth} onChange={this.handleChange}
                               className="form-control" type="date"/>
                        <Field name="avatar" className="form-control"
                               value={this.state.avatar} onChange={this.handleChangeAvatar}
                               type="file"/>
                    </div>
                    <div className="col-6 inputs-content">
                        <h4>Back Side</h4>
                        <Field
                            component="select"
                            name="gender"
                            multiple={false}
                            value={this.state.gender} onChange={this.handleChange}
                            className="form-control">
                            <option defaultValue>Gender</option>
                            <option value="??????">??????</option>
                            <option value="????????">????????</option>
                        </Field>
                        <Field name="status" className="form-control"
                               value={this.state.status} onChange={this.handleChange}
                               type="text" placeholder="Enter your social status"/>
                        <Field
                            component="select"
                            name="religion"
                            multiple={false}
                            value={this.state.religion} onChange={this.handleChange}
                            className="form-control">
                            <option defaultValue>Religion</option>
                            <option value="????????">????????</option>
                            <option value="??????????">??????????</option>
                        </Field>
                        <Field name="job" className="form-control"
                               value={this.state.job} onChange={this.handleChange}
                               type="text" placeholder="Enter your job title"/>
                        <Field name="last_digits"
                               value={this.state.last_digits} onChange={this.handleChange}
                               className="form-control" type="number" placeholder="Enter your last 5 digits"/>
                    </div>
                </div>
            </Form>
        )
    }

    render() {
        return (
            <section>
                <Formik initialValues={{
                    name: '', dateofbirth: '', address: "", center: "",
                    city: "", avatar:"", gender:"", status:"",
                    religion:"", job:"", last_digits:""}}
                        onSubmit={this.onSubmit}
                        validationSchema={this.FormSchema()}
                        >
                    {this.form}
                </Formik>
                <hr/>
                <Result name={this.state.name}
                        address={this.state.address}
                        center={this.state.center}
                        city={this.state.city}
                        city_code={this.state.city_code}
                        dateofbirth={this.state.dateofbirth}
                        status={this.state.status}
                        gender={this.state.gender}
                        religion={this.state.religion}
                        job={this.state.job}
                        last_digits={this.state.last_digits}
                        avatar={this.state.avatar}
                        imagePreviewUrl={this.state.imagePreviewUrl}
                />

            </section>

        )
    }
}

export default FormFill;