function staffDirDisplay(){
	document.getElementById('staffDir').style.display = 'block';
	document.getElementById('files').style.display = 'none';
  document.getElementById('btn-1').disabled = 'true';
  document.getElementById('btn-2').removeAttribute("disabled");
}

function filesDisplay(){
	document.getElementById('staffDir').style.display = 'none';
	document.getElementById('files').style.display = 'block';
  document.getElementById('btn-1').removeAttribute("disabled");
  document.getElementById('btn-2').disabled = 'true';
}
staffDirDisplay();