import { dataSections } from "./dataSections.js"

let container = document.getElementById('container');

for (let dataSection of dataSections) {
	let section = document.createElement('div');
    section.classList.add('section');

    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.innerHTML = dataSection.paragraph;

    let projects = document.createElement('div');
    projects.classList.add('projects');
    
    for (let dataProject of dataSection.projects) {
        let show = document.createElement('a');
        show.classList.add('show');
        show.href = dataProject.href;

        let project = document.createElement('div');
        project.classList.add('project');
        project.innerHTML = dataProject.name;

        show.appendChild(project);

        projects.appendChild(show);
    }

    section.append(paragraph, projects);
    container.appendChild(section);
}


