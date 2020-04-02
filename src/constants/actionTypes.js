import {defineAction} from "redux-define";

export default {
    AUTH_LOGIN : defineAction('AUTH_LOGIN', ['REQUEST', 'SUCCESS', 'FAILURE']),
    AUTH_REGISTER : defineAction('AUTH_REGISTER', ['REQUEST', 'SUCCESS', 'FAILURE']),
}