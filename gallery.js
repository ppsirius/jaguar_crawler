  $( document ).ready(function() {
  // var elements = $('.hero img');

  var elements = $('img');
  elements = elements.slice(0);
      var one_image = []
      var mobile_image = []
      var allImgArray = []
      var link_name = []
  for (var i = 0; i < elements.length; i++) {
      var links = $(elements.eq(i));
      var url = 'http://www.jaguar.co.uk/Images/'   

      function unique(list) {
        var result = [];
        $.each(list, function(i, e) {
            if ($.inArray(e, result) == -1) result.push(e);
        });
        return result;
      }
      
      if (links.data('mobile-src')) {
        var desktop_url_ver = links.data('desktop-src').slice(8);
        if(desktop_url_ver[desktop_url_ver.length - 2] === '=') {
          desktop_url_ver = desktop_url_ver.slice(0, -4);
        }
        link_name.push(desktop_url_ver);
        var desktop_url = url + desktop_url_ver;


        var tablet_url_ver = links.data('tablet-src').slice(8);
        if(tablet_url_ver[tablet_url_ver.length - 2] === '=') {
          tablet_url_ver = tablet_url_ver.slice(0, -4);
        }
        link_name.push(tablet_url_ver);
        var tablet_url = url + tablet_url_ver;
        
        var mobile_url_ver = links.data('mobile-src').slice(8);
        if(mobile_url_ver[mobile_url_ver.length - 2] === '=') {
          mobile_url_ver = mobile_url_ver.slice(0, -4);
        }
        link_name.push(mobile_url_ver);
        var mobile_url = url + mobile_url_ver;

        allImgArray.push(desktop_url);
        allImgArray.push(tablet_url);
        allImgArray.push(mobile_url);
      } else {
        var one_image_link = links.attr('src').slice(8);
        if(one_image_link[one_image_link.length - 2] === '=') {
          one_image_link = one_image_link.slice(0, -4);
        }
        link_name.push(one_image_link)
        one_image_link = url + one_image_link
        one_image.push(one_image_link);
        allImgArray.push(one_image_link);
      }      
  }
  allImgArray = unique(allImgArray);
  allImgArray = allImgArray.join('<br />');

  
  $( ".info" ).append( "<p style=\"font-size:3px; color:red;\">" + allImgArray + "</p>" );


  // counter , model, site rename


  var new_links = []
  var model = 'about_jaguar'
  var site = 'academy'
  var baner = ''
  var i = 0
  var counter = 0
  var last_link = ''

  while(i < link_name.length) {
    var current_link = link_name[i];
    if (current_link[current_link.length - 12] === '_') {
      var resolution = current_link.slice(-11);
    } else {
      var resolution = current_link.slice(-12);
    }
    if(current_link.slice(7,20) === last_link) {
      var new_link_string = model + '_' + site + '_' + baner + counter + '_' + resolution;
    } else {
      counter++;
      var new_link_string = model + '_' + site + '_' + baner + counter + '_' + resolution;
    }
    last_link = current_link.slice(7,20);
    new_links.push(new_link_string);
    i++;
  }

    var counter_mv = 0
    var mv_comends = ''
    while(counter_mv < link_name.length) {
      mv_comends = link_name[counter_mv] + ' ' + new_links[counter_mv];
      $( ".info" ).append( '<div style=\"font-size:3px\"> mv ' + mv_comends + ';</div>' );
      counter_mv++
    };
    

});



