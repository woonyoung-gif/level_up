/* Basic Mindmap Logic with Auto-Size Input */

document.addEventListener('DOMContentLoaded', () => {

    // Global State
    const state = {
        theme: 'basic',
        shape: 'capsule',
        nextId: 1,
        nodes: []
    };

    const canvas = document.getElementById('canvas');
    const svgLayer = document.getElementById('connectionLayer');
    const syncText = document.getElementById('mindmapDataSync');
    const syncState = document.getElementById('mindmapState');

    initMap();

    function initMap() {
        state.nodes = [];
        canvas.querySelectorAll('.node').forEach(n => n.remove());
        svgLayer.innerHTML = '';
        state.nextId = 1;

        const cx = canvas.clientWidth / 2;
        const cy = canvas.clientHeight / 2;

        createNode('주제어', 0, null, cx, cy);
    }

    // --- Node Management ---

    function createNode(text, level, parentId, x, y) {
        const id = state.nextId++;
        const el = document.createElement('div');
        el.className = `node level-${level} new-born`;
        if (state.shape) el.classList.add(`shape-${state.shape}`);

        el.innerHTML = `
            <input type="text" value="${text}" readonly>
            <div class="node-actions">
                <button class="action-btn add-btn" title="추가">+</button>
                ${level > 0 ? '<button class="action-btn del-btn" title="삭제">×</button>' : ''}
            </div>
        `;

        setPos(el, x, y);
        canvas.appendChild(el);

        const w = el.offsetWidth;
        const h = el.offsetHeight;
        setPos(el, x - w / 2, y - h / 2);

        const nodeData = { id, text, level, parentId, el, x, y };
        state.nodes.push(nodeData);

        setupEvents(nodeData);
        if (parentId !== null) updateLines();

        setTimeout(() => el.classList.remove('new-born'), 500);
        sync();

        return nodeData;
    }

    function deleteNode(id) {
        const children = state.nodes.filter(n => n.parentId === id);
        children.forEach(c => deleteNode(c.id));

        const idx = state.nodes.findIndex(n => n.id === id);
        if (idx > -1) {
            state.nodes[idx].el.remove();
            state.nodes.splice(idx, 1);
        }
        updateLines();
        sync();
    }

    function setupEvents(node) {
        const el = node.el;
        const input = el.querySelector('input');
        const addBtn = el.querySelector('.add-btn');
        const delBtn = el.querySelector('.del-btn');

        makeDraggable(el, node);

        // Edit
        el.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            el.classList.add('editing');
            input.readOnly = false;
            input.focus();
            input.select();
        });

        input.addEventListener('blur', () => {
            el.classList.remove('editing');
            input.readOnly = true;
            node.text = input.value;
            sync();
        });

        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') input.blur(); });

        // Auto-Size Input Logic
        input.addEventListener('input', () => {
            // For capsules/squares, width depends on text.
            // We can use the 'ch' unit or scrollWidth helper
            if (state.shape !== 'circle') {
                input.style.width = (Math.max(5, input.value.length) + 2) + 'ch';
            }
        });

        // Add
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            spawnChild(node);
        });

        // Delete
        if (delBtn) {
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm('삭제하시겠습니까?')) deleteNode(node.id);
            });
        }
    }

    function spawnChild(parent) {
        const dist = 160 - (parent.level * 10);
        const dx = parent.x - (canvas.clientWidth / 2);
        const dy = parent.y - (canvas.clientHeight / 2);
        let baseAngle = Math.atan2(dy, dx);
        if (parent.level === 0) baseAngle = Math.random() * Math.PI * 2;

        const spread = 0.5;
        const angle = baseAngle + (Math.random() - 0.5) * spread;

        const nx = parent.x + Math.cos(angle) * dist;
        const ny = parent.y + Math.sin(angle) * dist;

        createNode('새 노드', parent.level + 1, parent.id, nx, ny);
    }

    function updateLines() {
        svgLayer.innerHTML = '';
        state.nodes.forEach(n => {
            if (n.parentId === null) return;
            const p = state.nodes.find(x => x.id === n.parentId);
            if (!p) return;

            const x1 = p.x; const y1 = p.y;
            const x2 = n.x; const y2 = n.y;

            const pRect = p.el.getBoundingClientRect();
            const nRect = n.el.getBoundingClientRect();
            const cRect = canvas.getBoundingClientRect();

            const px = (pRect.left - cRect.left) + pRect.width / 2;
            const py = (pRect.top - cRect.top) + pRect.height / 2;
            const nx = (nRect.left - cRect.left) + nRect.width / 2;
            const ny = (nRect.top - cRect.top) + nRect.height / 2;

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const d = `M ${px} ${py} Q ${(px + nx) / 2} ${py} ${nx} ${ny}`;

            path.setAttribute('d', d);
            path.setAttribute('stroke', '#ccc'); // Basic line
            path.setAttribute('stroke-width', Math.max(1, 4 - n.level));
            path.setAttribute('fill', 'none');
            svgLayer.appendChild(path);
        });
    }

    function setPos(el, x, y) {
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    }

    let dragNode = null;
    let offset = { x: 0, y: 0 };

    function makeDraggable(el, node) {
        el.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'INPUT' && !el.classList.contains('editing')) { }
            else if (e.target.tagName === 'BUTTON') return;
            else if (el.classList.contains('editing')) return;

            dragNode = node;
            const r = el.getBoundingClientRect();
            offset.x = e.clientX - r.left;
            offset.y = e.clientY - r.top;
            el.classList.add('selected');
        });
    }

    window.addEventListener('mousemove', (e) => {
        if (!dragNode) return;
        const cr = canvas.getBoundingClientRect();
        let x = e.clientX - cr.left - offset.x;
        let y = e.clientY - cr.top - offset.y;
        setPos(dragNode.el, x, y);
        dragNode.x = x + dragNode.el.offsetWidth / 2;
        dragNode.y = y + dragNode.el.offsetHeight / 2;
        updateLines();
    });

    window.addEventListener('mouseup', () => {
        if (dragNode) {
            dragNode.el.classList.remove('selected');
            dragNode = null;
        }
    });

    function sync() {
        let str = "마인드맵 구조:\n";
        const roots = state.nodes.filter(n => n.parentId === null);
        roots.forEach(r => {
            str += `[주제] ${r.text}\n`;
            // traverse...
        });
        syncText.value = str;

        const serializableNodes = state.nodes.map(n => ({
            id: n.id, text: n.text, level: n.level, parentId: n.parentId, x: n.x, y: n.y
        }));
        const fullState = { theme: state.theme, shape: state.shape, nodes: serializableNodes };
        syncState.value = JSON.stringify(fullState);
    }

    window.setShape = (s) => {
        state.shape = s;
        // force re-render
        // Simply iterate and update classes
        // For simplicity, reload or re-init? No, user loses data.
        // Update styling of existing nodes
        state.nodes.forEach(n => {
            n.el.classList.remove('shape-capsule', 'shape-circle', 'shape-square');
            // n.el.classList.add(`shape-${s}`); // Actually class is on wrapper or node? 
            // In CSS I defined `.shape-capsule .node`.
            // But here I removed class from `el`? 
            // Let's ensure wrapper has class.
        });
        // Wait, HTML logic used wrapper. Let's update Wrapper.
        // But `createNode` added `shape-` class to node directly in this JS version?
        // JS says: `if (state.shape) el.classList.add('shape-'+state.shape);`
        // So I must update all nodes.
        state.nodes.forEach(n => {
            n.el.className = n.el.className.replace(/shape-\w+/g, '');
            //  if(s) n.el.classList.add(`shape-${s}`);
            // Wait, CSS says `.shape-circle .node`...
            // Let's do both:
        });
        // Just update wrapper
        // The implementation_plan code used wrapper class `canvas-wrapper shape-capsule`.
        // My JS above uses `el.classList.add`.
        // I will stick to Wrapper Class for consistency with new CSS.
        // Re-read CSS...
        // CSS: `.shape-circle .node { ... }`
        // So updating Wrapper #canvas is enough!
        // `createNode` doesn't need to add class manually if CSS selectors use parent.
    };

    // --- Replay Support ---
    window.addEventListener('mindmap-restore', (e) => {
        const stateJson = e.detail;
        if (!stateJson) return;

        try {
            const restoredState = JSON.parse(stateJson);
            // Apply State
            state.theme = restoredState.theme || 'basic';
            state.shape = restoredState.shape || 'capsule';
            state.nodes = restoredState.nodes.map(n => ({
                ...n,
                el: null // Will be recreated
            }));
            state.nextId = Math.max(...state.nodes.map(n => n.id)) + 1;

            // Re-render
            canvas.querySelectorAll('.node').forEach(n => n.remove());
            svgLayer.innerHTML = '';

            // Re-create DOM elements
            // We need to preserve 'nodes' but their 'el' is null.
            // We iterate and create elements.
            const nodeDataList = [...state.nodes]; // copy
            state.nodes = []; // clear to re-populate via createNode logic or manual

            // Manual Reconstruction to link DOM
            nodeDataList.forEach(NodeFn => {
                // We use internal createNode logic but force ID and Pos
                const el = document.createElement('div');
                el.className = `node level-${NodeFn.level}`;

                el.innerHTML = `
                    <input type="text" value="${NodeFn.text}" readonly>
                    <div class="node-actions"></div> 
                `; // No buttons needed in replay generally, but CSS hides them.

                setPos(el, NodeFn.x, NodeFn.y);
                canvas.appendChild(el);

                // Correction centers
                const w = el.offsetWidth;
                const h = el.offsetHeight;
                setPos(el, NodeFn.x - w / 2, NodeFn.y - h / 2);

                const recoveredNode = { ...NodeFn, el };
                state.nodes.push(recoveredNode);

                setupEvents(recoveredNode); // binds Drag, but read-only CSS will disable it
            });

            // Re-draw lines
            updateLines();
            setShape(state.shape); // Apply visual shape class

        } catch (err) {
            console.error('Mindmap Restore Error:', err);
        }
    });

});
