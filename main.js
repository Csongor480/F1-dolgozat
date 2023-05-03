$(document).ready(function () {
  $('.navbar-nav li').click(function (x) {
    $('.navbar-nav li').removeClass('active');
    $(event.target).parent().addClass('active');
  });
});

function showCircuit() {
    $('#circuit').change(function (o) {
      switch (o.target.value) {
        case 'ITA':
          $('#circuitimage').attr('src', 'img/monza.jpg');
          $('#f1sound')[0].play();
          break;
        case 'HUN':
          $('#circuitimage').attr('src', 'img/hungaroring.jpg');
          break;
        case 'BEL':
          $('#circuitimage').attr('src', 'img/spa.jpg');
          break;
        case 'MON':
          $('#circuitimage').attr('src', 'img/monaco.jpg');
          break;

        default:
          break;
      }
    });
  }

//---------------------------------------------------------

function calculate() {
    let laptime = document.getElementById("laptime").value / 3600
    let palya = document.getElementById("circuit").value
    let palyaHossz;
    switch (palya) {
      case "HUN":
        palyaHossz = 4.381;
        break;
      case "MON":
          palyaHossz =  3.337;
          break;
      case "BEL":
        palyaHossz = 7.004;
        break;
      case "ITA":
        palyaHossz = 5.793;
        break;
      default:
        break;
    }
    document.getElementById("averagespeed").value = palyaHossz/ laptime
  }
