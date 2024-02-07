var gtucgpaInput = document.getElementById("CGPA");
var gtuearnedCreditInput = document.getElementById("Earned_Credit");
var gtutotalCreditInput = document.getElementById("Total_Credit");
var global_gtu_check_percentage = false;

gtucgpaInput.addEventListener("input", function() {
    gtu_marks_validateInput(1);
});

gtuearnedCreditInput.addEventListener("input", function() {
    gtu_marks_validateInput(2);
});

gtutotalCreditInput.addEventListener("input", function() {
    gtu_marks_validateInput(3);
});


function gtu_marks_validateInput(gtu_cgpa_check) {
    global_gtu_check_percentage = true;
    var cgpaValue = parseFloat(gtucgpaInput.value);
    var earnedCreditValue = parseFloat(gtuearnedCreditInput.value);
    var totalCreditValue = parseFloat(gtutotalCreditInput.value);

    if (gtu_cgpa_check == 1) {
        debugger;
        if (isNaN(cgpaValue) || cgpaValue <= 0 || cgpaValue > 10) {
            Swal.fire({
                title: "Enter a valid GTU CPI/CGPA (between 1 and 10).",
                icon: "error",
                allowOutsideClick:false
            });false
            global_gtu_check_percentage = false;
            return;
        }
    }
    else if (gtu_cgpa_check == 2) {
        if (isNaN(earnedCreditValue) || earnedCreditValue < 0) {
            Swal.fire({
                title: "Enter a valid positive number for GTU Total Earned Credit.",
                icon: "error",
                allowOutsideClick:false
            });
            global_gtu_check_percentage = false;
            return;
        }
    }
    else if (gtu_cgpa_check == 3) {
        if (isNaN(totalCreditValue) || totalCreditValue < 0) {
            Swal.fire({
                title: "Enter a valid positive number for GTU Total Credit.",
                icon: "error",
                allowOutsideClick:false
            });
            global_gtu_check_percentage = false;
            return;
        }
    }
}

function GTU_TOTAL_MARKS_GETTER() {
    if (!global_gtu_check_percentage) {
        return;
    }
    var CGPA = Number.parseFloat(document.getElementById("CGPA").value);
    var TotalEarnedCredit = Number.parseFloat(document.getElementById("Earned_Credit").value);
    var Total_Credit = Number.parseFloat(document.getElementById("Total_Credit").value);
    var Percentage = Number.parseFloat(GTU_GET_PERCENTAGE(CGPA));
    var Total_Marks = Number.parseFloat((TotalEarnedCredit * 100) / Percentage)
    if (isNaN(Total_Marks)) {
        Swal.fire({
            title: 'Fill all the inputs field.',
            icon: "error",
            allowOutsideClick:false
        });
    }
    else {
        Swal.fire({
            html: `Your total marks for particular semester is <b><span class="text-info">${Total_Marks.toFixed(2)}</span></b>`,
            icon: "info",
            allowOutsideClick:false
        });
    }
}

function GTU_GET_PERCENTAGE(CGPA) {
    var CPI = Number.parseFloat(document.getElementById("CGPA").value);
    var Percentage = Number.parseFloat((CPI - 0.5) * 10);
    if (isNaN(CGPA)) {
        Swal.fire({
            html: `Your Percentage for gtu CPI/CGPA is <b><span class="text-info">${Percentage}%</span></b>`,
            icon: "info"
        });
    }
    else {
        return Percentage;
    }
}