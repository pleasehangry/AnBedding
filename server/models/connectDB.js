import mongoose from "mongoose";

async function connect() {
  URL = "";
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Sussecfully");
  } catch (error) {
    console.log("Connect Failer");
  }
}

export default connect;
