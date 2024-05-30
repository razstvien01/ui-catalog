document.addEventListener("DOMContentLoaded", function () {
  fetch('/components/sidebar.html')
    .then(response => response.text())
    .then(data => {
      var sidebarPlaceholder = document.getElementById('sidebar-placeholder')
      sidebarPlaceholder.innerHTML = data;
      sidebarPlaceholder.querySelector('#sidebar-toggle')
        .addEventListener('click', e => {
          var sidebar = sidebarPlaceholder.querySelector('#sidebar')
          sidebar.style.display == 'none' ?
            sidebar.style.display = 'block' :
            sidebar.style.display = 'none'
        })
    });
});
