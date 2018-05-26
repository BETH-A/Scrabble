window.onload = function () {
    var but = document.getElementById("btn");
    var out2 = document.getElementById("results");
    var out3 = document.getElementById("highestScore");
    var A = E = I = O = N = R = T = L = S = U = 1;
    var D = G = 2;
    var B = C = M = P = 3;
    var F = H = V = W = Y = 4;
    var K = 5;
    var J = X = 8;
    var Q = Z = 10;
    but.addEventListener("click", function () {
        var str = document.getElementById("input").value;
        var copy = str.toUpperCase().split(/\s+/g);
        var cntr = 0;
        var arr1 = [];
        var arr2 = [];
        var high = 0;
        out2.innerHTML = "";
        out3.innerHTML = "";
        compute();

        function compute() {
            var j1 = 0;
            var setInt = setInterval(function () {
                if (j1 == copy.length) {
                    out3.innerHTML = "Highest point: " + high + " points </br> Word(s): ";
                    for (var n = 0; n < arr1.length; n++) {
                        out3.innerHTML += copy[arr1[n]] + "<br/>";
                    }
                    clearInterval(setInt);
                    return;
                }
                var e1 = document.createElement("DIV");
                for (var j2 = 0; j2 < copy[j1].length; j2++) {
                    if (/[^A-Z]/.test(copy[j1][j2])) {
                        e1.innerHTML = "<span>" + copy[j1] + "</span> is an invalid input.";
                        out2.appendChild(e1);
                        break;
                        cntr = 0
                    }
                    e1.innerHTML += "<span>" + copy[j1][j2] + "<sub>" + eval(copy[j1][j2]) + "</sub> </span>";
                    cntr += eval(copy[j1][j2]);
                    if (j2 == copy[j1].length - 1) {
                        e1.innerHTML += " = " + cntr + " points";
                        if (cntr == high) {
                            arr1.push(j1);
                        }
                        if (cntr > high) {
                            high = cntr;
                            arr1 = [];
                            arr1.push(j1);
                        }
                        cntr = 0;
                    }
                }
                out2.appendChild(e1);
                j1++;
            }, 500)
        }
    })
}