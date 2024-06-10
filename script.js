//your JS code here. If required.
function removeElement(){
	let options = document.getElementById("colorSelect")
	let value = options.options[options.selectedIndex].value
	let element = document.getElementById(value)
	element.remove()
}