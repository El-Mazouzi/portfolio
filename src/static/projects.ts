import { log } from 'node_modules/astro/dist/core/logger/core'
import imageSources from './img-links'

const PROJECTS = [
	{
		name: 'Yassir',
		links: ['https://e-commerce-app-self.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/e-commerce-app',
		thumbnail: imageSources.projects['Yassir'].images[7],
		images: imageSources.projects['Yassir'].images,
		logo: imageSources.projects['Yassir'].logo,
		description: `
		<br/>
		<h4>Project Description</h4>
		<p><strong>Yassir</strong> is a versatile super app that provides users with a variety of services, from food delivery and grocery shopping to online store purchases. Designed to simplify daily tasks, Yassir offers seamless ordering and delivery options across multiple categories. Users can browse restaurants, grocery stores, and online retailers, place orders, and track them in real-time through the app’s integrated order tracking system.</p>
		<br/>
		<h4>Core Functionality</h4>
		<ul class="list-inside">
			<li>Local database for offline data storage and synchronization.</li>
			<li>Secure user authentication and access control.</li>
			<li>Food delivery and grocery shopping with real-time inventory updates.</li>
			<li>Order tracking with real-time notifications for delivery status.</li>
			<li>Google Maps integration for location tracking.</li>
			<li>Responsive design with light/dark theme support.</li>
			<li>Multi-language support.</li>
		</ul>
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
		thumbnail: imageSources.projects['Hisba-Go'].images[2],
		logo: imageSources.projects['Hisba-Go'].logo,
		images: imageSources.projects['Hisba-Go'].images,
		description: `
			<br/>
			<h4>Project Description</h4>
			<p><strong>Hisba Go</strong> is a mobile app designed to streamline sales processes for businesses using direct distribution. The app offers a range of tools for automating order management, cash collection, and return processing, allowing teams to boost operational efficiency.</p>
			<br/>
			<h4>Core Functionality</h4>
			<ul class="list-inside">
				<li>Local database for offline data storage and synchronization.</li>
				<li>Secure user authentication and access control.</li>
				<li>Location tracking and delivery tracking.</li>
				<li>In-app data encryption for secure transactions.</li>
				<li>Seamless integration with external accounting and CRM systems.</li>
				<li>Data Export and Import.</li>
				<li>Sale Order and Invoice PDF generation and printing.</li>
				<li>Responsive design with light/dark theme support.</li>
				<li>Multi-language support.</li>
			</ul>
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
		<br/>
			<h4>Project Description</h4>
		<p><strong>Your Doctor</strong> is a mobile app designed to connect patients with healthcare providers for online consultations. It offers a seamless platform for scheduling appointments, conducting virtual consultations, and accessing a personalized patient portal. Whether users need a quick diagnosis or ongoing medical advice, Your Doctor provides convenient and secure healthcare services directly through the app.</p>
		<br/>
		<h4>Core Functionality</h4>
		<ul class="list-inside">
			<li>UI and UX design.</li>
		</ul>

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
		thumbnail: imageSources.projects['Honest-Inn'].images[3],
		logo: imageSources.projects['Honest-Inn'].logo,
		images: imageSources.projects['Honest-Inn'].images,
		description: `
		<br/>
			<h4>Project Description</h4>
		<p><strong>Honest-Inn</strong> is a mobile app designed to connect users with job opportunities in the hotel industry. The platform enables users to complete specific hotel-related missions and tasks, earning rewards that can lead to job offers and long-term employment in the sector. With an intuitive interface, Honest-Inn makes it easy for users to find and apply for open positions in various hotels.</p>
		<br/>
		<h4>Core Functionality</h4>
		<ul class="list-inside">
			<li>Secure user authentication and access control.</li>
			<li>Job and mission tracking system with real-time updates.</li>
			<li>In-app data encryption for secure transactions and personal information.</li>
			<li>Seamless integration with external job boards and hotel management systems.</li>
			<li>Push notifications for job and mission updates.</li>
			<li>Responsive design.</li>
		</ul>
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
		thumbnail: imageSources.projects['Hisba-Makhzoun'].images[1],
		logo: imageSources.projects['Hisba-Makhzoun'].logo,
		images: imageSources.projects['Hisba-Makhzoun'].images,
		description: `
		<br/>
			<h4>Project Description</h4>
		<p><strong>Hisba Makhzoun</strong> is a mobile app designed to streamline warehouse operations, including order management, preparation, and tracking. The app allows businesses to manage inventory, track orders in real-time, and synchronize data across multiple platforms. With features that support both order fulfillment and inventory control, Hisba Makhzoun enhances operational efficiency for businesses of all sizes.</p>
		<br/>
		<h4>Core Functionality</h4>
		<ul class="list-inside">
			<li>Secure user authentication and role-based access control.</li>
			<li>Order management and tracking with real-time updates.</li>
			<li>Inventory management with automated stock level tracking.</li>
			<li>Seamless online synchronization to ensure up-to-date data across all devices.</li>
			<li>Push notifications for order updates and inventory alerts.</li>
			<li>Synchronization across with multiple platforms.</li>
			<li>In-app notifications for order updates and inventory alerts.</li>
			<li>Responsive design with light/dark theme support.</li>
			<li>Multi-language support.</li>
		</ul>
		`,
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
		thumbnail: imageSources.projects['Mbio-Manager'].images[1],
		images: imageSources.projects['Mbio-Manager'].images,
		logo: imageSources.projects['Mbio-Manager'].logo,
		description: `
		<br/>
			<h4>Project Description</h4>
		<p><strong>MBio-Manager</strong> is a mobile app tailored for the logistics industry, designed to streamline logistics management and enhance delivery operations. The app enables users to manage logistic missions, track deliveries in real-time, and optimize routes for improved efficiency. With a user-friendly interface, MBio-Manager empowers logistics professionals to coordinate their efforts effectively and ensure timely deliveries.</p>
		<br/>
		<h4>Core Functionality</h4>
		<ul class="list-inside">
			<li>Dashboard with real-time data updates.</li>
			<li>Secure user authentication and access control.</li>
			<li>Logistic mission management with task assignment and tracking.</li>
			<li>Real-time delivery tracking with GPS integration.</li>
			<li>In-app notifications for updates on delivery status and mission changes.</li>
			<li>Responsive design with light/dark theme support.</li>
			<li>Multi-language support.</li>
		</ul>
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
		thumbnail: imageSources.projects['Logistix-Driver'].images[1],
		images: imageSources.projects['Logistix-Driver'].images,
		logo: imageSources.projects['Logistix-Driver'].logo,
		description: `
		<br/>
			<h4>Project Description</h4>
		<p><strong>Logistic Driver</strong> is a mobile app designed to assist drivers in the logistics industry with their delivery tasks. The app provides essential tools for managing deliveries, tracking packages in real-time, and optimizing routes to ensure timely arrivals. With its intuitive interface, Logistic Driver enhances communication between drivers and logistics managers, streamlining the delivery process from start to finish.</p>
		<br/>
		<h4>Core Functionality</h4>
		<ul class="list-inside">
			<li>Secure user authentication and access control for drivers.</li>
			<li>Delivery management with task assignments and updates.</li>
			<li>Real-time delivery tracking with GPS integration.</li>
			<li>In-app notifications for delivery updates and changes in schedule.</li>
			<li>Real-time synchronization across multiple platforms.</li>
			<li>Responsive design with light/dark theme support.</li>
			<li>Multi-language support.</li>
		</ul>
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
		thumbnail: imageSources.projects['Mbio-Logistic'].images[2],
		images: imageSources.projects['Mbio-Logistic'].images,
		logo: imageSources.projects['Mbio-Logistic'].logo,
		description: `
		<br/>
			<h4>Project Description</h4>
		<p><strong>Mbio-Logistic</strong> is a specialized mobile app designed for laboratory management and logistic tracking within the healthcare sector. This app streamlines the management of laboratory samples and patient analyses, ensuring accurate tracking and efficient handling of laboratory logistics. With features that facilitate real-time monitoring and management, Mbio-Logistic enhances operational efficiency in laboratory environments.</p>
		<br/>
		<h4>Core Functionality</h4>
		<ul class="list-inside">
			<li>Secure user authentication and access control for lab personnel.</li>
			<li>Sample tracking system with real-time updates on laboratory status.</li>
			<li>Laboratory management tools for efficient workflow and inventory tracking.</li>
			<li>Patient analysis tracking with detailed reporting features.</li>
			<li>Patient Management and Analysis.</li>
			<li>Real-time synchronization across multiple platforms.</li>
			<li>In-app notifications for important updates and changes in status.</li>
			<li>Responsive design with light/dark theme support.</li>
			<li>Multi-language support.</li>
		</ul>
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
		thumbnail: imageSources.projects['Mantoudj-Bladi'].images[1],
		logo: imageSources.projects['Mantoudj-Bladi'].logo,
		images: imageSources.projects['Mantoudj-Bladi'].images,
		description: `
		<br/>
			<h4>Project Description</h4>
		<p><strong>Mantoudj-Bladi</strong> is an innovative digital platform designed to revolutionize the agriculture industry by empowering local farmers and facilitating direct trade between producers and markets. With a focus on sustainable farming practices and efficient supply chain management, Mantoudj-Bladi connects farmers with buyers, promotes local agriculture, and supports a fair marketplace for agricultural products. The platform aims to enhance the livelihood of farmers while promoting sustainable agriculture.</p>
		<br/>
		<h4>Core Functionality</h4>
		<ul class="list-inside">
			<li>Secure user authentication and access control.</li>
			<li>Supply chain management tools for efficient product tracking and delivery.</li>
			<li>Farmer empowerment features such as pricing transparency and fair trade support.</li>
			<li>Sustainable farming practices integration and tracking tools.</li>
			<li>Marketplace for buying and selling agricultural products.</li>
			<li>In-app notifications for real-time updates on orders and market changes.</li>
			<li>Responsive design with light/dark theme support.</li>
			<li>Multi-language support for global accessibility.</li>
		</ul>
	  `,
		tags: [
			'AgriTech',
			'FarmToMarket',
			'AgriculturePlatform',
			'DirectTrade',
			'FarmerEmpowerment',
			'SustainableFarming',
			'LocalAgriculture',
			'SupplyChain',
			'FarmersMarketplace',
			'AgriBusiness',
			'DigitalAgriculture',
		],
	},
	{
		name: 'Hisba Inventory',
		links: ['https://dashboard-nextjs-weld.vercel.app/'],
		repo: 'https://github.com/riyadh-dev/dashboard-nextjs',
		thumbnail: imageSources.projects['Hisba-Inventory'].images[1],
		logo: imageSources.projects['Hisba-Inventory'].logo,
		images: imageSources.projects['Hisba-Inventory'].images,
		description: `
		<br/>
			<h4>Project Description</h4>
		<p><strong>Hisba Inventory</strong> is a comprehensive inventory management solution designed to streamline the process of tracking and managing inventory for businesses of all sizes. With features that enhance accuracy and efficiency, Hisba Inventory ensures that companies can monitor stock levels, track inventory movement, and make informed decisions in real-time. The platform is built to optimize the entire inventory management process, from procurement to sale, ensuring that businesses operate smoothly and without disruptions.</p>
		<br/>
		<h4>Core Functionality</h4>
		<ul class="list-inside">
			<li>Real-time inventory updates and notifications on stock levels.</li>
			<li>Detailed reporting tools for inventory analysis and forecasting.</li>
			<li>Inventory movement tracking from procurement to sale.</li>
			<li>User-friendly interface for easy inventory management.</li>
			<li>Barcode scanning support for fast and accurate inventory tracking.</li>
			<li>Responsive design with light/dark theme support.</li>
			<li>Multi-language support for global business use.</li>
		</ul>
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
		<br/>
			<h4>Project Description</h4>
		<p><strong>Online Store</strong> is a robust e-commerce platform designed to provide a seamless shopping experience for customers and efficient order management for businesses. The platform enables businesses to manage their online store operations, track orders in real time, and ensure smooth communication with customers. With user-friendly tools for inventory, payments, and shipping, the *Online Store* app simplifies the process of running an online business and enhances customer satisfaction.</p>
		<br/>
		<h4>Core Functionality</h4>
		<ul class="list-inside">
			<li>Secure user authentication.</li>
			<li>Order management and synchronization.</li>
			<li>Real-time order tracking for customers.</li>
			<li>Order history and status tracking.</li>
			<li>Shipping integration for streamlined order fulfillment and delivery tracking.</li>
			<li>Responsive design with light/dark theme support.</li>
			<li>Multi-language support for global online stores.</li>
		</ul>
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
