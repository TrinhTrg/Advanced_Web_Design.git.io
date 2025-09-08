function myFunction() {
        var a = parseInt(document.getElementById("text1").value);
        var b = parseInt(document.getElementById("text2").value);
        var value = parseInt(document.getElementById("select").value);
        var k;

        switch(value) {
            case 1:
                k = (a + (b * 2)) / 3;
                break;
            case 2:
                
            k = ((a*2) + (b*3)) / 5;

                break;
            case 3:
                k = ((a*3) + (b*4)) / 7;
                break;
        }

        k = parseFloat(k).toFixed(2);
        document.getElementById('result').value = k;

        if (k >= 9) {
            document.getElementById('kq').innerHTML = "Xuat Sac";
            document.getElementById('kq').style.color = "green";
        } else if (k >= 8) {
            document.getElementById('kq').innerHTML = "Gioi";
            document.getElementById('kq').style.color = "blue";
        } else if (k >= 7) {
            document.getElementById('kq').innerHTML = "Kha";
            document.getElementById('kq').style.color = "orange";
        } else if (k >= 5) {
            document.getElementById('kq').innerHTML = "Trung Binh";
            document.getElementById('kq').style.color = "brown";
        } else {
            document.getElementById('kq').innerHTML = "Yeu";
            document.getElementById('kq').style.color = "red"; 
        }
    }

    function resetForm() {
        document.getElementById('text1').value = "";
        document.getElementById('text2').value = "";
        document.getElementById('select').value = "1";
        document.getElementById('result').value = "";
        document.getElementById('kq').innerHTML = "Bang Diem Cua Em";
        document.getElementById('kq').style.color = "black";
    }