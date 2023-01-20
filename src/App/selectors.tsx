import { StoreType } from './store'

export const selectStatus = (state: StoreType) => state.app.status
