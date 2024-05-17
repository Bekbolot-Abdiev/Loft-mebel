import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
const onFinish = values => {
	console.log('Success:', values)
}
const onFinishFailed = errorInfo => {
	console.log('Failed:', errorInfo)
}
const SignUp = () => (
	<Form
		name='auth'
		labelCol={{
			span: 8,
		}}
		wrapperCol={{
			span: 16,
		}}
		style={{
			maxWidth: 600,
		}}
		initialValues={{
			remember: true,
		}}
		onFinish={onFinish}
		onFinishFailed={onFinishFailed}
		autoComplete='off'
	>
		<Form.Item
			label='Username'
			name='name'
			rules={[
				{
					required: true,
					message: 'Please input your name!',
				},
			]}
		>
			<Input />
		</Form.Item>

		<Form.Item
			label='Password'
			name='password'
			rules={[
				{
					required: true,
					message: 'Please input your password!',
				},
			]}
		>
			<Input.Password />
		</Form.Item>

		<Form.Item
			label='Email'
			name='email'
			rules={[
				{
					required: true,
					message: 'Please input your email!',
				},
			]}
		>
			<Input.Email />
		</Form.Item>

		<Form.Item
			label='Avatar'
			name='avatar'
			rules={[
				{
					required: true,
					message: 'Please input your avatar!',
				},
			]}
		>
			<Input />
		</Form.Item>

		<Form.Item
			wrapperCol={{
				offset: 8,
				span: 16,
			}}
		>
			<Button type='primary' htmlType='submit'>
				Submit
			</Button>
		</Form.Item>
	</Form>
)
export default SignUp;