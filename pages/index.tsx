import type { NextPage } from 'next'
import { Header } from '../src/components/header/header'
import { BodyWrapper } from '../src/components/body/body'

const Home: NextPage = () => {
    return (
        <>
            <BodyWrapper>
                <Header />
            </BodyWrapper>
        </>
    )
}

export default Home
