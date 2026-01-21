const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');
const wordListElement = document.getElementById('word-list');
const startBtn = document.getElementById('start-btn');

context.scale(20, 20);

const startWords = ["어린 왕자", "해리 포터", "이상한 나라의 앨리스", "피터 팬", "강아지 똥", "마당을 나온 암탉", "구름빵", "장화 신은 고양이", "오즈의 마법사", "비밀의 화원", "샬롯의 거미줄", "아낌없이 주는 나무", "몽실 언니", "나의 라임 오렌지 나무", "걸리버 여행기"];
let collectedWords = [];

// Tetromino definitions
const pieces = 'ILJOTSZ';
const colors = [
    null,
    '#FF6B6B', // Red
    '#4ECDC4', // Teal
    '#45B7D1', // Blue
    '#96CEB4', // Green
    '#FFEEAD', // Yellow
    '#D4A5A5', // Pink
    '#9B59B6', // Purple
];

function createPiece(type) {
    if (type === 'I') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    } else if (type === 'L') {
        return [
            [0, 2, 0],
            [0, 2, 0],
            [0, 2, 2],
        ];
    } else if (type === 'J') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ];
    } else if (type === 'O') {
        return [
            [4, 4],
            [4, 4],
        ];
    } else if (type === 'Z') {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    } else if (type === 'T') {
        return [
            [0, 7, 0],
            [7, 7, 7],
            [0, 0, 0],
        ];
    }
}

function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

const arena = createMatrix(12, 20);

// Player setup
const player = {
    pos: { x: 0, y: 0 },
    matrix: null,
    score: 0,
    level: 1,
};

function collide(arena, player) {
    const [m, o] = [player.matrix, player.pos];
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
                (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);

                // Add a "book spine" effect
                context.lineWidth = 0.05;
                context.strokeStyle = 'white';
                context.strokeRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

function draw() {
    context.fillStyle = '#f0f3f5';
    context.fillRect(0, 0, canvas.width, canvas.height); // Clear

    drawMatrix(arena, { x: 0, y: 0 });
    drawMatrix(player.matrix, player.pos);
}


function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                    matrix[y][x],
                    matrix[x][y],
                ];
        }
    }

    if (dir > 0) {
        matrix.forEach(row => row.reverse());
    } else {
        matrix.reverse();
    }
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
    }
    dropCounter = 0;
}

function playerMove(dir) {
    player.pos.x += dir;
    if (collide(arena, player)) {
        player.pos.x -= dir;
    }
}

function playerReset() {
    const piecesStr = 'ILJOTSZ';
    player.matrix = createPiece(piecesStr[piecesStr.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) -
        (player.matrix[0].length / 2 | 0);

    if (collide(arena, player)) {
        arena.forEach(row => row.fill(0));
        player.score = 0;
        player.level = 1;
        updateScore();
        collectedWords = [];
        renderWords();
        alert("게임 오버! 다시 시작합니다.");
    }
}

function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

function arenaSweep() {
    let rowCount = 0;
    outer: for (let y = arena.length - 1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) {
                continue outer;
            }
        }

        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;
        rowCount++;
    }

    if (rowCount > 0) {
        player.score += rowCount * 10;
        player.level = Math.floor(player.score / 50) + 1;

        // Add random word
        const randomWord = startWords[Math.floor(Math.random() * startWords.length)];
        collectedWords.push(randomWord);
        renderWords();
    }
}

function renderWords() {
    wordListElement.innerHTML = '';
    collectedWords.forEach(word => {
        const span = document.createElement('span');
        span.className = 'word-tag';
        span.textContent = word;
        wordListElement.appendChild(span);
    });
}

function updateScore() {
    scoreElement.innerText = player.score;
    levelElement.innerText = player.level;
}

let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;

function update(time = 0) {
    if (!isPlaying) return;

    const deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime;
    // Speed up as level increases
    let currentSpeed = Math.max(100, 1000 - (player.level * 100));

    if (dropCounter > currentSpeed) {
        playerDrop();
    }

    draw();
    requestAnimationFrame(update);
}

let isPlaying = false;

document.addEventListener('keydown', event => {
    if (!isPlaying) return;

    if (event.keyCode === 37) { // Left
        playerMove(-1);
    } else if (event.keyCode === 39) { // Right
        playerMove(1);
    } else if (event.keyCode === 40) { // Down
        playerDrop();
    } else if (event.keyCode === 38) { // Up
        playerRotate(1);
    }
});

startBtn.addEventListener('click', () => {
    if (isPlaying) {
        isPlaying = false;
        startBtn.textContent = "게임 시작";
    } else {
        arena.forEach(row => row.fill(0));
        player.score = 0;
        collectedWords = [];
        renderWords();
        updateScore();
        playerReset();
        isPlaying = true;
        startBtn.textContent = "일시 정지";
        update();
    }
});

// Initial draw (empty)
context.fillStyle = '#f0f3f5';
context.fillRect(0, 0, canvas.width, canvas.height);
