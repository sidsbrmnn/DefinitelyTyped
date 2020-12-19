import tinytime from 'tinytime';

const template = tinytime('The time is {h}:{mm}:{ss}{a}.');
template.render(new Date());
