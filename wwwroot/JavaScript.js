var i = 0;
var mark = 0;

var get = (i) => {
    try {
        document.getElementById("questions").innerHTML = Data[i].question;
        document.getElementById("opt1").innerHTML = Data[i].op1;
        document.getElementById("opt2").innerHTML = Data[i].op2;
        document.getElementById("opt3").innerHTML = Data[i].op3;
        document.getElementById("opt4").innerHTML = Data[i].op4;
        clear();
    }
    catch{
        if (i == -1) {
            alert("No More previous Question");
        }
        if (i > 10) {
            alert("Quiz Ended");
            loadNewDoc();
        }
        i--;
    }
}

loadNewDoc = () => {
    window.location = "result.html";
}

goback = () => {
    i--;
    get(i);

    var markvalue = window.localStorage.getItem("mark");
    console.log(markvalue);
}
check = () => {
        const oldmark = mark;
        if (document.getElementById("op1").checked && Data[i].op1 == Data[i].answer) { mark++; }
        if (document.getElementById("op2").checked && Data[i].op2 == Data[i].answer) { mark++; }
        if (document.getElementById("op3").checked && Data[i].op3 == Data[i].answer) { mark++; }
        if (document.getElementById("op4").checked && Data[i].op4 == Data[i].answer) { mark++; }
        i++;
    if (oldmark < mark) {
            window.localStorage.setItem("mark", mark);
       }
        get(i);
}

clear = () =>{
    if ((document.getElementById("op1").checked = true) || (document.getElementById("op2").checked = true) || (document.getElementById("op3").checked = true) || (document.getElementById("op4").checked = true)) {
        document.getElementById("op1").checked = false;
        document.getElementById("op2").checked = false;
        document.getElementById("op3").checked = false;
        document.getElementById("op4").checked = false;
    }
}

