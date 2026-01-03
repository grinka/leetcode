const ITEMS_PER_PAGE = 20;
let currentPage = 1;
let currentSort = { field: null, direction: 'asc' };
let currentFilters = { level: 'all', beats: 'all' };
let filteredProblems = [];
let sortedProblems = [];

function getLevelClass(level) {
    return `level-${level.toLowerCase()}`;
}

function parseRuntime(runtime) {
    if (runtime === null || runtime === undefined) return Infinity;
    return typeof runtime === 'number' ? runtime : Infinity;
}

function parseBeats(beats) {
    if (beats === null || beats === undefined) return 0;
    return typeof beats === 'number' ? beats : 0;
}

function getLevelPriority(level) {
    const priorities = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
    return priorities[level] || 999;
}

function formatRuntime(runtime) {
    if (runtime === null || runtime === undefined) return '';
    return typeof runtime === 'number' ? `${runtime}ms` : '';
}

function formatBeats(beats) {
    if (beats === null || beats === undefined) return '';
    return typeof beats === 'number' ? `${beats}%` : '';
}

function applyFilters() {
    console.log('applyFilters called, problems length:', problems ? problems.length : 'undefined');
    filteredProblems = problems.filter(problem => {
        // Level filter
        if (currentFilters.level !== 'all' && problem.level !== currentFilters.level) {
            return false;
        }
        
        // Beats filter
        if (currentFilters.beats !== 'all') {
            const beatsValue = parseBeats(problem.beats);
            
            if (currentFilters.beats === '100' && beatsValue !== 100) {
                return false;
            } else if (currentFilters.beats === '80-100' && (beatsValue < 80 || beatsValue > 100)) {
                return false;
            } else if (currentFilters.beats === 'below-80' && beatsValue >= 80) {
                return false;
            }
        }
        
        return true;
    });
    
    console.log('filteredProblems length:', filteredProblems.length);
    
    // Re-apply sorting to filtered results
    if (currentSort.field) {
        sortProblems(currentSort.field, currentSort.direction);
    } else {
        sortedProblems = [...filteredProblems];
    }
    
    console.log('sortedProblems length:', sortedProblems.length);
}

function sortProblems(field, direction) {
    sortedProblems = [...filteredProblems].sort((a, b) => {
        let aValue, bValue;
        
        switch(field) {
            case 'number':
                aValue = a.number;
                bValue = b.number;
                break;
            case 'level':
                aValue = getLevelPriority(a.level);
                bValue = getLevelPriority(b.level);
                break;
            case 'runtime':
                aValue = parseRuntime(a.runtime);
                bValue = parseRuntime(b.runtime);
                break;
            case 'beats':
                aValue = parseBeats(a.beats);
                bValue = parseBeats(b.beats);
                break;
            default:
                return 0;
        }
        
        if (aValue < bValue) return direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return direction === 'asc' ? 1 : -1;
        return 0;
    });
}

function updateSortIndicators() {
    document.querySelectorAll('th.sortable').forEach(th => {
        th.classList.remove('sort-asc', 'sort-desc');
        if (th.dataset.sort === currentSort.field) {
            th.classList.add(currentSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
        }
    });
}

function renderTable(page) {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageProblems = sortedProblems.slice(startIndex, endIndex);

    const tbody = document.getElementById('problemsTable');
    tbody.innerHTML = '';

    if (pageProblems.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="empty-state">No problems found</td></tr>';
        return;
    }

    pageProblems.forEach(problem => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="${problem.path}">${problem.number}. ${problem.title}</a></td>
            <td class="${getLevelClass(problem.level)}">${problem.level}</td>
            <td>${formatRuntime(problem.runtime)}</td>
            <td>${formatBeats(problem.beats)}</td>
        `;
        tbody.appendChild(row);
    });

    // Update page info
    const actualEnd = Math.min(endIndex, sortedProblems.length);
    document.getElementById('start').textContent = startIndex + 1;
    document.getElementById('end').textContent = actualEnd;
    document.getElementById('total').textContent = sortedProblems.length;
}

function renderPagination() {
    const totalPages = Math.ceil(sortedProblems.length / ITEMS_PER_PAGE);
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '← Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => goToPage(currentPage - 1);
    paginationDiv.appendChild(prevBtn);

    // Page numbers
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    // First page + ellipsis
    if (startPage > 1) {
        const firstBtn = document.createElement('button');
        firstBtn.textContent = '1';
        firstBtn.onclick = () => goToPage(1);
        paginationDiv.appendChild(firstBtn);

        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0 8px';
            paginationDiv.appendChild(ellipsis);
        }
    }

    // Page number buttons
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = i === currentPage ? 'active' : '';
        pageBtn.onclick = () => goToPage(i);
        paginationDiv.appendChild(pageBtn);
    }

    // Ellipsis + last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0 8px';
            paginationDiv.appendChild(ellipsis);
        }

        const lastBtn = document.createElement('button');
        lastBtn.textContent = totalPages;
        lastBtn.onclick = () => goToPage(totalPages);
        paginationDiv.appendChild(lastBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next →';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => goToPage(currentPage + 1);
    paginationDiv.appendChild(nextBtn);
}

function goToPage(page) {
    const totalPages = Math.ceil(sortedProblems.length / ITEMS_PER_PAGE);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderTable(currentPage);
    renderPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSort(field) {
    if (currentSort.field === field) {
        // Toggle direction if same field
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        // New field, default to ascending
        currentSort.field = field;
        currentSort.direction = 'asc';
    }
    
    sortProblems(currentSort.field, currentSort.direction);
    updateSortIndicators();
    currentPage = 1; // Reset to first page after sorting
    renderTable(currentPage);
    renderPagination();
}

function handleFilterChange() {
    currentFilters.level = document.getElementById('levelFilter').value;
    currentFilters.beats = document.getElementById('beatsFilter').value;
    
    applyFilters();
    currentPage = 1; // Reset to first page after filtering
    renderTable(currentPage);
    renderPagination();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to sortable headers
    document.querySelectorAll('th.sortable').forEach(th => {
        th.addEventListener('click', () => handleSort(th.dataset.sort));
    });
    
    // Add change handlers to filters
    document.getElementById('levelFilter').addEventListener('change', handleFilterChange);
    document.getElementById('beatsFilter').addEventListener('change', handleFilterChange);
    
    // Initialize data
    applyFilters();
    renderTable(currentPage);
    renderPagination();
});
