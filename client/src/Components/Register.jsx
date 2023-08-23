import React from "react"

import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../styles/register.css'

const Register =()=>{
    const navigate = useNavigate();

    const onFinishHandler = async( values) =>{
        try{
                const res = await axios.post("http://localhost:5000/api/user/register", values);
                if(res.status===201){
                    message.success("Register Successfully!");
                    navigate("/login");
                }
                else{
                    message.error(res.data.message);
                }
        }
        catch(error){
            console.log(error);
            message.error("Something went wrong!!")
        }
    }

    return (
        <>
        <div className="cont">

       
          <div className="form-container ">
            <Form
              layout="vertical"
              onFinish={onFinishHandler}
              className="register-form"
            ><div className="heading">

              <h3 className="text-center font-weight-bold text-white">Register Form</h3>
            </div>
              <Form.Item label="Name" name="name">
                <Input type="text" required />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <Link to="/login" className="m-2 text-dark rounded bg-light p-2">
                Already user? login here
              </Link>
              <button className="btn btn-dark" type="submit">
                Register
              </button>
            </Form>
          </div>
          </div>
        </>
      );

}

export default Register;