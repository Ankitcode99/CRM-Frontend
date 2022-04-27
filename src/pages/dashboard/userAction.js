import {getUserFailure, getUserSuccess, getUserPending} from './userSlice'
import { fetchUserProfile } from '../../api/userApi';

export const getUserProfile = () => async (dispatch) => {
    try {
        dispatch(getUserPending())
        const userProfile = await fetchUserProfile();

        if (userProfile.status === 'success') {
            dispatch(getUserSuccess(userProfile.data))
        } else {        
            dispatch(getUserFailure(userProfile.message))
        }

    } catch (error) {
        dispatch(getUserFailure(error))
    }
}