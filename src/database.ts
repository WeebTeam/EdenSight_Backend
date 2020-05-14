import Mongoose from "mongoose";

let database: Mongoose.Connection;

export const dbConnect = (dbName: string) => {  // add your own uri below
  const uri = "mongodb://127.0.0.1/" + dbName;

  //if database is connected, no need to connect anymore
  if (database) {
    return;
  }

//connection settings
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to MongoDB database " + dbName);
  });

  database.on("error", () => {
    console.log("Error connecting to MongoDB database");
  });
};

export const dbDisconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
