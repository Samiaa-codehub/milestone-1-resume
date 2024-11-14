 // app.ts
 interface ResumeData {
    name: string;
    date:string;
    Gender:string;
    nation: string;
    language:string;
    cnic:string;
    education:string;
    skills: string[];
    project:string;
    achivement:string;
}

document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const getFormData: ResumeData={
        name: (document.getElementById('name') as HTMLInputElement).value,
        date:(document.getElementById('date') as HTMLInputElement).value,
        Gender:(document.getElementById('Gender') as HTMLInputElement).value,
        nation: (document.getElementById('nation') as HTMLInputElement).value,
        language:(document.getElementById('language') as HTMLInputElement).value,
        cnic:(document.getElementById('cnic') as HTMLInputElement).value,
        education: (document.getElementById('education') as HTMLTextAreaElement).value,
        skills: (document.getElementById('skills') as HTMLInputElement).value.split(','),
        project:(document.getElementById('project') as HTMLTextAreaElement).value,
        achivement:(document.getElementById('achivement') as HTMLTextAreaElement).value,
    }

    generateResume(getFormData);
});

function generateResume(data: ResumeData) {
    const resumeSection = document.getElementById('resume') as HTMLElement;
    resumeSection.innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>Religion:</strong><span id="edit-date" class="editable">${data.date}</span></p>
        <p><strong>Gender:</strong><span id="edit-Gender" class="editable">${data.Gender}</span></p>
        <p><strong>Email Address:</strong><span id="edit-nation" class="editable">${data.nation}</span></p>
        <p><strong>Language:</strong><span id="language" class="editsble">${data.language}</span></p>
        <p><strong>CNIC No:</strong><span id="edit-cnic" class="editable">${data.cnic}</span></p>
        <p><strong>Education:</strong><span id="edit-education" class="editable"> ${data.education}</span></p>
        <p><strong>Skills:</strong><span id="edit-skills" class="editable">${data.skills.map(skill => skill.trim()).join(', ')}</span></p>
         <p><strong>Project:</strong><span id="edit-project" class="editable">${data.project}</span><p/>
        <p><strong>Achivement:</strong><span id="edit-achivement" class="editable">${data.achivement}</span></p>
    `;

    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    resumeOutput.style.display = 'block';
}
function makeEditable(){
    const editableElemnet=document.querySelectorAll('.editable');
    editableElemnet.forEach(element =>{
        element.addEventListener('click',function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            if(currentElement.tagName ==="P" || currentElement.tagName ==='SPAN'){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')

                input.addEventListener('blur',function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove()
                })

                currentElement.style.display ='none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()

            }
        })
    })
}
