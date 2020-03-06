$(function () {
    country = $.url(location.href).param('country');

    if (country == 'IT') {
        es_selected = 'selected="selected"';
    } else {
        es_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="IT">Italy</option>');

/*
    selects.append('<option value="KZ" ' + kz_selected + '>Казахстан</option>');
   selects.append('<option value="UA" ' + ua_selected + '>Украина</option>');
*/
    // selects.append('<option value="MD" ' + md_selected + '>Молдова</option>');
    // selects.append('<option value="GE" ' + ge_selected + '>Грузия</option>');
//      selects.append('<option value="BY" ' + by_selected + '>Белоруссия</option>');
    // selects.append('<option value="AM" ' + am_selected + '>Армения</option>');
    // selects.append('<option value="AZ" ' + az_selected + '>Азербайджан</option>');
    // selects.append('<option value="KG" ' + kg_selected + '>Кыргызстан</option>');

    var change = 0,
        updatePrices = function (item) {
            change = 1;

            $(item.children).each(function () {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'unITfined') {
                sel = 'IT';
            }

            if (sel == 'IT') {
                $('.old_price_val').html('80');
                $('.old_price_cur').html('EUR');
                $('.old_price_sig').html('&#8381;');
                $('.new_price_val').html('39');
				$('.new_price_cur').html('EUR');
                $('.new_price_sig').html('&#8381;');
                $('[name=country]').val('IT').trigger('change');
       
            }

            change = 0;
        };
    $("select").change(function () {
        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask (mask) {
        $('[name=phone]').inputmask(mask);
	}
});