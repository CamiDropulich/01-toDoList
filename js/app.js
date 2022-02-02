

const btn = document.getElementById('btn')
const lista = document.getElementById('lista')
var item = document.getElementById('item')
var checkbtn = document.getElementById('checkbtn')


 const cantidadMáxTareas = 7
 var cantidadTareas = 0

/*btn.addEventListener('click', function(){
	if(item.value === ''){
		alert('Please add a task to do.')
	}else if(cantidadTareas <= cantidadMáxTareas){
		lista.innerHTML += '<li>' + '*' + item.value + '<i class="icon">X</i>' + '<ion-icon name="checkmark-outline" class="icon2"></ion-icon>' + '  ' + '<hr>' + '</li>' 
		item.value = ''
		cantidadTareas++
	}else{
		alert('You have too many tasks!')
	}
})*/


btn.addEventListener('click', function(){
	if(item.value === ''){
		alert('Please add a task to do.')
	}else if(cantidadTareas <= cantidadMáxTareas && checkbtn.checked == true){
		lista.innerHTML += '<li>' + '*' + item.value +'<i class="icon">X</i>' + '<ion-icon name="checkmark-outline" class="icon2"></ion-icon>' + '<img src="img/alarma.png" id="alarmaLista">' + '  ' + '<hr>' + '</li>' 
		item.value = ''
		checkbtn.checked = false
		cantidadTareas++
	}else if(cantidadTareas <= cantidadMáxTareas && checkbtn.checked == false){
		lista.innerHTML += '<li>' + '*' + item.value + '<i class="icon">X</i>' + '<ion-icon name="checkmark-outline" class="icon2"></ion-icon>' + '  ' + '<hr>' + '</li>' 
		item.value = ''
		cantidadTareas++
	}else{
		alert('You have too many tasks!')
	}
})


lista.addEventListener('click', function(e){
	if(e.target.localName == 'i'){
		e.target.parentElement.remove()
		cantidadTareas--
	}else if(e.target.localName == 'ion-icon'){
		e.target.classList.toggle('checked')
	}
})

