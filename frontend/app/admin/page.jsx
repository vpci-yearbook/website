"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const AdminPage = () => {
    const ngrokUrl = 'https://0a9b-162-221-127-80.ngrok-free.app';
  
    const [photos, setPhotos] = useState([]);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            axios.get('/api/images/unapproved-images', { params: { password } })
                .then((res) => setPhotos(res.data))
                .catch((error) => {
                    console.log(error);
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
            await axios.post(`/api/approve-photo/${file_id}`);
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

    console.log('photos', photos);

    return (
        <div>
            <h1>Admin Approval</h1>
            {photos && photos.map((photo) => (
                <div key={photo.file_id}>
                    <img src={`${ngrokUrl}/images/${photo.file_id}/preview`} alt={photo.filename} />
                    <Button onClick={() => approvePhoto(photo.file_id)}>Approve</Button>
                </div>
            ))}
        </div>
    );
};

export default AdminPage;
