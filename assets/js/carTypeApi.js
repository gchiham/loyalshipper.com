$(document).ready(function() {
    // Add your API key below to test this code
    var apiToken = 'Vjcg1k6loyLgR9NGDn6kuiBJUGbIBOFA36iICttpJFaVgyyCxrsrFXCnb4lZ';

    // Get all years and update vehicle_year select box
    $.get("https://carmakemodeldb.com/api/v1/car-lists/get/years/asd" + "?api_token=" + apiToken,
      function(data) {
        var year = $('#vehicle_year');
        year.empty();
        year.append("<option value=''> Year</option>");
        $.each(data, function(index, element) {
          year.append("<option value='" + element.year + "'>" + element.year + "</option>");
        });
      }
    );



    

    // Get makes based on vehicle_year selected
    // Updated vehicleInfo div after year is selected
    $('#vehicle_year').change(function() {
      $.get("https://carmakemodeldb.com/api/v1/car-lists/get/all/makes"  + "?api_token=" + apiToken,
        function(data) {
          var make = $('#vehicle_make');
          make.empty();
          make.append("<option value=''>Brand</option>");
          $.each(data, function(index, element) {
            make.append("<option value='" + element.make + "'>" + element.make + "</option>");
          });
        }
      );
      $('#vehicleInfo').html('Year: <strong>' + $('#vehicle_year').val() + '</strong>');
    });

    // Get models based on vehicle_year and vehicle_make selection
    // Updated vehicleInfo div after make is selected
    $('#vehicle_make').change(function() {
      var vehYear = $('#vehicle_year').val();
      $.get("https://carmakemodeldb.com/api/v1/car-lists/get/models" + "/" + vehYear + "/" + $(this).val() + "?api_token=" + apiToken,
        function(data) {
          var model = $('#vehicle_model');
          model.empty();
          model.append("<option value=''>Model</option>");
          $.each(data, function(index, element) {
            model.append("<option value='" + element.model + "'>" + element.model + "</option>");
          });
        }
      );
      $('#vehicleInfo').html('Year: <strong>' + vehYear + '</strong><br>Make: <strong>' + $('#vehicle_make').val() + '</strong>');
    });

 

    // Updated vehicleInfo div after trim is selected
    $('#vehicle_trim').change(function() {
      $('#vehicleInfo').html('Year: <strong>' + $('#vehicle_year').val() + '</strong><br>Make: <strong>' + $('#vehicle_make').val() + '</strong><br>Model: <strong>' + $('#vehicle_model').val() + '</strong><br>Trim: <strong>' + $('#vehicle_trim').val() + '</strong>');
    });

    // Show loading gif after item is selected
    $(document).ajaxStart(function() {
      $('#loading').show();
    }).ajaxStop(function() {
      $('#loading').hide();
    });
  });