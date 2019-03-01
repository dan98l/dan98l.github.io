var avatarElem = document.getElementById('avatar');
// var avatarElem = document.getElementById('avatar').clientHeight;
// console.log(avatarElem);

alert( avatarElem.clientHeight );

// var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;
//
// window.onscroll = function() {
//     if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
//         avatarElem.classList.remove('fixed');
//     } else if (window.pageYOffset > avatarSourceBottom) {
//         avatarElem.classList.add('fixed');
//     }
// };