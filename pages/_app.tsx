import type { AppProps } from 'next/app'
import { wrapper } from '../src/modules/store/index'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
