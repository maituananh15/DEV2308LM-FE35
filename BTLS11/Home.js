var listProduct = [
    {
        id : 1,
        img: 'https://media.shopdongho.com/2023/09/dong-ho-casio-oceanus.jpg' 
    },
    {
        id : 2,
        img: 'https://media.shopdongho.com/2023/09/mat-kinh-dong-ho-1024x681.jpg' 
    },
    {
        id : 3,
        img: 'https://media.shopdongho.com/2023/09/dong-ho-casio-pin-10-nam.jpg' 
    },
    {
        id : 4,
        img: 'https://media.shopdongho.com/2023/09/trien-can-tieu-ly-tren-dong-ho-la-gi.jpg' 
    },
];
for( let i = 0; i < listProduct.length ; i++){
    debugger;
    var view = `<div class="Content - ${listProduct[i].id}">
                    <div class="News">
                        <div class="Picture">
                            <a href="#" class="Logo"><img src="${listProduct[i].img}" alt="" class="w-100">
                                <p>
                                    Đồng hồ Casio Oceanus giá bao nhiêu, có tốt không ? <br><br>
                                Casio, thương hiệu đồng hồ Nhật Bản nổi tiếng với sự đa dạng về dòng [...]
                            </p>
                            </a>
                        </div>
                    </div>
                </div>`
                ;
    $('.Content').append(view);
}