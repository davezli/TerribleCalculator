

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
        var retval = terrible_division(value);
        return retval;
    }

    function terrible_division(value)
    {
        var divisor = getRandomInt(1, 10)
  
        var n1 = math.floor(value/divisor);
        var n2 = value%divisor;

        var retval = "" + n1 + " * " + divisor + " + " + n2;
        return retval;
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
});


