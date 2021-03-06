(function(){
	'use strict';

	angular.module('Tundrapm.pages.projects')
		.controller('projectsCtrl', projectsCtrl);

	function projectsCtrl($scope, $location) {

		$scope.page="Projects";

		$scope.projects = ['Proyecto Alfa', 'Proyecto Beta', 'Proyecto Gamma'];

		$scope.showList = function(){
			var path =$location.path().split("/");
			if(path.length>2){
				return true;
			}else{
				return false;
			}
		}

	    $scope.routes= function(){
	        var array = $scope.projects; 
	        var projects= []; 
	        

	        for(var i=0; i<array.length; i++){
	            var name=""; 
	            var aux= array[i].split(" ");
	            for(var j=0; j<aux.length; j++){
	                name+= aux[j];
	            }
	            projects.push(name); 
	        }
	        return projects; 
	    }


	    $scope.preformat= function(){
	        var projects = $scope.projects;
	        var routes = $scope.routes(); 

	        var object =[];

	        for(var i=0; i< projects.length; i++){
	            var obj = {
	                name: projects[i],
	                route: routes[i]
	            }
	            object.push(obj);
	        }
	        return object;  
	    }

	    $scope.util = $scope.preformat(); 
	}

	//Modal projects

	angular.module('ui.bootstrap').controller('ModalDemoCtrlProject', function ($uibModal, $log, $document) {
  		var $ctrl = this;
  		$ctrl.items = ['item1', 'item2', 'item3'];
		
  		$ctrl.animationsEnabled = true;
		
  		$ctrl.open = function (size, parentSelector) {
  		  var parentElem = parentSelector ? 
  		    angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
  		  var modalInstance = $uibModal.open({
  		    animation: $ctrl.animationsEnabled,
  		    ariaLabelledBy: 'modal-title',
  		    ariaDescribedBy: 'modal-body',
  		    templateUrl: 'app/pages/projects/modalNewProject.html',
  		    controller: 'ModalInstanceCtrl',
  		    controllerAs: '$ctrl',
  		    size: size,
  		    appendTo: parentElem,
  		    resolve: {
  		      items: function () {
  		        return $ctrl.items;
  		      }
  		    }
  		  });
		
  		  modalInstance.result.then(function (selectedItem) {
  		    $ctrl.selected = selectedItem;
  		  }, function () {
  		    $log.info('Modal dismissed at: ' + new Date());
  		  });
  		};
		
  		$ctrl.openComponentModal = function () {
  		  var modalInstance = $uibModal.open({
  		    animation: $ctrl.animationsEnabled,
  		    component: 'modalComponent',
  		    resolve: {
  		      items: function () {
  		        return $ctrl.items;
  		      }
  		    }
  		  });
		
  		  modalInstance.result.then(function (selectedItem) {
  		    $ctrl.selected = selectedItem;
  		  }, function () {
  		    $log.info('modal-component dismissed at: ' + new Date());
  		  });
  		};
		
  		$ctrl.openMultipleModals = function () {
  		  $uibModal.open({
  		    animation: $ctrl.animationsEnabled,
  		    ariaLabelledBy: 'modal-title-bottom',
  		    ariaDescribedBy: 'modal-body-bottom',
  		    templateUrl: 'stackedModal.html',
  		    size: 'sm',
  		    controller: function($scope) {
  		      $scope.name = 'bottom';  
  		    }
  		  });
		
  		  $uibModal.open({
  		    animation: $ctrl.animationsEnabled,
  		    ariaLabelledBy: 'modal-title-top',
  		    ariaDescribedBy: 'modal-body-top',
  		    templateUrl: 'stackedModal.html',
  		    size: 'sm',
  		    controller: function($scope) {
  		      $scope.name = 'top';  
  		    }
  		  });
  		};
		
  		$ctrl.toggleAnimation = function () {
  		  $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  		};
	});

	//Modal issues

	angular.module('ui.bootstrap').controller('ModalDemoCtrlIssue', function ($uibModal, $log, $document) {
  		var $ctrl = this;
  		$ctrl.items = ['item1', 'item2', 'item3'];
		
  		$ctrl.animationsEnabled = true;
		
  		$ctrl.open = function (size, parentSelector) {
  		  var parentElem = parentSelector ? 
  		    angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
  		  var modalInstance = $uibModal.open({
  		    animation: $ctrl.animationsEnabled,
  		    ariaLabelledBy: 'modal-title',
  		    ariaDescribedBy: 'modal-body',
  		    templateUrl: 'app/pages/projects/projectView/modalNewIssue.html',
  		    controller: 'ModalInstanceCtrl',
  		    controllerAs: '$ctrl',
  		    size: size,
  		    appendTo: parentElem,
  		    resolve: {
  		      items: function () {
  		        return $ctrl.items;
  		      }
  		    }
  		  });
		
  		  modalInstance.result.then(function (selectedItem) {
  		    $ctrl.selected = selectedItem;
  		  }, function () {
  		    $log.info('Modal dismissed at: ' + new Date());
  		  });
  		};
		
  		$ctrl.openComponentModal = function () {
  		  var modalInstance = $uibModal.open({
  		    animation: $ctrl.animationsEnabled,
  		    component: 'modalComponent',
  		    resolve: {
  		      items: function () {
  		        return $ctrl.items;
  		      }
  		    }
  		  });
		
  		  modalInstance.result.then(function (selectedItem) {
  		    $ctrl.selected = selectedItem;
  		  }, function () {
  		    $log.info('modal-component dismissed at: ' + new Date());
  		  });
  		};
		
  		$ctrl.openMultipleModals = function () {
  		  $uibModal.open({
  		    animation: $ctrl.animationsEnabled,
  		    ariaLabelledBy: 'modal-title-bottom',
  		    ariaDescribedBy: 'modal-body-bottom',
  		    templateUrl: 'stackedModal.html',
  		    size: 'sm',
  		    controller: function($scope) {
  		      $scope.name = 'bottom';  
  		    }
  		  });
		
  		  $uibModal.open({
  		    animation: $ctrl.animationsEnabled,
  		    ariaLabelledBy: 'modal-title-top',
  		    ariaDescribedBy: 'modal-body-top',
  		    templateUrl: 'stackedModal.html',
  		    size: 'sm',
  		    controller: function($scope) {
  		      $scope.name = 'top';  
  		    }
  		  });
  		};
		
  		$ctrl.toggleAnimation = function () {
  		  $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  		};
	});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

	angular.module('ui.bootstrap').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
	  	var $ctrl = this;
	  	$ctrl.items = items;
	  	$ctrl.selected = {
	  	  item: $ctrl.items[0]
	  	};
		
	  	$ctrl.ok = function () {
	  	  $uibModalInstance.close($ctrl.selected.item);
	  	};
		
	  	$ctrl.cancel = function () {
	  	  $uibModalInstance.dismiss('cancel');
	  	};
	});
	
	// Please note that the close and dismiss bindings are from $uibModalInstance.
	
	angular.module('ui.bootstrap').component('modalComponent', {
	  	templateUrl: 'myModalContent.html',
	  	bindings: {
	  	  resolve: '<',
	  	  close: '&',
	  	  dismiss: '&'
	  	},
	  	controller: function () {
	  	  var $ctrl = this;
		
	  	  $ctrl.$onInit = function () {
	  	    $ctrl.items = $ctrl.resolve.items;
	  	    $ctrl.selected = {
	  	      item: $ctrl.items[0]
	  	    };
	  	  };
		
	  	  $ctrl.ok = function () {
	  	    $ctrl.close({$value: $ctrl.selected.item});
	  	  };
		
	  	  $ctrl.cancel = function () {
	  	    $ctrl.dismiss({$value: 'cancel'});
	  	  };
	  	}
	});
	
})();