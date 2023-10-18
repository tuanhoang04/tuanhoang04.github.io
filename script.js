// document.addEventListener("DOMContentLoaded", function() {
//     const items = document.querySelectorAll('.accordion-item');

//     // Initially display the first content
//     const firstItem = items[0];
//     const firstContent = firstItem.querySelector('.content');
//     firstContent.style.display = 'block';

//     items.forEach(item => {
//         const title = item.querySelector('.title');
//         title.addEventListener('click', () => {
//             items.forEach(otherItem => {
//                 if (otherItem !== item) {
//                     otherItem.querySelector('.content').style.display = 'none';
//                 }
//             });
//             const content = item.querySelector('.content');
//             content.style.display = content.style.display === 'none' ? 'block' : 'none';
//         });
//     });
// });