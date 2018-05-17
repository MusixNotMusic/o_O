/**
 * bottom-up-cup-rod(p,n)
 * let r[0...n]be a new array
 * r[0]=0
 * for j = 1 to n
 *    q = -1
 *    for i = 1 to j
 *       q = max(q,p[i] + r[j-i])
 *    r[j] = q
 * return r[n]
*/
/*
    钢锯问题
 */ 
let map = [0,1,5,8,9,10,17,17,20,24,30,34,41,41,43,46,48,77,81,99,101,120,133,138,149,155,199,200,231,251,300,400,415];
var count = 0;
function bottom_up_cup_rod(p, n){
    var arr = new Array(n+1).fill(-1);
    // console.log(arr)
    arr[0] = 0;
    count = 0;
    var q;
    for(var j = 1; j <= n; j++){
        q = -1;
        for(var i = 1; i <= j; i++){
            count++;
            q = Math.max(q, p[i] + arr[j - i]);
        }
        arr[j] = q;
    }
    return arr[n];
}

for(let i = 1; i <= map.length-1; i++){
    // console.log()
    let now = Date.now();
    let demo = bottom_up_cup_rod(map, i);
    let end = Date.now();
    console.log('r[%s] = %s, %s',i, demo, end-now, count);
}