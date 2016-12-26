/**
 * Created by michael on 2016/12/20.
 */
//第一步是调取出上个页面保存的数

allArr = sessionStorage.all;
all = JSON.parse(allArr);
console.log(all);

var playerStatus=[];//空数组存储玩家对象的状态对应killN？
var click;
var killN=[];

// 删除数组中的第一个
//all.shift();

// 读取天数
if(localStorage.day){
    dayString=localStorage.day;
    day=JSON.parse(dayString);
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
    player.innerHTML ="<p>"+ "<img src='putao.png'>"+all[i]+"</p> <span>"+(i+1)+"</span>";
    main.append(player);
    playerStatus[i]= {};    //此处空数组为对象，存储all数组的属性，num为对应数字，job为角色，etc
    playerStatus[i].num = i+1;
    playerStatus[i].job = all[i];    //玩家扮演角色
    playerStatus[i].status = "alive";  //角色生死状态
    playerStatus[i].daynum = 0;    //杀手杀人执行天数
    console.log(all[i]);      //打印数列的所有属性
    console.log("玩家身份"+playerStatus[i].status);
}

//点击杀人
var box=$('.box-top');
box.on('click',function () {
    // 点击边框换色
    if ($(this).find('.job').html()=='杀手') {
        alert('为何要手足相残啊，少年！？杀手不能杀死杀手！');
        click=undefined;
        $('.box-top').css('border','3px solid #fff')
    }else if($(this).hasClass('die')){
        alert('玩家已死 请选择一个没有死亡的玩家！')
        click=undefined;
        $('.box-top').css('border','3px solid #fff')
    }else{
        $(this).css('border','3px solid orange').siblings().css('border','3px solid #fff');
        click=$(this).index();
    }
    // 重新标记死亡角色；
    $('.die').css('border','3px solid red')
})
console.log(all)
// 循环出所有人的身份，死亡的人边框变红

for (var i = 0; i < all.length; i++) {
    if (all[i].status=='dead') {
        box.eq(i).css('border','3px solid red').addClass('die');
       }
    if(all[i].status=='vote'){
        box.eq(i).css('border','3px solid red').addClass('die');
    }
}
// 判断玩家有没有点击或有没有点击到死亡玩家
box.on('click',function () {
    if ($(this).hasClass('die')) {
        alert('什么鬼啦，选择一个非死亡玩家~');
        click=undefined;
        console.log(click)
    }else{
        $(this).css('border','3px solid red').siblings().css('border','3px solid #fff');
        $('.die').css('border','3px solid red');
        click=$(this).index();
        console.log(click)
    }
})
$('#check').on('click',function () {

    if (click==undefined) {
        alert('请选择一个非死亡玩家')
    }else{
        all[click].status='vote';
        all[click].day=day;
        KillN.push(click);
        KillNS=JSON.stringify(killN);
        localStorage.KillN=KillNS;
        allArr=JSON.stringify(all);
        localStorage.all=allArr;
        location.href="js4-2.html";

    }
    console.log("玩家身份点击之后"+all[click].status);

})
