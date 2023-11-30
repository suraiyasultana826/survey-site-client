import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://surver-site-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;