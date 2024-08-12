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
export async function PUT(req: NextRequest) {
  await connectMongo();
  const data = await req.json() ; 
  console.log(data)
  const id = data?.id ;
  const authorized = data?.authorized ;

  try {
    const blogPosts = await Blog.findByIdAndUpdate({_id:id}, {authorized:authorized}) ;
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to fetch blog posts' }, { status: 400 });
  }
}