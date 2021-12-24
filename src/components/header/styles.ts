import styled from '@emotion/styled'

export const Header = styled.header`
    width: 100%;
    height: 110px;
    display: block;
    position: relative;
    padding-top: 2rem;
`

export const HeaderContent = styled.div`
    justify-content: space-between;
    color: white;
    font-family: 'Inter';
    font-weight: lighter;
    display: flex;
    padding: 0 5%;
    cursor: pointer;
`

export const HeaderLeftContent = styled.div`
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    width: 50%;
`
export const HeaderRightContent = styled.div`
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15%;

    div {
        padding-left: 8px;
    }
`
