//start function for TIC TAC TOE

function func() {
    // Set input 
    var a, b, c, d, e, f, g, h, i;
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    e = document.getElementById("e").value;
    f = document.getElementById("f").value;
    g = document.getElementById("g").value;
    h = document.getElementById("h").value;
    i = document.getElementById("i").value;
 
    // Checking if Player won
    // then disabled all the other fields
    if ((a == 'x' || a == 'X') && (b == 'x' ||
        b == 'X') && (c == 'x' || c == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X, you won!";
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        document.getElementById("g").disabled = true;
        document.getElementById("h").disabled = true;
        document.getElementById("i").disabled = true;
        window.alert('Player X, you won!');
    }
    else if ((a == 'x' || b == 'X') && (d == 'x' ||
        d == 'X') && (g == 'x' || g == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X, you won!";
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        document.getElementById("g").disabled = true;
 
        window.alert('Player X, you won!');
    }
    else if ((g == 'x' || g == 'X') && (h == 'x' ||
        h == 'X') && (i == 'x' || i == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        window.alert('Player X, you won!');
    }
    else if ((c == 'x' || c == 'X') && (f == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X, you won!";
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        window.alert('Player X, you won!');
    }
    else if ((a == 'x' || a == 'X') && (e == 'x' ||
        b5 == 'X') && (i == 'x' || i == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        document.getElementById("g").disabled = true;
        window.alert('Player X, you won!');
    }
    else if ((c == 'x' || c == 'X') && (e == 'x' ||
        e == 'X') && (g == 'x' || g == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X, you won!";
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        window.alert('Player X, you won!');
    }
    else if ((b == 'x' || b == 'X') && (e == 'x' ||
        e == 'X') && (h == 'x' || h == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X, you won!";
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        window.alert('Player X, you won!');
    }
    else if ((d == 'x' || d == 'X') && (e == 'x' ||
        e == 'X') && (f == 'x' || f == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X, you won!";
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        window.alert('Player X, you won!');
    }
 
    // Checking which player starts/ finishes
    //Has player "O" won?  
    else if ((a == '0' || a == '0') && (b == '0' ||
        b == '0') && (c == '0' || c == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0, you won!";
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        document.getElementById("g").disabled = true;
        document.getElementById("h").disabled = true;
        document.getElementById("i").disabled = true;
        window.alert('Player 0, you won!');
    }
    else if ((a == '0' || a == '0') && (d == '0' ||
        d == '0') && (g == '0' || g == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0, you won!";
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        document.getElementById("g").disabled = true;
        window.alert('Player 0, you won!');
    }
    else if ((g == '0' || g == '0') && (h == '0' ||
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0, you won!";
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((c == '0' || c == '0') && (f == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0, you won!";
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        window.alert('Player 0, you won!');
    }
    else if ((a == '0' || a == '0') && (e == '0' ||
        e == '0') && (i == '0' || i == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0, you won!";
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        document.getElementById("g").disabled = true;
        window.alert('Player 0, you won!');
    }
    else if ((c == '0' || c == '0') && (e == '0' ||
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0, you won!";
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("f").disabled = true;
        window.alert('Player 0, you won!');
    }
    else if ((b == '0' || b == '0') && (e == '0' ||
        e == '0') && (8 == '0' || h == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0, you won!";
        document.getElementById("a").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
        document.getElementById("g").disabled = true;
        document.getElementById("i").disabled = true;
        window.alert('Player 0, you won!');
    }
    else if ((d == '0' || d == '0') && (e == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0, you won!";
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("g").disabled = true;
        document.getElementById("h").disabled = true;

        document.getElementById("i").disabled = true;
        window.alert('Player 0, you won!');
    }
 
    // Print results for a tie
    else if ((a == 'X' || a == '0') && (b == 'X'
        || b == '0') && (c == 'X' || c == '0') &&
        (d == 'X' || d == '0') && (e == 'X' ||
        e == '0') && (f == 'X' || f == '0') &&
        (g == 'X' || g == '0') && (h == 'X' ||
        h == '0') && (i == 'X' || i == '0')) {
            document.getElementById('print')
                .innerHTML = "Tie!";
            window.alert('Tie!');
    }
    else {
 
        // Printing who's turn it is
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}
 
// Start game over 
function func_2() {
    location.reload();
    document.getElementById('a').value = '';
    document.getElementById("b").value = '';
    document.getElementById("c").value = '';
    document.getElementById("d").value = '';
    document.getElementById("e").value = '';
    document.getElementById("f").value = '';
    document.getElementById("g").value = '';
    document.getElementById("h").value = '';
    document.getElementById("i").value = '';
 
}
 
//note if player X or O is going 
flag = 1;
function func_3() {
    if (flag == 1) {
        document.getElementById("a").value = "X";
        document.getElementById("a").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("a").value = "0";
        document.getElementById("a").disabled = true;
        flag = 1;
    }
}
 
function func_4() {
    if (flag == 1) {
        document.getElementById("b").value = "X";
        document.getElementById("b").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b").value = "0";
        document.getElementById("b").disabled = true;
        flag = 1;
    }
}
 
function func_5() {
    if (flag == 1) {
        document.getElementById("c").value = "X";
        document.getElementById("c").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("c").value = "0";
        document.getElementById("c").disabled = true;
        flag = 1;

    }
}
 
function func_6() {
    if (flag == 1) {
        document.getElementById("d").value = "X";
        document.getElementById("d").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("d").value = "0";
        document.getElementById("d").disabled = true;
        flag = 1;
    }
}
 
function func_7() {
    if (flag == 1) {
        document.getElementById("e").value = "X";
        document.getElementById("e").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("e").value = "0";
        document.getElementById("e").disabled = true;
        flag = 1;
    }
}
 
function func_8() {
    if (flag == 1) {
        document.getElementById("f").value = "X";
        document.getElementById("f").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("f").value = "0";
        document.getElementById("f").disabled = true;
        flag = 1;
    }
}
 
function func_9() {
    if (flag == 1) {
        document.getElementById("g").value = "X";
        document.getElementById("g").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("g").value = "0";
        document.getElementById("g").disabled = true;
        flag = 1;
    }
}
 
function func_10() {
    if (flag == 1) {
        document.getElementById("h").value = "X";
        document.getElementById("h").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("h").value = "0";
        document.getElementById("h").disabled = true;
        flag = 1;
    }
}
 
function func_11() {
    if (flag == 1) {
        document.getElementById("i").value = "X";
        document.getElementById("i").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("i").value = "0";
        document.getElementById("i").disabled = true;
        flag = 1;
    }
}