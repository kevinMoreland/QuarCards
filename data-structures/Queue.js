function Queue(){
    var a=[];
    this.remove=function(val){
        var index = a.findIndex(function(arrVal){return arrVal == val});
        a.splice(index, 1)};
    //accepts socket Id of a player to remove
    this.removePlayer=function(playerId){
        var index = a.findIndex(function(arrVal){return arrVal.Id == playerId});
        a.splice(index, 1)};
    this.asArray=function(){return a;};
    this.getLength=function(){return a.length};
    this.isEmpty=function(){return 0==a.length};
    this.enqueue=function(b){a.push(b)};
    this.givePlayerCard=function(cardText,playerId){
        let i = 0;
        while(i < a.length) {
            if(a[i].Id == playerId){
                a[i].votes.push(cardText);
            }
            i+=1;
        }
    }
    this.getPlayerCards=function(playerId){
        let i = 0;
        while(i < a.length) {
            if(a[i].Id == playerId){
                return a[i].votes;
            }
            i+=1;
        }
        return [];
    }
    this.containsPlayer=function(player){
        var i = a.findIndex(function(arrVal){return arrVal.Id == player.Id});
        return i >= 0;
    };
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