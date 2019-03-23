//onload
window.onload = function() {
  document.getElementById('game').style.display = 'none';
  document.getElementById('rules').style.display = 'none';
};

//rules

function toggleRules() {
	var x = document.getElementById("rules");
		if (x.style.display == 'none') {
			document.getElementById('rules').style.display = 'block';
			document.getElementById('rulesBtn').innerHTML="Hide Rules"
			
			
		}
   		else {
	   		document.getElementById('rules').style.display = 'none';	
			document.getElementById('rulesBtn').innerHTML="Show Rules"
		}
};
//Rotate Board
var degrees = 0;
function toggleRotate() {
	degrees+=90;
	var k = document.getElementById("tbl").style.transform = 'rotate('+degrees+'deg)';
}
	
		
			

//Board code

//Block values
function createTable() {
var d1 = ['A', 'S', 'P', 'F', 'F', 'K'];
var d2 = ['N', 'U', 'I', 'H', 'M', 'Qu'];
var d3 = ['O', 'B', 'J', 'O', 'A', 'B'];
var d4 = ['L', 'N', 'H', 'N', 'R', 'Z'];
var d5 = ['A', 'H', 'S', 'P', 'C', 'O'];
var d6 = ['R', 'Y', 'V', 'D', 'E', 'L'];
var d7 = ['I', 'O', 'T', 'M', 'U', 'C'];
var d8 = ['L', 'R', 'E', 'I', 'X', 'D'];
var d9 = ['T', 'E', 'R', 'W', 'H', 'V'];
var d10 = ['T', 'S', 'T', 'I', 'Y', 'D'];
var d11 = ['W', 'N', 'G', 'E', 'E', 'H'];
var d12 = ['E', 'R', 'T', 'T', 'Y', 'L'];
var d13 = ['O', 'W', 'T', 'O', 'A', 'T'];
var d14 = ['A', 'E', 'A', 'N', 'E', 'G'];
var d15 = ['E', 'I', 'U', 'N', 'E', 'S'];
var d16 = ['T', 'O', 'E', 'S', 'S', 'I'];

//Randomize block value
var r1 = d1[Math.floor(Math.random()*d1.length)|0];
var r2 = d2[Math.floor(Math.random()*d2.length)|0];
var r3 = d3[Math.floor(Math.random()*d3.length)|0];
var r4 = d4[Math.floor(Math.random()*d4.length)|0];
var r5 = d5[Math.floor(Math.random()*d5.length)|0];
var r6 = d6[Math.floor(Math.random()*d6.length)|0];
var r7 = d7[Math.floor(Math.random()*d7.length)|0];
var r8 = d8[Math.floor(Math.random()*d8.length)|0];
var r9 = d9[Math.floor(Math.random()*d9.length)|0];
var r10 = d10[Math.floor(Math.random()*d10.length)|0];
var r11 = d11[Math.floor(Math.random()*d11.length)|0];
var r12 = d12[Math.floor(Math.random()*d12.length)|0];
var r13 = d13[Math.floor(Math.random()*d13.length)|0];
var r14 = d14[Math.floor(Math.random()*d14.length)|0];
var r15 = d15[Math.floor(Math.random()*d15.length)|0];
var r16 = d16[Math.floor(Math.random()*d16.length)|0];

//find matching image

//Letter images
 var letter = [];
	 letter[0]="images/a.jpg";
     letter[1]="images/b.jpg";
     letter[2]="images/c.jpg";
     letter[3]="images/d.jpg";
     letter[4]="images/e.jpg";
     letter[5]="images/f.jpg";
     letter[6]="images/g.jpg";
     letter[7]="images/h.jpg";
     letter[8]="images/i.jpg";
	 letter[9]="images/j.jpg";
     letter[10]="images/k.jpg";
     letter[11]="images/l.jpg";
     letter[12]="images/m.jpg";
     letter[13]="images/n.jpg";
     letter[14]="images/o.jpg";
     letter[15]="images/p.jpg";
     letter[16]="images/qu.jpg";
     letter[17]="images/r.jpg";
	 letter[18]="images/s.jpg";
     letter[19]="images/t.jpg";
     letter[20]="images/u.jpg";
     letter[21]="images/v.jpg";
	 letter[22]="images/w.jpg";
     letter[23]="images/x.jpg";
     letter[24]="images/y.jpg";
	 letter[25]="images/z.jpg";

	//Array number
    var imgStr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Qu', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	

	
	var x1 = imgStr.indexOf(r1);
	var x2 = imgStr.indexOf(r2);
	var x3 = imgStr.indexOf(r3);
	var x4 = imgStr.indexOf(r4);
	var x5 = imgStr.indexOf(r5);
	var x6 = imgStr.indexOf(r6);
	var x7 = imgStr.indexOf(r7);
	var x8 = imgStr.indexOf(r8);
	var x9 = imgStr.indexOf(r9);
	var x10 = imgStr.indexOf(r10);
	var x11 = imgStr.indexOf(r11);
	var x12 = imgStr.indexOf(r12);
	var x13 = imgStr.indexOf(r13);
	var x14 = imgStr.indexOf(r14);
	var x15 = imgStr.indexOf(r15);
	var x16 = imgStr.indexOf(r16);
	
	//place image
	 document.images[1].src= letter[x1];
	 document.images[2].src= letter[x2];
	 document.images[3].src= letter[x3];
	 document.images[4].src= letter[x4];
	 document.images[5].src= letter[x5];
	 document.images[6].src= letter[x6];
	 document.images[7].src= letter[x7];
	 document.images[8].src= letter[x8];
	 document.images[9].src= letter[x9];
	 document.images[10].src= letter[x10];
	 document.images[11].src= letter[x11];
	 document.images[12].src= letter[x12];
	 document.images[13].src= letter[x13];
	 document.images[14].src= letter[x14];
	 document.images[15].src= letter[x15];
	 document.images[16].src= letter[x16];
	 
	 //rotate image
	 var rotatev = ['0','90','180','270'];
	 
	 document.getElementById('rot1').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot2').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot3').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot4').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot5').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot6').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot7').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot8').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot9').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot10').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot11').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot12').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot13').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot14').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot15').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
	 document.getElementById('rot16').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';

	 
	 
//Randomize block position
var parent = $("#parent");

function shuffleRows(parent) {
    var rows = parent.children();
    for (var i = rows.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = rows[i];
		//eq() = Reduce the set of matched elements to the one at the specified index.
        rows.eq(i - 1).after(rows[j]);
        rows.eq(j - 1).after(temp);
		
    }
}

shuffleRows(parent);
  

  document.getElementById('game').style.display = 'block';
 
}

