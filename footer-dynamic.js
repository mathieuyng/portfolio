// Script pour générer le footer dynamiquement
document.addEventListener('DOMContentLoaded', function() {
    // Créer le footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div id="contact">
            <ul>
                <li><a href="/index.html">𝕄athieu 𝕁eune</a>
                <li><a href="https://www.linkedin.com/in/mathieujeune/" target="_blank">LinkedIn</a></li>
                <li><a href="https://twitter.com/mathieuyng" target="_blank">Twitter</a></li>
            </ul>
        </div>
        <p>
            <small>
                Ce site web pèse 528 Ko et vise à réduire sa contribution à l'empreinte environnementale numérique.
            </small>
            <br>
            <small>
                Hébergé par <a href="https://www.infomaniak.com/fr/hebergeur-ecologique" target="_blank">Infomaniak</a>
            </small>
        </p>
    `;
    
    // Remplacer le placeholder
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.parentNode.replaceChild(footer, placeholder);
    } else {
        // Fallback : ajouter à la fin du body
        document.body.appendChild(footer);
    }
}); 