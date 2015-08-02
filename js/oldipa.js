function oldNew() {
	var table = getId("ipaTable");
	var cell, i;
	var ids = ["IH","OH","UH","EE","EY","AY","OY","OW","AW","IR","ER","UR","EM","OM"];
	var oldIpa = ["i","&#x0254;","u","&#x0259;:","ei","ai","&#x0254;i","&#x0259;u","au","i&#x0259;","&#x025B;&#x0259;","u&#x0259;","&#x025A;:","ou"];
	var newIpa = ["&#x026A;","&#x0252;","&#x028A;","&#x025C;:","e&#x026A;","a&#x026A;","&#x0254;&#x026A;","&#x0259;&#x028A;", "a&#x028A;","&#x026A;&#x0259;","e&#x0259;","&#x028A;&#x0259;","&#x025D;:","o&#x028A;"];
	if (getId("oldIpa").checked) {
		for (i=0;i<14;i++) {
			getId(ids[i]).innerHTML = oldIpa[i];
		}
		table.rows[0].cells[0].colSpan += 1;
		for (i=0;i<4;i++) {
			cell = table.rows[i+1].insertCell(6);
			cell.innerHTML = ["ts","dz","tr","dr"][i];
			cell.id = ["TTSS","DDZZ","TTRR","DDRR"][i];
			addClick(cell);
		}
	}
	else {
		for (var i=0;i<14;i++) {
			getId(ids[i]).innerHTML = newIpa[i];
		}
		table.rows[0].cells[0].colSpan -= 1;
		for (var i=1;i<=4;i++) {
			table.rows[i].deleteCell(6);
		}
	}
}