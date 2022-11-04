import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
    // Unexpected (network down, server down, db down, bug)
    // - Log them
    // - Display a generic and friendly error messages
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {
        logger.log(error);
        toast.error("An unexpected error occurred.");
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};