angular.module('Confable').run(['$templateCache', function($templateCache) {
    $templateCache.put('home.html',
        "<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\"><img src=\"/images/logo.png\" /></a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul id=\"email\" class=\"nav navbar-nav navbar-right\">\n                <div id=\"mc_embed_signup\">\n                    <form action=\"//appdiem.us2.list-manage.com/subscribe/post?u=de477380c709953963263d7d6&amp;id=633e212f50\" \n                        method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" \n                        class=\"validate navbar-form navbar-left\" target=\"_blank\" novalidate>\n                        <div id=\"mc_embed_signup_scroll\">\n                            <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"email form-control\" id=\"mce-EMAIL\" placeholder=\"email address\" required>\n                            <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_de477380c709953963263d7d6_633e212f50\" tabindex=\"-1\" value=\"\"></div>\n                            <input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button btn btn-alert\">\n                        </div>\n                    </form>\n                </div>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div id=\"teaser\">\n    <div class=\"container\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <div text-center>\n                <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2\">\n                    <!--h1>Beautiful, scalable, managed websites exclusively for conferences.</h1-->\n                    <h1>Powerful tools to build robust conference websites</h1>\n                </div>\n            </div>\n            <div class=\"col-lg-12 text-center\">\n                <img src=\"/images/confable_logo_01.png\" />\n            </div>\n        </div>\n    </div>\n</div>\n<footer>\n    <div class=\"container\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right\">\n            <a href=\"https://assembly.com/confable\">\n                <img src=\"https://treasure.assembly.com/assets/badges/flag_text-6cfc91728f9f0090d1688e4f0d41a639.svg\" width=243px height=41px />\n            </a>\n        </div>\n    </div>\n</footer>\n");
}]);