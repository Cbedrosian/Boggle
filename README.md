# Boggle JS
Simple boggle web app that recreates a 4x4 boggle board and timer using Javascript and Jquery.

[demo](https://intersectingart.xyz/boggle/boggle.html)

### Shaking the Dice
To start, function createTable() is table of 16 arrays containing all six possible values for each die.
```
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
```
Next is to get the letter die value. The following code picks one random value for each each letter die from the previous arrays. All letter die are now values r1-r16.
```
var r = d[Math.floor(Math.random()*d.length)|0
```
### Assigning Images to letter[]
The folder images contains jpg's of all 26 letters in the alphabet (Note: Q is represented by "Qu"). Each jpg is put into array letter[].
Now bear with me, I think this next part is a little excessive and could be reduced/removed in the future. 

### Assigning Letters to Images 
First is a simple array of the alphabet with Q as Qu.
```
 var imgStr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Qu', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
```
The next set of variables gives each letter die a number. So all this did was make letters back into numbers again. 
```
var x = imgStr.indexOf(r);
```
### Placing the Matching Images
Now that the die have been converted to numbers, the board images can be placed using letters[x].
```
document.images[].src= letter[x];
```
### Randomly Rotating the Images
In real life, the letter dice do not land pefectly facing you and are always rotated in a jumbled mess. To recreate this, array rotatev[] contains all the possible rotations for the dice.
```
 var rotatev = ['0','90','180','270'];
```
Similar to the die shuffle, each image is rotated randomly using one of the 4 values in rotatev[]. Each image is selected using different id's.
```
document.getElementById('rot').style.transform = 'rotate('+rotatev[Math.floor(Math.random()*rotatev.length)]+'deg)';
``` 
### Randomly Ordering Board
Just like before, the dice need to be placed randomly inside the table. Function shuffleRows(parent) uses a for loop to get the 16 images from the table and then randomly order them. rows.eq() is reponsible fo the placement going down the table by one each time.  
```
function shuffleRows(parent) {
    var rows = parent.children();
    for (var i = rows.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = rows[i];
		
        rows.eq(i - 1).after(rows[j]);
        rows.eq(j - 1).after(temp);
		
    }
}
```
This function is then called immediately before the board is displayed on the page.
shuffleRows(parent);
  

  document.getElementById('game').style.display = 'block';
```
### BONUS
I saw this implemented on [Weboggle.info](https://weboggle.info/) where you could rotate the board to find words you may not have seen from one side. I added a button that calls function toggleRoatate() to rotate the board by 90 degree increments.
```
var degrees = 0;
function toggleRotate() {
	degrees+=90;
	var k = document.getElementById("tbl").style.transform = 'rotate('+degrees+'deg)';
}
	
``` 
### Credits

Timer was made using code modified from [stacksoverflow](https://stackoverflow.com/questions/41035992/jquery-countdown-timer-for-minutes-and-seconds)
Boggle© is a registered trademark of Parker Brothers, a division of Hasbro, Inc. The Boggle logo and game are not owned by me.