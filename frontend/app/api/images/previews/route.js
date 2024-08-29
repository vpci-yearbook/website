import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('getting image previews');
    const response = await fetch('https://0a9b-162-221-127-80.ngrok-free.app/images/previews', {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
      },
    });
    const data = await response.json();
    console.log('data', data);
    return NextResponse.json(data, { 
      headers: { 
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
      } 
    });
  } catch (error) {
    console.log('Error getting image previews', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}
