<script>
    import "bootstrap/dist/css/bootstrap.min.css";
    export let data;
    const {mahasiswa} = data;
</script>



<form method="POST" action="?/updatemahasiswa" class="form-control p-2">
    <input type="text" name="nama" class="form-control m-2" placeholder="Nama" value={mahasiswa.nama}>
    <input type="text" name="nim" class="form-control m-2" placeholder="Nim" value={mahasiswa.nim}>
    <input type="text" name="kelas" class="form-control m-2" placeholder="Kelas" value={mahasiswa.kelas}>
    <input type="submit" value="Update Data" class="form-control m-2 btn btn-primary">
</form>
<a href="/" class="btn btn-danger">Back</a>