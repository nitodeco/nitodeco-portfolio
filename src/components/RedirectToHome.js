import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectToHome() {
    let navigate = useNavigate();
    useEffect(() => {
        navigate('/resume');
    }, [navigate]);

    return null;
}

export default RedirectToHome;

