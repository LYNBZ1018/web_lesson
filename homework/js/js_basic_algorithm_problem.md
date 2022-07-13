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

   

## 数组    

### #737. 数组替换

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let X = buf.split('\n').map(x => {return parseInt(x)});
    
    for (let i = 0; i < 10; i ++ ) {
        if (X[i] <= 0)
            X[i] = 1;
        
        console.log(`X[${i}] = ${X[i]}`);
    }
})
```

​       

### # 743. 数组中的行

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let lines = buf.split('\n');
    let L = parseInt(lines[0]);
    let c = lines[1];
    
    let d = [];
    for (let i = 0; i < 12; i ++ ) {
        d.push(lines[i + 2].split(' ').map(x => {return parseFloat(x)}));
    }
    
    let sum = 0;
    for (let i = 0; i < 12; i ++ )
        sum += d[L][i];
    
    if (c == 'M') sum /= 12;
    
    console.log(`${sum.toFixed(1)}`);
});
```

​       

### #753. 平方矩阵 I

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let ns = buf.split('\n').map(x => {return parseInt(x)});
    
    for (let n of ns) {
        if (n === 0) break;
        
        for (let i = 0; i < n; i ++ ) {
            let line = "";
            for (let j = 0; j < n; j ++ ) {
                line += `${Math.min(i + 1, n - i, j + 1, n - j)} `;  // i + 1, n - (i + 1) - 1
            }
            console.log(line);
        }
        
        console.log();
    }
});

```

​       

### #747. 数组的左上半部分

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let lines = buf.split('\n');
    let c = lines[0];
    
    let d = [];
    for (let i  = 0; i < 12; i ++ ) 
        d.push(lines[i + 1].split(' ').map(x => {return parseFloat(x)}));
        
    let sum = 0, cnt = 0;
    for (let i = 0; i < 12; i ++ ) 
        for (let j = 0; j <= 10 - i; j ++ ) {
            sum += d[i][j];
            cnt ++ ;
        }
        
    if (c === 'M') sum /= cnt;
    
    console.log(`${sum.toFixed(1)}`);
});
```

​       

### #756. 蛇形矩阵 

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let [n, m] = buf.split(' ').map((x) => {return parseInt(x)});
    
    let res = [];
    for (let i = 0; i < n; i ++ ) {
        res[i] = [];
        for (let j = 0; j < m; j ++ ) {
            res[i].push(0);
        }
    }
    
    let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
    let x = 0, y = 0, d = 1;
    for (let i = 1; i <= n * m; i ++ ) {
        res[x][y] = i;
        let a = x + dx[d], b = y + dy[d];
        if (a < 0 || a >= n || b < 0 || b >= m || res[a][b]) {
            d = (d + 1) % 4;
            a = x + dx[d], b = y + dy[d];
        }
        x = a, y = b;
    }
    
    for (let i = 0; i < n; i ++ ) {
        let line = "";
        for (let j = 0; j < m; j ++ ) {
            line += `${res[i][j]} `;
        }
        console.log(line);
    }
});
```

​      

## 字符串 

### #760. 字符串长度

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let str = buf.split('\n')[0];
    console.log(str.length);
});
```

​       

### #772. 只出现一次的字符

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let str = buf.split('\n')[0];
    let cnt = {};
    
    for (let c of str) {
        if (c in cnt) cnt[c] ++ ;
        else cnt[c] = 1;
    }
    
    for (let c of str) {
        if (cnt[c] === 1) {
            console.log(c);
            return;
        }
    }
    
    console.log("no");
});
```

​       

### #770. 单词替换

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let [str, a, b] = buf.split('\n');
    let words = str.split(' ');
    
    let res = "";
    for (let w of words) {
        if (w === a) res += b + ' ';
        else res += w + ' ';
    }
    
    console.log(res);
});
```

​       

### #775. 倒排单词

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function() {
    let words = buf.split('\n')[0].split(' ');
    words.reverse();
    
    let res = "";
    for (let w of words) {
        res += w + ' ';
    }
    console.log(res);
});
```

​       

### #779. 最长公共字符串后缀 

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

let reverse = (str) => {
    return str.split('').reverse().join('');
}

process.stdin.on("end", function() {
    let lines = buf.split('\n');
    for (let i = 0; i < lines.length; ) {
        let n = parseInt(lines[i]);
        if (n === 0) break;
        i ++ ;
        
        for (let j = 0; j < n; j ++ ) {
            lines[i + j] = reverse(lines[i + j]);
        }
        
        let res = "";
        for (let k = 0; k < lines[i].length; k ++ ) {
            let is_name = true;
            for (let j = 1; j < n; j ++ ) {
                if (lines[i + j][k] != lines[i][k]) {
                    is_name = false;
                    break;
                }
            }
            if (is_name) {
                res += lines[i][k];
            } else {
                break;
            }
        }
        
        i += n; 
        console.log(reverse(res));
    }
});
```

​       

## 函数

### #x和y的最大值

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

let max = (x, y) => {
    return x > y ? x : y;
}

process.stdin.on("end", function() {
    let [x, y] = buf.split(' ').map(x => {return parseInt(x)});
    
    console.log(max(x, y));
});
```

​       

### #813. 打印矩阵

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

let print2D = (a, r, w) => {
    for (let i = 0; i < r; i ++ ) {
        console.log(a[i].join(' '));
    }
}

process.stdin.on("end", function() {
    let lines = buf.split('\n');
    let [n, m] = lines[0].split(' ').map(x => {return parseInt(x)});
    let a = [];
    for (let i = 0; i < n; i ++ ) {
        a.push(lines[i + 1].split(' ').map(x => {return parseInt(x)}));
    }
    
    print2D(a, n, m);
});

```

​       

### #808. 最大公约数

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

let gcd = (a, b) => {
    return b ? gcd(b, a % b) : a;
}

process.stdin.on("end", function() {
    let [a, b] = buf.split(' ').map(x => {return parseInt(x)});
    console.log(gcd(a, b));
});a
```

​       

### #818. 数组排序

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

let bubble_sort = (q, l, r) => {
    for (let i = r; i > l; i -- ) {
        for (let j = l; j < i; j ++ ) {
            if (q[j] > q[j + 1]) {
                [q[j], q[j + 1]] = [q[j + 1], q[j]];
            }
        }
    }
};

process.stdin.on("end", function() {
    let lines = buf.split('\n');
    let [n, l, r] = lines[0].split(' ').map(x => {return parseInt(x)});
    let q = lines[1].split(' ').map(x => {return parseInt(x)});
    bubble_sort(q, l, r);
    
    console.log(q.join(' '));
});
```

​       

### #823. 排列 

```js
let buf = "";

process.stdin.on("readable", function() {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

let path = [];
let st = [];

let dfs = (u, n) => {
    if (u === n) console.log(path.join(' '));
    else {
        for (let i = 1; i <= n; i ++ ) {
            if (!st[i]) {
                path.push(i);
                st[i] = true;
                dfs(u + 1, n);
                st[i] = undefined;
                path.pop();
            }
        }
    }
}

process.stdin.on("end", function() {
    let n = parseInt(buf);
    dfs(0, n);
});
```

​       

