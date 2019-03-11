$(document).ready(function () {
    var alltypebtn = document.getElementById('alltypebtn');
    var showsortbtn = document.getElementById('showsortbtn');
    var typediv = document.getElementById('typediv');
    var sortdiv = document.getElementById('sortdiv');
    var yellowSlide = document.getElementById('yellowSlide');
    // $("#market section menu section").style.visibility = 'hidden'

    typediv.style.visibility = 'hidden';
    sortdiv.style.visibility = 'hidden';
    yellowSlide.style.visibility = 'hidden';



    alltypebtn.addEventListener('click', function () {
        typediv.style.visibility = 'visible';
        sortdiv.style.visibility = 'hidden';
    }, false);

    showsortbtn.addEventListener('click', function () {
        sortdiv.style.visibility = 'visible';
        typediv.style.visibility = 'hidden';
    }, false);

    typediv.addEventListener('click', function () {
        typediv.style.visibility = 'hidden';
        sortdiv.style.visibility = 'hidden';
    }, false);

    sortdiv.addEventListener('click', function () {
        typediv.style.visibility = 'hidden';
        sortdiv.style.visibility = 'hidden';
    }, false);


    // 修改购物车
    var addShoppings = document.getElementsByClassName('addShopping');
    var subShoppings = document.getElementsByClassName('subShopping');

    for (var i = 0;i<addShoppings.length; i++){
        addShopping = addShoppings[i];
        addShopping.addEventListener('click', function () {
            pid = this.getAttribute("ga");
            $.post('/changecart/0/', {'productid': pid}, function (data) {
                if(data.status == 'success'){
                    // 添加成功，把中间的span的innerHTML变成当前的数值
                    document.getElementById(pid).innerHTML = data.data
                }else {
                    if(data.data == -1){
                        console.log("************");
                        // $.get('/login/')
                        window.location.href = 'http://127.0.0.1:8000/login/';
                    }
                }
            })

        })
    }

    for (var i = 0;i<subShoppings.length; i++){
        subShopping = subShoppings[i];
        subShopping.addEventListener('click', function () {
            pid = this.getAttribute("ga");
            $.post('/changecart/1/', {'productid': pid}, function (data) {
                if(data.status == 'success'){
                    // 添加成功，把中间的span的innerHTML变成当前的数值
                    document.getElementById(pid).innerHTML = data.data
                }else {
                    if(data.data == -1){
                        console.log("************");
                        // $.get('/login/')
                        window.location.href = 'http://127.0.0.1:8000/login/';
                    }
                }
            })

        })
    }

});