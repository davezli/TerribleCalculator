

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
            solution = randsplit(value);
        }
        catch (err){
            solution = "dummy, that's not math \n error: " + err;        }

        $("#soln").show();
        $("#soln").text(solution);
    });

    function randsplit(n)
    {
        var rand = getRandomInt(0,10);
        var operator = "START";
        if(n < 3) {
            rand = 0;
        }
        else if(n < 4) {
            rand = getRandomInt(0,5);
        }
        if(rand < 2) { // subtraction
            operator = " - ";
            var n2 = getRandomInt(0,1+100*n);
            var n1 = n+n2;
            n2 = randomize(n2);
            n1 = randomize(n1);            
        }
        else if(rand < 5) { // addition
            operator = " + ";
            var n2 = getRandomInt(0,n/2);
            var n1 = n-n2;
            n2 = randomize(n2);
            n1 = randomize(n1);
        }
        else if(rand < 8) { // multiplication
            operator = " * ";
            var n2 = getRandomInt(1,n/2);
            var n1 = n/n2;
            var diff = n-n2*n1;
            n2 = randomize(n2);
            n1 = randomize(n1);
            n2 = "(" + n2 + " + " + diff + ")";
            
        }
        else if(rand < 10) { // division
            operator = " / ";
            var n2 = getRandomInt(1,n/2);
            var n1 = n*n2;
            var diff = n-n1/n2;
            n2 = randomize(n2);
            n1 = randomize(n1);
            n2 = "(" + n2 + " + " + diff + ")";
        }
        return "(" + n1 + operator + n2 + ")";
    }

    function randomize(n) {
        var rand = getRandomInt(0,10);
        if(rand < 3)
            n = randsplit(n);
        else if(rand < 4)
            n = makeTrig(n);
        else if(rand < 5)
            n = makeLn(n);
        else if(rand < 6)
            n = makeExp(n);
        return n;
    }

    function makeTrig(n) {
        return n;
    }

    function makeLn(n) {
        return n;
    }

    function makeExp(n) {
        return n;
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
});


