/*
  lcs
*/ 
function lcs_length(x,y){
	var xLen = x.length;
	var yLen = y.length;
	var b = [];
	var c = [];
	// 初始化b 标记整体
	initArr(b, x, y, '');
	initArr(c, x, y, 0);
	console.log(b,c);
	for(let i = 1; i <= xLen; i++){
		for(let j = 1; j <= yLen; j++){
			if(x[i-1] == y[j-1]){
				c[i][j]=c[i-1][j-1] + 1;
				b[i][j] = '↖️';
			}else if(c[i-1][j] >= c[i][j-1]){
				c[i][j] = c[i-1][j];
				b[i][j] = '↑';
			}else{
				c[i][j] = c[i][j-1];
				b[i][j] = '←';
			}
		}
	}
     		
}

function initArr(arr, x, y, content){
    var i,j;
	for(i = 0; i < x.length+1; i ++){
        arr[i] = [];
		for(j = 0; j < y.length+1; j ++){
			arr[i][j] = content;
        }
	}
	return arr;
}
