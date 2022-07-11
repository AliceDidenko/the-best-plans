import {useSelector} from 'react-redux'

export function useAuth () {
    const {name, login, avatar, id, token} = useSelector(state => state.user)

    return { 
        isAuth: !!(name && login),
        name, 
        login, 
        avatar, 
        id, 
        token
    }
} 