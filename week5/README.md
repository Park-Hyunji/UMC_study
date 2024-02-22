영속성


JDBC ( JAVA DATABASE CONNECTIVITY) JAVA API

간단한 SQL을 실행하는 데도 중복된 코드를 반복적으로 사용

DB에 따라 일관성 없는 정보를 가진 채로 SQLException처리



Persistence Framework : 
JDC 프로그래밍의 복잡함이나 번거로움 없이 간단한 작업만으로 데이터 베이스와 연동되는 시스템을 빠르게 개발

ORM, SQL MAPPER 으로 나눌 수 있다. 



SQL MAPPER : SQL을 직접 작성. SQL문과 객체의 필드를 매핑하여 데이터를 객체화

문제점 : 특정DB에 종속적으로 사용하기 쉽다

테이블마다 비슷한 CRUD SQL = DAO 개발이 매우 반복되는 작업, 패러다임 불일치 문제



ORM (Object-relational mapping)(객체 관계 매핑)

객체와 관계형DB를 맵핑

SQL Query가 아닌 직관적인 코드(메서드)로 데이터 조작

데이터베이스와 객체 지향 프로그래밍 언어 간의 호환되지 않는 데이터를 변환하는 프로그래밍 기법이다. 객체 지향 언어에서 사용할 수 있는 "가상" 객체 데이터베이스를 구축하는 방법
EX) JPA
JPA 표준 인터페이스
