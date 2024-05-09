const btnOan = document.getElementById('btnOan');
const btnTuTi = document.getElementById('btnTuTi');
const kq = document.getElementById('kq');
btnOan.addEventListener('click', () => {
    playGame('oẳn');
});
btnTuTi.addEventListener('click', () => {
    playGame('tù tì');
});
function playGame(choice) {
    const choices = ['oẳn', 'tù tì'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = compareChoices(choice, computerChoice);
    kq.textContent = `Bạn chọn ${choice}, máy tính chọn ${computerChoice}. ${result}`;
}
function compareChoices(choice, computerChoice) {
    if (choice === computerChoice) {
        return 'Hòa';
    } else if (choice === 'oẳn' && computerChoice === 'tù tì') {
        return 'Bạn thắng';
    } else if (choice === 'tù tì' && computerChoice === 'oẳn') {
        return 'Bạn thua';
    } else {
        return 'Lỗi';
    }
}