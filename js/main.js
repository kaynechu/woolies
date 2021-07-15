var mainJS = {
    smoothAnchorScroll: function () {
        'use strict';
        $('a[href^="#"]').smoothScroll();
    }
};

$(function () {
    'use strict';
    mainJS.smoothAnchorScroll();
});
