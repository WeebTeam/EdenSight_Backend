// shows back all the given data for health conditions, allergies and medication
function showEachHealth(item, className){
  var notObject = className;
    
  var className = $('<div />')
  className.css({
    'background-color': getRandomColor(),
    'border-color'    : getRandomColor(),
    'color'           : '#fff',
    'box-shadow'    : '0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2)',
    'border-radius'   : '.25rem',
    'font-weight'     : '700',
    'margin-bottom'   : '4px',
    'margin-right'  : '4px',
    'padding'     : '5px 10px',
    'width'     : 'auto',
    'display'     : 'inline-block'
  }).addClass(notObject)
  className.text(item)

  className.addClass('alert')

  $("#" + notObject).prepend(className)

  // Remove event from text input
  $('#new-' + notObject).val('')

  // Add button to each div
  var x = className.html();
  var y = '<button type="button" class="close closeDiv" data-dismiss="alert" aria-label="Close" style="color: white;" disabled><span aria-hidden="true">&times;</span></button>';

  // Add button to condition div
  className.html(x+y);
}


// function to trigger the event listeners
function allowAddingHealth(divClassName, className){
  var notObject = className;

  $('#add-' + divClassName).click(function (e) {
    e.preventDefault()
    // Get value and make sure it is not null
    var val = $('#' + divClassName).val()
    if (val.length == 0) {
      return
    }

    // Create events
    var className = $('<div />')
    className.css({
      'background-color': getRandomColor(),
      'border-color'    : getRandomColor(),
      'color'           : '#fff',
      'box-shadow'    : '0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2)',
      'border-radius'   : '.25rem',
      'font-weight'     : '700',
      'margin-bottom'   : '4px',
      'margin-right'  : '4px',
      'padding'     : '5px 10px',
      'width'     : 'auto',
      'display'     : 'inline-block'
    }).addClass(notObject)
    className.text(val)

    className.addClass('alert')

    className.addClass('col')

    $("#" + notObject).prepend(className)

    // Remove event from text input
    $("#" + divClassName).val('')

    var x = className.html();
    var y = '<button type="button" class="close closeDiv" data-dismiss="alert" aria-label="Close" style="color: white;"><span aria-hidden="true">&times;</span></button>';

    // Add button to className div
    className.html(x+y);

  })
}


// get data from each of the health divs and puts them into an array
function getEachHealth(variable){
  var array = [];

  variable.each(function()
  {
    var str = $(this).text();
    // to delete the x from button text
    array.push(str.substring(0, str.length-1));
  })

  return array;
}

// populate selection
function selection(i, id, resident_logbook_table) {
    var select = $('<select class="form-control"><option value=""></option></select>')
        .appendTo( $(id).empty() )
        .on( 'change', function () {
            resident_logbook_table.column(i)
                .search( $(this).val() )
                .draw();
        } );

    resident_logbook_table.column(i).data().unique().sort().each( function ( d, j ) {
        select.append( '<option value="'+d+'">'+d+'</option>' )
    } );
};


  //test forms and details for Residents and Staff
function testDetailsForms(){
  var resident = {_id: '101', name: 'lls', caretaker: 'pop', status: 'healthy', room: 'r2013', gender: 'Male', dob: '1999-05-14', ic: '1021345612', nationality: 'malaysian', pNum: '0178293647', guardian: 'hahayou', emergencyPNum: '0174837291', streetAdd: 'Lebuh blablabla', streetAdd2: 'Taman Rapat Indah', city: 'Ipoh', state: 'Perak', postal: '31350', weight: '45', height: '144', bloodType: 'A', healthConditions: ['123'], allergies: ['333','555'], medication: ['222', '777', 'smtg'], bpm: ['50'], sp02: ['90'], history: [{date: '14/6/1986', bpm: '55', sp02: '60'}]};
  var resident2 = {_id: '102', name: 'lls2', caretaker: 'pop2', status: 'not healthy', room: 'r2015', gender: 'Female', dob: '1988-05-14', ic: '0178293647', nationality: 'malaysian', pNum: '1021345612', guardian: 'hahayou2', emergencyPNum: '0174837291', streetAdd: 'Lebuh blablabla', streetAdd2: 'Taman Rapat Indah', city: 'Ipoh', state: 'Perak', postal: '31350', weight: '45', height: '144', bloodType: 'O', healthConditions: ['321'], allergies: ['222','777'], medication: ['223332', '733377', 'smtg'], bpm: ['60'], sp02: ['95'], history: [{date: '1999-05-14', bpm: '55', sp02: '60'}, {date: '1999-05-15', bpm: '58', sp02: '90'}]};


  var residents = [resident, resident2];


  residents_table.clear();
  residents_table.rows.add(residents);
  residents_table.draw();
}


//test all data submitted
function testSubmittedData(){
  console.log($("#residentWeight").val());
  console.log($("#residentHeight").val());
  console.log($('#residentBloodType').val());

  var healthConditions = [];
  var allergies = [];
  var medications = [];

  healthConditions = getEachHealth($('.healthConditions'));
  allergies = getEachHealth($('.allergies'));
  medications = getEachHealth($('.medication'));

  console.log("ID"+ $("#residentID").val());

  console.log(getEachHealth($('.healthConditions')));
  console.log(getEachHealth($('.allergies')));
  console.log(getEachHealth($('.medication')));
}

//test all data submitted
function testSubmittedDataAdminResident(){
  console.log($("#newResidentName").val());
  console.log($('#newResidentCaretaker').val());
  console.log($("#newResidentRoom").val());
  console.log($('#newResidentGender').val());
  console.log($("#newResidentDOB").val());
  console.log($('#newResidentIC').val());
  console.log($("#newResidentNationality").val());
  console.log($("#newResidentWeight").val());
  console.log($("#newResidentHeight").val());
  console.log($('#newResidentBloodType').val());
  console.log($("#newResidentPNum").val());
  console.log($("#newResidentGuardian").val());
  console.log($("#newresidentEmergencyPNum").val());
  console.log($('#newResidentStreetAddress').val());
  console.log($("#newResidentStreetAddress2").val());
  console.log($("#newResidentCity").val());
  console.log($("#newResidentState").val());
  console.log($('#newResidentPostal').val());

  console.log(getEachHealth($('.healthConditions-new')));
  console.log(getEachHealth($('.allergies-new')));
  console.log(getEachHealth($('.medication-new')));
}

  // //Enables textboxes when checkbox is clicked and vise versa
  // $(function () {
  //       $("#residentOtherDrugAllergiesChkbox").click(function () {
  //           if ($(this).is(":checked")) {
  //               $("#residentOtherDrugAllergies").removeAttr("disabled");
  //               $("#residentOtherDrugAllergies").focus();
  //           } else {
  //               $("#residentOtherDrugAllergies").attr("disabled", "disabled");
  //           }
  //       });
  // });