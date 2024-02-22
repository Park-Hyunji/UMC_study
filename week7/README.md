interface <br>
타입스크립트에서는 새로운 타입을 정할 때 type키워드와 interface 키워드를 사용한다.<br> 
interface에는 타입스크립트만의 특별한 지정자를 추가할 수 있으며 interface 안의 항목에 함수 형태도 지정할 수 있음<br>
interface는 type 과 확장정에 있어서 차이가 있는데 interface방식의 객체 지정은 새로운 항목을 자유롭게 추가할 수 있다.
extends 키워드로 확장도 가능

<br><br><Br>
Class <br>
- 생성자 함수가 없으면, 디폴트 생성자가 불린다
- 클래스의 프로퍼티 혹은 멤버 변수가 정의되어 있지만, 값을 대입하지 않으면 undefined이다
- 접근제어자 (Access Modifier)는 public이 디폴트이다.
<br><br>
- 클래스와 프로퍼티의 접근 제어자-
private으로 설저된 프로퍼티는 dot으로 접근할 수 있다 <br>
클래스 내부에서는 private 프로퍼티를 사용할 수 있다<br>
private이 붙은 변수나 함수는 _를 이름앞에 붙이는데, 이는 문법이 아니라 널리 쓰이는 코딩 컨벤션이다
<br><br>
클래스의 프로퍼티를 선언과 동시에 값을 할당하는 방법도 있다<br>
생성자가 불리기 전에 이미 프로퍼티의 값이 저장되어 있음을 알 수 있다
<br><br>
클래스 내부에 작성된 메서드는 public이 디폴트<br>
arow function 으로 작성 가능<br>
private을 이용하여 클래스 외부에서 접근 불가<br>

<br><br><br>
Generic
- 추상 형태의 type. 재사용 가능한 컴포넌트를 생성하는 도구상자의 주요 도구 중 하나이다. 
Generic Array<Br>
-hello 함수의 제네릭 타입 []을 이용하여 배열로 사용할 수 있음
