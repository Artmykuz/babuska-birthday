document.body.onload = function() {

    setTimeout(function() {
        var preloared = document.getElementById('page-preloader');
        var tortYarus1 = document.getElementById('tort-yarus1');
        var tortYarus2 = document.getElementById('tort-yarus2');
        var tortYarus3 = document.getElementById('tort-yarus3');
        var tortYarus4 = document.getElementById('tort-yarus4');
        var tortYarus5 = document.getElementById('tort-yarus5');
        var tortYarus6 = document.getElementById('tort-yarus6');
        var balloonsWrapper = document.getElementById('balloons-wrapper');
        var title = document.getElementById('title');
        var a = document.getElementById('a');

        if( !preloared.classList.contains('done')) {
            preloared.classList.add('done'),
            tortYarus1.classList.add('go')
            tortYarus2.classList.add('go')
            tortYarus3.classList.add('go')
            tortYarus4.classList.add('go')
            tortYarus5.classList.add('go')
            tortYarus6.classList.add('go')
            balloonsWrapper.classList.add('go')
            title.classList.add('go')
            a.classList.add('go')
        }
    }, 1000)
}