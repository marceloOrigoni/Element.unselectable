/*
---

description:     
  - Adds unselectable property to any element, making the text in the Element unselectable

authors:
  - Marcelo Origoni

version:
  - 1.0
  
license:
  - MIT-style license

requires:
  - [Element]

provides: 
  - string

...
*/

Element.implement({
	unselectable: function(){
		if (typeof $(this).onselectstart != 'undefined') {
			$(this).addEvent('selectstart',function() { return false; });
		} else if (typeof $(this).style.MozUserSelect != 'undefined') {
			$(this).setStyle('MozUserSelect', 'none');
		} else if (typeof $(this).style.WebkitUserSelect != 'undefined') {
			$(this).setStyle('WebkitUserSelect', 'none');
		} else if (typeof $(this).unselectable  != 'undefined') {
			$(this).setProperty('unselectable','on');
		}		
	}
});