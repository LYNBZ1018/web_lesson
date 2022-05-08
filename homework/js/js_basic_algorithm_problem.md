# js problem

​    



### 终端读入模板

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    
})
```







## 变量、运算符、输入与输出

### #1 A + B

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});


process.stdin.on("end", function() {
    let [a, b] = buf.split(' ').map(x => {
        return parseInt(x);
    });

    console.log(a + b);
});
```

​       

### #608 差

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});


process.stdin.on("end", function() {
    let [a, b, c, d] = buf.split('\n').map(x => {
        return parseInt(x);
    });

    console.log("DIFERENCA = " + (a * b - c * d));
});
```

​       

### #616 两点间的距离

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let lines = buf.split('\n');
    let [x1, y1] = lines[0].split(' ').map(x => {return parseFloat(x)});
    let [x2, y2] = lines[1].split(' ').map(x => {return parseFloat(x)});
    
    let dx = x1 - x2;
    let dy = y1 - y2;
    
    console.log(Math.sqrt(dx * dx + dy * dy).toFixed(4));
})
```

​       

### #653 钞票

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let n = parseInt(buf);
    let money = [100, 50, 20, 10, 5, 2, 1];
    
    console.log(n);
    for (p of money) {
        let cnt = parseInt(n / p);
        console.log(`${cnt} nota(s) de R$ ${p},00`);
        n %= p;
    }
})
```

​       

### #654 时间转换

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
     let n = parseInt(buf);
     let hours = parseInt(n / 3600);
     let minutes = parseInt(n % 3600 / 60);
     let seconds = parseInt(n % 60);
     
     console.log(`${hours}:${minutes}:${seconds}`);
})
```

​      

## 判断语句

### #605 倍数

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let [a, b] = buf.split(' ').map(x => {return parseInt(x)});
    if (a % b === 0  || b % a === 0)
        console.log("Sao Multiplos");
    else 
        console.log("Nao sao Multiplos");
})
```

​       

### #660 零食

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let [x, y] =buf.split(' ').map(x => {return parseInt(x)});
    let p;
    if (x === 1) p = 4;
    else if (x === 2) p = 4.5;
    else if (x === 3) p = 5;
    else if (x === 4) p = 2;
    else if (x === 5) p = 1.5;
    
    console.log(`Total: R$ ${(p * y).toFixed(2)}`)
})
```

​       

### #659 区间

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let x = parseFloat(buf);
    
    if (x >= 0 && x <= 25)
        console.log("Intervalo [0,25]");
    else if (x > 25 && x <= 50)
        console.log("Intervalo (25,50]");
    else if (x > 50 && x <= 75)
        console.log("Intervalo (50,75]");
    else if (x > 75 && x <= 100)
        console.log("Intervalo (75,100]");
    else 
        console.log("Fora de intervalo");
})
```

​       

### #667 游戏时间

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
  let [a, b] = buf.split(' ').map(x => {return parseInt(x)});
  
  let res;
  if (a < b) res = b - a;
  else res = b + 24 - a;
  
  console.log(`O JOGO DUROU ${res} HORA(S)`);
})
```

​       

### #670 动物

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let [a, b, c] = buf.split('\n');
    
    if (a === "vertebrado") {
        if (b === "ave") {
            if (c === "carnivoro") {
                console.log("aguia");
            } else {
                console.log("pomba");
            }
        } else {
                if (c === "onivoro") {
                    console.log("homem");
                } else {
                    console.log("vaca");
                }
            }
    } else {
            if (b === "inseto") {
                if (c === "hematofago") {
                    console.log("pulga");
                } else {
                    console.log("lagarta");
                }
            } else {
                if (c === "hematofago") {
                    console.log("sanguessuga");
                } else {
                    console.log("minhoca");
                }
            }
        }
})
```

​       

## 循环语句

### #708 偶数

```js
for (let i = 2; i <= 100; i ++ ) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

​       

### #712 正数

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let xs = buf.split('\n').map(x => {return parseFloat(x)});
    
    let res = 0;
    for (let x of xs) {
        if (x > 0)
            res ++ ;
    }
    
    console.log(`${res} positive numbers`)
})
```

​       

### #721 递增序列

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let xs = buf.split('\n').map(x => {return parseInt(x)});
    
    for (let x of xs) {
        if (x === 0) break;
        let line = "";
        for (let i = 1; i <= x; i ++ )
            line += `${i} `;
        console.log(line);
    }
})
```

​       

### #724 约数

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let n = parseInt(buf);
    
    for (let i = 1; i <= n; i ++ ) {
        if (n % i === 0) {
            console.log(i);
        }
    }
})
```

​       

### #727 菱形

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let n = parseInt(buf);
    let m = parseInt(n / 2);
    
    for (let i = 0; i < n; i ++ ) {
        let line = "";
        for (let j = 0; j < n; j ++ ) {
            if (Math.abs(i - m) + Math.abs(j - m) <= m)
                line += '*';
            else 
                line += ' ';
        }
        console.log(line);
    }
})
```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       

### #1 A + B

```js

```

​       