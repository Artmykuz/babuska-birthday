document.body.onload = function() {

    setTimeout(function() {
        var preloared = document.getElementById('page-preloader');
        if( !preloared.classList.contains('done')) {
            preloared.classList.add('done');
        }
    }, 1000)
}