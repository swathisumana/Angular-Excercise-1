'use strict';

/**
 * @ngdoc function
 * @name angularDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDemoApp
 */
angular.module('Angulardemo')
    .controller('MainCtrl', function() {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $(document).ready(function() {
            var opic = $.ajax({
                url: 'json/main.json',
                type: 'GET',
                dataType: 'JSON'

            });
            opic.success(function(data) {
                console.log(data);
                var odata = data;
                console.log(odata);
                $('#a1').attr("src", odata.Images[0].img);
                $('#a2').attr("src", odata.Images[1].img);
                $('#b1').attr("src", odata.Images[2].img);

                for (var i = 0; i < odata.Items.length; i++) {

                    $('.segment #logo').eq(i).attr("src", odata.Items[i].img);

                }
                for (var j=0;j<odata.boxes.length;j++){
                    $('.box #logo1').eq(j).attr("src", odata.boxes[j].img);
                }

                for(var k=0;k<odata.Infos.length;k++){
                    $('.description').eq(k).attr("src", odata.Infos[k].info); 
                }

               
            });
        });
    });
