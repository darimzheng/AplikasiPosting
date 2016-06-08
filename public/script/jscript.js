var a=document.getElementById("foto","picture");
var imageAr=["Image/aceh/Ija Kroeng.jpg","Image/aceh/Kupiah.jpg","Image/aceh/Pinto.jpg","Image/aceh/Piyoh.jpg","Image/aceh/Rencong.jpg","Image/aceh/Songket.jpg","Image/aceh/Tas.jpg"];
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