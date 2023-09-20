// biện luận phương trình bậc 2: a*x^2 + b*x + c = 0 với mọi a
var a = 0;
var b = 0 ;
var c = 2 ;
var x ;
var delta = b * b - 4 * a * c;
if(a == 0){
    if(b == 0){
        if(c == 0) { console.log(" phương trình vô số nghiệm ") ;}
        else console.log(" phương trình vô nghiệm");
    }
    else console.log(" phương trình có 1 nghiệm là: x = ", -c/b);
}
else{
    if(delta < 0) console.log(" phương trình vô nghiệm ");
    if(delta == 0) console.log(" phương trình có nghiệm kép x = ",-b/2 * a);
    if(delta > 0){
        console.log(" phương trình có 2 nghiệm phân biệt là: x1 = ",(-b + Math.sqrt(delta))/2*a);
        console.log("                                        x2 = ", (-b - Math.sqrt(delta))/2*a);
    }
}
// btvn: tính tích tất cả các phần tử 
var arr = [1, 2, 3, 5, 8, 13, 21];
var tich = 1;
for(var i = 0;i < arr.length; i++){
 tich *= arr[i];
}
console.log(" tích các phần tử là :",tich);
// tính tổng và tích các phần tử ở vị trí chẵn
var tong = 0;
var tich2 = 1;
for(var i = 0;i < arr.length; i++){
    if(arr[2] % 2 != 0){
        tong  += arr[i];
        tich2 *= arr[i];
    }
}
console.log(" tong va tich các phần tử ở vị trí chẵn là :",tong, tich);
// triển khai ví dụ về switch - case/ if - else (số ngày trong năm / tháng)
var n = 3;
switch(n){
    case 1 : case 3 : case 5 : case 7 : case 8 : case 10 : case 12 : 
        console.log(" tháng này có: 31 ngày " );
        break;
    case 4 : case 6 : case 9 : case 11 : 
        console.log(" tháng này có: 30 ngày " );
        break;
    case 2 :
        console.log(" tháng này có: 28 ngày " ); 
        break;
    default:
        console.log(" dữ liệu không hợp lệ !");
}
var m = 2023;
if(m % 4 == 0){
    console.log(" Đây là năm nhuận có 366 ngày ");
}
else console.log(" Đây là năm không nhuận có 365 ngày ");