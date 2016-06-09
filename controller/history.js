var sejarah = {
	nama: 'Rencong',
	foto: 'Aceh/Rencong.jpg',
	isi: 'Detail : Rencong merupakan senjata tradisional Aceh. Bahkan karena begitu masyhurnya, Aceh digelari dengan sebutan “Tanah Rencong”. Rencong melambangkan kebesaran para bangsawan dan keberanian para pejuang serta rakyat Aceh di masa penjajahan Jepang Belanda. Hampir setiap pejuang Aceh, membekali dirinya dengan rencong sebagai alat pertahanan diri.',
	isi2: 'Sekarang, Rencong tidak lagi digunakan sebagai alat pertahanan diri ataupun senjata. Rencong telah berubah menjadi cinderamata yang dapat ditemukan hampir di semua toko kerajinan khas Aceh. Selain dibuat seperti bentuk aslinya, rencong juga dikombinasikan dengan aspek lain, seperti bros berbentuk rencong sampai hiasan dinding dengan bingkai kaca.'
};

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