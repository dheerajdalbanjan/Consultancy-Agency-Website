import { connectMongo } from "@/libs/mongodb";
import Package from "@/model/package";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    try {
      await connectMongo();
  
      // Check the initial state of documents that should be updated
      const initialPackages = await Package.find({ availed: { $exists: false } });
      console.log('Initial packages to update:', initialPackages);
  
      const result = await Package.updateMany(
        { availed: { $exists: false } },
        { $set: { availed: false } } // Set a default value for the new field
      );
  
      console.log('Update result:', result);
  
      // Re-fetch the updated documents to verify the changes
      const updatedPackages = await Package.find({ availed: false });
      console.log('Updated packages:', updatedPackages);
  
      return NextResponse.json({ message: "Updated packages", updatedPackages }, { status: 200 });
    } catch (error) {
      console.error('Error updating packages:', error);
      return NextResponse.json({ message: "Couldn't update packages" }, { status: 400 });
    }
  }
