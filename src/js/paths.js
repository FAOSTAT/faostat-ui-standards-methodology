define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_STANDARDS_METHODOLOGY: 'start',
            faostat_ui_standards_methodology: '../../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});