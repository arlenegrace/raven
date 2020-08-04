function open_filter() {
    const btn = document.getElementById('filter_btn');
    const sidebar = document.getElementById('sidebar');
    const gallery = document.getElementById('gallery');
    const opened = btn.classList.contains("open");
    btn.classList.toggle("open");

    if (opened) {
        //close
        sidebar.style.display = "none";
        gallery.style.display = "block";
    } else {
        //open
        sidebar.style.display = "block";
        gallery.style.display = "none";
    }
}

function pick_filter(x) {
    const filters = document.getElementsByClassName('filter');
    const activeFilter = document.getElementById('active_filter');

    if (this !== activeFilter) {
        return;
    }

    for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove("active_filter");
    }
    x.classList.add("active_filter");
}