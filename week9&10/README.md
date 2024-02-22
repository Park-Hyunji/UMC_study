week9 & week10

<p>Nest.js API 구축</p>
<br><br>
Nest.js : Node.js의 프레임워크로 Express 위에 움직인다
<br>
Nest.js는 Node.js와는 다르게 프로젝트 생생 시 구조와 룰이 있음. 노드는 모든게 자유<br>
<br>

NestJS 프로젝트를 만들면 기본적으로 구축되는 것들이 있음 : main, appmodule, controllers, service 등<br>
<br>
<p>새 프로젝트 생성 : Nest new -> 프로젝트명 작성</p>
controller와 service 등을 수정<br>
<br>
app.module.ts<br>
앱 모듈은 모든 것의 루트 모듈<br>
모듈은 어플리케이션의 일부<br>
앱 모듈에서는 우리가 하는 모든 것을 import<br>

<br>
app.controller.ts<br>
Get 데코레이터를 보면 appService.getHello()를 사용<br>
왜 이렇게 할까?<br>
=> NestJS는 콘트롤러를 비즈니스 로직이랑 구분 짓고 싶어하기 때문<br>
컨트롤러는 그냥 url을 가져오는 역할일 뿐. 나머지 비즈니스 로직은 서비스에<br>
<br>
app.service.ts<br>
서비스는 일반적으로 실제로 function을 가지는 부분<br>
<br>


------------------------------
<br>
package.json<br>
jest : 자바스크립트를 아주 쉽게 테스팅하는 npm 패키지<br>
.spec.ts 는 테스트를 포함하는 파일<br>

<br>
<p>테스트 방법</p><br>
npm run test: ~<br>
e2e(end-to-end) 테스트라면 npm run test:2e2
<br>

