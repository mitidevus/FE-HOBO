import { axiosPrivate } from '../auth';

export const getInfoUser = async (id) => {
    try {
        return await axiosPrivate.get('/api/user/info/' + id);
    } catch (err) {
        throw new Error(err)
    }
};
