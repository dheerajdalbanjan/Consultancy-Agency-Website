import { connectMongo } from '@/libs/mongodb';
import Blog from '@/model/blog';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  await connectMongo();

  try {
    const blogPosts = await Blog.find({});
    return NextResponse.json({ data: blogPosts.reverse(), success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to fetch blog posts' }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  await connectMongo();

  try {
    const body = await req.json(); // Parse the request body
    const blogPost = await Blog.create(body);
    return NextResponse.json({ success: true, data: blogPost }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to create blog post' }, { status: 400 });
  }
}
