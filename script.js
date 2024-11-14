var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var getFormData = {
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        Gender: document.getElementById('Gender').value,
        nation: document.getElementById('nation').value,
        language: document.getElementById('language').value,
        cnic: document.getElementById('cnic').value,
        education: document.getElementById('education').value,
        skills: document.getElementById('skills').value.split(','),
        project: document.getElementById('project').value,
        achivement: document.getElementById('achivement').value,
    };
    generateResume(getFormData);
});
function generateResume(data) {
    var resumeSection = document.getElementById('resume');
    resumeSection.innerHTML = "\n        <h3>".concat(data.name, "</h3>\n        <p><strong>Religion:</strong><span id=\"edit-date\" class=\"editable\">").concat(data.date, "</span></p>\n        <p><strong>Gender:</strong><span id=\"edit-Gender\" class=\"editable\">").concat(data.Gender, "</span></p>\n        <p><strong>Email Address:</strong><span id=\"edit-nation\" class=\"editable\">").concat(data.nation, "</span></p>\n        <p><strong>Language:</strong><span id=\"language\" class=\"editsble\">").concat(data.language, "</span></p>\n        <p><strong>CNIC No:</strong><span id=\"edit-cnic\" class=\"editable\">").concat(data.cnic, "</span></p>\n        <p><strong>Education:</strong><span id=\"edit-education\" class=\"editable\"> ").concat(data.education, "</span></p>\n        <p><strong>Skills:</strong><span id=\"edit-skills\" class=\"editable\">").concat(data.skills.map(function (skill) { return skill.trim(); }).join(', '), "</span></p>\n         <p><strong>Project:</strong><span id=\"edit-project\" class=\"editable\">").concat(data.project, "</span><p/>\n        <p><strong>Achivement:</strong><span id=\"edit-achivement\" class=\"editable\">").concat(data.achivement, "</span></p>\n    ");
    var resumeOutput = document.getElementById('resume-output');
    resumeOutput.style.display = 'block';
}
function makeEditable() {
    var editableElemnet = document.querySelectorAll('.editable');
    editableElemnet.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
