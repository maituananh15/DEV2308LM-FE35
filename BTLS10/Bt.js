var FormProduct = [
    {
    id : 1,
    name : "Nguyễn Thanh An",
    password : "20CNADL03",
    cate : 1,
    },
    {
        id : 2,
        name : "Thái Nữ Bình An",
        password : "06CNT01",
        cate : 2,
    },
    {
        id : 3,
        name : "Trần Thị Mỹ An",
        password : "11CNJ02",
        cate : 3,
    },
    {
        id : 4,
        name : "Châu Ngọc Thạch Anh",
        password : "08CNA02",
        cate : 4,
    },
    {
        id : 5,
        name : "Dương Mỹ Anh",
        password : "12CNP01",
        cate : 5,
    },
    {
        id : 6,
        name : "Đinh Thị Bích Anh",
        password : "07CNA07",
        cate : 6,
    },
    {
        id : 7,
        name : "Đỗ Thị Yến Anh",
        password : "09CNJ01",
        cate : 7,
    },
    {
        id : 8,
        name : "Lê Hoàng Châu Anh",
        password : "22CNJ02",
        cate : 8,
    },
    {
        id : 9,
        name : "Lê Kim Anh",
        password : "07CNT02",
        cate : 9,
    },
    {
        id : 10,
        name : "Phan Ngọc Thanh Bình",
        password : "08CNA05",
        cate : 10,
    },
    {
        id : 11,
        name : "Trần Thị Phúc Châu",
        password : "10CNA06",
        cate : 11,
    },
    {
        id : 12,
        name : "Nguyễn Thị Diễm",
        password : "11CNA06",
        cate : 12,
    },
    {
        id : 13,
        name : "Lê Thị Thuỳ Dung",
        password : "09CNALT02",
        cate : 13,
    },
    {
        id : 14,
        name : "Lê Thị Mỹ Duyên",
        password : "20CNH01",
        cate : 14,
    },
    {
        id : 15,
        name : "Lê Thành Đạt",
        password : "12CNA06",
        cate : 15,
    },
    {
        id : 16,
        name : "Nguyễn Thị Ngân Hà ",
        password : "10CNTTM01",
        cate : 16,
    },
    {
        id : 17,
        name : "Bùi Thị Minh Hiền ",
        password : "06CNQTH01",
        cate : 17,
    },
    {
        id : 18,
        name : "Nguyễn Thị Ly Na ",
        password : "09CNT03",
        cate : 18,
    },
    {
        id : 19,
        name : "Nguyễn Thị Nhung",
        password : "22CNQTHCLC01",
        cate : 19,
    },
    {
        id : 20,
        name : "Nguyễn Xuân Trường",
        password : "09CNATM02",
        cate : 20,
    },
]
function listProduct(){
    debugger;
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(name == ''|| password == '' || name == '' && password == ''){
        alert("Giá trị tìm kiếm không được trống");
        return ;
    }
    var tmp = false;
    for(let i = 0; i < FormProduct.length; i++){
        if(FormProduct[i].name == name && FormProduct[i].password == password){
            console.log("tồn tại nick đăng nhập, ", FormProduct[i]);
            tmp = true;
        }
    }
    if(!tmp) console.log("no data");
}