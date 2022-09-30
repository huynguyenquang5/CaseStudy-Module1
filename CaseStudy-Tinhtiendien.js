let total;
function electricTotal(number) {
    number = parseInt(document.getElementById("number").value)
    if(username === null){
        alert("Login first")
        return false;
    }
    if (!number) {
        alert("Chưa nhập");
    } else if (number <= 50) {
        total = 1678 * number
        document.getElementById("ladder1").innerHTML = (1678 * number).toLocaleString("en-US");
        document.getElementById("ladder2").innerHTML = "";
        document.getElementById("ladder3").innerHTML = "";
        document.getElementById("ladder4").innerHTML = "";
        document.getElementById("ladder5").innerHTML = "";
        document.getElementById("ladder6").innerHTML = "";
    } else if (number <= 100) {
        total = (1678 * 50) + (1734 * (number - 50))
        document.getElementById("ladder1").innerHTML = (1678 * 50).toLocaleString("en-US");
        document.getElementById("ladder2").innerHTML = (1734 * (number - 50)).toLocaleString("en-US");
        document.getElementById("ladder3").innerHTML = "";
        document.getElementById("ladder4").innerHTML = "";
        document.getElementById("ladder5").innerHTML = "";
        document.getElementById("ladder6").innerHTML = "";

    } else if (number <= 200) {
        total = (1678 * 50) + (1734 * 50) + (2014 * (number - 100))
        document.getElementById("ladder1").innerHTML = (1678 * 50).toLocaleString("en-US");
        document.getElementById("ladder2").innerHTML = (1734 * 50).toLocaleString("en-US");
        document.getElementById("ladder3").innerHTML = (2014 * (number - 100)).toLocaleString("en-US");
        document.getElementById("ladder4").innerHTML = "";
        document.getElementById("ladder5").innerHTML = "";
        document.getElementById("ladder6").innerHTML = "";
    } else if (number <= 300) {
        total = (1678 * 50) + (1734 * 50) + (2014 * 100) + (2536 * (number - 200))
        document.getElementById("ladder1").innerHTML = (1678 * 50).toLocaleString("en-US");
        document.getElementById("ladder2").innerHTML = (1734 * 50).toLocaleString("en-US");
        document.getElementById("ladder3").innerHTML = (2014 * 100).toLocaleString("en-US");
        document.getElementById("ladder4").innerHTML = (2536 * (number - 200)).toLocaleString("en-US");
        document.getElementById("ladder5").innerHTML = "";
        document.getElementById("ladder6").innerHTML = "";
    } else if (number <= 400) {
        total = (1678 * 50) + (1734 * 50) + (2014 * 100) + (2536 * 100) + (2834 * (number - 300))
        document.getElementById("ladder1").innerHTML = (1678 * 50).toLocaleString("en-US");
        document.getElementById("ladder2").innerHTML = (1734 * 50).toLocaleString("en-US");
        document.getElementById("ladder3").innerHTML = (2014 * 100).toLocaleString("en-US");
        document.getElementById("ladder4").innerHTML = (2536 * 200).toLocaleString("en-US");
        document.getElementById("ladder5").innerHTML = (2834 * (number - 300)).toLocaleString("en-US");
        document.getElementById("ladder6").innerHTML = "";
    } else {
        total = (1678 * 50) + (1734 * 50) + (2014 * 100) + (2536 * 100) + (2834 * 100) + (2927 * (number - 400))
        document.getElementById("ladder1").innerHTML = (1678 * 50).toLocaleString("en-US");
        document.getElementById("ladder2").innerHTML = (1734 * 50).toLocaleString("en-US");
        document.getElementById("ladder3").innerHTML = (2014 * 100).toLocaleString("en-US");
        document.getElementById("ladder4").innerHTML = (2536 * 200).toLocaleString("en-US");
        document.getElementById("ladder5").innerHTML = (2834 * 100).toLocaleString("en-US");
        document.getElementById("ladder6").innerHTML = (2927 * (number - 400)).toLocaleString("en-US");
    }
    document.getElementById("result").innerHTML = (total).toLocaleString("en-US");
    document.getElementById("resultBeforeTax").innerHTML = (total).toLocaleString("en-US");
    document.getElementById("taxInclude").innerHTML = (total * 0.08 | parseInt).toLocaleString("en-US");
    document.getElementById("resultAfterTax").innerHTML = (1.08 * total | parseInt).toLocaleString("en-US");
}

    class Electric {
        month
        electricnumber
        electrictotal
        constructor(month, electricnumber, electrictotal) {
            this.month = month
            this.electricnumber = electricnumber
            this.electrictotal = electrictotal
        }
    }

    let electricMonths = []
    function drawTable() {
        let data = "<table id='compare'>"
        for (let i = 0; i < electricMonths.length; i++) {
            data += "<tr>"
            data += "<td>"  + electricMonths[i].month + "</td>"
            data += "<td>"  + electricMonths[i].electricnumber + "</td>"
            data += "<td>"  + parseInt(electricMonths[i].electrictotal).toLocaleString("En-us") + " VND" + "</td>"
            if(electricMonths[i-1]) {
                if ((parseInt(electricMonths[i].month) -1 ) === parseInt(electricMonths[i-1].month)){
                    let temp1 = electricMonths[i-1].electrictotal;
                    let temp2 = electricMonths[i].electrictotal;
                    if (temp1 >= temp2){
                        data += "<td>" + "Giảm " + (Math.abs(temp1-temp2) | parseInt).toLocaleString("En-us") + " VND" + " </td>"
                    } else {
                        data += "<td>" + "Tăng " + (Math.abs(temp1-temp2) | parseInt).toLocaleString("En-us") + " VND" + " </td>"
                    }
                } else {
                    data += "<td>" + "</td>";
                }
            } else {
                data += "<td>" + "</td>";
            }
            data += "<td>" + "<button type='button' onclick='deleteMonth(" + i + ")'>Delete</button>" + "</td>"
            data += "</tr>"
        }
        data += "<table>"
        document.getElementById("electricInformation").innerHTML = data
    }

    function addMonth() {
        let electricMonth = new Electric(document.getElementById("month").value, document.getElementById("number").value, total * 1.08 )
        electricMonths.push(electricMonth)
        document.getElementById("add").value = ""
        drawTable()
    }

    function deleteMonth(i) {
        if (confirm("Bạn chắc chắc muốn xóa tháng này ?")) {
            electricMonths.splice(i, 1)
        }
        drawTable()
    }

let username = localStorage.getItem("username")
function checkAdmin() {
    let data = ""
    if (username === null) {
        data += "<div id='admin' style='color: white'><a href='CaseStudy-login.html'>Đăng nhập</a></div>"
        document.getElementById("header").innerHTML = data
        return true;
    } else {
        data += "<div id='admin' style='color: white'><p>Tài khoản: " + username + "</p>" +
            "<a onclick='logout()' href='CaseStudy-Tinhtiendien.html'>Đăng xuất</a></div>"
        document.getElementById("header").innerHTML = data
        return false;
    }
}

function logout() {
    localStorage.clear()
}
