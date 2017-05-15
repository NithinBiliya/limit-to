# limit-to
limits number of characters or numbers in an input field

Demo
--------
[DEMO link](https://nithinbiliya.github.io/limit-to/)

Usage
------
Limit numbers in input field - 

```
 Number - <input ng-model="vm.ip1" type="number" limit-to="8">
```

Limit characters in text field - 

```
 <input ng-model="vm.ip2" type="text" limit-to="8">
```

Unlimit characters/numbers if limit-to is blank - 

```
 <input ng-model="vm.ip3" type="text" limit-to="">
```

License
--------
MIT License
