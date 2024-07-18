/**Datas' types used by app */

export interface userStatus{
    isLogged: Boolean,
    token: string
}

export const emptyStatus: userStatus ={
    isLogged: false,
    token: ""
}

export interface userProfile{
    email: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
    id: string,
    token: string
}

export const emptyProfile: userProfile={
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: "",
    id: "",
    token: ""
}