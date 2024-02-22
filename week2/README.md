추가 스터디 2주차 핵심개념 정리

CallBack 함수  
Synchoronous callback : 동기 콜백  
Asynchoronous callback : 비동기 콜백  

  
Promise  
비동기 작업을 간단하게 처리할 수 있도록 하는 object(객체)  
비동기 작업의 성공 또는 실패와 같은 결과를 나타내고 코드를 더 간결하기에 용이함  
비동기적인 부분에서 콜백함수 대신 유용하게 쓰인다  
state, producer와 consumer의 차이점을 이해하자  
*대기(Pending): Promise 객체가 생성되고 아직 처리되지 않은 초기 상태  
  


동기/비동기  
async & await  
동기 : 동기적 작업은 순차적으로 진행되며, 한 작업이 완료되기를 기다린 후 다음 작업을 시작  
비동기 : 비동기적 작업은 작업이 시작되고 완료될 때까지 기다리지 않고 다른 작업을 계속 수행  
프로미스를 조금 더 깔끔하게 쓸 수 있도록 도와주는 역할  
async라는 키워드를 함수 앞에 쓰면 코드 블록이 자동으로 promise로 바뀐다  
