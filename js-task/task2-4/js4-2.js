/**
 * Created by michael on 2016/12/23.
 */

    // 读取本地缓存中的数组；展示被杀死人的数据
console.log(localStorage);
allArr=localStorage.all;
all=JSON.parse(allArr);
console.log(all);
totalArr=localStorage.total;
total=JSON.parse(totalArr);
KillNString=localStorage.kill;
KillN=JSON.parse(KillNString);
console.log(KillN);
dayString=localStorage.day;
day=JSON.parse(dayString);
var voteN;

if (localStorage.all) {
    allArr = localStorage.all;
    all = JSON.parse(allArr);
}
if (localStorage.kill) {
    KillNString=localStorage.kill;
    KillN=JSON.parse(KillNString);
}
if (localStorage.vote) {
    voteString=localStorage.vote;
    voteN=JSON.parse(voteString);
}

for (var i = 0; i < day*2; i++) {
    var output=$('#result');
    var idle=$('#idle');
    idle.children("img").attr("src", "img-true.png");
    ali='<p>'+total[KillN[i]].num+'号被杀手杀死了，真实身份是'+total[KillN[i]].job+'</p>';
    output.append(ali);
    if (voteN!==undefined&&voteN.length>i) {
        idle.children("img").attr("src", "JS_vote.png");
        oli='<p>'+(total[voteN[i]].num+1)+'号被集体投死了，真实身份是'+total[voteN[i]].job+'</p>';
        output.append(oli);
    }
}
$('.footer button').on('click',function () {

    location.href='js4.html';

})

