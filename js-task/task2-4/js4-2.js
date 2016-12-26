/**
 * Created by michael on 2016/12/23.
 */

    // 读取本地缓存中的数组；
console.log(localStorage);
allArr=localStorage.all;
all=JSON.parse(allArr);
console.log(all)
console.log("玩家身份点击之后"+all[click].status);

KillNString=localStorage.kill;
KillN=JSON.parse(KillNString);
localStorage.KillN=KillNS;
dayString=localStorage.day;
day=JSON.parse(dayString);
var voteN;

if (localStorage.vote) {
    voteString=localStorage.vote;
    voteN=JSON.parse(voteString);
}

for (var i = 0; i < day; i++) {
    var checkId=$('#result');
    ali='<p>'+(all[killN[i]].num+1)+'号被杀手杀死了，真实身份是'+all[killN[i]].job+'</p>';
    checkId.append(ali);
    if (voteN!==undefined&&voteN.length>i) {
        oli='<p>'+(all[voteN[i]].num+1)+'号被集体投死了，真实身份是'+all[voteN[i]].id+'</p>';
        checkId.append(oli);
    }
}
$('.footer button').on('click',function () {
    location.href='js4.html';
})

