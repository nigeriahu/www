localStorage.clear();
var items=document.getElementById("items");
//移动滑块数字跟着变
function updateTextInput(val) {
    document.getElementById('num').value=val;
}
//数值赋值给滑块
function assignIn() {
    playersNum = parseInt(document.getElementById("num").value);
    document.getElementById('a').value=playersNum;
}
//设置
//var setting=document.getElementById("setting");
var num=document.getElementById("num");

//点击设置触发onclick执行程序
//setting.onclick=function (){
function set(){
    var text=document.getElementById("num").value.trim();//在值的后面加上 .trim();意思为去掉左右两边的空格
    if(text.match(/\D/)){
        alert("Number Only !");
        document.getElementById("num").value="";
    }
    else if(text<6||text>18){
        alert("请输入6-18间的数字");
    }
    //判断杀手数
    /*else if(text < 8){
        nKillerNum = 1;
    }else if(text < 12){
        nKillerNum = 2;
    }else if(text < 16){
        nKillerNum = 3;
    }else if(text < 19){
        nKillerNum = 4;
    }else if(text < 21){
        nKillerNum = 5;
    }*/
    addItem();
    console.log(text);//此处text为arguments？

    console.log("总的参与人数："+text);
}

//方法一 将人物添加到列表中
/*function setItems(n){
    var nodes=items.childNodes;
    var m=nodes.length;
    for(var i=0; i<m; i++){
        items.removeChild(nodes[0]);
    }
    for(var i=0; i<n; i++){
        addItem();
        console.log(nodes);
        console.log("nodes:"+nodes);
        console.log(m);
        console.log("m:"+m);
    }
}*/

//创建人物
function addItem(){
    /*var job=["杀&nbsp;手","水&nbsp;民"];
    var cols=["#ee9f1b","#29bde0",];
    var num=Math.floor(Math.random()*2);
    var block=document.createElement("i");
    block.style.cssText="display:inline-block; width:10px; height:10px; background-color:"+cols[num]+"; position:relative; top:-3px;";
    var item=document.createElement("span");
    item.innerHTML=job[num]+"1人";
    item.style.cssText="font-size:1rem;margin-left:0.5rem;";
    var box=document.createElement("div");
    box.style.cssText="width: 10rem; height:3rem; float:left; margin:1rem 0 0 2rem; color:#ccc";
    box.appendChild(block);
    box.appendChild(item);
    items.appendChild(box);*/
    var all = [];
    var killNumber;
    var allNumber=document.getElementById("num").value;
    var n;
    var i;
    var detail="" ;
    killNumber =   Math.floor(allNumber / 4);
    if (allNumber == 8){
        killNumber = 1 ;
    }for (n =0 ;n<killNumber;n++ ){
        all[n] = "杀手";
    }for (n =killNumber;n<allNumber;n++ ){
        all[n] = "平民";
    }//把杀手和平民的身份都按顺序发放下来
    all.sort(function(){
        return 0.5 - Math.random()
    });//打乱顺序。
    for(i=0;i<allNumber;i++){
        detail = detail +(i+1)+"号选手身份为"+all[i]+"<br/>";
        document.getElementById("items").innerHTML= detail;
    }
    console.log(all);
    allArr = JSON.stringify(all);//把all的字符串存在 allArr里面
    sessionStorage.all = allArr;//存入缓存里面
    console.log(localStorage);
//之后的读取时这样的  allArr = sessionStorage.all ; all = JSON.parse(allArr);
}
//创建一个按钮事件
function btnGame(){
    var jumpNext = document.getElementById('distribution');

    Num = document.getElementById("num").value;
}

btnGame();
//点击跳转事件触发条件
function jumpNext(){
    if( items.innerHTML != ''){
        location.href = "js3.html";
    } else {
        alert('猪吗？')
    }
}

//方法2
//function set() {

/*
TotalArr=[];
// 点击设置身份获取当前游戏人数
var TotalNum=parseInt($('#num').val());
// 判断人数 分配杀手
var Knum= Math.floor(TotalNum / 4);
if (TotalNum==8) {
    Knum=1;
};
//先将杀手循环出来
for (var i = 0; i < Knum; i++) {
    TotalArr[i]='杀手';
}
//在杀手后面紧接着循环出水民。
for (var j = Knum; j < TotalNum; j++) {
    TotalArr[j]='水民';
}
//利用Sort函数排序交换位置实现随机；
TotalArr.sort(function () {
    return 0.5 - Math.random()
});

for (var k = 0; k < TotalNum; k++) {
    $('#items').append('<li>'+(k+1)+'号~'+TotalArr[k]+'</li>')
//}

TotalArr.unshift(1);
// 数组Sting化存入本地缓存
TotalArrString=JSON.stringify(TotalArr);
localStorage.arr=TotalArrString;
console.log(localStorage);
var dayString=JSON.stringify(day);
localStorage.day=dayString;
console.log(localStorage);
}

$('#distribution').on('click',function () {
    if (TotalArr.length==0) {
        alert('骚年，先去分配身份撒~');
    }else{
        location.href='check.html';
    }
})*/
