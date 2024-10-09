import astro from '~/assets/images/logos/astro.svg'
import bootstrap from '~/assets/images/logos/bootstrap.png'
import chakraUI from '~/assets/images/logos/chakra-ui.png'
import css from '~/assets/images/logos/css.png'
import html from '~/assets/images/logos/html.png'
import jotai from '~/assets/images/logos/jotai.png'
import javascript from '~/assets/images/logos/js.png'
import mui from '~/assets/images/logos/mui.svg'
import nextjs from '~/assets/images/logos/next.png'
import reactQuery from '~/assets/images/logos/react-query.svg'
import react from '~/assets/images/logos/react.svg'
import recoilJS from '~/assets/images/logos/recoil.png'
import sass from '~/assets/images/logos/sass.png'
import shadcn from '~/assets/images/logos/shadcn.png'
import solidjs from '~/assets/images/logos/solid.svg'
import tailwind from '~/assets/images/logos/tailwind.svg'
import tanstack from '~/assets/images/logos/tanstack.png'
import typescript from '~/assets/images/logos/ts.png'

import drizzle from '~/assets/images/logos/drizzle.png'
import express from '~/assets/images/logos/express.png'
import go from '~/assets/images/logos/go.svg'
import graphQL from '~/assets/images/logos/graphql.png'
import mongodb from '~/assets/images/logos/mongodb.svg'
import node from '~/assets/images/logos/node.png'
import postgresql from '~/assets/images/logos/postgres.png'
import trpc from '~/assets/images/logos/trpc.png'
import webSocket from '~/assets/images/logos/ws.png'

import csharp from '~/assets/images/logos/csharp.png'
import dotnet from '~/assets/images/logos/dotnet.svg'
import xaml from '~/assets/images/logos/xaml.png'

import parcelJS from '~/assets/images/logos/parcel.png'
import turborepo from '~/assets/images/logos/turborepo.svg'
//
import flutter from '~/assets/images/logos/flutter.svg'
import dart from '~/assets/images/logos/dart.png'
import firebase from '~/assets/images/logos/firebase.png'
import realm from '~/assets/images/logos/realm.png'
import agile from '~/assets/images/logos/agile.png'
import github from '~/assets/images/logos/github.png'
import postman from '~/assets/images/logos/postman.png'
import kotlin from '~/assets/images/logos/kotlin.png'
import android from '~/assets/images/logos/android-studio.webp'
import mysql from '~/assets/images/logos/mysql.jpg'
import jetPackCompose from '~/assets/images/logos/jet-pack-compose.png'

const SKILLS = [
	{
		catName: 'Programming Languages & Frameworks',
		catImageName: 'frontend',
		skills: [
			{
				name: 'Flutter',
				image: flutter,
			},
			{
				name: 'Dart',
				image: dart,
			},
			{
				name: 'Android',
				image: android,
			},
			{
				name: 'Kotlin',
				image: kotlin,
			},
			{
				name: 'Jet Pack',
				image: jetPackCompose,
			},
			{
				name: 'Java Script',
				image: javascript,
			},
		],
	},
	{
		catName: 'Backend & Database',
		catImageName: 'backend',
		skills: [
			{
				name: 'NodeJS',
				image: node,
			},

			{
				name: 'MongoDB',
				image: mongodb,
			},

			{
				name: 'ExpressJS',
				image: express,
				dark: true,
			},
			{
				name: 'MySQL',
				image: mysql,
			},
			{
				name: 'Firebase',
				image: firebase,
			},
			{
				name: 'Realm',
				image: realm,
			},
			{ name: 'WebSockets', image: webSocket, dark: true },
		],
	},
	{
		catName: 'Tools & Version Control',
		catImageName: 'desktop',
		skills: [
			{
				name: 'Github',
				image: github,
			},

			{
				name: 'Postman',
				image: postman,
			},
			{
				name: 'Agile',
				image: agile,
			},
		],
	},
]

export default SKILLS
