$(document).ready(function(){    
    $(".myCarousel").carousel({
        interval: 2000
    })
    $("#printBtn").click(function(){
        print();
    });
    var hoje = new Date();
    var idade = (hoje.getFullYear() - 1991) - 1;
    if (hoje.getMonth() > 7 || (hoje.getMonth() == 7 && hoje.getDate() >= 23)) {
        idade++;
    }
    $("#idade").html(idade);
});

