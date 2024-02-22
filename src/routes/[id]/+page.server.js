import { redirect } from "@sveltejs/kit";
import Mahasiswa from "../../database/models/Mahasiswa";

export const load = async({params}) =>{
    
    const {nama , nim , kelas} = await Mahasiswa.findOne({
        where : {
            id : params.id
        }
    });
    
    return{
        mahasiswa : {
            nama , nim , kelas
        },
    }
}

export const actions = {
    updatemahasiswa : async({request , params})=>{
        try {
            const data = await request.formData();
            const nama = data.get("nama");
            const nim = data.get("nim");
            const kelas = data.get("kelas");
            
            const mahasiswa = {
                nama , nim , kelas
            }
            await Mahasiswa.update(mahasiswa , {
                where : {
                    id : Number(params.id)
                }
            });
            
        } catch (error) {
            console.log(error);
        }
        
    }
}