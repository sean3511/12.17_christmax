
// 字體數量限制
// $(".mainvisual-news-title").each(function(){
//     var len=$(this).text().length;   //當前HTML物件text的長度
//     console.log(len);
//     if(len>16){
//         var str="";
//         str=$(this).text().substring(0,16)+"...";  //使用字串擷取，獲取前30個字元，多餘的字元使用“......”代替
//         $(this).html(str);                   //將替換的值賦值給當前物件
//     }
// });
$.get("https://script.google.com/macros/s/AKfycbzKOLwzAjVTJun-SMsLi6PL0E5L1-LFw2l9W7un9WILIPkBHy6nCvA1cbAiHKhO6eIS/exec", {
    "Member": document.getElementsByClassName("member_count").value
},
function (data) {
    // document.write("--------------------------<br>");
    // document.write(data);
    // document.write("--------------------------<br>");
    $('.member_count').text(data);
});