/**
 *
 *
 */
(function () {
    'use strict';

    angular.module('ScalaApp.pages.overview')
        .controller('overviewModelCtrl', overviewModelCtrl);

    /** @ngInject */
    function overviewModelCtrl($scope, $element, layoutPaths, baConfig) {
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
            innerRadius: '40%',
            defs: {
                filter: [
                    {
                        id: 'shadow',
                        width: '200%',
                        height: '200%',
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
                    country: 'Lithuania',
                    litres: 501.9
                },
                {
                    country: 'Czech Republic',
                    litres: 301.9
                },
                {
                    country: 'Ireland',
                    litres: 201.1
                },
                {
                    country: 'Germany',
                    litres: 165.8
                },
                {
                    country: 'Australia',
                    litres: 139.9
                },
                {
                    country: 'Austria',
                    litres: 128.3
                },
                {
                    country: 'UK',
                    litres: 99
                },
                {
                    country: 'Belgium',
                    litres: 60
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
                        maxWidth: 900,
                        overrides: {
                            legend: {
                                enabled: false
                            }
                        }
                    },

                    // at 200 px we hide value axis labels altogether
                    {
                        maxWidth: 200,
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
        var ganttChart = AmCharts.makeChart( "chartdiv", {
            "type": "gantt",
            "theme": "dark",
            "marginRight": 20,
            "period": "DD",
            "dataDateFormat": "YYYY-MM-DD",
            "columnWidth": 0.5,
            "valueAxis": {
                "type": "date"
            },
            "brightnessStep": 7,
            "graph": {
                "lineAlpha": 1,
                "lineColor": "#fff",
                "fillAlphas": 0.85,
                "balloonText": "<b>[[task]]</b>:<br />[[open]] -- [[value]]"
            },
            "rotate": true,
            "categoryField": "category",
            "segmentsField": "segments",
            "colorField": "color",
            "startDateField": "start",
            "endDateField": "end",
            "dataProvider": [ {
                "category": "Module #1",
                "segments": [ {
                    "start": "2016-01-01",
                    "end": "2016-01-14",
                    "color": "#b9783f",
                    "task": "Gathering requirements"
                }, {
                    "start": "2016-01-16",
                    "end": "2016-01-27",
                    "task": "Producing specifications"
                }, {
                    "start": "2016-02-05",
                    "end": "2016-04-18",
                    "task": "Development"
                }, {
                    "start": "2016-04-18",
                    "end": "2016-04-30",
                    "task": "Testing and QA"
                } ]
            }, {
                "category": "Module #2",
                "segments": [ {
                    "start": "2016-01-08",
                    "end": "2016-01-10",
                    "color": "#cc4748",
                    "task": "Gathering requirements"
                }, {
                    "start": "2016-01-12",
                    "end": "2016-01-15",
                    "task": "Producing specifications"
                }, {
                    "start": "2016-01-16",
                    "end": "2016-02-05",
                    "task": "Development"
                }, {
                    "start": "2016-02-10",
                    "end": "2016-02-18",
                    "task": "Testing and QA"
                } ]
            }, {
                "category": "Module #3",
                "segments": [ {
                    "start": "2016-01-02",
                    "end": "2016-01-08",
                    "color": "#cd82ad",
                    "task": "Gathering requirements"
                }, {
                    "start": "2016-01-08",
                    "end": "2016-01-16",
                    "task": "Producing specifications"
                }, {
                    "start": "2016-01-19",
                    "end": "2016-03-01",
                    "task": "Development"
                }, {
                    "start": "2016-03-12",
                    "end": "2016-04-05",
                    "task": "Testing and QA"
                } ]
            }, {
                "category": "Module #4",
                "segments": [ {
                    "start": "2016-01-01",
                    "end": "2016-01-19",
                    "color": "#2f4074",
                    "task": "Gathering requirements"
                }, {
                    "start": "2016-01-19",
                    "end": "2016-02-03",
                    "task": "Producing specifications"
                }, {
                    "start": "2016-03-20",
                    "end": "2016-04-25",
                    "task": "Development"
                }, {
                    "start": "2016-04-27",
                    "end": "2016-05-15",
                    "task": "Testing and QA"
                } ]
            }, {
                "category": "Module #5",
                "segments": [ {
                    "start": "2016-01-01",
                    "end": "2016-01-12",
                    "color": "#448e4d",
                    "task": "Gathering requirements"
                }, {
                    "start": "2016-01-12",
                    "end": "2016-01-19",
                    "task": "Producing specifications"
                }, {
                    "start": "2016-01-19",
                    "end": "2016-03-01",
                    "task": "Development"
                }, {
                    "start": "2016-03-08",
                    "end": "2016-03-30",
                    "task": "Testing and QA"
                } ]
            } ],
            "valueScrollbar": {
                "autoGridCount": true
            },
            "chartCursor": {
                "cursorColor": "#55bb76",
                "valueBalloonsEnabled": false,
                "cursorAlpha": 0,
                "valueLineAlpha": 0.5,
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true,
                "zoomable": false,
                "valueZoomable": true
            },
            "export": {
                "enabled": true
            }
        } );

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