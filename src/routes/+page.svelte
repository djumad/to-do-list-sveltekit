<script>
    import "bootstrap/dist/css/bootstrap.min.css";

    export let data;
    const {mahasiswa} = data;
</script>

<table class="table">
    <thead>
        <tr>
            <td>#</td>
            <td>Nama Lengkap</td>
            <td>Nim</td>
            <td>Kelas</td>
            <td>Action</td>
        </tr>
    </thead>
    <tbody>
        {#each mahasiswa as mhs , index}    
        <tr>
            <td>{index + 1}</td>
            <td>{mhs.nama}</td>
            <td>{mhs.nim}</td>
            <td>{mhs.kelas}</td>
            <td>
                <a href="/{mhs.id}" class="btn btn-warning">Update</a>
                <form method="post" action="?/deletemahasiswa&id={mhs.id}">
                    <input type="submit" value="Delete" class="btn btn-danger">
                </form>
            </td>
        </tr>
        {/each}
    </tbody>
</table>

<form method="POST" action="?/create" class="form-control p-2">
    <input type="text" name="nama" class="form-control m-2" placeholder="Nama">
    <input type="text" name="nim" class="form-control m-2" placeholder="Nim">
    <input type="text" name="kelas" class="form-control m-2" placeholder="Kelas">
    <input type="submit" value="Tambah Data" class="form-control m-2 btn btn-primary">
</form>