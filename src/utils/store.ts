import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import RootState from '@customtypes/store'
import AppDispatch from '@customtypes/dispatch'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
const useThunkDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export { useTypedSelector, useThunkDispatch }
