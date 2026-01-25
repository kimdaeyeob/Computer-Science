# -*- coding: utf-8 -*-
String  = input("문자열 입력: ")

# TODO: 새사용자로부터 입력받은 문자열에서 처음과 끝 3글자를 추출한 다음 합쳐서 출력하기
m = String[0:3] + String[-3:]

print(m)
