import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

export async function GET() {
  

  if (!YOUTUBE_API_KEY) {
    return NextResponse.json({ message: 'YouTube API Key non configurata' }, { status: 500 });
  }
  if (!YOUTUBE_CHANNEL_ID) {
    return NextResponse.json({ message: 'YouTube Channel ID non configurato' }, { status: 500 });
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ message: `Errore API: ${data.error.message}` }, { status: 500 });
    }

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ message: 'Canale YouTube non trovato' }, { status: 404 });
      
    }

    const { statistics } = data.items[0];
    return NextResponse.json({
      subscribers: statistics.subscriberCount,
      views: statistics.viewCount,
      videos: statistics.videoCount,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Errore nel recupero dei dati da YouTube', error }, { status: 500 });
  }
}
