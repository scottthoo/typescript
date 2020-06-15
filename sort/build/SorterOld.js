"use strict";
var SorterOld = /** @class */ (function () {
    function SorterOld(collection) {
        this.collection = collection;
    }
    SorterOld.prototype.sort = function () {
        var length = this.collection.length;
        console.log(this.collection);
        console.log('Sorting... beep beep..');
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // If the collection is numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // If the collection is string
                if (typeof this.collection === 'string') {
                }
            }
        }
        console.log('Done!');
        console.log(this.collection);
    };
    return SorterOld;
}());
