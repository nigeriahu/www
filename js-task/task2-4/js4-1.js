/**
 * Created by michael on 2016/12/22.
 */
dayString=localStorage.day; //把day的字符串存到dayString里
day=JSON.parse(dayString);
console.log(day)

$('#dayCounting').html('第 '+day+' 天')
function kill() {
    location.href="js4.html";
}