import { axiosPrivate } from '../auth';

export const loginPage = async (data) => {
    try {
        return await axiosPrivate.post('/api/user/signin', data);
    } catch (err) {
        throw new Error(err)
    }
};

export const sendEmailCode = async (data) => {
    try {
        return await axiosPrivate.post('/api/mail/emailConfirm', data);
    } catch (err) {
        throw new Error(err)
    }
};

export const confirmCodeReset = async (data) => {
    try {
        return await axiosPrivate.post('/api/mail/confirmCode', data);
    } catch (err) {
        throw new Error(err)
    }
};

export const resetPassword = async (data) => {
    try {
        return await axiosPrivate.post('/api/user/resetpassword', data);
    } catch (err) {
        throw new Error(err)
    }
};
