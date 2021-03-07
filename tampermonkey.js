// ==UserScript==
// @name         Reserva Clases BDR
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cet10bdr.deporsite.net/reserva-clases
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js
// ==/UserScript==

(function () {
    'use strict';

    $(".mainColorTxt").click(function () { addcopiers() })

    addcopiers()
    function addcopiers() {

        var checkExist = setInterval(function () {
            if ($('.clase-selector').length) {
                console.log("Exists!");
                clearInterval(checkExist);
                $.notify("Script Cargado, si cambias de semana recuerda hacer click en 'Reserva Puntual de Clases'", 'info');
                $(".clase-selector").click(function () {

                    var id = $(this).attr('data-idactividad')
                    var hour = $(this).attr('data-horainicio')
                    var classname = $(this).find('.title-pop-up').clone().children().remove().end().text()
                    var profe = $(this).find('.info-box').html().split('<br>')[1].split(' ')[0];

                    var dateraw = $(this).attr('data-infoid')
                    var splited = dateraw.split("-")
                    var date = splited[1].substring(0, 4) + '-' + splited[1].substring(4, 6) + '-' + splited[2].substring(0, 2)

                    var finalstring = id + '/' + date + '/' + hour + '/' + classname + '/' + profe
                    console.log(finalstring);
                    var $temp = $("<input>");
                    $("body").append($temp);
                    $temp.val(finalstring).select();
                    document.execCommand("copy");
                    $temp.remove();
                    $.notify("Clase " + classname + " copiada!", 'success');
                });
            }
        }, 100); // check every 100ms
    }

})();
