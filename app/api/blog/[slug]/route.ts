import { connectMongo } from "@/libs/mongodb";
import Blog from "@/model/blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,
    { params }: { params: { slug: string } }) {
    const slug = params.slug ;
    await connectMongo();
  
    try {
      const blogPost = await Blog.findOne({slug: slug});
      if (blogPost)
      return NextResponse.json({ data: blogPost, success: true }, { status: 200 });
      else 
      return NextResponse.json({ data: blogPost, success: false }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false, error: 'Failed to fetch blog posts' }, { status: 400 });
    }
  }
  