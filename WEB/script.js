function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();

    // Phần chuyển slide ảnh
    var listAnh = document.querySelectorAll(".cacAnh img");
    var nenDen = document.querySelector(".nenDen");
    var nutDong = document.querySelector(".nutDong");
    var thongTinAnh = document.querySelector(".thongTinAnh");
    var khoiCacAnh_Li = document.querySelectorAll(".khoiCacAnh ul li");

    var nutPhai = document.querySelector(".nutPhai");
    var nutTrai = document.querySelector(".nutTrai");
    var thuTuAnhDangActive = 0;
    var chiSoPhuHienTai = 0;

    // tắt nền đen khi kích vào nèn đen
    nenDen.addEventListener("click", function() {
        nenDen.classList.remove("ra");
        thongTinAnh.classList.remove("ra");

        // tắt lun cái ảnh vừa mới mở trong trạng thái còn active
        var anhDangActive = document.querySelector(".khoiCacAnh ul li.active");
        anhDangActive.classList.remove("active");
    });

    for (var i = 0; i < listAnh.length; i++) {
        listAnh[i].addEventListener("click", function() {
            console.log("bạn vừa kích");
            nenDen.classList.add("ra");
            thongTinAnh.classList.add("ra");

            var anhDuocClick = this;
            var chiSo = 0;
            for (var k = 0; anhDuocClick = anhDuocClick.previousElementSibling; k++) {}
            chiSo = k;

            // ảnh thứ k là ảnh sẽ dc active
            khoiCacAnh_Li[chiSo].classList.add("active");
            thuTuAnhDangActive = chiSo;
            chiSoPhuHienTai = thuTuAnhDangActive;
        });
    }
    //var chiSoPhuHienTai = thuTuAnhDangActive; 
    //console.log("chiSoPhuHienTai" + chiSoPhuHienTai);
    // chỉ số phụ này dùng để làm biến trung gian ( thay đổi sau mỗi lần kích) 
    // thì phân tử ảnh đang active sẽ thay đổi, vì ban đầu khi kích vào một ảnh thì
    // thuTuAnhDangActive sẽ cố định ngay bức số 1 đó lun
    nutPhai.addEventListener("click", function() {
        console.log("chuyển phải");
        var phanTuHienTai = khoiCacAnh_Li[chiSoPhuHienTai];

        chiSoPhuHienTai = (chiSoPhuHienTai < khoiCacAnh_Li.length - 1) ?
            (chiSoPhuHienTai + 1) : 0;
        console.log("chiSoPhuHienTai" + chiSoPhuHienTai);
        var phanTuTiepTheo = khoiCacAnh_Li[chiSoPhuHienTai];

        phanTuHienTai.classList.remove("active");
        phanTuTiepTheo.classList.add("active");
    });

    nutTrai.addEventListener("click", function() {
        console.log("chuyển trái");
        var phanTuHienTai = khoiCacAnh_Li[chiSoPhuHienTai];

        chiSoPhuHienTai = (chiSoPhuHienTai > 0) ?
            (chiSoPhuHienTai - 1) : khoiCacAnh_Li.length - 1;
        console.log("chiSoPhuHienTai" + chiSoPhuHienTai);

        var phanTuTiepTheo = khoiCacAnh_Li[chiSoPhuHienTai];

        phanTuHienTai.classList.remove("active");
        phanTuTiepTheo.classList.add("active");
    });

    // Phần xử lý cho tab Từ
    var listEng = document.querySelectorAll(".thoaiEng");
    var listVie = document.querySelectorAll(".thoaiVie");
    var listChildImg = document.querySelectorAll(".childimg");
    var listChamTron = document.querySelectorAll(".chamTron");

    for (var i = 0; i < listEng.length; i++) {
        listEng[i].onmouseenter = function() {
            this.classList.add("anxuong");
        };
        listEng[i].onmouseleave = function() {
            this.classList.remove("anxuong");
        };
    }

    for (var i = 0; i < listChildImg.length; i++) {
        listChildImg[i].onmouseenter = function() {
            //this.nextSibling;
            this.nextSibling.nextSibling.classList.add("toRa");
        };

        listChildImg[i].onmouseleave = function() {
            this.nextSibling.nextSibling.classList.remove("toRa");
        };
    }

    var listTuVungEng = document.getElementsByTagName("b");
    for (var i = 0; i < listTuVungEng.length; i++) {
        if (listTuVungEng[i].classList.contains("tu")) {
            console.log(listTuVungEng[i]);
            listTuVungEng[i].style.color = "red";
            listTuVungEng[i].nextSibling.nextSibling.style.color = "green";
        }
    }

    var option_1 = document.getElementById("option_1");
    var option_2 = document.getElementById("option_2");
    var option_3 = document.getElementById("option_3");

    option_1.onclick = function() {
        for (var i = 0; i < listTuVungEng.length; i++) {
            if (listTuVungEng[i].classList.contains("tu")) {
                console.log(listTuVungEng[i]);
                listTuVungEng[i].style.color = "rgb(8, 4, 255)";
                listTuVungEng[i].nextSibling.nextSibling.style.color = "olive";
            }
        }
    }
    option_2.onclick = function() {
        for (var i = 0; i < listTuVungEng.length; i++) {
            if (listTuVungEng[i].classList.contains("tu")) {
                console.log(listTuVungEng[i]);
                listTuVungEng[i].style.color = "rgb(255, 2, 2)";
                listTuVungEng[i].nextSibling.nextSibling.style.color = "green";
            }
        }
    }
    option_3.onclick = function() {
            for (var i = 0; i < listTuVungEng.length; i++) {
                if (listTuVungEng[i].classList.contains("tu")) {
                    console.log(listTuVungEng[i]);
                    listTuVungEng[i].style.color = "rgb(161, 3, 182)";
                    listTuVungEng[i].nextSibling.nextSibling.style.color = "darkslategrey";
                }
            }
        }
        // option_4.onclick = function() {
        //     for (var i = 0; i < listTuVungEng.length; i++) {
        //         if (listTuVungEng[i].classList.contains("tu")) {
        //             console.log(listTuVungEng[i]);
        //             listTuVungEng[i].innerHTML = "";
        //         }
        //     }
        // }
        // option_5.onclick = function() {
        //     for (var i = 0; i < listTuVungEng.length; i++) {
        //         if (listTuVungEng[i].classList.contains("tu")) {
        //             console.log(listTuVungEng[i]);
        //             listTuVungEng[i].nextSibling.nextSibling.innerHTML = "";
        //         }
        //     }
        // }

    option_4.onclick = function() {
        for (var i = 0; i < listTuVungEng.length; i++) {
            if (listTuVungEng[i].classList.contains("tu")) {
                console.log(listTuVungEng[i]);
                listTuVungEng[i].classList.toggle("andi");
            }

        }
    }
    option_5.onclick = function() {
        for (var i = 0; i < listTuVungEng.length; i++) {
            if (listTuVungEng[i].classList.contains("tu")) {
                console.log(listTuVungEng[i]);
                listTuVungEng[i].nextSibling.nextSibling.classList.toggle("andi");
            }
        }
    }
}, false)