import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppThunkDispatchType, StoreType } from '../../App/store'

export const useAppDispatch: () => AppThunkDispatchType = useDispatch

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector
