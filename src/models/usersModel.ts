import mongoose,{Schema, models, model, Mongoose} from "mongoose";

export interface User extends mongoose.Document{
    nombre: String,
    apelligos: String,
    usuario: String,
    pw: String,
    edad: number,
    ci: String,
    correo: String,

}
const userSchema = new Schema({
    nombre: String,
    apellidos: String,
    usuario: String,
    pw: String,
    edad: Number,
    ci: String,
    correo: String,
})
export default model<User>('users', userSchema)