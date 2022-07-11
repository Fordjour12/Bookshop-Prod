import 'boxicons'

// BoxIconsColor declaration
const BoxIconColor = 'white'
// BoxIconsAnimation declaration
// const BoxIconsAnimation = 'tada-hover'
const BoxIconsAnimation = ''
const BoxIconsSize = ''

export const NavigationData = [
	{
		icon: (
			// eslint-disable-next-line react/react-in-jsx-scope
			<box-icon
				color={BoxIconColor}
				animation={BoxIconsAnimation}
				type='solid'
				name='dashboard'
				size={BoxIconsSize}
			></box-icon>
		),
		link: '/',
		text: 'Home',
	},
	{
		icon: (
			// eslint-disable-next-line react/react-in-jsx-scope
			<box-icon
				color={BoxIconColor}
				animation={BoxIconsAnimation}
				size={BoxIconsSize}
				name='library'
			></box-icon>
		),
		link: '/library',
		text: 'Library',
	},
	{
		icon: (
			// eslint-disable-next-line react/react-in-jsx-scope
			<box-icon
				color={BoxIconColor}
				animation={BoxIconsAnimation}
				size={BoxIconsSize}
				type='solid'
				name='category'
			></box-icon>
		),
		link: '/categories',
		text: 'Categories',
	},
	{
		icon: (
			// eslint-disable-next-line react/react-in-jsx-scope
			<box-icon
				color={BoxIconColor}
				animation={BoxIconsAnimation}
				size={BoxIconsSize}
				type='solid'
				name='user'
			></box-icon>
		),
		link: 'authors',
		text: 'Authors',
	},
	{
		icon: (
			// eslint-disable-next-line react/react-in-jsx-scope
			<box-icon
				color={BoxIconColor}
				animation={BoxIconsAnimation}
				size={BoxIconsSize}
				type='solid'
				name='star'
			></box-icon>
		),
		link: 'recommended',
		text: 'Recommended',
	},
]
