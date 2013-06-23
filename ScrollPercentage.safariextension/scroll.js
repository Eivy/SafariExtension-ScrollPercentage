var t, sc, st, d=document;
var s=d.createElement('div');
s.id='scroll-percentage';
s.innerHTML='0%';
st=s.style;
st.position='fixed';
st.top='0px';
st.right='0px';
st.opacity=0.0;
d.body.appendChild(s);
sc=s;
function opa(){
	st.opacity-=0.08;
	if (st.opacity<=0.1) {
		st.opacity=0.0;
		clearInterval(t);
		t=void 0;
	}
}
d.onscroll=function(){
	st=sc.style;
	st.opacity=1.00;
	var dh = d.documentElement.scrollHeight;
	var wh = window.innerHeight;
	if(dh==wh)per=100;
	else per=Math.floor(d.body.scrollTop/(dh-wh)*100);
	per=Math.max(Math.min(per,100),0);
	sc.innerHTML=per+'%';
	if(t==void 0)t=setInterval(opa,50);
}
