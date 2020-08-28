const URL='https://covid19.mathdro.id/api';

let app = angular.module("myApp", ['ng-fusioncharts']);
const chartData = [
            { label: 'Venezuela', value: '290' },
            { label: 'Saudi', value: '260' },
            { label: 'Canada', value: '180' },
            { label: 'Iran', value: '140' },
            { label: 'Russia', value: '115' },
            { label: 'UAE', value: '100' },
            { label: 'US', value: '30' },
            { label: 'China', value: '30' }
        ];

         const dataSource = {
            chart: {
                caption: "Countries With Most Oil Reserves [2017-18]",
                subCaption: "In MMbbl = One Million barrels",
                xAxisName: "Country",
                yAxisName: "Reserves (MMbbl)",
                numberSuffix: "K",
                theme: "fusion",
            },
            // Chart Data - from step 2
            "data": chartData
        };

app.controller("myCtrl",($scope,$http)=>{ 
    
    $scope.title="stay home stay safe";

    $scope.myDataSource = dataSource

    $http.get(URL).then(  (response)=>{

    	console.log(response.data);

    	$scope.all_data=response.data;

    }, (error)=>{

    	console.log(error);
    });


    $scope.get_c_data=()=>{
    	let country=$scope.c;
    	if(country==""){
            return;
    	}

    	$http.get(`${URL}/countries/${country}`).then((response)=>{
    		console.log(response.data)
    		$scope.c_data=response.data 
    	},
        (error)=>{

    		console.log(error);
    		
    	});
    };

});