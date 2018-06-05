// $(document).ready(function(){
function getInputs() {

    var labs = [];
    var midterm = 0, final = 0;

    for (var i = 1; i <= 7; i++) {
        var tempVal = Number(document.getElementById("lab" + i).value);

        labs.push(validateInput(tempVal));
    }

    midterm = Number(document.getElementById("midterm").value);
    final = Number(document.getElementById("final").value);

    calculateGrade(midterm, final, labs);
}

function calculateGrade(midterm, final, labs) {
    var labGrade, examGrade, finalGrade, combinedExam;

    combinedExam = (50 / 70) * final + (20 / 70) * midterm;

    console.log("comb exam " + combinedExam);

    //exam grades
    if (midterm >= final)
        examGrade = combinedExam;
    else
        examGrade = combinedExam + (final - midterm) * (20 / 70 / 2);

    console.log("exam grade " + examGrade);

    //lab grades
    if (labs[0] >= 70 && labs[1] >= 70 && labs[2] >= 70 && labs[3] >= 70 && labs[4] >= 70 && labs[5] >= 70)
        labGrade = (labs[0] + labs[1] + labs[2] + labs[3] + labs[4] + labs[5]) / 12 + labs[6] / 2;
    else
        labGrade = (labs[0] + labs[1] + labs[2] + labs[3] + labs[4] + labs[5]) / 12;

    console.log("lab grade " + labGrade);


    //final grade
    if (examGrade < 50 || labGrade < 50) {
        if (examGrade < labGrade)
            finalGrade = examGrade;
        else
            finalGrade = labGrade;
    }
    else {
        if (examGrade >= 50 && examGrade <= 65)
            finalGrade = ((70 + 30 * ((65 - examGrade) / 15)) / 100) * examGrade + ((30 * ((examGrade - 50) / 15)) / 100) * labGrade;
        else if (examGrade > 65)
            finalGrade = (70 / 100) * examGrade + (30 / 100) * labGrade;
    }

    console.log("final grade " + finalGrade);

    updateGrade(examGrade, labGrade, finalGrade);
}

function updateGrade(examGrade, labGrade, finalGrade){
    document.getElementById("exam-grade").innerHTML = "Combined Exam Grade: " + examGrade.toFixed(2) + "%";
    document.getElementById("lab-grade").innerHTML = "Combined Lab Grade: " + labGrade.toFixed(2) + "%";
    document.getElementById("final-grade").innerHTML = "Final Grade: " + finalGrade.toFixed(2) + "%";

}

function onSubmit() {
    getInputs();
}

function validateInput(num) {
    if (num === '') {
        return 0;
    }
    else {
        return num;
    }
}

// });
