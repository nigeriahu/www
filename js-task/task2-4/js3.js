/**
 * Created by michael on 2016/12/12.
 */
console.log(localStorage);
// 读取localStorage内的内容
//第一步是调取出上个页面保存的数

 allArr = sessionStorage.all;
 all = JSON.parse(allArr);
console.log(all);
var clickNum = 0;
var evenNum = 0;
console.log(allArr+"长度"+all.length);
function checkId(){
    clickNum ++;
    if (clickNum >= 2*all.length ){
        window.location.href="js3-1.html";
    }else{
        if(clickNum %2 ==0){
            even();//偶数的时候执行这个函数,点两下才执行这个函数，
            // 所以这个函数就是查看身份的这个页面
        }else{
            odd();//奇数的时候执行这个函数,点击第一次就执行这个函数，
            //所以说这个函数应该是显示身份的页面
        }
    }

}
function even(){
    evenNum++;
    document.getElementById("img").src = "3-1.png";
    document.getElementById("number").innerHTML = (evenNum+1) ;
    document.getElementById("check").value ="查看"+ (evenNum+1)+"号身份";
    document.getElementById("identityOut").innerHTML = "";
    console.log("after even click function clickNum="+clickNum);
    console.log("after even click function evenNum="+evenNum);

}
function odd(){
    if (clickNum === 2*all.length -1 ) {
        document.getElementById("img").src = "check-result.png";
        document.getElementById("number").innerHTML = evenNum+1;
        document.getElementById("identityOut").innerHTML = "角色：" + all[evenNum];
        document.getElementById("check").value = "查看法官台本";

    } else {
        document.getElementById("img").src = "check-result.png";
        document.getElementById("number").innerHTML = (evenNum+1);
        document.getElementById("identityOut").innerHTML = "角色：" + all[evenNum];
        document.getElementById("check").value = "隐藏并传递给" + (evenNum+2) + "号";
    }
    console.log("after odd click function clickNum="+clickNum);
    console.log("after odd click evenNum="+evenNum);
}

allArr = JSON.stringify(all);//把all的字符串存在 allArr里面
sessionStorage.all = allArr;//存入缓存里面

/*var a=1;
function checkId() {
    var imgTemp= document.getElementById("head"),
        identityNum=document.getElementsByClassName("identity-1")[0],
        identityTrue=document.getElementsByClassName("identity-2")[0],
        identityWord=document.getElementsByClassName("identity-word")[0],
        identityDetail=document.getElementsByClassName("identity-3")[0],
        btn=document.getElementById("btn");
    if(a>all.length){
        window.location.href="js3-1.html";
    }else if(imgTemp.className === "identity-hidden") {
        imgTemp.setAttribute("src", "images/js-task2/check-result.png");
        imgTemp.setAttribute("class", "identity-show");
        console.log(identity[a-1].charAt(0));
        if (identity[a-1].charAt(0) === "杀"){
            identityTrue.innerHTML = "角色：杀手";}
        else{
            identityTrue.innerHTML = "角色：平民";
        }
        identityWord.innerHTML = "词组：西伯利亚";
        identityDetail.innerHTML = "想办法猜到人的词，同时还要注意不要暴露自己哦！";
        identityDetail.style.borderTop = "0.02rem solid #FFFFFF";
        a = a+1;
        if(a>identity.length){
            btn.innerHTML = "法官点击";
        }else {
            btn.innerHTML = "隐藏身份并传递给"+a+"号";
        }
    }else if(imgTemp.className === "identity-show"){
        identityNum.innerHTML = a;
        imgTemp.setAttribute("src", "images/js-task2/check.png");
        imgTemp.setAttribute("class", "identity-hidden");
        identityTrue.innerHTML = "";
        identityWord.innerHTML = "";
        identityDetail.innerHTML = "";
        identityDetail.style.borderTop = "none";
        btn.innerHTML = "查看"+a+"号身份";
    }
}
// 底部查看身份的点击事件
*/