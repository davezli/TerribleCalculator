

$(function() {

	$("input#expr").keypress(function(event) {
	    if (event.which == 13) {
	        event.preventDefault();
	        $("button#exprsubmit").click();
	    }
	});

    $("button#exprsubmit").click(function() {
        var solution;
    	var expr = $("input#expr").val();
        try {
            var value = math.eval(expr);
            solution = complicate(value);
        }
        catch (err){
            solution = "go die, that's not math";
        }

        $("#soln").show();
        $("#soln").text(solution);
    });

    function complicate(value) {
            var n1 = math.floor(value/3);
            var n2 = value%3;
            var retval = "" + n1 + " * 3 + " + n2;
            return retval;
    }
});


