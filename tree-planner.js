function drag(event) {
    event.dataTransfer.setData("text", event.target.innerHTML);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const newElement = document.createElement("div");
    newElement.className = "draggable";
    newElement.innerHTML = `<span ondblclick="editCourse(this)">${data}</span><button class="btn btn-danger btn-sm" onclick="removeCourse(this)">Remove</button>`;
    newElement.draggable = true;
    newElement.ondragstart = function(event) {
        drag(event);
    };
    event.target.appendChild(newElement);
}

// Function to enable editing course names
function editCourse(courseElement) {
    const courseName = courseElement.innerText || courseElement.textContent;
    const input = document.createElement("input");
    input.value = courseName;
    input.style.width = "100%";
    input.onblur = function() {
        courseElement.innerHTML = input.value;
        courseElement.setAttribute("ondblclick", "editCourse(this)"); // Re-enable editing
    };
    courseElement.innerHTML = "";
    courseElement.appendChild(input);
    input.focus();
}

// Function to remove a course
function removeCourse(button) {
    const courseItem = button.parentElement;
    courseItem.remove();
}
