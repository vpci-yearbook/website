import { NextResponse } from 'next/server';

const ADMIN_PASSWORD = 'EXh>Lse}:rKd8y4+;pMG,9';

export async function GET(request) {
    const url = new URL(request.url);
    const password = url.searchParams.get('password');

    if (password === ADMIN_PASSWORD) {
        return NextResponse.json({ isAuthenticated: true });
    } else {
        return NextResponse.json({ isAuthenticated: false }, { status: 403 });
    }
}
