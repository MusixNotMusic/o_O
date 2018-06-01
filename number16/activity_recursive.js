/**
 * 贪心算法 
 * @param activity_list [[s1,f1],[s2,f2],[s3,f3],[s4,f4], ...]
 * @param starts [s1,s2,s3,s4, ...]
 * @param finals [f1,f2,f3,f4, ...]
 * @function start_final 将activity_list 转换为 starts finals
 * @function main_activity_recursive 主执行程序  
 * */ 
var activity_list = [
                      [0,0],  //虚拟 a0
                      [1,4],
                      [3,5],
                      [0,6],
                      [5,7],
                      [3,9],
                      [5,9],
                      [6,10],
                      [8,11],
                      [8,12],
                      [2,14],
                      [12,16]
                    ]; 
var starts = [];
var finals = [];

function start_final(activity_list, starts, finals){
    var i = 0;
    for(; i < activity_list.length; i++){
        starts[i] = activity_list[i][0];
        finals[i] = activity_list[i][1];
    }
}
// 默认 index = 0 是最小活动
function main_activity_recursive(starts, finals, k, n, breakpoint/* 断点{Array}**/){
    var m = k + 1;
    while(m <= n && starts[m] < finals[k]){
        m = m + 1;
    }
    if(m <= n){
        console.log(m);
        breakpoint.push(m); 
        return breakpoint.concat(main_activity_recursive(starts, finals, m, n, breakpoint));
    }else{
        return []
    }
}

function print(breakpoint,activity_list){
    var result = [];
    for(var i = 0; i < breakpoint.length; i++){
        result.push(activity_list[breakpoint[i]]);
    }
    console.log(result);
}

var breakpoint = [];
start_final(activity_list,starts,finals);
console.log(starts, finals);
main_activity_recursive(starts, finals,6, starts.length-1, breakpoint);
print(breakpoint,activity_list);