import { axiosPrivate } from '../auth';

export const createHotel = async (data) => {
    try {
        return await axiosPrivate.post('/api/hotel/create', data);
    } catch (err) {
        throw new Error(err)
    }
};
