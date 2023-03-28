import mongoose from "mongoose"

const connectBD = (url) =>  mongoose.connect(url).then(()=> { console.log(`database connected`) })

export default connectBD