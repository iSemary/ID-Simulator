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
                            <option value="01">القاهرة</option>
                            <option value="16">الغربية</option>
                            <option value="02">الإسكندرية</option>
                            <option value="19">الإسماعيلية</option>
                            <option value="15">كفر الشيخ</option>
                            <option value="28">أسوان</option>
                            <option value="25">أسيوط</option>
                            <option value="29">الأقصر</option>
                            <option value="32">الوادي الجديد</option>
                            <option value="34">شمال سيناء</option>
                            <option value="18">البحيرة</option>
                            <option value="22">بني سويف</option>
                            <option value="03">بورسعيد</option>
                            <option value="31">البحر الأحمر</option>
                            <option value="21">الجيزة</option>
                            <option value="12">الدقهلية</option>
                            <option value="35">جنوب سيناء</option>
                            <option value="11">دمياط</option>
                            <option value="26">سوهاج</option>
                            <option value="04">السويس</option>
                            <option value="13">الشرقية</option>
                            <option value="16">الغربية</option>
                            <option value="23">الفيوم</option>
                            <option value="14">القليوبية</option>
                            <option value="27">قنا</option>
                            <option value="33">مطروح</option>
                            <option value="17">المنوفية</option>
                            <option value="24">المنيا</option>
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
                            <option value="ذكر">ذكر</option>
                            <option value="انثي">انثي</option>
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
                            <option value="مسلم">مسلم</option>
                            <option value="مسيحي">مسيحي</option>
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