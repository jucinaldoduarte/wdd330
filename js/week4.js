const form = document.forms['search'];
const input = form.elements.searchInput;




input.addEventListener('focus', () => input.style.backgroundColor = "grey");
input.addEventListener('blur', () => input.style.backgroundColor = "white");
input.addEventListener('change', () => alert('changed'), false);






