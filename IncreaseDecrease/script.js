
    const result = document.getElementById("output");

    var count = 0;
    document.getElementById("output").innerHTML = count;
    

    function inc() {
      count++;
      // count += 1;
      document.getElementById("output").innerHTML = count;
    };

    function dec() {
      count--;
      document.getElementById("output").innerHTML = count;
    };

    function dinc() {
      count += 2;
      document.getElementById("output").innerHTML = count;
    };


