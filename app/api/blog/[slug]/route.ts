import { connectMongo } from "@/libs/mongodb";
import Blog from "@/model/blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,
    { params }: { params: { slug: string } }) {
    const slug = params.slug ;
    await connectMongo();
  
    try {
      const blogPost = await Blog.findOne({slug: slug, authorized:true});
      console.log(blogPost)
      if (blogPost)
      return NextResponse.json({ data: blogPost, success: true }, { status: 200 });
      else 
      return NextResponse.json({ error: 'Failed to fetch blog posts', success: false }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false, error: 'Failed to fetch blog posts' }, { status: 400 });
    }
  }



export async function DELETE(req: NextRequest,{ params }: { params: { slug: string } } ){
  const id = params.slug ;
  console.log(id)
  try {
    await Blog.findByIdAndDelete(id)
    return NextResponse.json({success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
      return NextResponse.json({ success: false, error: 'Failed to delete blog post' }, { status: 400 });
  }
}
export async function PUT(req: NextRequest,{ params }: { params: { slug: string } } ){
  const id = params.slug ;
  try {
    const body = await req.json()
    await Blog.findByIdAndUpdate(id, {updatedAt: new Date(), ...body})
    return NextResponse.json({success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
      return NextResponse.json({ success: false, error: 'Failed to update blog post' }, { status: 400 });
  }
}
  