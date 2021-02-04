import axios from 'axios';

export const getCharities = async () => {
    const res = await axios.get('http://localhost:5000/associations');
    return res.data;
}
