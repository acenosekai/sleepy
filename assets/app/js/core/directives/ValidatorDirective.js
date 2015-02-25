app.directive("aceLxInput", function() {
  return {
    restrict: "E",
    require: 'ngModel',
    replace: true,
    compile: function(tElem, tAttrs) {
      var form = tAttrs.aceLxFormName + '.' + tAttrs.name;
      var formError = form + '.$error';

      function camelToDash(str) {
        return str.replace(/\W+/g, '-')
          .replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();;
      }

      function dashToCamel(str) {
        return str.replace(/\W+(.)/g, function(x, chr) {
          return chr.toUpperCase();
        })
      }

      var inputAttr = "";
      var errorArr = [];

      for (var index in tAttrs) {
        var attr = tAttrs[index];
        if (index != "aceInputLabel" && index != "aceLxFormName" && typeof attr == "string") {

          if (inputValidationMessage.hasOwnProperty(index)) {
            errorArr.push(index);
          }

          inputAttr += camelToDash(index) + '="' + attr + '" ';
        }
      }

      var errorAttrValue = '(' + tAttrs.aceLxFormName + '.$submited || ' + form + '.$touched) && ' + form + '.$invalid';
      var validAttrValue = '(' + tAttrs.aceLxFormName + '.$submited || ' + form + '.$touched) && ' + form + '.$valid';
      var errorMessage = "";



      for (er in errorArr) {
        errorMessage += '<div ng-if="(' + tAttrs.aceLxFormName + '.$submited || ' + form + '.$touched) && ' + formError + '.' + errorArr[er] + '" class="fs-body-1 display-block tc-red-800">' + inputValidationMessage[errorArr[er]](tAttrs[errorArr[er]]) + '</div>';
      }

      var htmlText = '<div tabindex="none"><lx-text-field label="' + tAttrs.aceLxInputLabel + '" error="' + errorAttrValue + '" valid="' + validAttrValue + '">' +
        '<input ace-validation-input ' + inputAttr + '>' +
        '</lx-text-field>' +
        errorMessage + '</div>';


      tElem.replaceWith(htmlText);
    }
  }
});

//app.directive("aceValidator", function() {
//  return {
//    restrict: "A",
//    require: "ngModel",
//    link: function(scope, element, attributes, ngModel) {
//      var modelValue = modelValue;
//      for (keyIndex in attributes) {
//        if (validator.hasOwnProperty(keyIndex) && typeof validator[keyIndex] === 'function') {
//          var opt = "";
//          if (attributes[keyIndex] != "") {
//            try {
//              opt = JSON.parse(attributes[keyIndex]).join(", ");
//            } catch (e) {
//              console.log("Parameter shoud be an array");
//            }
//          }
//
////          console.log(opt);
//          if (opt != "") {
//            opt = ", " + opt;
//          }
//          var key = keyIndex;
//            console.log(keyIndex);
//          ngModel.$validators[keyIndex] = function(modelValue) {
//
//            return eval("validator." + key + '(modelValue' + opt + ')');
//          }
//        }
//      }
//      //        if (validator.hasOwnProperty(idx)) {
//      //          if (typeof validator[idx] === 'function') {
//      //              console.log(idx);
//      //            var opt = [];
//      //            if (attributes[idx] != "") {
//      //              try {
//      //                opt = JSON.parse(attributes[idx]);
//      //              } catch (e) {}
//      //            }
//      //            ngModel.$validators[idx] = function(modelValue) {
//      //              return validator.isEmail(modelValue);
//      //            }
//      //          }
//      //
//      //        }
//      //      }
//    }
//  };
//})
//
var inputValidationMessage = {
  notEmpty: function(param) {
    return "field is required";
  },
  isEmail: function(param) {
    return "invalid email format";
  },
  minLength: function(param) {
    return "must be longer than " + param + " character";
  },
  maxLength: function(param) {
    return "must be less than " + param + " character";
  },
  equal: function(param) {
    return "must be equal";
  },
  contain: function(param) {
    return "must contain '{{" + param + "}}'";
  }
}

app.directive("notEmpty", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attributes, ngModel) {
      ngModel.$validators.notEmpty = function(modelValue) {
        return validator.isLength(modelValue, 1);
      }
    }
  };
})
  .directive("isEmail", function() {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.isEmail = function(modelValue) {
          return validator.isEmail(modelValue)
        }
      }
    };
  })
  .directive("minLength", function() {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.minLength = function(modelValue) {
          return validator.isLength(modelValue, parseInt(attributes.minLength));
        }
      }
    }
  })
  .directive("maxLength", function() {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.maxLength = function(modelValue) {
          return validator.isLength(modelValue, 0, parseInt(attributes.maxLength));
        }
      }
    }
  })
  .directive("equal", function() {
    return {
      restrict: "A",
      require: "ngModel",
      scope: {
        equal: '='
      },
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.equal = function(modelValue) {
          return validator.equals(modelValue, scope.equal);
        }
      }
    }
  })
  .directive("contain", function() {
    return {
      restrict: "A",
      require: "ngModel",
      scope: {
        contain: '='
      },
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.contain = function(modelValue) {
          return validator.contains(modelValue, scope.contain);
        }
      }
    }
  })
//
//.directive("sameAs", function() {
//  return {
//    restrict: "A",
//    require: "ngModel",
//    link: function(scope, element, attributes, ngModel) {
//      console.log(scope);
//      console.log(attributes);
//      //            ngModel.$validators.email = function(modelValue) {
//      //                return validator.isEmail(modelValue)
//      //            }
//    }
//  };
//})
//
//.directive("aceLxInput", function() {
//  return {
//    restrict: "E",
//    require: 'ngModel',
//    replace: true,
//    compile: function(tElem, tAttrs) {
//
//      var form = tAttrs.aceLxFormName + '.' + tAttrs.name;
//      var formError = form + '.$error';
//
//      function camelToDash(str) {
//        return str.replace(/\W+/g, '-')
//          .replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();;
//      }
//
//      function dashToCamel(str) {
//        return str.replace(/\W+(.)/g, function(x, chr) {
//          return chr.toUpperCase();
//        })
//      }
//
//      var inputAttr = "";
//      var errorArr = [];
//
//      for (var index in tAttrs) {
//        var attr = tAttrs[index];
//        if (index != "aceInputLabel" && index != "aceLxFormName" && typeof attr == "string") {
//
//          if (inputValidation.hasOwnProperty(index)) {
//            errorArr.push(index);
//          }
//
//          inputAttr += camelToDash(index) + '="' + attr + '" ';
//        }
//      }
//
//      var errorAttrValue = '(' + tAttrs.aceLxFormName + '.$submited || ' + form + '.$touched) && ' + form + '.$invalid';
//      var validAttrValue = '(' + tAttrs.aceLxFormName + '.$submited || ' + form + '.$touched) && ' + form + '.$valid';
//      var errorMessage = "";
//
//      for (er in errorArr) {
//        errorMessage += '<div ng-if="(' + tAttrs.aceLxFormName + '.$submited || ' + form + '.$touched) && ' + formError + '.' + errorArr[er] + '" class="fs-body-1 display-block tc-red-800">' + inputValidation[errorArr[er]] + '</div>';
//      }
//
//      var htmlText = '<div flex-item tabindex="none"><lx-text-field label="' + tAttrs.aceLxInputLabel + '" error="' + errorAttrValue + '" valid="' + validAttrValue + '">' +
//        '<input ' + inputAttr + '>' +
//        '</lx-text-field>' +
//        errorMessage + '</div>';
//
//
//      tElem.replaceWith(htmlText);
//    }
//  };
//});
