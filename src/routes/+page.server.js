import { redirect } from "@sveltejs/kit";
import Mahasiswa from "../database/models/Mahasiswa";

export const load = async ()=>{

    const response = await Mahasiswa.findAll();
    
    const mahasiswa = response.map(mahasiswa =>(
        {
            id : mahasiswa.id,
            nama : mahasiswa.nama,
            nim : mahasiswa.nim,
            kelas : mahasiswa.kelas,
        }
    ));
    
    return{
        mahasiswa
    }
}


export const actions = {
    create : async({request})=>{
        const data = await request.formData();
        const nama = data.get('nama');
        const nim = data.get('nim');
        const kelas = data.get('kelas');

        if(!nama || !nim || !kelas){
            return {
                msg : "Data Belum Lengkap"
            }
        }
        const newMahasiswa = await Mahasiswa.create({
            nama , nim , kelas
        });
        newMahasiswa.save();
    },
    deletemahasiswa : async({url}) =>{
        const id = url.searchParams.get("id");

        if(!id){
            return {
                msg : "Data tidak ditemukan"
            }
        }
        try {
            await Mahasiswa.destroy({
                where : {
                    id : Number(id)
                }
            });

            throw redirect(302 , '/');
        } catch (error) {
            return{
                msg : "error : " + error
            }
        }
    }

}
