document.addEventListener('DOMContentLoaded', function() {
    // кнопка раскрытия столбца
    const headerBlocks = document.querySelectorAll('.personal-base__block');
    headerBlocks.forEach((headerBlock) => {
        const headerBtn = headerBlock.querySelector('.personal-base__btn');
        headerBtn.addEventListener('click', function() {
            const value = headerBlock.dataset.column;
            const cells = document.querySelectorAll(`.personal-base__cell[data-column="${value}"]`);
            headerBtn.classList.toggle('active');
            headerBlock.classList.toggle('active');
            cells.forEach((cell) => {
                cell.classList.toggle('active');
            });
        })
    })

    // радиокнопки
    const radioButtons = document.querySelectorAll('.personal-base__radio');
    const table = document.querySelector('.personal-base__table');
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', function() {
            if (this.id === 'all-status') {
                table.classList.remove('work-status');
                table.classList.add('all-status');
            } else if (this.id === 'work-status') {
                table.classList.remove('all-status');
                table.classList.add('work-status');
            }
        })
    })
})