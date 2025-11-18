// Script pour générer le header dynamiquement
document.addEventListener('DOMContentLoaded', function() {
    // Créer le header
    const header = document.createElement('header');
    header.innerHTML = `
        <div id="identity">
            <a href="/index.html">𝕄athieu 𝕁eune</a>
            <br>product designer
        </div>
    `;
    
    // Remplacer le placeholder
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.parentNode.replaceChild(header, placeholder);
    }
}); 