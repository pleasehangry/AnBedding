import mongoose from "mongoose";

async function connect() {
  URL =
    "mongodb+srv://102200170:102200170@mycluster.vxnanms.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info("Connect Sussecfully");
  } catch (error) {
    console.log("Connect Failer");
  }
}

export default connect;
