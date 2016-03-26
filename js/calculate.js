

$(function() {

	$("input#expr").keypress(function(event) {
	    if (event.which == 13) {
	        event.preventDefault();
	        $("button#exprsubmit").click();
	    }
	});

    $("button#exprsubmit").click(function() {
        var retval;
    	var expr = $("input#expr").val();
        try {
            var value = math.eval(expr);
            var n1 = math.floor(value/3);
            var n2 = value%value;
            
            retval = "" + n1 + " * 3 + " + n2;
        }
        catch (err){
            retval = "go die, that's not math";
        }

        $("#soln").show();
        $("#soln").text(retval);
    });
});


