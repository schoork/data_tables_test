require('datatables.net-bs4')
import $ from 'jquery';
global.$ = jQuery;

$(document).ready( function () {
  $("#myTable").DataTable()
})
