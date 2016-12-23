/**
 * Created by michael on 2016/12/20.
 */
//第一步是调取出上个页面保存的数

allArr = sessionStorage.all;
all = JSON.parse(allArr);
console.log(all);

var playerStatus=[];//空数组存储玩家对象的状态

console.log(allArr+"长度"+all.length);
console.log(allArr+"长度"+all.length);
var main=$('#box');
for(i=0;i<all.length;i++){
    var player=document.createElement('div');
    player.className='box-top';
    player.innerHTML ="<p>"+ "<img src='putao.png'>"+all[i]+"</p> <span>"+(i+1)+"</span>";
    main.append(player);
    playerStatus[i]= {};
    playerStatus[i].num = i+1;
    playerStatus[i].job = all[i];
    playerStatus[i].status = "alive";
    playerStatus[i].daynum = 0;
    console.log(all[i]);
    console.log(playerStatus[i]);
}

//点击杀人
// 循环出所有人的身份，死亡的人边框变红
var box=$('.box-top');
for (var i = 0; i < all.length; i++) {
    if (all[i].status=='dead') {
        box.eq(i).css('border','3px solid red').addClass('die');
    }else if(all[i].status=='vote'){
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
        $(this).css('border','3px solid white').siblings().css('border','3px solid #fff');
        $('.die').css('border','3px solid red');
        click=$(this).index();
        console.log(click)
    }
})
$('footer button').on('click',function () {
    if (click==undefined) {
        alert('请选择一个非死亡玩家')
    }else{
        all[click].status='vote';
        all[click].day=day;
        voteN.push(click);
        voteNS=JSON.stringify(voteN);
        localStorage.vote=voteNS;
        attArrString=JSON.stringify(TotalArr);
        localStorage.Total=attArrString;
        location.href='js4-2.html'
    }

})
