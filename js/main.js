$(document).ready(function (){
    'use strict';
    //deal with tabs
    $('.tab-switch li').click(function () {
        $(this).addclass('selected').siblings().removeclass('selected');
    })
})