

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
        var value = math.eval(expr);
        var n1 = math.floor(value/3);
        var n2 = value%value;
       // var newv = parseInt(value, 10).toString(2)
    	alert("clicked submit: " + n1 + " * 3 + " + n2);
    });
});


