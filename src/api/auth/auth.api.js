import { axiosPrivate } from '../auth';

export const loginPage = async (data) => {
    try {
        return await axiosPrivate.post('/api/user/signin', data);
    } catch (err) {
        throw new Error(err)
    }
};
