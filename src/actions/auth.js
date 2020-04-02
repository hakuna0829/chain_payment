import AuthApi from '../api/AuthApi';
import ActionTypes from '../constants/actionTypes';

export function login(email, password) {
    return dispatch => {
        dispatch(request());
        return AuthApi
            .login(email, password)
            .then(resp => {
                    localStorage.setItem('token', resp.data.token)
                    localStorage.setItem('role', resp.data.role)
                    localStorage.setItem('name', resp.data.name)
                    localStorage.setItem('email', resp.data.email)
                    localStorage.setItem('id', resp.data.id)
                    return dispatch(success(resp.data))
                })
            .catch(error => dispatch(failure(error.response.data)));
    };

    function request() { return { type: ActionTypes.AUTH_LOGIN.REQUEST } }
    function success(user) { return { type: ActionTypes.AUTH_LOGIN.SUCCESS, payload: user } }
    function failure(error) { return { type: ActionTypes.AUTH_LOGIN.FAILURE, payload: error } }
}

export function register(email, password, role, agreeTerm, newsletter) {
    return dispatch => {
        dispatch(request());
        return AuthApi
          .register(email, password, role, agreeTerm, newsletter)
          .then(resp => {
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('role', resp.data.role)
                localStorage.setItem('name', '')
                localStorage.setItem('email', resp.data.email)
                localStorage.setItem('id', resp.data.id)
                return dispatch(success(resp.data))
            })
          .catch(error => dispatch(failure(error.response.data)));
    };

    function request() { return { type: ActionTypes.AUTH_REGISTER.REQUEST } }
    function success(user) { return { type: ActionTypes.AUTH_REGISTER.SUCCESS, payload: user } }
    function failure(error) { return { type: ActionTypes.AUTH_REGISTER.FAILURE, payload: error } }
}

export function forgotPassword(email) {
    return dispatch => {
        dispatch(request());
        return AuthApi
            .forgotPassword(email)
            .then(resp => {
                    return dispatch(success(resp.data))
                })
            .catch(error => dispatch(failure(error.response.data)));
    };

    function request() { return { type: ActionTypes.AUTH_FORGOT_PASSWORD.REQUEST } }
    function success(user) { return { type: ActionTypes.AUTH_FORGOT_PASSWORD.SUCCESS, payload: user } }
    function failure(error) { return { type: ActionTypes.AUTH_FORGOT_PASSWORD.FAILURE, payload: error } }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('id');
        dispatch(success())        
    };

    
    function success() { return { type: ActionTypes.AUTH_LOGOUT.SUCCESS } }
    
}
