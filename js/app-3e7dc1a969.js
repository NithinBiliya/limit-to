!function(){angular.module("input.with.separator",[]).directive("inputWithSeparator",function(){return{restrict:"E",scope:{numberSystem:"=",model:"=ngModel"},require:"?ngModel",template:"<input ng-model='value'  ng-change='onChange()' ng-trim='false'>",link:function(e,n,a,t){e.$watch("model",function(){e.onChange()}),e.onChange=function(){if(t){var n=a.numberSystem;if(!angular.isUndefined(e.value)){var r=e.value.toString();if("International"==n){for(var i=r.replace(/[^0-9.]/g,""),l=0,o="",u="",s=0;s<i.length;s++)o=i.charAt(s),"."==o?l<=0&&(u+=o,l++):u+=o;var c="";l>0&&(c="."+u.split(".")[1]),u=u.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),u+=c,e.value=u,t.$setViewValue(i)}else if("Indian"==n){for(i=r.trim().replace(/[^0-9.]/g,""),l=0,o="",u="",s=0;s<i.length;s++)o=i.charAt(s),"."==o?l<=0&&(u+=o,l++):u+=o;c="",l>0&&(c="."+u.split(".")[1]),u=u.split(".")[0].replace(/(\d)(?=(\d\d)+\d$)/g,"$1,"),u+=c,e.value=u,t.$setViewValue(i)}}}},t.$render=function(){e.value=t.$modelValue,e.separatorStyle=t.$separatorStyle}}}})}(),angular.module("myApp",["input.with.separator"]).controller("myBasicController",[function(){var e=this;e.assignGlobal=function(n){e.foo=n},e.assignIndian=function(n){e.doo=n}}]);