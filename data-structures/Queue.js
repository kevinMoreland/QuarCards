//based on code from code.iamkate.com

function Queue(){
    var a = [], b = 0;

    this.remove = function(playerId) {
        var index = a.findIndex( function(targetPlayer) {
            return targetPlayer.Id == playerId
        });
        a.splice(index, 1)
        console.log(a);
    };

    this.asArray = function() {
        return a;
    };

    this.getLength = function() {
        return a.length-b;
    };

    this.isEmpty = function() {
        return 0 == a.length;
    };

    this.enqueue = function(b) {
        a.push(b);
    };

    this.dequeue = function() {
        if(0 != a.length) {
            var c = a[b];
            2 * ++b >= a.length && (a = a.slice(b), b = 0);
            return c;
        }
    };

    this.peek = function() {
        return 0 < a.length ? a[b] : void 0;
    }

};

module.exports = Queue;