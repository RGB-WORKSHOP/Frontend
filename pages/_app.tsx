import type { AppProps } from 'next/app'
import { wrapper } from '../src/modules/store/index'
import { globalStyle } from '../src/styles/globalStyle'
import { Global } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Global styles={globalStyle}></Global>
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(MyApp)
