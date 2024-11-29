$(document).ready(function () {
  const headings = {};
  const subheadings = {};
  const formInputs = {};

  $("#1").click(function (e) {
    e.preventDefault();
    var heading = $(".heading-inputt").val();
    if (heading) {
      headings[heading] = [];
      $("#values").append("<h2>" + heading + "</h2>");
      $(".heading-inputt").val("");
      $("#heading").modal("hide");
      $('.heading-select').append('<option>' + heading + '</option>');
     
    }
  });
  $("#2").click(function (e) {
    e.preventDefault();
    var subheading = $(".subheading-inputt").val();
    if (subheading) {
      subheadings[subheading] = [];
      $("#values").append("<h4>" + subheading + "</h4>");
      $(".subheading-inputt").val("");
      $("#subheading-modal").modal("hide");
      $('.subheading-select').append('<option>' + subheading + '</option>');
      console.log("hii");
    }
  });
  $("#3").click(function (e) {
    e.preventDefault();
    var name = $(".form-inputt-name").val();
    var label = $(".form-inputt-label").val();
    var cl = $(".form-inputt-class").val();
    var placeholder = $(".form-inputt-placeholder").val();
    var value = $(".form-inputt-value").val();
    var option = $(".form-inputt-option").val();
    var readonly = $(".form-inputt-readonly").val();
    var required = $(".form-inputt-required").val();
    var disabled = $(".form-inputt-disabled").val();
    $("#values").append("<option>" + name + "</option>");
    $("#values").append("<option>" + label + "</option>");
    $("#values").append("<option>" + cl + "</option>");
    $("#values").append("<option>" + placeholder + "</option>");
    $("#values").append("<option>" + value + "</option>");
    $("#values").append("<option>" + option + "</option>");
    $("#values").append("<option readonly>" + readonly + "</option>");
    $("#values").append("<option required>" + required + "</option>");
    $("#values").append("<option disabled>" + disabled + "</option>");
    $(".form-inputt-name").val("");
    $(".form-inputt-label").val("");
    $(".form-inputt-class").val("");
    $(".form-inputt-placeholder").val("");
    $(".form-inputt-value").val("");
    $(".form-inputt-option").val("");
    $(".form-inputt-readonly").val("");
    $(".form-inputt-disabled").val("");
    $(".form-inputt-required").val('');
    $("#form-modal").modal("hide");
    console.log("hello");
  });
});
