---
title: 'Dart Fundamentals'
coverImage: '/assets/blog/dart/dart.jpg'
date: '2021-01-16T05:35:07.322Z'
---

## NULL aware

provide default to null value
```dart
var a = null;
var b = a ?? 'something'; // b = 'something'
```

set object if not null
```dart
var a = null;
a ??= 'something'; // a = 'something'
a ??= 'other stuff'; // a = 'something'
```

access porperty possibily not exist
```dart
var a = someObj?.key // a = null if key not exist
var a = someObj.key // throw exception if key not exist
```

ommit null when spreading
```dart
var listA = [1, 2];
var listB = null;
var listC = [...listA, ...listB]; // throws exception
var listD = [...listA, ...?listB]; // [1, 2]
```
