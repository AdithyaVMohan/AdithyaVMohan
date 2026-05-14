const API = "https://adithyavmohan.onrender.com";
// const API = "http://localhost:5000";

async function loadSubjects() {
    const res = await fetch(`${API}/api/subjects`);
    const data = await res.json();
    const dropdown = document.getElementById("subject");
    const editDropdown = document.getElementById("editSubject");
    const container = document.getElementById("subjectCards");
    dropdown.innerHTML = "";
    editDropdown.innerHTML = "";
    container.innerHTML = "";
    data.forEach(s => {
        dropdown.innerHTML += `<option value="${s._id}">${s.subjectName}</option>`;
        editDropdown.innerHTML += `<option value="${s._id}">${s.subjectName}</option>`;
        container.innerHTML += `
            <div class="subject-card">
                <span>${s.subjectName}</span>
                <button id="cardbutton" onclick="deleteSubject('${s._id}')">❌</button>
            </div>
        `;
    });
}

async function deleteSubject(id) {
    await fetch(`${API}/api/subjects/${id}`, {
        method: "DELETE"
    });
    loadSubjects(); 
}

async function addSubject() {
    const subjectName = document.getElementById("subjectName").value.trim();
    if (!subjectName) {
        alert("Enter subject name");
        return;
    }
    if (!/^[a-zA-Z\s]+$/.test(subjectName)) {
        alert("Subject name must contain only letters");
        return;
    }
    await fetch(`${API}/api/subjects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subjectName })
    });
    document.getElementById("subjectName").value = "";
    loadSubjects();
}

async function addStudent(event) {
    event.preventDefault();
    const studentName = document.getElementById("studentName").value.trim();
    const subjectKey = document.getElementById("subject").value;
    const grade = Number(document.getElementById("grade").value);
    if (!studentName) {
        alert("Enter student name");
        return;
    }
    if (!/^[a-zA-Z\s]+$/.test(studentName)) {
        alert("Student name must contain only letters");
        return;
    }
    if (!subjectKey) {
        alert("Please select subject");
        return;
    }
    if (grade < 0 || grade > 100) {
        alert("Grade must be between 0 and 100");
        return;
    }
    const studentData = {
        studentName,
        subjectKey,
        grade
    };
    await fetch(`${API}/api/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData)
    });
    loadStudents();
    resetForm();
}

function resetForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("remarks").innerText = "";
    document.getElementById("subject").selectedIndex = 0;
}

async function loadStudents() {
    const search = document.getElementById("search").value;
    const filter = document.getElementById("filter").value;
    const res = await fetch(`${API}/api/students?search=${search}&remarks=${filter}`);
    const data = await res.json();
    console.log(data); 
    const table = document.getElementById("table");
    table.innerHTML = "";
    data.forEach(s => {
        table.innerHTML += `
            <tr>
                <td>${s.studentName}</td>
                <td>${s.subjectKey?.subjectName || "N/A"}</td>
                <td>${s.grade}</td>
                <td>${s.remarks}</td>
                <td>
                    <button onclick="openEditModal('${s._id}','${s.studentName}','${s.subjectKey?._id}','${s.grade}')">
                        Edit
                    </button>
                    <button onclick="deleteStudent('${s._id}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

async function deleteStudent(id) {
    await fetch(`${API}/api/students/${id}`, {
        method: "DELETE"
    });
    loadStudents();
}

function openEditModal(id, name, subjectId, grade) {
    document.getElementById("editModal").style.display = "block";
    document.getElementById("editId").value = id;
    document.getElementById("editName").value = name;
    document.getElementById("editSubject").value = subjectId;
    document.getElementById("editGrade").value = grade;
    updateRemarks("editGrade", "editRemarks");
}

function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

async function updateStudent() {
    const id = document.getElementById("editId").value;
    const studentName = document.getElementById("editName").value.trim();
    const subjectKey = document.getElementById("editSubject").value;
    const grade = Number(document.getElementById("editGrade").value);
    if (!studentName) {
        alert("Name required");
        return;
    }
    if (!subjectKey) {
        alert("Select subject");
        return;
    }
    if (grade < 0 || grade > 100) {
        alert("Grade must be between 0 and 100");
        return;
    }
    const studentData = {
        studentName,
        subjectKey,
        grade
    };
    await fetch(`${API}/api/students/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData)
    });
    closeModal();
    loadStudents();
}

function updateRemarks(inputId, outputId) {
    const grade = document.getElementById(inputId).value;
    document.getElementById(outputId).innerText =
        grade >= 75 ? "PASS" : "FAIL";
}

window.onload = () => {
    loadSubjects();
    loadStudents();
};