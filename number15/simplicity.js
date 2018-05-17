let map = [1,5,8,9,10,17,17,20,24,30,34,41,55,59,70,76,77,81,99,101,120,133,138,149,155,199,200,231,251,300,400,415];
/**
 * 
 * @param {*} p 
 * @param {*} n 
 * @desc 朴素递归 自定向下
 */
function CUT_ROD(p, n){
    if(n === 0)
        return 0;
    var q = -1;
    for(var i = 1; i <= n; i++){
        q = Math.max(q, p[i-1] + CUT_ROD(p,n - i));
    }
    return q;
} 
/**
 *  @test 
 * 
 * */ 
for(let i = 1; i <= map.length; i++){
    let now = Date.now();
    var demo = CUT_ROD(map, i);
    let end = Date.now();
    console.log('r[%s] = %s, %s',i, demo, end-now);
}

