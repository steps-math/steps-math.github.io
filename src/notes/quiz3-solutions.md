---
layout: base.njk
title: Quiz 3 Solutions
category: differentiation
description: Quiz 3 Solutions
date: 2025-08-09
---

# Quiz 3 Problems

<div class="pdf-container">
    <div class="pdf-viewer">
        <iframe 
            src="/notes/math-quiz3-all.pdf" 
            width="100%" 
            height="800px" 
            frameborder="0"
            title="Quiz 3 Problems PDF">
            <p>Your browser does not support PDF viewing. 
            <a href="/notes/math-quiz3-all.pdf" download>Download the quiz problems PDF</a> to view it.</p>
        </iframe>
    </div>
    
    <div class="pdf-actions">
        <a href="/notes/math-quiz3-all.pdf" download class="download-btn">
            <i class="fas fa-file-pdf"></i>
            <span>Download Quiz Problems PDF</span>
        </a>
        <a href="/notes/math-quiz3-all.pdf" target="_blank" class="open-btn">
            <i class="fas fa-external-link"></i>
            <span>Open in New Tab</span>
        </a>
    </div>
</div>

# Quiz 3 Solutions

<div class="pdf-container">
    <div class="pdf-viewer">
        <iframe 
            src="/notes/quiz3-solutions.pdf" 
            width="100%" 
            height="800px" 
            frameborder="0"
            title="Quiz 3 Solutions PDF">
            <p>Your browser does not support PDF viewing. 
            <a href="/notes/quiz3-solutions.pdf" download>Download the quiz solutions PDF</a> to view it.</p>
        </iframe>
    </div>
    
    <div class="pdf-actions">
        <a href="/notes/quiz3-solutions.pdf" download class="download-btn">
            <i class="fas fa-file-pdf"></i>
            <span>Download Quiz Solutions PDF</span>
        </a>
        <a href="/notes/quiz3-solutions.pdf" target="_blank" class="open-btn">
            <i class="fas fa-external-link"></i>
            <span>Open in New Tab</span>
        </a>
    </div>
</div>


<style>
.pdf-container {
    margin: 2rem 0;
}

.pdf-viewer {
    border: 1px solid #ecf0f1;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(52, 152, 219, 0.10), 0 1.5px 6px rgba(44, 62, 80, 0.06);
    margin-bottom: 1rem;
}

.pdf-viewer iframe {
    display: block;
    border: none;
    min-height: 600px;
}

.pdf-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1rem;
}

.download-btn, .open-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    min-width: 200px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.download-btn {
    background-color: #3498db;
    border-top: 3px solid #2980b9;
}

.download-btn:hover {
    background-color: #2980b9;
    text-decoration: none;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.open-btn {
    background-color: #2c3e50;
    border-top: 3px solid #34495e;
}

.open-btn:hover {
    background-color: #34495e;
    text-decoration: none;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(44, 62, 80, 0.3);
}

.download-btn i, .open-btn i {
    font-size: 1rem;
}

.download-btn span, .open-btn span {
    text-align: center;
}

@media (max-width: 768px) {
    .pdf-viewer iframe {
        min-height: 400px;
    }
    
    .pdf-actions {
        flex-direction: column;
        align-items: center;
    }
    
    .download-btn, .open-btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }
}
</style>