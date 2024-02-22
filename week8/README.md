
<iterator><br>

for..in <br>
배열을 순회할 때는 사용하지 않을 것<br>

<br>
index가 number가 아니라 string으로 나온다<br>
객체를 순회할 때 - for(const prop of Object.keys(obj))도 사용할 수 있다<br>
<br>
- Symbol.iterator -<br>
프로퍼티이며, 함수가 구현되어 있으면, iterable 이라고 한다<br>
Array, Map, Set, String, Int32Array, Unit32Array, etc.에는 내장된 구현체가 있으므로 이터러블 하다<br>
그냥 객체는 이터러블하지 않다<br>
이터레이블를 통해 이터러블한 객체의 Symbol.iterator 함수를 호출<br>
<br><br>

Decorator<br>
Class Decorator<br>
Mathod Decorator<br>
Property Decorator<br>
Parameter Decorator

<br><br>
<type - interface><br>
- 타입 추론<Br>
기본적으로 타입을 명시적으로 쓰지 않을 때 추론하는 방법에 대한 규칙<br>
명시적으로 쓰는 것은 타입 추론이 아니라 코드를 읽기 좋게 하는 지름길<br>

let은 기본적으로 우리가 아는 기본 자료형으로 추론<br>
const는 리터럴 타입으로 추론<br>
오브젝트 타입을 쓰지 않으면, 프로퍼티는 let 처럼 추론<Br>
const person={name: 'Mark',age:35};면 person=>{name: string; age:number;}로 추론
대부분은 추론이 쉽다<bt>
단순 변수, structuring, destructuring  
array, 함수의 리턴에서는 원하는대로 얻기가 힘들다
