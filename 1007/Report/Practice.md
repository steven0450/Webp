# 6. 실습문제

## 1. HTML 페이지와 출력 결과를 보고 물음에서 요구하는대로 페이지를 수정하라.  

### 1. HTML 페이지를 수정하여 자바스크립트 코드를 `<script>` 에 삽입하라.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>마우스를 올려보세요.</h2>
    <hr>
    <div id="box">여기에 마우스를 올리면 배경이 노란색으로 변합니다.</div>
    <script>
        let box = document.getElementById("box");

        box.onmouseover = function () {
            box.style.backgroundColor = "yellow";
        }
        box.onmouseout = function () {
            box.style.backgroundColor = "white";
        }
    </script>
</body>

</html>
```

### 2. 자바스크립트 코드를 6-1.js 파일에 저장하고 `<script>` 태그로 6-1.js 파일을 불러오도록 HTML 페이지를 수정하라.

`6-1.js`
```js
let box = document.getElementById("box");

        box.onmouseover = function () {
            box.style.backgroundColor = "yellow";
        }
        box.onmouseout = function () {
            box.style.backgroundColor = "white";
        }
```

`6-1.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>마우스를 올려보세요.</h2>
    <hr>
    <div id="box">여기에 마우스를 올리면 배경이 노란색으로 변합니다.</div>
    <script src="6-1.js"></script>
</body>

</html>
```

## 2. document.write()를 이용하여 `<script>` 태그 안에 자바스크립트 코드를 완성하라.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        document.write("<h1>Hello Home</h1>");
        document.write("<hr>");
        document.write("저희 홈페이지에 오신 것을 환영합니다.");
    </script>
</body>

</html>
```

## 3. document.write()를 이용하여 문제2에 주어진 `<script>` 태그에 자바스크립트 코드를 완성하여 다음과 같이 출력되게 하라.

### 1.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j <= i; j++) {
                document.write("*");
            }
            document.write("<br>");
        }
    </script>
</body>

</html>
```

### 2.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>document.write()로 표 만들기</h2>
    <hr>
    <table border="1">
        <tr>
            <th>n</th>
            <script>
                for (let i = 0; i < 9; i++) {
                    document.write("<td>" + (i + 1) + "</td>");
                }
            </script>
        </tr>
        <tr>
            <th>n^2</th>
            <script>
                for (let i = 0; i < 9; i++) {
                    document.write("<td>" + (i + 1) * (i + 1) + "</td>");
                }
            </script>
        </tr>
    </table>

</body>

</html>
```

## 4. prompt() 함수를 이용하여 월,화,수,목,금,토,일 중 하나를 입력받아 월~목의 경우 '출근'을, 다른 날의 경우 '휴일'을 출력하는 자바스크립트 코드를 작성하여 웹페이지를 완성하라.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>월화수목금토일</h2>
    <hr>
    <script>
        let day = prompt("월화수목금토일 중에서 입력하세요.");
        switch (day) {
            case "월":
            case "화":
            case "수":
            case "목":
                document.write(day + "는 출근");
                break;
            case "금":
            case "토":
            case "일":
                document.write(day + "는 휴일");
                break;
            default:
                document.write("잘못된 입력입니다.");
        }
    </script>
</body>

</html>
```

## 5. 정확한 암호가 입력될 때까지 계속 prompt()를 출력하여 암호를 입력받는 웹페이지를 작성하라. 암호는 you이다.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>암호를 입력하라!</h2>
    <hr>
    <script>
        let input;
        do {
            input = prompt("암호를 대라");
        } while (input !== "you");

        if (input === "you") {
            document.write("통과!");
        }
    </script>
</body>

</html>
```

## 6. 브라우저 화면과 같이 출력되도록 `<script>` 태그 내에 함수를 작성하라.

### 1.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        function big(a, b) {
            a = parseInt(a);
            b = parseInt(b);

            if (a > b) { return a; }
            else { return b; }
        }
    </script>
    <script>
        let b = big("625", "555");
        document.write("큰수 = " + b);
    </script>
</body>

</html>
```

### 2.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        function pr(a, b) {
            for (let i = 0; i < b; i++) {
                document.write(a);
            }
        }
    </script>
    <script>
        pr("%", 5);
    </script>
</body>

</html>
```