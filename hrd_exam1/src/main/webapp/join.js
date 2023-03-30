function join(){
	if ( document.joinform.custno.value == ""){ 
		alert('회원번호 입력해주세요.')
		document.joinform.custno.focus();
		return false;
		}
	if ( document.joinform.custname.value == ""){ 
		alert('회원성명을 입력해주세요.')
		document.joinform.custname.focus();
		return false;
		}
	if ( document.joinform.phone.value == ""){ 
		alert('전화번호 입력해주세요.')
		document.joinform.phone.focus();
		return false;
		}	
	if ( document.joinform.address.value == ""){ 
		alert('주소 입력해주세요.')
		document.joinform.address.focus();
		return false;
		}	
	if ( document.joinform.joindate.value == ""){ 
		alert('가입일자 입력해주세요.')
		document.joinform.joindate.focus();
		return false;
		}		
	if ( document.joinform.grade.value == ""){ 
		alert('고객등급 입력해주세요.')
		document.joinform.grade.focus();
		return false;
		}	
	if ( document.joinform.city.value == ""){ 
		alert('도시코드 입력해주세요.')
		document.joinform.city.focus();
		return false;
		}
	// 폼 전송
	document.joinform.submit();
	alert('회원등록이 되었습니다.')

	
}