
$(document).ready(function() {
    let blue = '48bcff';
    let yellow = 'd2c13a';
    let red = '952C06';
    let dark = '040427';
    let scroll_pos = 0;
    let index_yellow_start = 100;
    let index_yellow_end = 150;
    let index_red = 400;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("#sky").removeClass("sky-animation");
        }
        if (scroll_pos >= 0 && scroll_pos < index_yellow_start) {
            $("#sky").css("background", gradient(yellow, blue, scroll_pos / index_yellow_start));
        }
        if (scroll_pos >= index_yellow_end && scroll_pos < index_red) {
            $("#sky").css("background", gradient(red, yellow, (scroll_pos - index_yellow_end) / index_red ));
        }
        if (scroll_pos >= index_red) {
            $("#sky").css("background", '#' + red);
        }
    });
});


function gradient(color1, color2, ratio) {
    let hex = function(x) {
        x = x.toString(16);
        return (x.length == 1) ? '0' + x : x;
    };

    let r = Math.ceil(parseInt(color1.substring(0,2), 16) * ratio + parseInt(color2.substring(0,2), 16) * (1-ratio));
    let g = Math.ceil(parseInt(color1.substring(2,4), 16) * ratio + parseInt(color2.substring(2,4), 16) * (1-ratio));
    let b = Math.ceil(parseInt(color1.substring(4,6), 16) * ratio + parseInt(color2.substring(4,6), 16) * (1-ratio));

    return '#' + hex(r) + hex(g) + hex(b);

}
