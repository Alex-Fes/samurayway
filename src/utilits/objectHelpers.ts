import { UserType } from '../Redux/usersReducer'

export const updateObjectInArray = (
  items: Array<UserType>,
  itemId: number,
  objPropName: string,
  newObjProps: any
) => {
  return items.map(u => {
    // @ts-ignore
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProps }
    }

    return u
  })
}
