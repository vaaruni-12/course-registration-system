// Default course list
let courses = [
    {id: 1, name: "Data Structures", credits: 4},
    {id: 2, name: "Operating Systems", credits: 3},
    {id: 3, name: "Computer Networks", credits: 3},
    {id: 4, name: "Database Management Systems", credits: 4},
    {id: 5, name: "Software Engineering", credits: 3}
];

// Load registered courses from LocalStorage
let registered = JSON.parse(localStorage.getItem("registeredCourses")) || [];

function save() {
    localStorage.setItem("registeredCourses", JSON.stringify(registered));
}

// Load available courses
function loadCourses() {
    let list = document.getElementById("courseList");
    list.innerHTML = "";

    courses.forEach(course => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div>
                <strong>${course.name}</strong><br>
                <small>${course.credits} Credits</small>
            </div>
            <button class="register-btn">Register</button>
        `;

        card.querySelector("button").onclick = () => registerCourse(course);

        list.appendChild(card);
    });
}

// Load registered courses
function loadRegistered() {
    let list = document.getElementById("registeredList");
    list.innerHTML = "";

    registered.forEach(course => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div><strong>${course.name}</strong></div>
            <button class="remove-btn">Remove</button>
        `;

        card.querySelector("button").onclick = () => removeCourse(course);

        list.appendChild(card);
    });
}

function registerCourse(course) {
    if (registered.find(c => c.id === course.id)) {
        alert("Already Registered!");
        return;
    }
    registered.push(course);
    save();
    loadRegistered();
}

function removeCourse(course) {
    registered = registered.filter(c => c.id !== course.id);
    save();
    loadRegistered();
}

// Initial load
loadCourses();
loadRegistered();

loadCourses();
loadRegistered();

