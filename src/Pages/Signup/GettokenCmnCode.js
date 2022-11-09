import { useNavigate } from "react-router-dom";

export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    fetch('https://photography-service-review-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)

    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('genius-token', data.token);
        })
}