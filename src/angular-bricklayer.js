angular.module('jtt_bricklayer', [])
    .directive('bricklayer', function () {
        return {
            restrict: 'C',
            replace: 'false',
            link: function (scope, element, attrs) {
                var bricklayer = new Bricklayer(element[0]);

                scope.$on('bricklayer.append', function (event, element) {
                    setTimeout(function () {
                        bricklayer.append(element)
                    }, 0)
                });

                scope.$on('bricklayer.prepend', function (event, element) {
                    setTimeout(function () {
                        bricklayer.prepend(element)
                    }, 0)
                });
            }
        }
    })
    .directive('bricklayerAppend', function () {
        return {
            require: '?bricklayer',
            restrict: 'ACE',
            replace: 'false',
            link: function (scope, element, attrs) {
                scope.$emit('bricklayer.append', element[0]);
            }
        }
    })
    .directive('bricklayerPrepend', function () {
        return {
            require: '?bricklayer',
            restrict: 'ACE',
            replace: 'false',
            link: function (scope, element, attrs) {
                scope.$emit('bricklayer.prepend', element[0]);
            }
        }
    });