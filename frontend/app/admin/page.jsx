"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
            <div className='p-4'>
                <h1>Admin Login</h1>
                <Input
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-80 my-4"
                />
                <Button onClick={handleLogin}>Login</Button>
            </div>
        );
    }

    console.log('photos', photos);

    return (
        <div className='p-4'>
            <h1>Admin Approval</h1>
            {!photos.length && <p>No photos to approve.</p>}
            {photos && photos.map((photo) => (
                <div key={photo.file_id}>
                    <img src={`${ngrokUrl}/images/${photo.file_id}/preview`} alt={photo.filename} />
                    <p>
                        {JSON.stringify(photo)}
                    </p>
                    <Button onClick={() => approvePhoto(photo.file_id)}>Approve</Button>
                </div>
            ))}
        </div>
    );
};

export default AdminPage;
