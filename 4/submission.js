/* Submission & Replay Logic with Visible Inputs & Export Features */

document.addEventListener('DOMContentLoaded', () => {

    // --- 0. Load Dependencies (html2canvas) ---
    if (!window.html2canvas) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = () => console.log('html2canvas loaded');
        document.head.appendChild(script);
    }

    // --- 1. Inject Student Info & Submit Button ---
    const pageTitle = document.title.split('-')[0].trim();
    const headerActions = document.querySelector('.page-header-actions');
    const sidebar = document.querySelector('.sidebar');
    const sidebarFooter = document.querySelector('.sidebar-footer');

    // Layout Logic
    if (sidebar) {
        // Mindmap: Sidebar Injection
        injectSidebarInputs(sidebar, sidebarFooter);
        injectSidebarExportBtn(sidebarFooter || sidebar);
    } else if (headerActions) {
        // Standard Page: Header Injection
        injectHeaderInputs(headerActions);
        injectHeaderExportBtn(headerActions);
    }

    // --- Injection Functions ---

    function injectSidebarInputs(container, footer) {
        if (document.getElementById('studentInfoPanel')) return;

        const panel = document.createElement('div');
        panel.id = 'studentInfoPanel';
        panel.className = 'sidebar-section';
        // Order: Grade, Name, Title, Date, Subject
        panel.innerHTML = `
            <h3>학생 정보</h3>
            <div style="display:flex; flex-direction:column; gap:8px;">
                <input type="text" id="studentGrade" placeholder="학반번호" class="sidebar-input">
                <input type="text" id="studentName" placeholder="이름" class="sidebar-input">
                <input type="text" id="bookTitle" placeholder="서명" class="sidebar-input">
                <input type="date" id="readingDate" class="sidebar-input" value="${new Date().toISOString().split('T')[0]}">
                <input type="text" id="subjectTime" placeholder="교과" class="sidebar-input">
            </div>
        `;

        // Insert before footer logic
        if (footer) {
            container.insertBefore(panel, footer);
        } else {
            container.appendChild(panel);
        }
    }

    function injectHeaderInputs(container) {
        if (document.getElementById('studentInfoBar')) return;

        const bar = document.createElement('div');
        bar.id = 'studentInfoBar';
        bar.style.display = 'flex';
        bar.style.gap = '10px';
        bar.style.alignItems = 'center';
        bar.style.flexWrap = 'wrap';
        bar.style.marginBottom = '10px';
        bar.style.width = '100%';

        // Order: Grade (120px), Name (80px), Title (Wide), Date (130px), Subject (100px)
        bar.innerHTML = `
            <input type="text" id="studentGrade" placeholder="학반번호" class="header-input" style="width:120px;">
            <input type="text" id="studentName" placeholder="이름" class="header-input" style="width:80px;">
            <input type="text" id="bookTitle" placeholder="서명" class="header-input" style="width:300px; flex-grow:1;">
            <input type="date" id="readingDate" class="header-input" value="${new Date().toISOString().split('T')[0]}" style="width:130px;">
            <input type="text" id="subjectTime" placeholder="교과" class="header-input" style="width:100px;">
        `;

        // Insert at beginning
        if (container.firstChild) {
            container.insertBefore(bar, container.firstChild);
        } else {
            container.appendChild(bar);
        }

        // Hide Global 'Submit Result' Button if present (Print Only Mode)
        const globalBtn = document.getElementById('globalSubmitBtn');
        if (globalBtn) globalBtn.style.display = 'none';

        // Hide existing print buttons to avoid duplication
        const existingPrint = container.querySelector('.print-btn');
        if (existingPrint) existingPrint.style.display = 'none';
    }

    function injectHeaderExportBtn(container) {
        if (document.getElementById('exportTriggerBtn')) return;
        const btn = document.createElement('button');
        btn.id = 'exportTriggerBtn';
        btn.className = 'btn-primary';
        btn.innerHTML = '📤 활동지 내보내기';
        btn.onclick = openExportModal;
        container.appendChild(btn);
    }

    function injectSidebarExportBtn(container) {
        if (document.getElementById('exportSidebarBtn')) return;
        const btn = document.createElement('button');
        btn.id = 'exportSidebarBtn';
        btn.className = 'btn-primary';
        btn.style.width = '100%';
        btn.style.marginTop = '10px';
        btn.innerHTML = '📤 활동지 내보내기';
        btn.onclick = openExportModal;
        container.appendChild(btn);
    }

    // Input Styling
    const style = document.createElement('style');
    style.innerHTML = `
        .sidebar-input { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; background: #f8f9fa; font-size: 0.9rem; }
        .header-input { padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 0.95rem; }
        .sidebar-input:focus, .header-input:focus { border-color: #1B263B; outline: none; background: white; }
        
        /* Export Modal Styles */
        .export-modal {
            display: none;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 9999;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(2px);
        }
        .export-card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            width: 90%;
            max-width: 400px;
        }
        .export-options {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-top: 20px;
        }
        .export-btn-option {
            padding: 15px;
            border: 2px solid #eee;
            border-radius: 8px;
            background: white;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        .export-btn-option:hover {
            border-color: #1B263B;
            background: #f8f9fa;
            color: #1B263B;
        }
    `;
    document.head.appendChild(style);

    // --- Export Modal Logic ---
    function createExportModal() {
        const modal = document.createElement('div');
        modal.className = 'export-modal';
        modal.id = 'exportModal';
        modal.innerHTML = `
            <div class="export-card">
                <h3 style="margin:0; color:#1B263B;">📤 활동지 내보내기</h3>
                <p style="color:#666; font-size:0.9rem; margin-top:5px;">작성한 내용을 어떻게 저장할까요?</p>
                
                <div class="export-options">
                    <button class="export-btn-option" onclick="window.print()">
                        <span>🖨️</span> PDF 저장 / 인쇄하기
                    </button>
                    <button class="export-btn-option" id="saveImageBtn">
                        <span>🖼️</span> 이미지로 저장하기
                    </button>
                    <button class="export-btn-option" id="submitToAdminBtn" style="border-color:#1B263B; background:#f0f9ff;">
                        <span>🚀</span> 관리자 페이지로 보내기
                    </button>
                </div>
                
                <button onclick="document.getElementById('exportModal').style.display='none'" 
                    style="margin-top:20px; background:none; border:none; color:#888; cursor:pointer; text-decoration:underline;">
                    닫기
                </button>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById('saveImageBtn').onclick = saveAsImage;
        document.getElementById('submitToAdminBtn').onclick = () => {
            window.handleSubmit();
            document.getElementById('exportModal').style.display = 'none';
        };
    }

    function openExportModal() {
        if (!document.getElementById('exportModal')) {
            createExportModal();
        }
        document.getElementById('exportModal').style.display = 'flex';
    }

    function saveAsImage() {
        // Hide Modal temporarily
        document.getElementById('exportModal').style.display = 'none';

        const target = document.querySelector('.workspace') || document.body;

        // Ensure proper bg
        const originalBg = target.style.backgroundColor;
        target.style.backgroundColor = "white"; // Force white bg for transparent targets

        window.html2canvas(target, {
            scale: 2, // High Res
            useCORS: true,
            logging: false
        }).then(canvas => {
            const link = document.createElement('a');
            const studentName = document.getElementById('studentName') ? document.getElementById('studentName').value : '학생';
            const title = document.title.split('-')[0].trim();

            link.download = `${studentName}_${title}_활동지.png`;
            link.href = canvas.toDataURL();
            link.click();

            // Restore
            target.style.backgroundColor = originalBg;
        }).catch(err => {
            alert('이미지 저장 중 오류가 발생했습니다: ' + err);
        });
    }

    // --- 2. Submission Logic (Modified for Print Only / Local Storage) ---
    // Even if button is hidden, we keep logic in case user wants to enable it later or for debugging
    window.handleSubmit = function () {
        const nameEl = document.getElementById('studentName');
        const gradeEl = document.getElementById('studentGrade');
        const titleEl = document.getElementById('bookTitle');
        const dateEl = document.getElementById('readingDate');
        const subjectEl = document.getElementById('subjectTime');

        if (!nameEl || !gradeEl || !titleEl) {
            alert('입력란을 찾을 수 없습니다.');
            return;
        }

        const name = nameEl.value.trim();
        const grade = gradeEl.value.trim();
        const bookTitle = titleEl.value.trim();
        const date = dateEl.value;
        const subject = subjectEl ? subjectEl.value.trim() : '';

        if (!name || !grade || !bookTitle) {
            alert('학생 정보(이름, 학반번호, 서명)를 모두 입력해주세요.');
            return;
        }

        // Capture Data
        const formData = captureData();
        const contentStr = generateReadableContent(formData);

        const submission = {
            id: Date.now().toString(),
            submittedAt: new Date().toLocaleString(),
            type: pageTitle,
            name,
            grade,
            title: bookTitle,
            date,
            subject,
            content: contentStr,
            formData: formData
        };

        const submissions = JSON.parse(localStorage.getItem('studentWorksheets') || '[]');
        submissions.push(submission);
        localStorage.setItem('studentWorksheets', JSON.stringify(submissions));

        alert('제출되었습니다!');
    };

    function captureData() {
        const data = {};
        document.querySelectorAll('input, textarea').forEach((el, index) => {
            if (el.type === 'hidden') {
                if (el.id) data[el.id] = el.value;
            } else {
                const key = el.id || `${el.tagName.toLowerCase()}_${index}`;
                data[key] = el.value;
            }
        });
        return data;
    }

    function generateReadableContent(data) {
        let html = '';
        for (const [key, val] of Object.entries(data)) {
            if (key === 'mindmapState' || key === 'mindmapDataSync') continue;
            if (['studentName', 'studentGrade', 'bookTitle', 'readingDate', 'subjectTime'].includes(key)) continue;

            if (val && typeof val === 'string' && val.trim()) html += `[${key}] ${val}\n`;
        }
        if (data['mindmapDataSync']) return data['mindmapDataSync'];
        return html;
    }

    // --- 3. Replay Restore ---
    window.addEventListener('message', (e) => {
        if (e.data.type === 'restore') {
            restoreData(e.data.formData);
            setReadOnly();
        }
    });

    function restoreData(data) {
        if (!data) return;
        document.querySelectorAll('input, textarea').forEach((el, index) => {
            const key = el.id || `${el.tagName.toLowerCase()}_${index}`;
            if (data[key] !== undefined) el.value = data[key];
        });

        // Restore Mindmap
        if (data['mindmapState']) {
            const event = new CustomEvent('mindmap-restore', { detail: data['mindmapState'] });
            window.dispatchEvent(event);
        }
    }

    function setReadOnly() {
        document.body.classList.add('read-only-mode');
        document.querySelectorAll('input, textarea, button, select').forEach(el => {
            el.disabled = true;
            el.readOnly = true;
        });
        const style = document.createElement('style');
        style.innerHTML = `
            .submit-btn, #globalSubmitBtn, .add-connector, .node-actions, .add-btn, .del-btn, .sidebar-footer { display: none !important; }
            .read-only-mode textarea { resize: none; border: none; }
            .read-only-mode { pointer-events: auto !important; } 
        `;
        document.head.appendChild(style);
    }

});
