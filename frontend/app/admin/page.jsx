"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
    const [photos, setPhotos] = useState([]);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            axios.get('/api/unapproved-images', { params: { password } })
                .then((res) => setPhotos(res.data))
                .catch(() => {
                    router.push('/');
                });
        }
    }, [isAuthenticated]);

    const handleLogin = async () => {
        try {
            await axios.get('/api/check-admin', { params: { password } });
            setIsAuthenticated(true);
        } catch {
            alert('Invalid password');
        }
    };

    const approvePhoto = async (file_id) => {
        try {
            await axios.post(`/api/approve-photo/${file_id}`, null, { params: { password } });
            setPhotos(photos.filter((photo) => photo.file_id !== file_id));
        } catch (error) {
            console.error('Error approving photo', error);
        }
    };

    if (!isAuthenticated) {
        return (
            <div>
                <h1>Admin Login</h1>
                <input
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Admin Approval</h1>
            {photos.map((photo) => (
                <div key={photo.file_id}>
                    <img src={`/api/images/${photo.file_id}/preview`} alt={photo.filename} />
                    <button onClick={() => approvePhoto(photo.file_id)}>Approve</button>
                </div>
            ))}
        </div>
    );
};

export default AdminPage;
