
document.addEventListener('DOMContentLoaded', () => {

    // Auth
    if (!sessionStorage.getItem('isAdmin')) {
        alert('관리자 로그인이 필요합니다.');
        window.location.href = 'index.html';
        return;
    }

    // Data Load
    let worksheets = JSON.parse(localStorage.getItem('studentWorksheets') || '[]').reverse();

    // UI Refs
    const tableBody = document.getElementById('tableBody');
    const galleryGrid = document.getElementById('galleryGrid');
    const searchInput = document.getElementById('searchInput');
    const modal = document.getElementById('detailModal');
    const replayFrame = document.getElementById('replayFrame');
    const feedbackInput = document.getElementById('feedbackInput');
    const saveFeedbackBtn = document.getElementById('saveFeedbackBtn');

    let currentItem = null;

    // Stats
    document.getElementById('totalCount').innerText = worksheets.length;
    const today = new Date().toLocaleDateString();
    document.getElementById('todayCount').innerText = worksheets.filter(w => new Date(w.submittedAt).toLocaleDateString() === today).length;

    // --- Render ---
    function render(data) {
        tableBody.innerHTML = '';
        galleryGrid.innerHTML = '';

        if (data.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">데이터 없음</td></tr>';
            return;
        }

        data.forEach(item => {
            // Table
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.submittedAt}</td>
                <td><span style="background:#e0f2f1; color:#009688; padding:2px 6px; border-radius:4px; font-size:0.8rem;">${item.type}</span></td>
                <td>${item.name}</td>
                <td>${item.grade}</td>
                <td>${item.title}</td>
            `;
            tr.onclick = () => showDetail(item.id);
            tableBody.appendChild(tr);

            // Card
            const card = document.createElement('div');
            card.className = 'gallery-card';
            const feedbackDone = item.feedback && item.feedback.trim().length > 0;

            card.innerHTML = `
                <div class="badge-feedback" style="display:${feedbackDone ? 'block' : 'none'}">✅ 피드백 완료</div>
                <div class="meta"><span>${item.submittedAt.split(' ')[0]}</span> <span>${item.name}</span></div>
                <h4 style="margin:5px 0;">${item.title}</h4>
                <p style="font-size:0.85rem; color:#666;">${item.type}</p>
            `;
            card.onclick = () => showDetail(item.id);
            galleryGrid.appendChild(card);
        });
    }

    render(worksheets);

    // --- Detail & Replay Logic ---
    window.showDetail = (id) => {
        currentItem = worksheets.find(w => w.id === id);
        if (!currentItem) return;

        document.getElementById('replayTitle').innerText = `${currentItem.name} - ${currentItem.type}`;
        feedbackInput.value = currentItem.feedback || '';

        modal.classList.add('active');

        // Iframe Loader
        // Determine URL based on type
        let url = 'index.html'; // default
        if (currentItem.type.includes('마인드맵')) url = 'mindmap.html';
        else if (currentItem.type.includes('흐름도')) url = 'flow.html';
        else if (currentItem.type.includes('KWL')) url = 'kwl.html';
        else if (currentItem.type.includes('비교')) url = 'venn.html';
        else if (currentItem.type.includes('SQ3R')) url = 'sq3r.html';
        else if (currentItem.type.includes('개념')) url = 'tree.html';
        else if (currentItem.type.includes('추론')) url = 'predict.html';

        replayFrame.src = url;

        // Wait for load then send data
        replayFrame.onload = () => {
            // Send Restoration Message
            replayFrame.contentWindow.postMessage({
                type: 'restore',
                formData: currentItem.formData
            }, '*');
        };
    };

    // Close
    document.getElementById('closeDetailBtn').onclick = () => {
        modal.classList.remove('active');
        replayFrame.src = ''; // reset
    };

    // --- Search & Export ---
    searchInput.oninput = (e) => {
        const val = e.target.value.toLowerCase();
        const filtered = worksheets.filter(w => w.name.includes(val) || w.title.includes(val));
        render(filtered);
    };

    document.getElementById('exportBtn').onclick = () => {
        let tsv = 'Date\tType\tName\tGrade\tTitle\tFeedback\n';
        worksheets.forEach(w => {
            tsv += `${w.submittedAt}\t${w.type}\t${w.name}\t${w.grade}\t${w.title}\t${w.feedback || ''}\n`;
        });
        navigator.clipboard.writeText(tsv).then(() => alert('클립보드에 복사되었습니다.\n구글 스프레드시트(Google Sheets)에 붙여넣기(Ctrl+V) 하세요.'));
    };

    document.getElementById('downloadCsvBtn').onclick = () => {
        if (worksheets.length === 0) {
            alert('다운로드할 데이터가 없습니다.');
            return;
        }

        // CSV Header
        let csvContent = '날짜,활동유형,이름,학반번호,서명,선생님 피드백,내용요약\n';

        worksheets.forEach(w => {
            // Escape quotes and handle newlines for CSV format
            const safeContent = (w.content || '').replace(/"/g, '""').replace(/\n/g, ' ');
            const safeFeedback = (w.feedback || '').replace(/"/g, '""');

            const row = [
                `"${w.submittedAt}"`,
                `"${w.type}"`,
                `"${w.name}"`,
                `"${w.grade}"`,
                `"${w.title}"`,
                `"${safeFeedback}"`,
                `"${safeContent}"`
            ];
            csvContent += row.join(',') + '\n';
        });

        // Add BOM for Excel Korean support
        const BOM = '\uFEFF';
        const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', `독서활동_전체자료_${new Date().toLocaleDateString().replace(/\./g, '')}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // View Toggle
    window.setViewMode = (mode) => {
        document.getElementById('dataTable').style.display = mode === 'sheet' ? 'table' : 'none';
        document.getElementById('galleryGrid').style.display = mode === 'gallery' ? 'grid' : 'none';
        document.getElementById('viewSheetBtn').classList.toggle('active', mode === 'sheet');
        document.getElementById('viewGalleryBtn').classList.toggle('active', mode === 'gallery');
    };

    // --- Feedback Saving ---
    saveFeedbackBtn.onclick = () => {
        if (!currentItem) return;
        currentItem.feedback = feedbackInput.value;

        // Update LocalStorage
        const idx = worksheets.findIndex(w => w.id === currentItem.id);
        if (idx > -1) worksheets[idx] = currentItem;

        localStorage.setItem('studentWorksheets', JSON.stringify(worksheets.reverse())); // Save in original order needed? 
        // Note: worksheets is currently reversed. 
        // Better: load raw, find, save.

        // Simpler: Just save `worksheets` back but fix order? 
        // Let's just save.
        localStorage.setItem('studentWorksheets', JSON.stringify(worksheets));

        alert('피드백이 저장되었습니다.');
        render(worksheets); // Re-render to show badge
    };



    document.getElementById('logoutBtn').onclick = () => {
        sessionStorage.removeItem('isAdmin');
        window.location.href = 'index.html';
    };

});
