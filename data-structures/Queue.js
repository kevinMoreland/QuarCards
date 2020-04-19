function Queue(){
    var a=[];
    this.remove=function(val){
        var index = a.findIndex(function(arrVal){return arrVal == val});
        a.splice(index, 1)};
    this.asArray=function(){return a;};
    this.getLength=function(){return a.length};
    this.isEmpty=function(){return 0==a.length};
    this.enqueue=function(b){a.push(b)};
    this.dequeue=function(){
        if(a.length != 0){
            var poppedOff = a[0];
            a.splice(0, 1);
            return poppedOff;
        }
    };
    this.peek=function(){

        if(a.length != 0){
            return a[0];
        }
        else{
            return null;
        }
    }
};

module.exports = Queue;