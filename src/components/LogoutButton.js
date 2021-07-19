import React from "react";
import {useHistory} from "react-router-dom";

const LogoutButton = () => {
    const { push } = useHistory();

    const handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        push('/');
    }

    return (
        <button data-testid='logoutButton' onClick={handleLogout}>Logout</button>
    )
}

export default LogoutButton;