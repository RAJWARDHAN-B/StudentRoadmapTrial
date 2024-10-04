let courses = [];

function addCourse() {
    const courseName = document.getElementById('courseName').value;
    const courseDeadline = document.getElementById('courseDeadline').value;
    const courseDetails = document.getElementById('courseDetails').value;
    const roadmap = document.getElementById('roadmap');

    if (courseName && courseDeadline) {
        const course = {
            name: courseName,
            deadline: new Date(courseDeadline).toLocaleDateString(),
            details: parseDetails(courseDetails)
        };
        
        courses.push(course);

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <span>${courseName} - Due: ${course.deadline}</span>
        `;
        listItem.onclick = function() {
            displayCourseInfo(course);
        };
        roadmap.appendChild(listItem);
        
        // Clear input fields
        document.getElementById('courseName').value = '';
        document.getElementById('courseDeadline').value = '';
        document.getElementById('courseDetails').value = '';
    } else {
        alert('Please enter both course name and deadline.');
    }
}

function parseDetails(detailsString) {
    const details = detailsString.split('\n');
    return details.map(line => {
        const [key, value] = line.split(':').map(part => part.trim());
        return `${key}: ${value || 'N/A'}`;
    }).join('<br>');
}

function displayCourseInfo(course) {
    document.getElementById('infoCourseName').innerText = course.name;
    document.getElementById('infoCourseDetails').innerHTML = course.details;
    document.getElementById('infoCourseDeadline').innerText = `Due: ${course.deadline}`;
    document.getElementById('courseInfo').style.display = 'block';
}
