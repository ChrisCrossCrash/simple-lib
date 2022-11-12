import type { NextPage } from 'next'
import CKButton from '@chris-cross-crash/ck-button'

const Home: NextPage = () => {
  return (
    <div className='centered'>
      <CKButton>Click me!</CKButton>
    </div>
  )
}

export default Home
