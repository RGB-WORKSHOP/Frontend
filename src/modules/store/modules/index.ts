import { combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import userInfo from './userInfo'

const rootReducer = combineReducers({
    userInfo,
})

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        }
    }

    return rootReducer(state, action)
}

export default reducer

export type RootState = ReturnType<typeof rootReducer>
