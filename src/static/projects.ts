import { log } from 'node_modules/astro/dist/core/logger/core'
import imageSources from './img-links'

const PROJECTS = [
	{
		name: 'Yassir',
		links: ['https://e-commerce-app-self.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/e-commerce-app',
		thumbnail: imageSources.projects['Yassir'].images[0],
		images: imageSources.projects['Yassir'].images,
		logo: imageSources.projects['Yassir'].logo,
		description: `
		This project, <strong>Project Name</strong>, focuses on developing a modern web application.
		<br>
		<br>
		Key Features:
		<ul>
		  <li><strong>User Authentication</strong> with multiple roles</li>
		  <li><strong>Real-time data sync</strong> using WebSockets</li>
		  <li>Integration with <strong>third-party APIs</strong></li>
		  <li>Responsive design for <strong>mobile and desktop</strong></li>
		</ul>
		The project is built using the <strong>MERN stack</strong>.
	  `,
		tags: [
			// tags that describes the app purpose
			'Yassir App',
			'Super App',
			'Food Delivery',
			'Grocery Store',
			'Online Store',
			'Order Tracking',
		],
	},
	{
		name: 'Hisba-Go',
		links: ['https://e-commerce-app-self.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/e-commerce-app',
		thumbnail: imageSources.projects['Hisba-Go'].images[0],
		logo: imageSources.projects['Hisba-Go'].logo,
		images: imageSources.projects['Hisba-Go'].images,
		description: `
		This project, <strong>Project Name</strong>, focuses on developing a modern web application.
		<br>
		<br>
		Key Features:
		<ul>
		  <li><strong>User Authentication</strong> with multiple roles</li>
		  <li><strong>Real-time data sync</strong> using WebSockets</li>
		  <li>Integration with <strong>third-party APIs</strong></li>
		  <li>Responsive design for <strong>mobile and desktop</strong></li>
		</ul>
		The project is built using the <strong>MERN stack</strong>.
	  `,
		tags: [
			'Sales Automation',
			'Direct Distribution',
			'Order Management',
			'Cash Collection System',
			'Return Processing',
			'Streamlined Operations',
			'Sales Tracking System',
		],
	},
	{
		name: 'Your Doctor',
		links: ['https://e-commerce-app-self.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/e-commerce-app',
		thumbnail: imageSources.projects['doctorek'].images[0],
		images: imageSources.projects['doctorek'].images,
		logo: imageSources.projects['doctorek'].logo,
		description: `
		This project, <strong>Project Name</strong>, focuses on developing a modern web application.
		<br>
		<br>
		Key Features:
		<ul>
		  <li><strong>User Authentication</strong> with multiple roles</li>
		  <li><strong>Real-time data sync</strong> using WebSockets</li>
		  <li>Integration with <strong>third-party APIs</strong></li>
		  <li>Responsive design for <strong>mobile and desktop</strong></li>
		</ul>
		The project is built using the <strong>MERN stack</strong>.
	  `,
		tags: [
			// tags that describes the app purpose
			'Mobile App',
			'Online Doctor',
			'Online Appointment',
			'Doctor Consultation',
			'Patient Portal',
		],
	},

	{
		name: 'Honest-Inn',
		links: ['https://dashboard-nextjs-weld.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/dashboard-nextjs',
		thumbnail: imageSources.projects['Honest-Inn'].images[0],
		logo: imageSources.projects['Honest-Inn'].logo,
		images: imageSources.projects['Honest-Inn'].images,
		description: `
		This project, <strong>Project Name</strong>, focuses on developing a modern web application.
		<br>
		<br>
		Key Features:
		<ul>
		  <li><strong>User Authentication</strong> with multiple roles</li>
		  <li><strong>Real-time data sync</strong> using WebSockets</li>
		  <li>Integration with <strong>third-party APIs</strong></li>
		  <li>Responsive design for <strong>mobile and desktop</strong></li>
		</ul>
		The project is built using the <strong>MERN stack</strong>.
	  `,
		tags: [
			// tags that describes the app purpose
			'Hotel Industry',
			'Hotel Missions',
			'Missions Finder',
			'Job Opportunities',
			'Job Finder',
		],
	},
	{
		name: 'Hisba-Makhzoun',

		links: ['https://dashboard-nextjs-weld.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/dashboard-nextjs',
		thumbnail: imageSources.projects['Hisba-Makhzoun'].images[0],
		logo: imageSources.projects['Hisba-Makhzoun'].logo,
		images: imageSources.projects['Hisba-Makhzoun'].images,
		description: `
		This project, <strong>Project Name</strong>, focuses on developing a modern web application.
		<br>
		<br>
		Key Features:
		<ul>
		  <li><strong>User Authentication</strong> with multiple roles</li>
		  <li><strong>Real-time data sync</strong> using WebSockets</li>
		  <li>Integration with <strong>third-party APIs</strong></li>
		  <li>Responsive design for <strong>mobile and desktop</strong></li>
		</ul>
		The project is built using the <strong>MERN stack</strong>.`,
		tags: [
			'Order Management',
			'Order Preparation',
			'Order Tracking',
			'Online Synchronization',
			'Inventory Management',
		],
	},

	{
		name: 'MBio-Manager',
		links: ['https://dashboard-nextjs-weld.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/dashboard-nextjs',
		thumbnail: imageSources.projects['Mbio-Manager'].images[0],
		images: imageSources.projects['Mbio-Manager'].images,
		logo: imageSources.projects['Mbio-Manager'].logo,
		description: `
		This project, <strong>Project Name</strong>, focuses on developing a modern web application.
		<br>
		<br>
		Key Features:
		<ul>
		  <li><strong>User Authentication</strong> with multiple roles</li>
		  <li><strong>Real-time data sync</strong> using WebSockets</li>
		  <li>Integration with <strong>third-party APIs</strong></li>
		  <li>Responsive design for <strong>mobile and desktop</strong></li>
		</ul>
		The project is built using the <strong>MERN stack</strong>.
	  `,
		tags: [
			// tags that describes the app purpose
			'Logistic Manager',
			'Logistics Industry',
			'Logistic Missions',
			'Logistic Delivery',
			'Delivery Tracking',
		],
	},

	{
		name: 'Logistic Driver',
		links: ['https://dashboard-nextjs-weld.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/dashboard-nextjs',
		thumbnail: imageSources.projects['Logistix-Driver'].images[0],
		images: imageSources.projects['Logistix-Driver'].images,
		logo: imageSources.projects['Logistix-Driver'].logo,
		description: `
		This project, <strong>Project Name</strong>, focuses on developing a modern web application.
		<br>
		<br>
		Key Features:
		<ul>
		  <li><strong>User Authentication</strong> with multiple roles</li>
		  <li><strong>Real-time data sync</strong> using WebSockets</li>
		  <li>Integration with <strong>third-party APIs</strong></li>
		  <li>Responsive design for <strong>mobile and desktop</strong></li>
		</ul>
		The project is built using the <strong>MERN stack</strong>.
	  `,
		tags: [
			// tags that describes the app purpose
			'Logistic Driver',
			'Logistics Delivery',
			'Delivery Tracking',
			'Delivery Management',
			'Delivery',
		],
	},
	{
		name: 'Mbio-Logistic',
		links: ['https://dashboard-nextjs-weld.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/dashboard-nextjs',
		thumbnail: imageSources.projects['Mbio-Logistic'].images[0],
		images: imageSources.projects['Mbio-Logistic'].images,
		logo: imageSources.projects['Mbio-Logistic'].logo,
		description: `
		This project, <strong>Project Name</strong>, focuses on developing a modern web application.
		<br>
		<br>
		Key Features:
		<ul>
		  <li><strong>User Authentication</strong> with multiple roles</li>
		  <li><strong>Real-time data sync</strong> using WebSockets</li>
		  <li>Integration with <strong>third-party APIs</strong></li>
		  <li>Responsive design for <strong>mobile and desktop</strong></li>
		</ul>
		The project is built using the <strong>MERN stack</strong>.
	  `,
		tags: [
			// tags that describes the app purpose
			'Mbio-Logistic',
			'Mbio-Logistic Tracking',
			'Mbio-Logistic Management',
			'Laboratory Management',
			'Patient Analysis',
		],
	},
	{
		name: 'Mantoudj-Bladi',
		links: ['https://dashboard-nextjs-weld.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/dashboard-nextjs',
		thumbnail: imageSources.projects['Mantoudj-Bladi'].images[0],
		logo: imageSources.projects['Mantoudj-Bladi'].logo,
		images: imageSources.projects['Mantoudj-Bladi'].images,
		description: `
		This project, <strong>Project Name</strong>, focuses on developing a modern web application.
		<br>
		<br>
		Key Features:
		<ul>
		  <li><strong>User Authentication</strong> with multiple roles</li>
		  <li><strong>Real-time data sync</strong> using WebSockets</li>
		  <li>Integration with <strong>third-party APIs</strong></li>
		  <li>Responsive design for <strong>mobile and desktop</strong></li>
		</ul>
		The project is built using the <strong>MERN stack</strong>.
	  `,
		tags: [
			// tags that describes the app purpose
			'Mbio-Logistic',
			'Mbio-Logistic Tracking',
			'Mbio-Logistic Management',
			'Laboratory Management',
			'Patient Analysis',
		],
	},
	{
		name: 'Hisba Inventory',
		links: ['https://dashboard-nextjs-weld.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/dashboard-nextjs',
		thumbnail: imageSources.projects['Hisba-Inventory'].images[0],
		logo: imageSources.projects['Hisba-Inventory'].logo,
		images: imageSources.projects['Hisba-Inventory'].images,
		description: `
		This project, <strong>Project Name</strong>, focuses on developing a modern web application.
		<br>
		<br>
		Key Features:
		<ul>
		  <li><strong>User Authentication</strong> with multiple roles</li>
		  <li><strong>Real-time data sync</strong> using WebSockets</li>
		  <li>Integration with <strong>third-party APIs</strong></li>
		  <li>Responsive design for <strong>mobile and desktop</strong></li>
		</ul>
		The project is built using the <strong>MERN stack</strong>.
	  `,
		tags: [
			// tags that describes the app purpose
			'Hisba Inventory',
			'Hisba Inventory Management',
			'Inventory Management',
			'Inventory Tracking',
			'Inventory',
		],
	},
	{
		name: 'Online Store',
		links: ['https://dashboard-nextjs-weld.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/dashboard-nextjs',
		thumbnail: imageSources.projects['Online Store'].images[0],
		images: imageSources.projects['Online Store'].images,
		logo: imageSources.projects['Online Store'].logo,
		description: `
		This project, <strong>Project Name</strong>, focuses on developing a modern web application.
		<br>
		<br>
		Key Features:
		<ul>
		  <li><strong>User Authentication</strong> with multiple roles</li>
		  <li><strong>Real-time data sync</strong> using WebSockets</li>
		  <li>Integration with <strong>third-party APIs</strong></li>
		  <li>Responsive design for <strong>mobile and desktop</strong></li>
		</ul>
		The project is built using the <strong>MERN stack</strong>.
	  `,
		tags: [
			// tags that describes the app purpose
			'Online Store',
			'Online Order Tracking',
			'Online Order Management',
		],
	},
]

export default PROJECTS
