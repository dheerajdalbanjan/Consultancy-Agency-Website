import mongoose from "mongoose"

export const connectMongo =async () => {
    try {
        if(!mongoose.connections[0].readyState)
            await mongoose.connect(process.env.MONGODB_URI || "")
        console.log("connected ")
    } catch (error) {
        console.log(error)
    }
}