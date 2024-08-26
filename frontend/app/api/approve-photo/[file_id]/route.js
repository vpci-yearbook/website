import { NextResponse } from 'next/server';

export async function POST(request) {
    const url = new URL(request.url);
    const file_id = url.pathname.split('/').pop();

    console.log('file_id', file_id);

    try {
        const response = await fetch(`https://0a9b-162-221-127-80.ngrok-free.app/images/${file_id}/approve`, {
            method: 'POST',
            headers: {
                'Cache-Control': 'no-store',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to approve photo');
        }

        return NextResponse.json({ message: 'Photo approved successfully' });
    } catch (error) {
        console.log('Error approving photo', error);
        return NextResponse.json({ error: 'Failed to approve photo' }, { status: 500 });
    }
}
