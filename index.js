
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';



Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTAJIIKnmqE-yA6HwtrzUU-9pueHRQM4pcjc5wqo4usmjHYaBO5DxQP6r9CQTJby8VrWl8Ct2VZNQg-/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRNuI6q9-ynZe79UNxyOStdf2QiuIiT5DxbK7tbICPqdAETPRTGthEFS9ugujq930fREwg2X2bgBze3/pub?output=csv")
      ])
      .then(([about, projects]) => {
        const data = {about, projects};
        console.log(data);

    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.title===params.get('project'));
        Navbar('project')
        ProjectPage(project, about);
    }    
});



