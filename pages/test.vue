<template>
    <div class="container mt-4">
        <input type="text" id="filterInput" class="form-control mb-3" placeholder="Cari data...">
        <table id="dataTable" class="table table-striped">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Usia</th>
              <!-- Tambahkan kolom lain sesuai dengan data yang akan ditampilkan -->
            </tr>
          </thead>
          <tbody>
            <!-- Data akan di-generate melalui JavaScript -->
          </tbody>
        </table>
      </div>
</template>

<script>
     // Data contoh (gantilah dengan data yang sesuai dengan kebutuhan Anda)
  var data = [
    { nama: "John Doe", usia: 25 },
    { nama: "Jane Smith", usia: 30 },
    { nama: "Michael Johnson", usia: 28 },
    // Tambahkan data lainnya
  ];

  // Fungsi untuk mengisi tabel dengan data yang sesuai dengan filter
  function populateTable(filter = "") {
    var tableBody = $("#dataTable tbody");
    tableBody.empty();

    data.forEach(function(item) {
      if (item.nama.toLowerCase().includes(filter.toLowerCase())) {
        var row = "<tr><td>" + item.nama + "</td><td>" + item.usia + "</td></tr>";
        tableBody.append(row);
      }
    });
  }

  // Panggil fungsi populateTable saat halaman selesai dimuat
  $(document).ready(function() {
    populateTable();

    // Tambahkan event listener untuk input filter
    $("#filterInput").on("input", function() {
      var filterValue = $(this).val();
      populateTable(filterValue);
    });
  });
</script>