//listToArray: function (likeAry) {
//    var ary = [];
//    try {
//        ary = Array.prototype.slice.call(likeAry, 0);
//    } catch (e) {
//        for (var i = 0; i < likeAry.length; i++) {
//            ary[ary.length] = likeAry[i];
//        }
//    }
//    return ary;
//}
//}
//;
listToArray:function (likeAry) {
    var ary = [];
    try {
        ary = Array.prototype.slice.call(likeAry, 0);
    } catch (e) {

        for (var i = 0; i < likeAry.length; i++) {
            ary[ary.length] = likeAry[i];

        }
        return ary;
    }
}


//likeAry可以是argument,元素获取的集合如oLis、oDivs等