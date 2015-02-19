var inputValidation= {
    notEmpty:"field cant be empty",
    email:"field value is not valid email"
}

app.directive("notEmpty", function() {
    return {
        restrict: "A",
         
        require: "ngModel",
         
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.notEmpty = function(modelValue) {                 
                return validator.isLength(modelValue,1);
            }
        }
    };
})

.directive("email", function() {
    return {
        restrict: "A",
         
        require: "ngModel",
         
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.email = function(modelValue) {  
                return validator.isEmail(modelValue)
            }
        }
    };
})

.directive("aceInput", function() {
    return {
        restrict: "E",        
        require: 'ngModel',
        replace:true,
        compile: function(tElem, tAttrs)
        {
            
            var form = tAttrs.aceFormName+'.'+tAttrs.name;
            var formError = form+'.$error';
            
            function camelToDash(str) {
              return str.replace(/\W+/g, '-')
                        .replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();;
           }

           function dashToCamel(str) {
                 return str.replace(/\W+(.)/g, function (x, chr) {
                                  return chr.toUpperCase();
                 })
           }
            
            var inputAttr="";
            var errorArr = [];
            
            for(var index in tAttrs) { 
                var attr = tAttrs[index];
                if(index !="aceInputLabel" 
                   && index !="aceFormName"
                  && typeof attr == "string"){
                    
                    if(inputValidation.hasOwnProperty(index)){
                        errorArr.push(index);
                    }
                    
                    inputAttr+=camelToDash(index)+'="'+ attr+'" ';
                }
            }
            
            var errorAttrValue = '('+tAttrs.aceFormName+'.$submited || '+form+'.$touched) && '+form+'.$invalid';
            var validAttrValue = '('+tAttrs.aceFormName+'.$submited || '+form+'.$touched) && '+form+'.$valid';
            var errorMessage = "";
            
            for(er in errorArr){
                errorMessage +='<div ng-if="('+tAttrs.aceFormName+'.$submited || '+form+'.$touched) && '+formError+'.'+errorArr[er]+'" class="fs-body-2 display-block tc-grey-500">'+inputValidation[errorArr[er]]+'</div>';
            }
            
            var htmlText='<div flex-item tabindex="none"><lx-text-field label="'+tAttrs.aceInputLabel+'" error="'+errorAttrValue+'" valid="'+validAttrValue+'">'+
                            '<input '+inputAttr+'>'+                        
                        '</lx-text-field>'+
                errorMessage+'</div>';
            
            console.log(htmlText);
            
            tElem.replaceWith(htmlText);            
        }
    };
});