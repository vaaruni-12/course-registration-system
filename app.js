// Default course list
let courses = [
    {id: 1, name: "Data Structures", credits: 4},
    {id: 2, name: "Operating Systems", credits: 3},
    {id: 3, name: "Computer Networks", credits: 3},
    {id: 4, name: "Database Systems", credits: 4}
];

// Load registered courses from localStorage
let registered = JSON.parse(localStorage.getItem("registeredCourses")) || [];

function save() {
    localStorage.setItem("registeredCourses", JSON.stringify(registered));
}

// Display course list
function loadCourses() {
    let list = document.getElementById("courseList");
    list.innerHTML = "";

    courses.forEach(course => {
        let li = document.createElement("li");
        li.textContent = course.name + " (" + course.credits + " Credits)";
        
        let btn = document.createElement("button");
        btn.textContent = "Register";

        btn.onclick = function () {
            registerCourse(course);
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

// Display registered course list
function loadRegistered() {
    let list = document.getElementById("registeredList");
    list.innerHTML = "";

    registered.forEach(course => {
        let li = document.createElement("li");
        li.textContent = course.name;

        let btn = document.createElement("button");
        btn.textContent = "Remove";

        btn.onclick = function () {
            removeCourse(course);
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function registerCourse(course) {
    if (registered.find(c => c.id === course.id)) {
        alert("Course already registered!");
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
