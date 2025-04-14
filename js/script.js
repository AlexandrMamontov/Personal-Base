// document.addEventListener('DOMContentLoaded', function() {
//     const headerBlocks = document.querySelectorAll('.personal-base__block');
//     headerBlocks.forEach((headerBlock) => {
//         const headerBtn = headerBlock.querySelector('.personal-base__btn');
//         headerBtn.addEventListener('click', function() {
//             const value = headerBlock.dataset.column;
//             const cells = document.querySelectorAll(`.personal-base__cell[data-column="${value}"]`);
//             headerBtn.classList.toggle('active');
//             headerBlock.classList.toggle('active');
//             cells.forEach((cell) => {
//                 cell.classList.toggle('active');
//             });
//         })
//     })
// })