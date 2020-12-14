import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import StoreType from '@customtypes/store'

type AppDispatch = ThunkDispatch<StoreType, null, Action>

export default AppDispatch
