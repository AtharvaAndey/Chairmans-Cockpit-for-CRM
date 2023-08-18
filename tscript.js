document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.project-checkbox');
    const rows = document.querySelectorAll('.project-row');
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const selectedProjects = Array.from(checkboxes)
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.value);
  
        rows.forEach(row => {
          if (selectedProjects.includes(row.getAttribute('data-project'))) {
            row.style.display = 'table-row';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  });
  
  window.onload = function chart1 () {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Balmoral Riverside"
      },
      axisX: {
        valueFormatString: "MMM"
      },
      axisY: {
        prefix: "$",
        labelFormatter: addSymbols
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        itemclick: toggleDataSeries
      },
      data: [
      {
        type: "column",
        name: "Demand",
        showInLegend: true,
        xValueFormatString: "MMMM YYYY",
        yValueFormatString: "$#,##0",
        dataPoints: [
          { x: new Date(2016, 0), y: 20000 },
          { x: new Date(2016, 1), y: 30000 },
          { x: new Date(2016, 2), y: 25000 },
          { x: new Date(2016, 3), y: 70000, indexLabel: "High Renewals" },
          { x: new Date(2016, 4), y: 50000 },
          { x: new Date(2016, 5), y: 35000 },
          { x: new Date(2016, 6), y: 30000 },
          { x: new Date(2016, 7), y: 43000 },
          { x: new Date(2016, 8), y: 35000 },
          { x: new Date(2016, 9), y:  30000},
          { x: new Date(2016, 10), y: 40000 },
          { x: new Date(2016, 11), y: 50000 }
        ]
      }, 
      {
        type: "line",
        name: "Outstanding",
        showInLegend: true,
        yValueFormatString: "$#,##0",
        dataPoints: [
          { x: new Date(2016, 0), y: 40000 },
          { x: new Date(2016, 1), y: 42000 },
          { x: new Date(2016, 2), y: 45000 },
          { x: new Date(2016, 3), y: 45000 },
          { x: new Date(2016, 4), y: 47000 },
          { x: new Date(2016, 5), y: 43000 },
          { x: new Date(2016, 6), y: 42000 },
          { x: new Date(2016, 7), y: 43000 },
          { x: new Date(2016, 8), y: 41000 },
          { x: new Date(2016, 9), y: 45000 },
          { x: new Date(2016, 10), y: 42000 },
          { x: new Date(2016, 11), y: 50000 }
        ]
      },
      {
        type: "line",
        name: "Promise to pay",
        showInLegend: true,
        yValueFormatString: "$#,##0",
        dataPoints: [
          { x: new Date(2016, 0), y: 4000 },
          { x: new Date(2016, 1), y: 4200 },
          { x: new Date(2016, 2), y: 4500 },
          { x: new Date(2016, 3), y: 45000 },
          { x: new Date(2016, 4), y: 4700 },
          { x: new Date(2016, 5), y: 43000 },
          { x: new Date(2016, 6), y: 4200 },
          { x: new Date(2016, 7), y: 4300 },
          { x: new Date(2016, 8), y: 41000 },
          { x: new Date(2016, 9), y: 45000 },
          { x: new Date(2016, 10), y: 42000 },
          { x: new Date(2016, 11), y: 50000 }
        ]
      },
      {
        type: "area",
        name: "Collections",
        markerBorderColor: "white",
        markerBorderThickness: 2,
        showInLegend: true,
        yValueFormatString: "$#,##0",
        dataPoints: [
          { x: new Date(2016, 0), y: 5000 },
          { x: new Date(2016, 1), y: 7000 },
          { x: new Date(2016, 2), y: 6000},
          { x: new Date(2016, 3), y: 30000 },
          { x: new Date(2016, 4), y: 20000 },
          { x: new Date(2016, 5), y: 15000 },
          { x: new Date(2016, 6), y: 13000 },
          { x: new Date(2016, 7), y: 20000 },
          { x: new Date(2016, 8), y: 15000 },
          { x: new Date(2016, 9), y:  10000},
          { x: new Date(2016, 10), y: 19000 },
          { x: new Date(2016, 11), y: 22000 }
        ]
      }]
    });
    chart.render();
    
    function addSymbols(e) {
      var suffixes = ["", "K", "M", "B"];
      var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
    
      if(order > suffixes.length - 1)                	
        order = suffixes.length - 1;
    
      var suffix = suffixes[order];      
      return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
    
    function toggleDataSeries(e) {
      if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      e.chart.render();
    }
    
    }
    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
    // window.onload = function chart2 () {

    //   var chart = new CanvasJS.Chart2("chartContainer2", {
    //     animationEnabled: true,
    //     theme: "light2",
    //     title: {
    //       text: "Balmoral Riverside"
    //     },
    //     axisX: {
    //       valueFormatString: "MMM"
    //     },
    //     axisY: {
    //       prefix: "$",
    //       labelFormatter: addSymbols
    //     },
    //     toolTip: {
    //       shared: true
    //     },
    //     legend: {
    //       cursor: "pointer",
    //       itemclick: toggleDataSeries
    //     },
    //     data: [
    //     {
    //       type: "column",
    //       name: "Demand",
    //       showInLegend: true,
    //       xValueFormatString: "MMMM YYYY",
    //       yValueFormatString: "$#,##0",
    //       dataPoints: [
    //         { x: new Date(2016, 0), y: 20000 },
    //         { x: new Date(2016, 1), y: 30000 },
    //         { x: new Date(2016, 2), y: 25000 },
    //         { x: new Date(2016, 3), y: 70000, indexLabel: "High Renewals" },
    //         { x: new Date(2016, 4), y: 50000 },
    //         { x: new Date(2016, 5), y: 35000 },
    //         { x: new Date(2016, 6), y: 30000 },
    //         { x: new Date(2016, 7), y: 43000 },
    //         { x: new Date(2016, 8), y: 35000 },
    //         { x: new Date(2016, 9), y:  30000},
    //         { x: new Date(2016, 10), y: 40000 },
    //         { x: new Date(2016, 11), y: 50000 }
    //       ]
    //     }, 
    //     {
    //       type: "line",
    //       name: "Outstanding",
    //       showInLegend: true,
    //       yValueFormatString: "$#,##0",
    //       dataPoints: [
    //         { x: new Date(2016, 0), y: 40000 },
    //         { x: new Date(2016, 1), y: 42000 },
    //         { x: new Date(2016, 2), y: 45000 },
    //         { x: new Date(2016, 3), y: 45000 },
    //         { x: new Date(2016, 4), y: 47000 },
    //         { x: new Date(2016, 5), y: 43000 },
    //         { x: new Date(2016, 6), y: 42000 },
    //         { x: new Date(2016, 7), y: 43000 },
    //         { x: new Date(2016, 8), y: 41000 },
    //         { x: new Date(2016, 9), y: 45000 },
    //         { x: new Date(2016, 10), y: 42000 },
    //         { x: new Date(2016, 11), y: 50000 }
    //       ]
    //     },
    //     {
    //       type: "line",
    //       name: "Promise to pay",
    //       showInLegend: true,
    //       yValueFormatString: "$#,##0",
    //       dataPoints: [
    //         { x: new Date(2016, 0), y: 4000 },
    //         { x: new Date(2016, 1), y: 4200 },
    //         { x: new Date(2016, 2), y: 4500 },
    //         { x: new Date(2016, 3), y: 45000 },
    //         { x: new Date(2016, 4), y: 4700 },
    //         { x: new Date(2016, 5), y: 43000 },
    //         { x: new Date(2016, 6), y: 4200 },
    //         { x: new Date(2016, 7), y: 4300 },
    //         { x: new Date(2016, 8), y: 41000 },
    //         { x: new Date(2016, 9), y: 45000 },
    //         { x: new Date(2016, 10), y: 42000 },
    //         { x: new Date(2016, 11), y: 50000 }
    //       ]
    //     },
    //     {
    //       type: "area",
    //       name: "Collections",
    //       markerBorderColor: "white",
    //       markerBorderThickness: 2,
    //       showInLegend: true,
    //       yValueFormatString: "$#,##0",
    //       dataPoints: [
    //         { x: new Date(2016, 0), y: 5000 },
    //         { x: new Date(2016, 1), y: 7000 },
    //         { x: new Date(2016, 2), y: 6000},
    //         { x: new Date(2016, 3), y: 30000 },
    //         { x: new Date(2016, 4), y: 20000 },
    //         { x: new Date(2016, 5), y: 15000 },
    //         { x: new Date(2016, 6), y: 13000 },
    //         { x: new Date(2016, 7), y: 20000 },
    //         { x: new Date(2016, 8), y: 15000 },
    //         { x: new Date(2016, 9), y:  10000},
    //         { x: new Date(2016, 10), y: 19000 },
    //         { x: new Date(2016, 11), y: 22000 }
    //       ]
    //     }]
    //   });
    //   chart.render();
      
    //   function addSymbols(e);
      
    //   function toggleDataSeries(e); 
    //   }