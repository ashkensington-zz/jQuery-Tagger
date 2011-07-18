/*jQuery Tagger
Description: A simple tag creator.
Author: Ashley Charlton
Website: http://ashleycharlton.com
Contact: ashcharlton@gmail.com
Version: 0.9
*/

(function($) {

    $.fn.tagger = function(options) {

        return this.each(function() {

            $(this).append('<label>Please enter a tag:</label><input type="text" id="input_text"/><div class="listOfTags"></div>');

            $('#input_text').keyup(function(e) {
                //alert(e.keyCode);
                if (e.keyCode == 13) {
                    var newTag = $(this).val();
                    if (newTag.trim() !== "") {
                        $('.listOfTags').append('<div class="tag">' + newTag.trim() + '<div class="removeTag">x</div></div>');
                        $(this).val('');
                    }

                }
            });

            $('.removeTag').live('click', function() {
                $(this).parent('div').remove();
            });
        });

    };
})(jQuery);
