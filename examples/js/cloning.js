(function () {
  'use strict';

  angular.module('demoApp')
    .controller('CloningCtrl', ['$scope', function ($scope) {

        $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.newSubItem = function (option, scope) {
        var nodeData = scope.$modelValue;
          console.log('sel cond template type = ' + option)
        if (scope.$modelValue.conditionType === 'if'){
            nodeData.conditionType = 'if';
            nodeData.nodes.push({
                id: nodeData.id * 10 + nodeData.nodes.length,
                conditionType: 'then',
                conditionTemplateType: option,
                nodes: []
            }, {
                id: nodeData.id * 10 + nodeData.nodes.length,
                conditionType: 'else',
                conditionTemplateType: option,
                nodes: []
            });
        }
        else{
            nodeData.nodes.push({
                id: nodeData.id * 10 + nodeData.nodes.length,
                title: nodeData.title + '.' + (nodeData.nodes.length + 1),
                conditionTemplateType: option,
                nodes: []
            });            
        }
      };

        $scope.collapseAll = function () {
            $scope.$broadcast('angular-ui-tree:collapse-all');
        };

        $scope.expandAll = function () {
            $scope.$broadcast('angular-ui-tree:expand-all');
        };
        
        // $scope.ruleConditionFormType = "conditionTemplate"
        $scope.ruleConditionFormType = "textTemplate"
        $scope.ruleConditionType = " "

        $scope.isConditionTemplateVisible = function () {
            return ($scope.ruleConditionFormType === 'conditionTemplate') ? true : false;
        }

        $scope.isTextTemplateVisible = function () {
            return ($scope.ruleConditionFormType === 'textTemplate') ? true : false;
        }

        $scope.showSelValue = function(){
            console.log('selected value : ' + $scope.ruleConditionFormType);
            console.log('is Condition Template Visible : ' + $scope.isConditionTemplateVisible());
            console.log('is Text Template Visible : ' + $scope.isTextTemplateVisible());
        }

        $scope.setSelCondition = function(scope){
            console.log('selected value for rule condition type : ' + scope.$modelValue.conditionType);
        }


        $scope.templateOptions = ['Condition', 'Text'];

        $scope.setTemplateType = function(option, scope){
            // scope.$modelValue.conditionTemplateType = option;
            scope.newSubItem(option, scope);
            console.log('selected rule condition template type : ' + scope.$modelValue.conditionTemplateType);
        }

        $scope.isTextNodeTemplate = function(conditionTemplateType){
            return (conditionTemplateType === 'Text') ? true : false;
        }

        $scope.isConditionNodeTemplate = function(conditionTemplateType){
            // if (conditionType === null) return true;
            return (conditionTemplateType === 'Condition') ? true : false;
        }

      $scope.tree2 = [{
        'id': 1,
        'title': 'tree2 - item1',
        'conditionType': '',
        'conditionTemplateType': 'Condition',
        'nodes': []
      }, {
        'id': 2,
        'title': 'tree2 - item2',
        'conditionType': '',
        'conditionTemplateType': 'Text',
        'nodes': []
      }, {
        'id': 3,
        'title': 'tree2 - item3',
        'conditionType': '',
        'conditionTemplateType': 'Condition',
        'nodes': []
      }, {
        'id': 4,
        'title': 'tree2 - item4',
        'conditionType': '',
        'conditionTemplateType': 'Text',
        'nodes': []
      }];
    }]);
}());
