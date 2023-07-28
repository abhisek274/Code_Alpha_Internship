function addEducation() {
    const container = document.querySelector('.education-container');
    const educationField = document.createElement('div');
    educationField.innerHTML = `
      <div class="form-group">
        <label for="education-institution">Institution</label>
        <input type="text" name="education-institution[]" placeholder="Enter institution name">
      </div>
      <!-- Add other education fields as needed -->
    `;
    container.appendChild(educationField);
  }
  function addWorkExperience() {
    const container = document.querySelector('.work-experience-container');
    const workExperienceField = document.createElement('div');
    workExperienceField.innerHTML = `
      <div class="form-group">
        <label for="work-experience-company">Company</label>
        <input type="text" name="work-experience-company[]" placeholder="Enter company name">
      </div>
      <!-- Add other work experience fields as needed -->
    `;
    container.appendChild(workExperienceField);
  }
  function addSkill() {
    const container = document.querySelector('.skills-container');
    const skillField = document.createElement('div');
    skillField.innerHTML = `
      <div class="form-group">
        <label for="skill">Skill</label>
        <input type="text" name="skills[]" placeholder="Enter a skill">
      </div>
      <!-- Add other skill fields as needed -->
    `;
    container.appendChild(skillField);
  }
 
  function addProject() {
    const container = document.querySelector('.projects-container');
    const projectField = document.createElement('div');
    projectField.innerHTML = `
      <div class="form-group">
        <label for="project-name">Project Name</label>
        <input type="text" name="project-name[]" placeholder="Enter project name">
      </div>
      <!-- Add other project fields as needed -->
    `;
    container.appendChild(projectField);
  }
  document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const educationInstitutions = Array.from(document.getElementsByName('education-institution[]'))
      .map(input => input.value);
    const resumePreview = `
      <h2>Personal Information</h2>
      <p>Full Name: ${fullName}</p>
  
      <h2>Education</h2>
      ${educationInstitutions.map(institution => `<p>Institution: ${institution}</p>`).join('')}
      <!-- Display other form field values in the preview -->
  
      <!-- Display other sections in the preview -->
  
      <button onclick="window.print()">Print Resume</button>
    `;
    document.getElementById('resume-preview').innerHTML = resumePreview;
  });
  