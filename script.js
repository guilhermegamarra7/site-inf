function toggleTheme() {
            document.body.classList.toggle('dark-mode');
        }


        function expandAll() {
            document.querySelectorAll('.curriculum-tree details').forEach(el => el.setAttribute('open', 'true'));
        }
        function collapseAll() {
            document.querySelectorAll('.curriculum-tree details').forEach(el => el.removeAttribute('open'));
        }


        function runCode() {
            const consoleDiv = document.getElementById('consoleOutput');
            const runBtn = document.getElementById('runBtn');
            const mainContent = document.getElementById('main-content');
            const runHint = document.getElementById('runHint');


            if (mainContent.classList.contains('content-visible')) {
                consoleDiv.classList.toggle('visible');
                return;
            }


            runBtn.innerText = "Compilando...";
            runBtn.classList.add("loading");
            runBtn.disabled = true;

            setTimeout(() => {
                consoleDiv.classList.add('visible');
                
                if(runHint) runHint.style.display = 'none';

                runBtn.innerText = "Re-Run";
                runBtn.classList.remove("loading");
                runBtn.disabled = false;

                mainContent.classList.remove('content-locked');
                mainContent.classList.add('content-visible');


                localStorage.setItem('hacker_boot_done', 'true');

                setTimeout(() => {
                    mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 250);

            }, 250);
        }


        document.addEventListener('DOMContentLoaded', () => {
            if (localStorage.getItem('hacker_boot_done') === 'true') {
                const mainContent = document.getElementById('main-content');
                const consoleDiv = document.getElementById('consoleOutput');
                const runBtn = document.getElementById('runBtn');
                const runHint = document.getElementById('runHint');

                mainContent.classList.remove('content-locked');
                mainContent.classList.add('content-visible');
                
                if(runHint) runHint.style.display = 'none';
                consoleDiv.classList.add('visible');
                runBtn.innerText = "Re-Run";
            }
        });


        const relations = {
            'ALP':      { prereqs: [], unlocks: ['ED', 'TCP', 'Arq', 'VerifTeste', 'CalcNum', 'Seg'] },
            'Calc1':    { prereqs: [], unlocks: ['Calc2', 'ProbEst', 'PAA1', 'AlgLin'] },
            'IntroCIC': { prereqs: [], unlocks: ['Arq', 'ProjCI'] },
            'Logica':   { prereqs: [], unlocks: ['MatDisc', 'TeoComp1', 'CDNovo', 'VerifTeste'] },
            'PC':       { prereqs: [], unlocks: ['ED'] },
            
            'Arq':      { prereqs: ['IntroCIC', 'CDNovo', 'ALP'], unlocks: ['CDNovo', 'SisOp', 'Redes', 'LP2'] },
            'Calc2':    { prereqs: ['Calc1'], unlocks: ['CGVis', 'ML', 'PIVC', 'CalcNum', 'AlgLin'] },
            'ED':       { prereqs: ['ALP', 'PC'], unlocks: ['BD', 'PAA1', 'TCP', 'CGVis', 'SisOp', 'LP1', 'ML', 'PIVC', 'IA'] },
            'MatDisc':  { prereqs: [], unlocks: ['PAA1', 'TeoComp1', 'Seg'] },
            'ProbEst':  { prereqs: ['Calc1'], unlocks: ['IA', 'ProjCI', 'ML', 'Seg', 'PIVC'] },
            'VerifTeste': { prereqs: ['ALP', 'Logica'], unlocks: ['ES'] },

            'BD':       { prereqs: ['ED'], unlocks: ['ProjInt'] },
            'TCP':      { prereqs: ['ED'], unlocks: ['ES', 'IHC', 'ProjCI'] },
            'CDNovo':   { prereqs: ['Arq'], unlocks: ['OrgComp'] },
            'PAA1':     { prereqs: ['ED', 'MatDisc', 'Calc1'], unlocks: ['PAA2', 'IA', 'ProjCI', 'PAA3'] },
            'TeoComp1': { prereqs: ['Logica', 'MatDisc'], unlocks: ['TeoComp2', 'LP1'] },

            'ES':       { prereqs: ['TCP'], unlocks: ['ProjInt'] },
            'IHC':      { prereqs: ['TCP'], unlocks: [] },
            'OrgComp':  { prereqs: ['CDNovo'], unlocks: ['Redes'] },
            'PAA2':     { prereqs: ['PAA1'], unlocks: ['PAA3'] },
            'TeoComp2': { prereqs: ['TeoComp1'], unlocks: ['PAA3'] },
            'AlgLin':   { prereqs: ['Calc1'], unlocks: ['CGVis', 'CalcNum', 'ML', 'PIVC', 'PAA3'] },

            'CGVis':    { prereqs: ['AlgLin', 'ED', 'Calc2'], unlocks: [] },
            'CalcNum':  { prereqs: ['ALP', 'AlgLin'], unlocks: [] },
            'IA':       { prereqs: ['ProbEst', 'PAA1'], unlocks: ['PLN'] },
            'SisOp':    { prereqs: ['Arq', 'ED'], unlocks: ['ProgPar', 'SDTF'] },
            'ProjCI':   { prereqs: ['IntroCIC', 'PAA1', 'ProbEst', 'TCP'], unlocks: ['ProjInt', 'TCC'] },

            'ML':       { prereqs: ['IA', 'ProbEst', 'AlgLin', 'Calc2', 'ED'], unlocks: ['PLN'] },
            'LP1':      { prereqs: ['ED', 'TeoComp1'], unlocks: ['LP2'] },
            'PIVC':     { prereqs: ['AlgLin', 'Calc2', 'ED'], unlocks: [] },
            'ProgPar':  { prereqs: ['SisOp'], unlocks: [] },
            'Redes':    { prereqs: ['Arq'], unlocks: ['Seg', 'SDTF'] },

            'Seg':      { prereqs: ['ALP', 'MatDisc', 'ProbEst'], unlocks: [] },
            'LP2':      { prereqs: ['LP1', 'Arq'], unlocks: [] },
            'PAA3':     { prereqs: ['PAA1', 'AlgLin', 'TeoComp2'], unlocks: [] },
            'PLN':      { prereqs: ['ML'], unlocks: [] },
            'SDTF':     { prereqs: ['SisOp'], unlocks: [] },

            'ProjInt':  { prereqs: ['ProjCI'], unlocks: ['TCC'] },
            'TCC':      { prereqs: ['ProjInt'], unlocks: [] }
        };

        function resetVisualization() {
            document.querySelectorAll('.subject-item').forEach(el => {
                el.classList.remove('is-selected', 'is-prereq', 'is-unlock', 'highlighted');
                el.style.opacity = '1';
            });
        }

        document.querySelectorAll('.subject-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();

                if (this.classList.contains('is-selected')) {
                    resetVisualization();
                } else {
                    const code = this.getAttribute('data-code');
                    showDependencies(code);
                }
            });
        });

        function showDependencies(selectedCode) {
            document.querySelectorAll('.subject-item').forEach(el => {
                el.classList.remove('is-selected', 'is-prereq', 'is-unlock', 'highlighted');
                el.style.opacity = '0.3';
            });

            document.body.classList.remove('roadmap-active');
            document.querySelectorAll('.btn-roadmap').forEach(b => b.classList.remove('active'));

            const data = relations[selectedCode] || { prereqs: [], unlocks: [] };

            const selectedEl = document.querySelector(`.subject-item[data-code="${selectedCode}"]`);
            if (selectedEl) {
                selectedEl.classList.add('is-selected');
                selectedEl.style.opacity = '1';
            }

            data.prereqs.forEach(code => {
                const el = document.querySelector(`.subject-item[data-code="${code}"]`);
                if (el) {
                    el.classList.add('is-prereq');
                    el.style.opacity = '1';
                    const parent = el.closest('details');
                    if(parent) parent.setAttribute('open', 'true');
                }
            });

            data.unlocks.forEach(code => {
                const el = document.querySelector(`.subject-item[data-code="${code}"]`);
                if (el) {
                    el.classList.add('is-unlock');
                    el.style.opacity = '1';
                    const parent = el.closest('details');
                    if(parent) parent.setAttribute('open', 'true');
                }
            });
        }

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.subject-item') && !e.target.closest('.btn-roadmap')) {
                resetVisualization();
            }
        });

        const roadmaps = {
            'game': ['ALP', 'Calc1', 'Calc2', 'AlgLin', 'ED', 'CGVis', 'IA', 'PIVC', 'ProgPar'],
            'ai': ['Calc1', 'Calc2', 'AlgLin', 'ProbEst', 'CalcNum', 'IA', 'ML', 'PLN'],
            'cyber': ['Arq', 'OrgComp', 'SisOp', 'Redes', 'Seg', 'SDTF', 'MatDisc'],
            'system': ['BD', 'TCP', 'ES', 'PAA1', 'PAA2', 'LP1', 'LP2', 'SDTF']
        };

        let activeRoadmap = null;

        function toggleRoadmap(type, btnElement) {
            const body = document.body;
            const allItems = document.querySelectorAll('.subject-item');
            const allButtons = document.querySelectorAll('.btn-roadmap');

            if (activeRoadmap === type) {
                activeRoadmap = null;
                body.classList.remove('roadmap-active');
                allItems.forEach(item => item.classList.remove('highlighted'));
                allButtons.forEach(btn => btn.classList.remove('active'));
                collapseAll();
                resetVisualization();
                return;
            }

            resetVisualization();
            activeRoadmap = type;
            body.classList.add('roadmap-active');
            allButtons.forEach(btn => btn.classList.remove('active'));
            btnElement.classList.add('active');
            collapseAll();

            const targetCodes = roadmaps[type];

            allItems.forEach(item => {
                const code = item.getAttribute('data-code');
                if (targetCodes.includes(code)) {
                    item.classList.add('highlighted');
                    const parentDetails = item.closest('details');
                    if (parentDetails) parentDetails.setAttribute('open', 'true');
                } else {
                    item.classList.remove('highlighted');
                }
            });
        }

        const windows = document.querySelectorAll('.draggable-window');
        let isDragging = false, currentWindow = null, startX, startY, initialX, initialY;
        
        windows.forEach(win => {
            const header = win.querySelector('.window-header');
            if(!header) return;
            const startDrag = (e) => {
                if(e.target.tagName.toLowerCase() === 'button') return;
                isDragging = true; currentWindow = win;
                windows.forEach(w => w.style.zIndex = "10"); win.style.zIndex = "1000";
                
                const style = window.getComputedStyle(win); 
                const matrix = new WebKitCSSMatrix(style.transform);
                initialX = matrix.m41; initialY = matrix.m42;
                
                const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
                const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
                startX = clientX; startY = clientY;
                win.classList.add('dragging');
            };
            header.addEventListener('mousedown', startDrag); 
            header.addEventListener('touchstart', startDrag, {passive: false});
        });
        
        const onMove = (e) => {
            if (!isDragging || !currentWindow) return;
            e.preventDefault();
            const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
            const dx = clientX - startX; const dy = clientY - startY;
            currentWindow.style.transform = `translate(${initialX + dx}px, ${initialY + dy}px)`;
        };
        
        const onEnd = () => { 
            isDragging = false; 
            if (currentWindow) { currentWindow.classList.remove('dragging'); currentWindow = null; } 
        };
        
        document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onEnd);
        document.addEventListener('touchmove', onMove, {passive: false}); document.addEventListener('touchend', onEnd);