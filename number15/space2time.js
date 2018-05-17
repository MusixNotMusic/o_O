/**
 * MEMOIZED_CUT_ROD(p, n)
 * let r[0..n] be a new array
 * for i = 0 to n
 *   r[i] = -1 
 * return MEMOIZED-CUT_ROD_AUX(p,n,r)
 * 
 * MEMOIZED_CUT_ROD_AUX(p,n,r)
 * if(r[n] >= 0)
 *     return r[n]
 * if n == 0
 *      q = 0
 * else 
 *      q = -1
 *      for i = 1 to n
 *          q = max(q, p[i] + MEMOIZED_CUT_ROD_AUX(p, n - i, r))
 * r[n] = q
 * 
 * return q
 * 
 * **/
let map = [1,5,8,9,10,17,17,20,24,30,34,41,55,59,70,76,77,81,99,101,120,133,138,149,155,199,200,231,251,300,400,415];

function MEMOIZED_CUT_ROD(p, n){
    var arr = [];
    for(var i = 0; i <= n; i++){
        arr[i] = -1;
    }
    return MEMOIZED_CUT_ROD_AUX(p, n, arr);
}

function MEMOIZED_CUT_ROD_AUX(p, n, arr){
   if(arr[n] >= 0){
       return arr[n];
   }
   var q;
   if( n == 0){
       q = 0;
   }else{
       q = -1;
       for(var i = 1; i <= n; i++){
           q = Math.max(q, p[i-1]+ MEMOIZED_CUT_ROD_AUX(p, n-i, arr));
       }
   }
   arr[n] = q;
   return q;
}

for(let i = 1; i <= map.length; i++){
    let now = Date.now();
    var demo = MEMOIZED_CUT_ROD(map, i);
    let end = Date.now();
    console.log('r[%s] = %s, %s',i, demo, end-now);
}