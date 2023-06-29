// Data Model for User
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema for links
const UserSchema = new Schema({
  emailId: { type: String },
  password: { type: String},
  username: { type: String}
}, { collection: 'Users' });

// Export model
module.exports = mongoose.model("Users", UserSchema);
