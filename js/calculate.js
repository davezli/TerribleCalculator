$(function() {

    $("input#expr").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            $('button #exprsubmit').click();
            return false;
        } else {
            return true;
        }
    });

    $("button#exprsubmit").click(function() {
    	var expr = $("input#expr").val();
    	alert("clicked submit: " + expr);
    });
});


