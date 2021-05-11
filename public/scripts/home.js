const vacationList = document.getElementById("vacationList");
const vacationAdd = document.getElementById("vacationAdd");

const user = document.getElementById("user");

vacationList.addEventListener("click", () => {
    location.href = "/vacations?username=" + user.dataset.user;
});

vacationAdd.addEventListener("click", () => {
    location.href = "/vacations/add?username=" + user.dataset.user;
})