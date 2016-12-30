/**
 * Created by michael on 2016/12/20.
 */
//第一步是调取出上个页面保存的数

allArr = localStorage.all;
all = JSON.parse(allArr);
console.log(all);
dayString=localStorage.day;
day=JSON.parse(dayString);

var total=[];//空数组存储玩家属性集properties
var click;
var KillN=[]; //存储被杀死玩家的数据

// 删除数组中的第一个
//all.shift();

// 读取天数
if(localStorage.day){
    dayString=localStorage.day;
    day=JSON.parse(dayString);
}
//读取所有玩家的身份数据
if (localStorage.total){
    totalArr=localStorage.total;
    total=JSON.parse(totalArr);
}
//读取已被杀的数据
if (localStorage.kill) {
    KillNString=localStorage.kill;
    KillN=JSON.parse(KillNString);
}
console.log(allArr+"长度"+all.length);
var main=$('#box');


for(i=0;i<all.length;i++){
    var player=document.createElement('div');
    player.className='box-top';
    player.innerHTML ="<p id='judge-name'>"+ "<img src='putao.png'>"+all[i]+"</p> <span>"+(i+1)+"</span>";
    main.append(player);
    if (localStorage.total) {
        if (total[i].status=='dead') {
            $('.box-top').eq(i).css('border','3px solid red').addClass('die');
        }if (total[i].status=='vote') {
            $('.box-top').eq(i).css('border','3px solid red').addClass('die');
        }
    }
    total[i]= {};    //此处空数组为对象集，存储玩家编号、角色、生死状态等属性，num为对应数字，job为角色，etc
    total[i].num = i+1;
    total[i].job = all[i];    //玩家扮演角色
    total[i].status = "alive";  //角色生死状态
    total[i].daynum = 0;    //杀手杀人执行天数
    console.log('all'+all[i]);      //打印数列的所有属性
    console.log("玩家身份playerStatus"+total[i]);
}
//通过click点击事件完成杀人和投死操作，存储数据跳转至下一个页面，展示死亡学员状态
// 标记死亡角色

var box=$('.box-top');
var judge= $('#judge-name');
box.on('click',function () {
    // 点击边框换色
    if ($(this).find('#judge-name').html()=='杀手') {
        alert('为何要手足相残啊，少年！？杀手不能杀死杀手！');
        click=undefined;
        box.css('border','3px solid #fff')
    }else if($(this).hasClass('die')){
        alert('玩家已死 请选择一个没有死亡的玩家！')
        click=undefined;
        box.css('border','3px solid #fff')
    }else{
        $(this).css('border','3px solid orange').siblings().css('border','3px solid #fff');
        click=$(this).index();
    }
    // 重新标记死亡角色；
    $('.die').css('border','3px solid red')
})
//console.log(all)

// 循环出所有人的身份，死亡的人边框变红
for (var i = 0; i < all.length; i++) {
    if (total[i].status=='dead') {
        box.eq(i).css('border','3px solid red').addClass('die');
       }
    if(total[i].status=='vote'){
        box.eq(i).css('border','3px solid red').addClass('die');
    }
}

$('#check').on('click',function () {

    if (click==undefined) {
        alert('请选择一个非死亡玩家')
    }else if (total!==undefined){

        total[click].status='dead';
        total[click].day=day;
        KillN.push(click);
        KillNS=JSON.stringify(KillN);
        localStorage.kill=KillNS;
        totalArr=JSON.stringify(total);
        localStorage.total=totalArr;
        location.href='js4-2.html';
    }else{

        totalArr[click].status='dead';
        totalArr[click].day=day;
        KillN.push(click);
        KillNS=JSON.stringify(KillN);
        localStorage.kill=KillNS;
        totalArr=JSON.stringify(total);
        localStorage.Total=totalArr;
        console.log(localStorage);
        location.href='js4-2.html';
    }
})

voteNS=JSON.stringify(voteN);
localStorage.vote=voteNS;

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