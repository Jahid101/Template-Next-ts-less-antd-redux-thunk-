import { Result, Button } from 'antd';
import Router from 'next/router'
// pages/404.js
export default function Custom404() {
    return <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button onClick={() => {Router.push('/')}} type="primary">Back Home</Button>}
  />
}
