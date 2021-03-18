
const prev_mobile = document.querySelector('.left');
const next_mobile = document.querySelector('.right');

let startIndex_mob = 0;

let slider_mobile = (index) => {
	pic.src = slide[index].pic;
	city.innerHTML = slide[index].city;
	area.innerHTML = slide[index].area;
	time.innerHTML = slide[index].time;
	cost.innerHTML = slide[index].cost;
};

next_mobile.addEventListener('click', () => {
	if (startIndex_mob === currIndex - 1) {
		startIndex_mob = 0;
	} else {
		startIndex_mob += 1;
	}
	slider_mobile(startIndex_mob);
});

prev_mobile.addEventListener('click', () => {
	if (startIndex_mob === 0) {
		startIndex_mob = currIndex - 1;
	} else {
		startIndex_mob -= 1;
	}
	slider_mobile(startIndex_mob);
});

navigateSection.forEach((item, i) => {
	item.addEventListener('click', () => {
		slider_mobile(i);
	});
});