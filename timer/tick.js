function delay(times,interval){
    return {
                times: times,
                interval: interval,
                curTimes: times,
                pause:false,
                mutex: false,  //加锁
                run: function(cb){	
                    if(this.mutex) {
                        console.log('定时器已经被占用');
                        return;
                    }else{
                       this.mutex = true; 
                    }
                    let timer;
                    let func = ()=>{
                            if(this.pause) return;
                            cb(this.curTimes);
                            if(this.curTimes === 0){
                                this.mutex = false; 
                                this.curTimes = this.times;
                                window.clearTimeout(timer);
                            }else{
                                this.curTimes--;
                                timer = window.setTimeout(func, this.interval || 1000);
                            }
                    }
                    func();
                },
                stop: function(){
                    this.pause = true;  
                    return this;
                },
                continue: function(cb){
                    this.pause = false;  
                    this.run(cb);
                    return this;
                },
                reRun: function(cb){
                    this.pause = false; 
                    this.curTimes = this.times;
                    this.run(cb);
                    return this;
                }
            }
}