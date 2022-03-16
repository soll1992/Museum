let objTicketsToPage = JSON.parse(localStorage.getItem("tickets"));

let permanentType = document.getElementById("ticket1");
let temporaryType = document.getElementById("ticket2");
let combinedType = document.getElementById("ticket3");
let select = document.getElementById("select");
let seniorValueModal = document.getElementById("senior-tick-amount-modal");
let objTickets;
let formBasicValue = document.getElementById("total-amount-basic");
let formSeniorValue = document.getElementById("total-amount-senior");
let btnInput = document.querySelectorAll(".btn-input");
let btnInputForm = document.querySelectorAll(".form-btn-input"); 
let phoneNumber = document.getElementById("phone");
let formBasicPriceOne = document.getElementById("total-cost-basic");
let formSeniorPriceOne = document.getElementById("total-cost-senior");
let totalPriceNum = document.getElementById("total-cost");
let totalPriceNumForm = document.getElementById("total-sum");
let formBasicPriceOneLeft = document.getElementById("basic1");
let formSeniorPriceOneLeft = document.getElementById("senior1");
let formTicketType = document.getElementById("ticket-type");
let formBasicPriceSumValue = document.getElementById("total-sum-basic");
let formSeniorPriceSumValue = document.getElementById("total-sum-senior");
let cardHolder = document.getElementById("card");
let email = document.getElementById("email");
let basicValue = document.getElementById("basic-tick-amount");
let seniorValue = document.getElementById("senior-tick-amount");
let basicValueModal = document.getElementById("basic-tick-amount-modal");
let formDateValue = document.getElementById("date-text");
let formTimeValue = document.getElementById("time-text");


if (!localStorage.getItem("tickets")) {
    objTickets = {
        type: "Permanent exhibition",
        basic: 0,
        priceOneBasic: 20,
        priceBasics: 0,
        senior: 0,
        priceOneSenior: 10,
        priceSeniors: 0,
        priceTotal: 0,
        date: "Friday, January 1",
        time: "09:00",
        cardHolder: "",
        email: "",
        phoneNumber: "",
    };
    localStorage.setItem("tickets", JSON.stringify(objTickets));
} else {
    objTickets = JSON.parse(localStorage.getItem("tickets"));
    toPage();
}

permanentType.addEventListener("change", () => {
    objTickets.type = "Permanent exhibition";
    objTickets.priceOneBasic = 20;
    objTickets.priceOneSenior = 10;
    calcTickets();
});

temporaryType.addEventListener("change", () => {
    objTickets.type = "Temporary exhibition";
    objTickets.priceOneBasic = 25;
    objTickets.priceOneSenior = 12.5;
    calcTickets();
});

combinedType.addEventListener("change", () => {
    objTickets.type = "Combined Admission";
    objTickets.priceOneBasic = 40;
    objTickets.priceOneSenior = 20;
    calcTickets();
});

select.addEventListener("change", () => {
    objTickets.type = select.value;
    if (select.value == "Permanent exhibition") {
        objTickets.priceOneBasic = 20;
        objTickets.priceOneSenior = 10;
    }
    if (select.value == "Temporary exhibition") {
        objTickets.priceOneBasic = 25;
        objTickets.priceOneSenior = 12.5;
    }
    if (select.value == "Combined Admission") {
        objTickets.priceOneBasic = 40;
        objTickets.priceOneSenior = 20;
    }
    calcTickets();
});

btnInput.forEach((btn) => {
    btn.addEventListener("click", () => {
        objTickets.basic = +basicValue.value;
        objTickets.senior = +seniorValue.value;
        calcTickets();
    });
});

btnInputForm.forEach((btn) => {
    btn.addEventListener("click", () => {
        objTickets.basic = +basicValueModal.value;
        objTickets.senior = +seniorValueModal.value;
        calcTickets();
    });
});


cardHolder.onchange = function () {
    objTickets.cardHolder = cardHolder.value;
    calcTickets()
}

email.onchange = function () {
    objTickets.email = email.value;
    calcTickets()
}

phoneNumber.onchange = function () {
    objTickets.phoneNumber = phoneNumber.value;
    calcTickets()
}

function calcTickets() {
    objTickets.priceBasics = objTickets.priceOneBasic * objTickets.basic;
    objTickets.priceSeniors = objTickets.priceOneSenior * objTickets.senior;
    objTickets.priceTotal = objTickets.priceBasics + objTickets.priceSeniors;
    localStorage.setItem("tickets", JSON.stringify(objTickets));
    objTicketsToPage = JSON.parse(localStorage.getItem("tickets"));
    toPage();
}

function toPage() {
    totalPriceNum.innerHTML = objTicketsToPage.priceTotal;
    totalPriceNumForm.innerHTML = objTicketsToPage.priceTotal;

    formBasicPriceSumValue.innerHTML = objTicketsToPage.priceBasics;
    formSeniorPriceSumValue.innerHTML = objTicketsToPage.priceSeniors;

    formBasicPriceOne.innerHTML = objTicketsToPage.priceOneBasic;
    formSeniorPriceOne.innerHTML = objTicketsToPage.priceOneSenior;
    formBasicPriceOneLeft.innerHTML = objTicketsToPage.priceOneBasic;
    formSeniorPriceOneLeft.innerHTML = objTicketsToPage.priceOneSenior;

    formBasicValue.innerHTML = objTicketsToPage.basic;
    formSeniorValue.innerHTML = objTicketsToPage.senior;

    formDateValue.innerHTML = objTicketsToPage.date;
    formTimeValue.innerHTML = objTicketsToPage.time;

    basicValue.value = objTicketsToPage.basic;
    seniorValue.value = objTicketsToPage.senior;

    basicValueModal.value = objTicketsToPage.basic;
    seniorValueModal.value = objTicketsToPage.senior;

    if (objTicketsToPage.type == "Permanent exhibition") {
        permanentType.checked = true;
        select.value = "Permanent exhibition";
    } else if (objTicketsToPage.type == "Temporary exhibition") {
        temporaryType.checked = true;
        select.value = "Temporary exhibition";
    } else if (objTicketsToPage.type == "Combined Admission") {
        combinedType.checked = true;
        select.value = "Combined Admission";
    }
    formTicketType.innerHTML = objTicketsToPage.type;
}