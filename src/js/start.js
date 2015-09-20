define(['jquery',
        'handlebars',
        'text!faostat_ui_standards_methodology/html/templates.hbs',
        'i18n!faostat_ui_standards_methodology/nls/translate',
        'faostat_commons',
        'wds_client',
        'bootstrap',
        'sweetAlert',
        'amplify'], function ($, Handlebars, templates, translate, FAOSTATCommons, WDSClient) {

    'use strict';

    function METHODOLOGY() {

        this.CONFIG = {

            w: null,
            lang: 'E',
            prefix: 'faostat_ui_standards_methodology_',
            placeholder_id: 'faostat_ui_standards_methodology',
            url_wds_crud: 'http://fenixapps2.fao.org/wds_5.1/rest/crud'

        };

    }

    METHODOLOGY.prototype.init = function(config) {

        /* Variables. */
         var source, template, dynamic_data, html;

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'en';

        /* Store FAOSTAT language. */
        this.CONFIG.lang_faostat = FAOSTATCommons.iso2faostat(this.CONFIG.lang);

        /* Load main structure. */
        source = $(templates).filter('#faostat_ui_standards_methodology_structure').html();
        template = Handlebars.compile(source);
        dynamic_data = {

        };
        html = template(dynamic_data);
        $('#' + this.CONFIG.placeholder_id).html(html);

    };

    METHODOLOGY.prototype.destroy = function() {

    };

    return METHODOLOGY;

});