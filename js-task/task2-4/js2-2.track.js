localStorage.clear();
//declare items
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
var num=document.getElementById("num");
//点击设置触发onclick执行程序
function set(){
    var text=document.getElementById("num").value.trim();//在值的后面加上 .trim();意思为去掉左右两边的空格
    if(text.match(/\D/)){
        alert("Number Only !");
        document.getElementById("num").value="";
    }
    else if(text<6||text>18){
        alert("请输入6-18间的数字");
    }
    console.log(text);
    setItems(text);
    function setItems(n){

        var nodes=items.childNodes;
        var m=nodes.length;
        for(var i=0; i<m; i++){
            items.removeChild(nodes[0]);
        }
        for(var i=0; i<n; i++){
            addItem();
        }
    }

//创建人物
    function addItem(){

        var job=["杀&nbsp;手","医&nbsp;生","狙击手","警&nbsp;察","法&nbsp;官"];
        var cols=["#ee9f1b","#29bde0","#cd23ba","#def03a","#005fb7"];
        var num=Math.floor(Math.random()*5);
        var block=document.createElement("i");
        block.style.cssText="display:inline-block; width:10px; height:10px; background-color:"+cols[num]+"; position:relative; top:-3px;";
        var item=document.createElement("span");
        item.innerHTML=job[num]+"1人";
        item.style.cssText="font-size:1rem;margin-left:0.5rem;";
        var box=document.createElement("div");
        box.style.cssText="width: 10rem; height:3rem; float:left; margin:1rem 0 0 2rem; color:#ccc";
        box.appendChild(block);
        box.appendChild(item);
        items.appendChild(box);
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

// 数组String化存入本地缓存
    itemsString=JSON.stringify(itemsArr);
    localStorage.items=itemsString;
    console.log(localStorage);
    dayString=JSON.stringify(day);
    localStorage.day=dayString;

}/**
 * Created by michael on 2016/12/13.
 */
