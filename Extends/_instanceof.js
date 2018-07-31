function _instanceof(L, R){
    var O = R.prototype;
    L = L.__proto__;
    while(true){
        if(L === null)
            return false;
        if(L === O)
            return true;
        L = L.__proto__;
    }
}