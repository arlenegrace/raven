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