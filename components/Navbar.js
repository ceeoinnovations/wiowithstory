export default function Navbar(about, items){
    return `
    <nav class="navbar">
        <ul>
           ${about==='project'? (
                `<li class="nav-title">
                    <a href="/hackathon-template">← Go Back</a>
                </li>`
           ):(
            `
            `
            )}
        </ul>
    </nav>`
}

