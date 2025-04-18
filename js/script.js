document.addEventListener('DOMContentLoaded', function() {
    // Alex кнопки раскрытия столбцов
    const headerBlocks = document.querySelectorAll('.personal-base__block');
    headerBlocks.forEach((headerBlock) => {
        const headerBtn = headerBlock.querySelector('.personal-base__btn');
        // Alex при клике на кнопку разворачивается/сворачивается соответсвтующий столбец
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

    // Alex радиокнопки
    const radioButtons = document.querySelectorAll('.personal-base__radio');
    const table = document.querySelector('.personal-base__table');
    const headerBtns = document.querySelectorAll('.personal-base__btn');
    const cells2 = document.querySelectorAll('.personal-base__cell');
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', function() {
            // Alex при клике на "все статусы" отображаются все столбцы, при этом все столбцы будут в свёрнутом виде
            if (this.id === 'all-status') {
                table.classList.remove('work-status');
                table.classList.add('all-status');
                headerBlocks.forEach((headerBlock) => {
                    headerBlock.classList.remove('active');
                });
                cells2.forEach((cell) => {
                    cell.classList.remove('active');
                });
                headerBtns.forEach((headerBtn) => {
                    headerBtn.classList.remove('active');
                });
            } else if (this.id === 'work-status') {
                // Alex при клике на "рабочие статусы" отображаются только последние 4 столбца, при этом все они будут в развёрнутом виде
                table.classList.remove('all-status');
                table.classList.add('work-status');
                headerBlocks.forEach((headerBlock) => {
                    headerBlock.classList.add('active');
                });
                cells2.forEach((cell) => {
                    cell.classList.add('active');
                });
                headerBtns.forEach((headerBtn) => {
                    headerBtn.classList.add('active');
                });
            }
        })
    })
})