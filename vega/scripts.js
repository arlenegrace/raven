function open_img(img) {
    const fs = document.getElementById('fullscreen_container');
    fs.style.display = "block";
    document.getElementById('fullscreen_img').src=`../images/gallery/${img}.JPG`;
}

function close_img() {
    const fs = document.getElementById('fullscreen_container');
    fs.style.display = "none";
}

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
    
    console.log('filter');
}