const API = "https://adithyavmohan.onrender.com";

async function loadSubjects() {
    const res = await fetch(`${API}/subjects`);
    const data = await res.json();
    const dropdown = document.getElementById("subject");
    const editDropdown = document.getElementById("editSubject");
    dropdown.innerHTML = "";
    editDropdown.innerHTML = "";
    data.forEach(s => {
        const option = `<option value="${s._id}">${s.subjectName}</option>`;
        dropdown.innerHTML += option;
        editDropdown.innerHTML += option;
    });
}

async function addStudent(event) {
    event.preventDefault(); 
    const studentData = {
        studentName: document.getElementById("studentName").value.trim().toLowerCase(),
        subjectKey: document.getElementById("subject").value,
        grade: document.getElementById("grade").value
    };
    await fetch(`${API}/students`, {
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
    const res = await fetch(`${API}/students?search=${search}&remarks=${filter}`);
    const data = await res.json();
    const table = document.getElementById("table");
    table.innerHTML = "";
    data.forEach(s => {
        table.innerHTML += `
            <tr>
                <td>${s.studentName}</td>
                <td>${s.subjectKey.subjectName}</td>
                <td>${s.grade}</td>
                <td>${s.remarks}</td>
                <td>
                    <button onclick="openEditModal('${s._id}','${s.studentName}','${s.subjectKey._id}','${s.grade}')">
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
    await fetch(`${API}/students/${id}`, {
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
    const studentData = {
        studentName: document.getElementById("editName").value.trim().toLowerCase(),
        subjectKey: document.getElementById("editSubject").value,
        grade: document.getElementById("editGrade").value
    };
    await fetch(`${API}/students/${id}`, {
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

loadSubjects();
loadStudents();