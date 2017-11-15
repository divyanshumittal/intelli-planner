/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('ScalaApp.pages.charts.amCharts')
      .controller('PieChartCtrl', PieChartCtrl);

  /** @ngInject */
  function PieChartCtrl($element, layoutPaths, baConfig) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var pieChart = AmCharts.makeChart(id, {
      type: 'pie',
      startDuration: 0,
      theme: 'blur',
      addClassNames: true,
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      legend: {
        position: 'right',
        marginRight: 100,
        autoMargins: false,
      },
      innerRadius: '80%',
      defs: {
        filter: [
          {
            id: 'shadow',
            width: '100%',
            height: '100%',
            feOffset: {
              result: 'offOut',
              in: 'SourceAlpha',
              dx: 0,
              dy: 0
            },
            feGaussianBlur: {
              result: 'blurOut',
              in: 'offOut',
              stdDeviation: 5
            },
            feBlend: {
              in: 'SourceGraphic',
              in2: 'blurOut',
              mode: 'normal'
            }
          }
        ]
      },
      dataProvider: [
        {
          country: 'Memory Used',
          litres: 501.9
        },
        {
          country: 'Memory Available',
          litres: 301.9
        }
      ],
      valueField: 'litres',
      titleField: 'country',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-left',

      autoMargins: false,
      marginTop: 10,
      alpha: 0.8,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      pullOutRadius: 0,
      pathToImages: layoutPaths.images.amChart,
      responsive: {
        enabled: true,
        rules: [
          // at 900px wide, we hide legend
          {
            overrides: {
              legend: {
                enabled: false
              }
            }
          },

          // at 200 px we hide value axis labels altogether
          {
            maxWidth: 0,
            overrides: {
              valueAxes: {
                labelsEnabled: false
              },
              marginTop: 30,
              marginBottom: 30,
              marginLeft: 30,
              marginRight: 30
            }
          }
        ]
      }
    });

    pieChart.addListener('init', handleInit);

    pieChart.addListener('rollOverSlice', function (e) {
      handleRollOver(e);
    });

    function handleInit() {
      pieChart.legend.addListener('rollOverItem', handleRollOver);
    }

    function handleRollOver(e) {
      var wedge = e.dataItem.wedge.node;
      wedge.parentNode.appendChild(wedge);
    }
  }

})();
