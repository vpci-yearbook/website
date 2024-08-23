import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('getting image previews')
    const response = await fetch('https://0a9b-162-221-127-80.ngrok-free.app/images/previews');
    const data = await response.json();
    console.log('data', data);
    return NextResponse.json(data);
  } catch (error) {
    console.log('Error getting image previews', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}
