import { Button } from 'antd'
import type { NextPage } from 'next'
import AppLayout from '../layout/Layout'



const Home: NextPage = () => {
  return (
    <AppLayout>
      <Button type="primary">Hi</Button>
    </AppLayout>
  )
}

export default Home
