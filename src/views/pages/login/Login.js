import React from 'react'
import { Form, Input, Button, Checkbox, Col, Row, notification } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { loginUser } from 'api/apis'
import history from 'helpers/routeUtils'

const Login = () => {
  const onFinish = async (values) => {
    console.log('Received values of form: ', values)
    try {
      let response = await loginUser({ ...values, grant_type: 'password' })
      //Set access_token to local storage
      localStorage.setItem('access_token', response.data.access_token)
      localStorage.setItem('refresh_token', response.data.refresh_token)

      //Success notification
      notification['success']({
        message: 'Login Successfull',
        description: 'You have successfully signed in',
      })
      history.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
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
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <br></br>
            <br></br> Or <Link to="/register"> register now!</Link>
          </Form.Item>
        </Form>
      </Col>
    </div>
  )
}

export default Login
