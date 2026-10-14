# 1. 실습문제

## 1. 다음 HTML5 페이지는 HTML 태그에 2개, CSS에 1개의 간단한 오류를 포함하고 있다. http://html5.validator.nu 와 http://www.css-validator.org/validator.html.ko 사이트를 이용하여 오류를 수정하라.
```html
<DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>오류를 찾으세요.</title>
<style>
  h3 { text-align : center; color : darkred; }
  span { color = blue; font-size : 20px; }
<head>
<body>
<h3>Elvis Presley</h3>
He was an American singer and actor. In November 1956,
he is often referred to as "<span>the King of Rock and Roll</span>".
</body>
</html>
```

> DOCTYPE html -> !DOCTYPE html  
> span { color = blue; } -> span { color : blue; }  
> </style> 태그가 빠졌다.  

## 2. 다음 HTML5 페이지는 HTML 태그에 2개, CSS에 1개의 간단한 오류를 포함하고 있다. http://html5.validator.nu 와 http://www.css-validator.org/validator.html.ko 사이트를 이용하여 오류를 수정하라.
```html
<!DOCTYPE html>
<html>
<body>
<meta charset="utf-8">
<title>오류를 찾으시오.</title>
<style>
  h3 { text-align : center color : darkred; }
  span { color : blue; font-size : 20px; }
</style>
</head>
<body>
<h3>Elvis Presley</h>
He was an American singer and actor. In November 1956,
he is often referred to as "<span>the King of Rock and Roll</span>".
</body>
</html>
```

> 3행 body -> head 수정  
> h3 { text-align : center color : darkred; } -> h3 { text-align : center; color : darkred; }  
> /h -> /h3  
