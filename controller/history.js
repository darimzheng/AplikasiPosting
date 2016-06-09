var sejarah = {
	'nama': 'Rencong',
	'foto': 'Aceh/Rencong.jpg',
	'isi': "<p>Detail : Rencong merupakan senjata tradisional Aceh. Bahkan karena begitu masyhurnya, Aceh digelari dengan sebutan “Tanah Rencong”. Rencong melambangkan kebesaran para bangsawan dan keberanian para pejuang serta rakyat Aceh di masa penjajahan Jepang Belanda. Hampir setiap pejuang Aceh, membekali dirinya dengan rencong sebagai alat pertahanan diri.</p><p>Sekarang, Rencong tidak lagi digunakan sebagai alat pertahanan diri ataupun senjata. Rencong telah berubah menjadi cinderamata yang dapat ditemukan hampir di semua toko kerajinan khas Aceh. Selain dibuat seperti bentuk aslinya, rencong juga dikombinasikan dengan aspek lain, seperti bros berbentuk rencong sampai hiasan dinding dengan bingkai kaca.</p>"
};

var history = function(req, res){
	res.render('history', {sejarah: sejarah});
};

module.exports = history;