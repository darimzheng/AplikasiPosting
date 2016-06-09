var sejarah = [{
	nama: 'Rencong',
	foto: 'Aceh/Rencong.jpg',
	isi: 'Detail : Rencong merupakan senjata tradisional Aceh. Bahkan karena begitu masyhurnya, Aceh digelari dengan sebutan “Tanah Rencong”. Rencong melambangkan kebesaran para bangsawan dan keberanian para pejuang serta rakyat Aceh di masa penjajahan Jepang Belanda. Hampir setiap pejuang Aceh, membekali dirinya dengan rencong sebagai alat pertahanan diri.',
	isi2: 'Sekarang, Rencong tidak lagi digunakan sebagai alat pertahanan diri ataupun senjata. Rencong telah berubah menjadi cinderamata yang dapat ditemukan hampir di semua toko kerajinan khas Aceh. Selain dibuat seperti bentuk aslinya, rencong juga dikombinasikan dengan aspek lain, seperti bros berbentuk rencong sampai hiasan dinding dengan bingkai kaca.'
},{
	nama: 'Songket',
	foto: 'Aceh/Songket.jpg',
	isi: 'Detail : Kerajinan songket Aceh berasal dari Desa Siem di Kecamatan Darussalam, Kabupaten Aceh Besar. Dari Banda Aceh, kamu bisa naik labi-labi (kendaraan umum) atau mobil pribadi dengan jarak tempuh sekitar 14 Km. Tak sekadar untuk pakaian, songket Aceh juga digunakan untuk beragam keperluan lainnya seperti hiasan meja, hiasan dinding, hiasan kupiah meukeutop dan sebagainya. Nyak Mu salah seorang pemilik usaha kain songket desa Siem ini sudah pernah mengikutsertakan karyanya di Bali dan Jakarta bahkan di luar indonesia seperti Malaysia, Singapura dan Sri Lanka.'
},{
	nama: 'Piyoh',
	foto: 'Aceh/Piyoh.jpg',
	isi: 'Detail : sebuah usaha yang bergerak dalam bidang produksi merchandise yang berusaha mengangkat tema-tema local, seperti potensi wisata, budaya dan lain-lain yang terkait dengan Kota Sabang. Yang menjadi produk utama Piyoh adalah T-shirt dengan desain-desain kontemporer yang memiliki misi “berbagi Sabang dimana aja”.',
	isi2: 'Nama Piyoh Design sendiri diambil dari kata dalam bahasa Aceh, yaitu “Piyoh” yang artinya mampir atau singgah. Aku memilih bahasa Aceh sebagai Merk dagang karena selain lebih akrab didengar dan aku berkeinginan untuk memperkenalkan merk lokal ke luar. Kata Piyoh sendiri menunjukkan keramah-tamahan masyarakat Aceh terhadap siapa saja yang datang ke Aceh atau yang dikenal dengan istilah Peumulia Jamee.'
}];

var history = function(req, res){
	var id = parseInt(req.params.id);
	res.render('history', {
		sejarah: sejarah,
		id: id,
		lower: (((id - 2) < 1) ? 1 : (id - 2)),
		upper: (((id + 3) > 21) ? 21 : (id + 3))
	});
};

module.exports = history;