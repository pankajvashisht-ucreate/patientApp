export const quillModules = {
	toolbar: [
		[ 'bold', 'italic', 'underline', 'strike', 'blockquote' ],
		[ { list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' } ],
		[ 'link', 'image' ],
		[ 'clean' ]
	]
};

export const initialState = {
	name: '',
	latitude: '' || 0,
	longitude: '' || 0,
	address: '',
	phone: '',
	profile: '',
	email: '',
};

export const quillFormats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image'
];
