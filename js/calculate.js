

$(function() {

    var add = 1;
    var mult = 2;

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
            solution = "dummy, that's not math \n error: " + err;
        }

        $("#soln").show();
        $("#soln").text(solution);
    });

    function complicate(value) {
        var operator = getRandomInt(1,3);
        var retval;
        if (operator == add) 
        {
            retval = terrible_addition(value);
        }
        if (operator == mult)
        {
            retval = terrible_multiplication(value);
        }
        return retval;
    }

    function randsplit(n1)
    {
        var chance = getRandomInt(0,100);
        var operator = getRandomInt(1,3);
        if (chance < 25) 
        {
            if (operator == add) 
            {
                n1 = terrible_addition(n1);
            }
            if (operator == mult)
            {
                n1 = terrible_multiplication(n1);
            }
        }

        return n1;
    }

    function terrible_multiplication(value)
    {
        var multisor = getRandomInt(1, 10);
        var n1 = math.floor(value/multisor);

        n1 = randsplit(n1);

        var n2 = value%multisor;

        var retval = "" + n1 + " * " + multisor + " + " + n2;
        return retval;
    }
    function terrible_addition(value)
    {
        var retval = value;
        var adder = getRandomInt(1, 10)
        var n1 = value - adder;

        n1 = randsplit(n1);

        retval = "(" + n1 + " + " + adder + ")";
        return retval;
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
});


