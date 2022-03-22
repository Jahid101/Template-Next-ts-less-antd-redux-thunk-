import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { Button, Col, Input, Layout, Row, Form, message } from 'antd';

// CSS
require('./index.less');
import { ValidateStatus } from "antd/lib/form/FormItem";


const ForgotPassword = (props: any) => {

    const [userEmail, setUserEmail] = useState({ value: "", validateStatus: "" } as any);
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {


    }, [])

    const onSubmit = (values: any) => {
        Router.push("/forgot-password/check-mail?email=" + userEmail.value);
        // if (validate()) {
        //     sendEmail();
        // }
    };

    // const validate = () => {
    //     let error = true;

    //     if (userEmail.validateStatus == "error") {
    //         error = false;
    //     }

    //     userEmail.value = userEmail.value.trim();

    //     if (userEmail.value == "") {
    //         error = false;
    //         setUserEmail({
    //             ...setValidation("error", "Email field is required"),
    //             value: userEmail.value,
    //         });
    //     }

    //     return error;
    // };

    // const sendEmail = () => {

    //     setIsSubmit(true);
    //     forgotPassword({
    //         email: userEmail.value.toLowerCase(),
    //     },
    //         (success: any) => {
    //             message.success("Mail has sent");
    //             Router.push("/forgot-password/check-mail?email=" + userEmail.value);
    //         },
    //         (failed: any) => {
    //             message.error("Something went wrong");
    //             setIsSubmit(false);
    //         },
    //         (error: any) => {
    //             props.showError(error)
    //             setIsSubmit(false);
    //         }
    //     )
    // }

    const onValidationFailed = (errorInfo: any) => {
    };


    return (
        <Form
            // {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            onFinishFailed={onValidationFailed}
            className="custom-row-space-height"
        >
            <Row className="linkedin-form">
                <Col span={24}>
                    <p className="mb-5">Email</p>
                    <Form.Item
                        className="form-label-bottom-item"
                        validateStatus={userEmail.validateStatus as ValidateStatus}
                        help={userEmail.errorMsg || ""}
                    >
                        <Input placeholder="Enter email address"
                            className="input-field"
                            value={userEmail.value}
                            onChange={(e) => {
                                setUserEmail({ validateStatus: "success", value: e.target.value });
                            }} />
                    </Form.Item>
                </Col>

                <Col span={24} className="button-box mt-30">

                    <Button
                        htmlType="submit"
                        className="reset-pass-button"
                        type='primary'
                        block
                        loading={isSubmit}>Send password reset link</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default ForgotPassword