

$(function() {

	$("input#expr").keypress(function(event) {
	    if (event.which == 13) {
	        event.preventDefault();
	        $("button#exprsubmit").click();
	    }
	});

    $("button#exprsubmit").click(function() {
    	var expr = $("input#expr").val();
        var value = math.eval(expr);
        var n1 = math.floor(value/3);
        var n2 = value%value;
        
        var retval = "" + n1 + " * 3 + " + n2;

        $("#soln").show();
        $("#soln").text(retval);
    });
});


