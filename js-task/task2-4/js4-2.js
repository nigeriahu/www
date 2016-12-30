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
var voteN=[];

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


for (var i = 0; i < day; i++) {
    var output=$('#result');
    var idle=$('#idle');
    idle.children("img").attr("src", "img-true.png");
    ali='<p>'+total[KillN[i]].num+'号被杀手杀死了，真实身份是'+total[KillN[i]].job+'</p>';
    output.append(ali);
    if (voteN!==undefined&&voteN.length>i) {
        idle.children("img").attr("src", "JS_vote.png");
        oli='<p>'+(total[voteN[i]].num)+'号被集体投死了，真实身份是'+total[voteN[i]].job+'</p>';
        output.append(oli);
    }
}

var j;
var DeadNum = [];//挑出已死的玩家存入数组
for(j = 0;j < total.length;j ++){
    if(total[j].status == "dead" || total[j].status == "vote"){
        DeadNum.push(total[j]);
    }
}
console.log(DeadNum);
var DeadNumStr = JSON.stringify(DeadNum);//已死玩家存入本地
localStorage.deadnum = DeadNumStr;

var k = (DeadNum.length/2 - 1);
var x,y, z;
for( x = 0,y = 0,z = 0;x<total.length;x++){ //设置胜利条件
    if(total[x].job == "平民" && total[x].status == "alive"){
        y ++;
    }
    else if(total[x].job == "杀手" && total[x].status == "alive"){
        z ++;
    }
}
if(y == 0){//判断哪方胜利
    document.getElementById("result").style.display = "none";
    document.getElementById("check").value = "杀手胜利 查看结果";
    var victor = "killer";
    localStorage.victor = victor;
    console.log(victor);
}
else if(z == 0){
    document.getElementById("result").style.display = "none";
    document.getElementById("check").value = "平民胜利 查看结果";
    var winner = "people";
    localStorage.victor = winner;
    console.log(winner);
}else { //未分出胜负
    if(DeadNum.length % 2 == 0){

        document.getElementById("idle").src = "img-true.png";
        document.getElementById("result").style.display = "none";
        document.getElementById("check").value = "第" + day[k + 1] + "天";
    }else {
        document.getElementById("check").value = "去投票";
    }
}


$('.footer input').on('click',function () {

    if( y == 0 || z == 0){ //分出胜负跳至结果页
        location.href = "#";
    }else{
        if(DeadNum.length % 2 == 0){
            location.href = "js4.html";
        }else {
            location.href = "js4-vote.html";
        }
    }
})

