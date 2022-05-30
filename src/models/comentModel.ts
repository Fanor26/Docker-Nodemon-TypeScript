import mongoose,{Schema, model} from 'mongoose';

export interface Coment extends mongoose.Document {
    author: String;
    comentario: String;
}
const ComentSchema = new Schema({
    author: String,
    comentario: String
})
export default model<Coment>('comentarios', ComentSchema) 
