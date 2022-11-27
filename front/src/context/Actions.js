export const LoginStart = (userCredentials) = ({
    type:"Login_start"
})

export const LoginSucceess = (user)=> ({
    type: "LOGIN_SUCCESS",
    payload:user,
})

export  const LoginFailure = () => ({
    type:"LOGIN_FAILURE",
})

