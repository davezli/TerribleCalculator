

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
        if(expr == "") {
            return;
        }
        try {
            var value = math.eval(expr);
            solution = randsplit(value);
        }
        catch (err){
            solution = "dummy, that's not math \n error: " + err;
        }

        $("#soln").show();
        $("#soln").text(solution);
    });

    $("button#wolfram").click(function() {
        while(true){
            window.alert("Screw yourself");
        }
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
        if(n == 0)
            rand = getRandomInt(1,10);
        if(rand < 1)
            n = makeLog(n);
        else if(rand < 2)
            n = makeTrig(n);
        else if(rand < 3)
            n = makeExp(n);
        else if(rand < 6)
            n = randsplit(n);
        return n;
    }

    function makeTrig(n) {
        var rand = getRandomInt(0,2);
        var n1, n2;
        if(rand < 1) {
            rand = getRandomNum(0,2);
            n2 = "sin(" + rand + "pi)";
            n1 = n/math.eval(n2);
        }
        if(rand < 2) {
            rand = getRandomNum(0,2);
            n2 = "cos(" + rand + "pi)";
            n1 = n/math.eval(n2);
        }
        return "(" + n1 + " * " + n2 +")";
    }

    function makeLog(n) {
        var rand = getRandomInt(1,Math.abs(2+n));
        var n1, n2, n3;
        n2 = "log("+rand+")";
        rand = getRandomInt(1,Math.abs(2+n));
        n3 = "log("+rand+")";
        n1 = n/math.eval(n2)*math.eval(n3);
        return "(" + n1 + " * " + "(" + n2 +" / " + n3 +"))";
    }

    function makeExp(n) {
        var rand = getRandomInt(1,10);
        var n1, n2;
        n2 = "e^"+rand;
        n1 = n/math.eval(n2)
        return "(" + n1 + " * " + n2 + ")";
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function getRandomNum(min, max) {
      return Math.random() * (max - min) + min;
    }
});


