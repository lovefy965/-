var texts = [
"小姐姐在考虑一下呗",
"你是我见过的漂亮温柔的女孩",
"一生一世爱你",
"家务我全干",
"不藏私房钱",
"房子写你名",
"工资全上交"
];
var count = 0;
window.onload=function(){
    var buhao = document.getElementById("buhao");
    var hao = document.getElementById("hao");
    buhao.onclick=function(){
        alert(texts[count]);
        count++;
        if(count == texts.length) {
          count = 0;
        }
    }
    hao.onclick=function(){
        alert("小姐姐终于同意了，我爱你");
        // 以下跳转可自定义
        wc.goQQFriend(3472642996);
    }

}