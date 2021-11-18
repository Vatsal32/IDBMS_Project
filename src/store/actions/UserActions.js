import {LOGIN_SUCCESSFUL} from "../ActionTypes";

export const LoginSuccessful = () => {
    return {
        type: LOGIN_SUCCESSFUL,
    }
};

export const login = (data) => {
    return (dispatch) => {
        return fetch('/api/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(res => {
                let errors = res.errors;
                if (!Boolean(errors)) {
                    let token = res.token;
                    delete res.token;
                    sessionStorage.setItem('token', token);
                    dispatch(LoginSuccessful());
                }
                return res.errors;
            });
    }
};

export const registerPatient = (data) => {
    return () => {
        return fetch(
            '/api/bloodBank/addPatient', {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }
        ).then(res => res.json()).then(res => {
            return res;
        });
    }
};

export const getAllPatients = () => {
    return () => {
        return fetch(
            '/api/bloodBank/all', {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            }
        ).then(res => res.json()).then(res => {
            return res;
        });
    }
};

export const deletePatient = (data) => {
    return () => {
        return fetch('/api/bloodBank/delPatient', {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => res.json()).then(res => res);
    };
};

export const addRequest = (data) => {
    return () => {
        return fetch('/api/bloodBank/addReq', {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res => res);
    };
}