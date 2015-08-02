function init() {
	var tds = document.getElementsByTagName("td");
	for (var i=0;i<tds.length;i++) {
		if (tds[i].className=="no") continue;
		addClick(tds[i]);
	}
	var opt, span;
	for (var lang in translation) {
		span = document.createElement("span");
		opt = document.createElement("input");
		opt.setAttribute("type", "radio");
		opt.setAttribute("name", "lang");
		opt.setAttribute("id", lang);
		span.appendChild(opt);
		span.innerHTML += translation[lang].langName + " ";
		span.style.cursor = "pointer";
		if (navigator.userAgent.toLowerCase().indexOf("msie")>=0) {
			span.attachEvent("onclick", function(){lingo(this.childNodes[0].id);});
		}
		else {
			span.addEventListener("click", function(){lingo(this.childNodes[0].id);}, false);
		}
		getId("langs").appendChild(span);
	}
	var aud, src;
	for (var id in audio) {
		aud = document.createElement("audio");
		aud.setAttribute("id", id);
		src = document.createElement("source");
		src.setAttribute("src", "data:audio/mpeg;base64," + audio[id]);
		aud.appendChild(src);
		getId("audio").appendChild(aud);
	}
	refresh();
}

function addClick(obj) {
	if (!obj.id) return;
	if (navigator.userAgent.toLowerCase().indexOf("msie")>=0) {
		obj.attachEvent("onclick", function(){p(obj.id);});
	}
	else {
		obj.addEventListener("click", function(){p(obj.id);}, false);
	}
}

function isBritish(content) {
	return ["RH","AM","EM","OM","z"].indexOf(content)<0;
}

function isAmerican(content) {
	return ["OH","EE","OW","IR","ER","UR","Z"].indexOf(content)<0;
}

function p(content) {
	if ((getMode()==1&&!isBritish(content))||(getMode()===2&&!isAmerican(content))) return;
	if (["11","22","00","((","))"].indexOf(content)>=0) return;
	if (content.length==4) {
		getId(content+"-").play();
		return;
	}
	if (getMode()==2||!isBritish(content)) getId(content.toUpperCase()+"-GA").play();
	else getId(content+"-RP").play();
}

function getMode() {
	for (var i=0;i<3;i++) {
		if (document.getElementsByName("mode")[i].checked) return i;
	}
}

function modeSelect() {
	for (var j=0;j<7;j++) {
		document.getElementsByName("RP")[j].style.color="#000";
		document.getElementsByName("RP")[j].className="";
		if (j<5) {
			document.getElementsByName("GA")[j].style.color="#000";
			document.getElementsByName("GA")[j].className="";
		}
	}
	getId("z").style.borderBottomColor = "grey";
	getId("Z").style.borderRightColor = "grey";
	getId("z").className="";
	getId("Z").className="";
	if (getMode()==1) {
		for (j=0;j<5;j++) {
			document.getElementsByName("GA")[j].style.color="#FFF";
			document.getElementsByName("GA")[j].className="no";
		}
		getId("z").style.borderBottomColor = "#FFF";
		getId("z").className="no";
	}
	else if (getMode()==2) {
		for (j=0;j<7;j++) {
			document.getElementsByName("RP")[j].style.color="#FFF";
			document.getElementsByName("RP")[j].className="no";
		}
		getId("Z").style.borderRightColor = "#FFF";
		getId("Z").className="no";
	}
}

