import React, { useState } from 'react'
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const { Option } = Select

const Register = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  return (
    <div style={{ display: 'flex', paddingTop: '4em' }}>
      <img
        style={{ height: '100px', width: '200px', margin: '0 auto', display: 'inline-block' }}
        src="avatars/busara.png"
      ></img>
      <Col
        style={{
          margin: '0 auto',
          background: '#f6f6f6',
          // height: '40vh',
          width: '80%',
          padding: '4em',
          paddingTop: '2em',
        }}
        span={10}
      >
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password1"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="password2"
            label="Confirm Password"
            dependencies={['password1']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password1') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject(
                    new Error('The two passwords that you entered do not match!'),
                  )
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="referral_code" label="Referral code">
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="full_name"
            label="Full Name"
            rules={[{ required: true, message: 'Please input your full name!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Full Name"
            />
          </Form.Item>
          <Form.Item
            name="device_details"
            label="Device Details"
            rules={[{ required: true, message: 'Please input your Device Details!' }]}
          >
            <Input placeholder="Device Details" />
          </Form.Item>
          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: 'Please input your Location details!' }]}
          >
            <Input placeholder="Location" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </div>
  )
}

export default Register
