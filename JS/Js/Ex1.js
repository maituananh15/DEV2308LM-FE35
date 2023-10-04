// Biến
var n = 50;
var m = 100;
var p;
// If - else
if(n > m){
     p = n - m;
}
else{
    p = m - n;
}
console.log("hiệu hai số là =", p);

// biện luận phương trình bậc nhất ax + b = 0
var a = 10;
var x;
var b = -20;
if(a == 0){
    if(b == 0){
        console.log(" phương trình vô số nghiệm ");
    }
    else{
        console.log(" phương trình vô nghiệm ");
    }
}
else{
    x = (-b)/a
    console.log(" nghiệm của phương trình là",x);
}

// khai báo 3 biến là 3 cạnh cảu 1 tam giác
// biện luận các trường hợp của tam giác 
var c1 = 5;
var c2 = 5;
var c3 = 6;
if(c1 + c2 > c3 && c1 + c3 > c2 && c2 + c3 > c1){
    if( c1 == c2 && c1 == c3 && c2 == c3){
        console.log( " tam giác đều ");
    }
    else if(c1 == c2 || c1 == c3){
        console.log(" tam giác cân");
    }
    else if(c1 == c2 && c1*c1 + c2*c2 == c3*c3 || c3 == c2 && c3*c3 + c2*c2 == c1*c1 || c1 == c3 && c1*c1 + c3*c3 == c2*c2 ){
        console.log(" tam giác vuông cân ");
    }
    else if(c1*c1 + c2*c2 == c3*c3 || c3*c3 + c2*c2 == c1*c1 || c1*c1 + c3*c3 == c2*c2){
        console.log(" tam giác vuông ");
    }
    else{
        console.log(" tam giác bth ");
    }
}
else{
    console.log(" không phải tam giác");
}
// biện luận phương trình bậc 2: a*x^2 + b*x + c =0 với mọi a
// For
var von = 10;
for(var i = von;i > 0;i--){
    console.log(" còn đánh được ");
}
console.log("hế vốn rồi, vốn = 0");

//Mảng 
var array1 = new Array();
var array2 = [1, 2, 3, 4, '5', '6',"7"];
console.log(" phần tử có index = 4 có giá trị là: ", array2[4]);
var xx = array2[2];// xx = 3;
for(var i = 0; i < array2.length; i++){
    console.log(array2[i]);
}
 
var arr = [1, 2, 3, 5, 8, 13, 21];
// log ra các số lẻ trong mảng arr
for(var i = 0;i < arr.length; i++){
    if( arr[i] % 2 != 0) console.log(arr[i]);
}


// cho một mảng số bất kỳ, yêu cầu tính tổng tất cả các giá trị trong mảng 
var sum = 0;
for(var i = 0; i < array2.length; i++){
    sum = parseInt(sum) + parseInt(array2[i]);
}
console.log("tong cua mang array 2 la : ", sum);
// btvn: tính tích tất cả các phần tử 
var tich = 1;
for(var i = 0;i < arr.length; i++){
 tich *= arr[i];
}
console.log("tích các phần tử là :",tich);
// tính tổng và tích các phần tử ở vị trí chẵn
var tong = 0;
var tich2 = 1;
for(var i = 0;i < arr.length; i++){
    if(arr[2] % 2 != 0){
        tong  += arr[i];
        tich2 *= arr[i];
    }
}
console.log("tong va tich các phần tử ở vị trí chẵn là :",tong, tich);
// triển khai ví dụ về switch - case/ if - else (số ngày trong năm / tháng)

var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// yêu cầu khai báo 1 số bất kỳ và tìm vị trí số đó 
var n = 11;
var temp = false;
for(let i = 1; i <= array3.length; i ++){
    if(parseInt(n) === parseInt(array3[i - 1])){
       console.log("Gia trị " + n + " tồn tại ở vị trí: " + i);
       temp = true;
    }
    if(temp == false) console.log("Giá trị " + n + " không tồn tại");
}

// Hàm: function
function summary(a, b){
    var totalAB = parseInt(a) + parseInt(b);
    console.log("Tổng 2 tham số đầu vào là: ", totalAB);
}
summary(15,"50");
function filter(x5){
    var tmp = false;
    for(let i = 1; i <= array3.length; i ++){
        if(parseInt(x5) === parseInt(array3[i - 1])){
        console.log("Gia trị " + x5 + " tồn tại ở vị trí: " + i);
        tmp = true;
    }
        if(!tmp) console.log("Giá trị " + x5 + " không tồn tại");
}
}
filter(10)
// var arrDemo = ["anc", "dev", 123, '78874', "Js"]
// // viết hàm tìm kiếm , ktra xuất hiện bn lần, ở đâu, nếu ko tồn tại in ra: no data
// function filter(x5){
//     var tmp = false;
//     var arr1[100005] = {0};
//     for(let i = 1; i <= arrDemo.length; i ++){
//         arr1[arrDemo[i]] ++;
//     }
//     for(let i = 1; i <= arrDemo.length; i ++){
//         if(x5 === arrDemo[i - 1]){
//         console.log("Giá trị " + x5 + " tồn tại ở vị trí: " + i + arr1[arrDemo[i]]);
//         tmp = true;
//     }
//         if(!tmp) console.log("Giá trị " + x5 + " không tồn tại");
// }
// }
// filter("anc")
// end function

// Đối tượng
var obj1 = {
    Chieu_cao : 175,
    Can_nang : 52,
    Que_quan : 'Thanh Hóa',
    Dan_toc : 'Kinh',
}
var obj2 = new Object();
obj2.Chieu_cao = 171;
obj2.Can_nang = 71;
obj2.Que_quan = 'Việt Nam';

// array object : JSON
var n1 = {
    Chieu_cao : 175,
    Can_nang : 52,
    Que_quan : 'Thanh Hóa',
    Dan_toc : 'Kinh',
};
var n2 = {
    Chieu_cao : 175,
    Can_nang : 52,
    Que_quan : 'Hải Phòng',
    Dan_toc : 'Kinh',
};
var n3 = {
    Chieu_cao : 175,
    Can_nang : 52,
    Que_quan : 'Nam Định',
    Dan_toc : 'Kinh',
};
var arrObj = [n1, n2, n3] 
function search(text){
    var tmp = false;
    for(let i = 0; i < arrObj.length; i++){
        if(text == arrObj[i].Que_quan){
            console.log('có tồn tại  người quê quán ở: ', text);
            tmp = true;
        }
    }
    if(!tmp) console.log('không tồn tại người quê ở:', text);
}
search('Thanh Hóa');
search('Nam Định');

// DOM
function showValueInput(){
    var y = document.getElementById('username').value;
    console.log('demo username: ', y);
}

var listProduct = [
    {
        id : 1,
        name : "đồng hồ",
        price : 100000,
        cate : 1,
    },
    {
        id : 2,
        name : "nhan",
        price : 100000,
        cate : 3,
    },
    {
        id : 3,
        name : "điện thoại",
        price : 100000,
        cate : 4,
    },
    {
        id : 4,
        name : "quần áo",
        price : 100000,
        cate : 2,
    },
];
function searchProduct(){
    debugger;
    var name = document.getElementById('productname').value;
    if(name == ''){
        alert("Giá trị tìm kiếm không được trống");
        return ;
    }
    var tmp = false;
    for(let i = 0; i < listProduct.length; i++){
        if(listProduct[i].name == name){
            console.log("tồn tại phần tử trùng tên, ", listProduct[i]);
            tmp = true;
        }
    }
    if(!tmp) console.log("no data");
}
// tạo list User(array object)
// form đăng nhập