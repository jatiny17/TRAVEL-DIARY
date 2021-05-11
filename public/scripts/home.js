const vacationList = document.getElementById("vacationList");
const vacationAdd = document.getElementById("vacationAdd");

vacationList.addEventListener("click", () => {
    location.href = "/vacations";
});

vacationAdd.addEventListener("click", () => {
    location.href = "/vacations/add";
})