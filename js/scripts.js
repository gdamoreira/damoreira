'use strict';

angular.module('DAmoreiraApp', ['pascalprecht.translate']).config(function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '/js/languages/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('pt_BR');
});


$(document).ready(function(){    
    $(".myCarousel").carousel({
        interval: 2000
    });
    $("#printBtn").click(function(){
        print();
    });
    var hoje = new Date();
    var idade = (hoje.getFullYear() - 1991) - 1;
    if (hoje.getMonth() > 7 || (hoje.getMonth() == 7 && hoje.getDate() >= 23)) {
        idade++;
    }
    $("#idade").html(idade);
    setTimeout(function() {
        $(".loading").removeClass("loading");    
        $(".loading-spinner").remove();
    }, 300);
});

