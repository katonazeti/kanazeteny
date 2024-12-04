function teljes_novel() {
    let a = Number(document.getElementById("teljes").value);
    document.getElementById("teljes").value = a + 1;
}
function teljes_csokkent() {
    let b = Number(document.getElementById("teljes").value);
    document.getElementById("teljes").value = b - 1;
}

function diak_novel() {
    let a = Number(document.getElementById("diak").value);
    document.getElementById("diak").value = a + 1;
}
function diak_csokkent() {
    let b = Number(document.getElementById("diak").value);
    document.getElementById("diak").value = b - 1;
}

function csaladi_novel() {
    let a = Number(document.getElementById("csaladi").value);
    document.getElementById("csaladi").value = a + 1;
}
function csaladi_csokkent() {
    let b = Number(document.getElementById("csaladi").value);
    document.getElementById("csaladi").value = b - 1;
}


function kosar() {
    let osszeg = 0;
    let teljes = Number(document.getElementById("teljes").value);
    let diak = Number(document.getElementById("diak").value);
    let csaladi = Number(document.getElementById("csaladi").value);

    osszeg =teljes*500 +diak*550 +csaladi*100;

    document.getElementById("osszesen").innerText = "Összesen: " + String(osszeg) + "€";

}

$(document).ready(function () {
    $("#jegy").validate({
        rules: {
            teljes_kiallitas: "required",
            teljes_datum: "required",
            teljes_idopot: "required",
            diak_kiallitas: "required",
            diak_datum: "required",
            diak_idopot: "required",
            csaladi_kiallitas: "required",
            csaladi_datum: "required",
            csaladi_idopot: "required",
            teljes_darab: {
                required: true,
                min: 0,
                max: 20,
                digits: true,
            },
            diak_darab: {
                required: true,
                min: 0,
                max: 20,
                digits: true,
            },
            csaladi_darab: {
                required: true,
                min: 0,
                max: 20,
                digits: true,
            },
        },
        messages: {
            teljes_kiallitas: "VĂĄlassz opciĂłt!",
            diak_kiallitas: "VĂĄlassz opciĂłt!",
            csaladi_kiallitas: "VĂĄlassz opciĂłt!",
            teljes_datum: "VĂĄlassz dĂĄtumot!",
            diak_datum: "VĂĄlassz dĂĄtumot!",
            csaladi_datum: "VĂĄlassz dĂĄtumot!",
            teljes_idopot: "VĂĄlassz idĹpontot",
            diak_idopot: "VĂĄlassz idĹpontot",
            csaladi_idopot: "VĂĄlassz idĹpontot",
            teljes_darab: "0 ĂŠs 20 kĂśzĂśtti egĂŠsz szĂĄm lehet!",
            diak_darab: "0 ĂŠs 20 kĂśzĂśtti egĂŠsz szĂĄm lehet!",
            csaladi_darab: "0 ĂŠs 20 kĂśzĂśtti egĂŠsz szĂĄm lehet!",

        },
    });
});

$(document).ready(function () {
    $("#hirlevel").validate({
        rules: {
            nev: "required",
            email: {
                required: true,
                email: true,
            },
            feltetelek: "required",
        },
        messages: {
            nev: "Add meg a neved!",
            email: "Add meg az email cĂ­med!",
            feltetelek: "Fogadd el a feltĂŠteleket!",
        },

    });
});

$(document).ready(function () {
    $('#allando').galleria({

    });
});

function getDate() {
    document.getElementById("teljes_datum").value = "2022-05-10";
    document.getElementById("diak_datum").value = "2022-05-10";
    document.getElementById("csaladi_datum").value = "2022-05-10";
}

    $(document).ready(function() {
        let currentIndex = 0; 
        const images = $('.carousel-images img');
        const totalImages = images.length; 

        function updateCarousel() {
            const offset = -currentIndex * 100;
            $('.carousel-images').css('transform', `translateX(${offset}%)`);
        }

        $('.prev').click(function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
            updateCarousel();
        });

        $('.next').click(function() {
            currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });
    });
