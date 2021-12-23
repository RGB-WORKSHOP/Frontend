import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../modules/store/modules'

import * as S from './styles'

interface Props {}

const Header: FC<Props> = () => {
    const dispatch = useDispatch()
    const [scroll, setScroll] = useState(0)

    const userData = useSelector((rootState: RootState) => rootState.userInfo)

    useEffect(() => {
        window.onscroll = () => setScroll(window.scrollY)
    }, [])

    return (
        <>
            <S.Header />
        </>
    )
}
