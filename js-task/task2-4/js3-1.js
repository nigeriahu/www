/**
 * Created by michael on 2016/12/20.
 */
//第一步是调取出上个页面保存的数

allArr = sessionStorage.all;
all = JSON.parse(allArr);
console.log(all);

console.log(allArr+"长度"+all.length);
var main=$('#box');
for(i=0;i<all.length;i++){
    var player=document.createElement('div');
        player.className='box-top';
        player.innerHTML ="<p>"+ "<img src='putao.png'>"+all[i]+"</p> <span>"+(i+1)+"</span>";
        main.append(player);
    console.log(all[i]);
}








function start() {
    location.href="js4.html";
}