import { getAccessToken } from '@auth0/nextjs-auth0';

export async function GET(req) {
    try {
        const { accessToken } = await getAccessToken();
        return Response.json({ accessToken });
    } catch (error) {
        return Response.json({ error: "Failed to get access token" }, { status: 500 });
    }
}
