// Data loader for the website
// This script loads data from JSON files and renders them on the page

async function loadJSON(url) {
    const response = await fetch(url);
    return response.json();
}

// Render News
async function renderNews(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const news = await loadJSON('data/news.json');
    const items = limit ? news.slice(0, limit) : news;
    
    const html = items.map(item => 
        `<li><span class="date">[${item.date}]</span> ${item.content}</li>`
    ).join('');
    
    container.innerHTML = html;
}

// Render Publications
async function renderPublications(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const publications = await loadJSON('data/publications.json');
    // Filter out "Under Review" for main page if limit is set
    let items = limit ? publications.filter(p => p.year !== "Under Review").slice(0, limit) : publications;
    
    const html = items.map(pub => {
        const links = pub.links.map(link => 
            `<a href="${link.url}">[${link.label}]</a>`
        ).join(' ');
        
        return `<li>
            <span class="pub-title">${pub.title}</span><br>
            <span class="pub-authors">${pub.authors}</span><br>
            <span class="pub-venue">${pub.venue}</span><br>
            ${links ? `<span class="pub-links">${links}</span>` : ''}
        </li>`;
    }).join('');
    
    container.innerHTML = html;
}

// Render Publications grouped by year (for full publications page)
async function renderPublicationsByYear(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const publications = await loadJSON('data/publications.json');
    
    // Group by year
    const grouped = {};
    publications.forEach(pub => {
        if (!grouped[pub.year]) {
            grouped[pub.year] = [];
        }
        grouped[pub.year].push(pub);
    });
    
    // Sort years (Under Review at the end)
    const years = Object.keys(grouped).sort((a, b) => {
        if (a === "Under Review") return 1;
        if (b === "Under Review") return -1;
        return b.localeCompare(a);
    });
    
    let html = '';
    years.forEach(year => {
        html += `<section class="year-section">
            <h2>${year}</h2>
            <ul class="pub-list">`;
        
        grouped[year].forEach(pub => {
            const links = pub.links.map(link => 
                `<a href="${link.url}">[${link.label}]</a>`
            ).join(' ');
            
            html += `<li>
                <span class="pub-title">${pub.title}</span><br>
                <span class="pub-authors">${pub.authors}</span><br>
                <span class="pub-venue">${pub.venue}</span><br>
                ${links ? `<span class="pub-links">${links}</span>` : ''}
            </li>`;
        });
        
        html += `</ul></section>`;
    });
    
    container.innerHTML = html;
}

// Render Projects
async function renderProjects(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const projects = await loadJSON('data/projects.json');
    const items = limit ? projects.slice(0, limit) : projects;
    
    const html = items.map(project => 
        `<li>
            <span class="project-title">${project.title}</span>
            <p>${project.description} (${project.year})</p>
        </li>`
    ).join('');
    
    container.innerHTML = html;
}

// Initialize based on page
document.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on and render accordingly
    const isMainPage = document.querySelector('.hero') !== null;
    const isNewsPage = document.title.includes('News');
    const isPublicationsPage = document.title.includes('Publications');
    const isProjectsPage = document.title.includes('Projects');
    
    if (isMainPage) {
        // Main page: show limited items
        renderNews('news-list', 5);
        renderPublications('pub-list', 5);
        renderProjects('project-list', 5);
    } else if (isNewsPage) {
        renderNews('news-list-full');
    } else if (isPublicationsPage) {
        renderPublicationsByYear('pub-list-full');
    } else if (isProjectsPage) {
        renderProjects('project-list-full');
    }
});
