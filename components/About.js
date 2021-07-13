import GetImageURL, {TemplateIdFrom} from './Images.js';

export default function About(about){
    return `
    <section id="about" class="intro">
        <div class="text-wrapper">
            <h1 class="title">${about[0].name}</h1>
            <p>${about[0].description}</p>
            <div class="project-img">
            </div>
            
            <form method="get" action="./hackathon.uf2">
                    <button class="button" style="margin-top: 30px; margin-bottom: 50px;"> Firmware </button>
</form>

            <a href="https://drive.google.com/drive/u/1/folders/1B2GM1fcwV51vLE_9PwgWTxeGHP0479U9" target="_blank">
                    <button class="button" style="margin-top: 30px; margin-bottom: 50px;"> Firmware </button>
                </a>
                <a href="${about[0].buttonlink}" target="_blank">
                    <button class="button" style="margin-top: 30px; margin-bottom: 50px;">${about[0].buttonlabel}</button>
                </a>
        </div>    
    </section>`
}
