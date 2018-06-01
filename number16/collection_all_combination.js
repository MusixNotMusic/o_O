/***
 *  集合arr 的全部 组合
 *  @param obj.index arr索引集合
 *  @param arr 集合内容
 *  @param max 最大值 不大于这个最大值的全部集合
 *  @function initObj 使用arr初始化obj
 *  @function outer2inner 从外道理的递归
 * */ 

// var arr = [1,2,3,4,5,6,7,8,9,10,11];
// var obj = {};

function initObj(arr, obj){
	var item = obj['1'] = [];
	for(var i = 0; i < arr.length; i++){
		item.push({index:[i],total:arr[i]});
	}
}

function outer2inner(obj,arr,max, layer){
// 	var len = layer; //当前层级 数组长度
	var data = obj[layer]; // 当前层级 数据
	
    var nextLayer = layer+1;
	obj[nextLayer] = [];
	for(var i = 0; i < data.length-1; i++){ //生产数组
		for(var j = data[i].index[layer-1]+1; j < arr.length; j++){ //原始数组 
			if(data[i].total + arr[j] <= max){ 
				obj[nextLayer].push({index:data[i].index.concat(j),total:data[i].total + arr[j]});
			}
		}
	}
	if(obj[nextLayer].length === 0)
		return;
	outer2inner(obj,arr, max, nextLayer);
}
function randomArr(arr,len){
    var cur = 0;
    for(var i = 0; i < len; i++){
        arr[i] = ((Math.random()*5+1)|0) + cur;
        cur = arr[i];
    }
}

function println(obj){
    for(var item in obj){
        console.log('_______%s__________',item);
        var arr = obj[item];
        for(var i = 0; i < arr.length; i++){
            console.log('[total = %s]',arr[i].total, arr[i].index.toString());
        }
        console.log('_______%s__________',item);
        console.log('\n\n\n');
    }
}
var max = 300;
var arr = [];
var obj = {};
randomArr(arr,20);
initObj(arr, obj);
outer2inner(obj, arr, max, 1);
println(obj);
