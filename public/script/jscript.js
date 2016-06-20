var a=document.getElementById("foto","picture");
var imageAr=["image/Aceh/Ija Kroeng.jpg","image/Aceh/Kupiah.jpg","image/Aceh/Pinto.jpg","image/Aceh/Piyoh.jpg","image/Aceh/Rencong.jpg","image/Aceh/Songket.jpg","image/Aceh/Tas.jpg"];
var index=0;
var tempatberita=0;

function gantigambar(){
	a.setAttribute("src", imageAr[index], imageAr[tempatberita]);
	index++;
	if(index>=imageAr.length){
		index=0;
	}
}
var interval =setInterval(gantigambar,2000);


a.oneclick=function(){
	clearInterval(interval);
}