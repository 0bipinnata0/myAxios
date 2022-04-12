import axios from "axios";

type User = {
    id: number
    title: string
    author: string
};

export const api = {
    getUser(id: number): Promise<User> {
        return axios.get('http://localhost:3004/posts', {
            params: { id },
            headers: {
                'x-header': 'xxx'
            }
        }).then(res => res.data);
    },

    createToken(id: number) {
        return axios.post('http://localhost:3004/posts', {
            id,
            title: new Date().toString(),
            author: Math.round(Math.random() * 1111).toString(),
        }).then(res => res.data);
    }
};