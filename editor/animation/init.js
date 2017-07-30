//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190'],
    function (extIO, $) {
        
        var $tryit;

        var io = new extIO({
            functions: {
                python: 'double_substring',
                js: 'doubleSubstring'
            }
        });
        io.start();
    }
);
