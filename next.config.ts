import { createClient, groq } from 'next-sanity'
// import { token } from '@/lib/sanity/token'
import type { NextConfig } from 'next'

const client = createClient({
	projectId: process.env.SANITY_STUDIO_SANITY_PROJECT_ID,
	dataset: process.env.SANITY_STUDIO_SANITY_DATASET,
	// token, // for private datasets
	apiVersion: '2024-11-01',
	useCdn: true,
})

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
		],
	},

	async redirects() {
		return await client.fetch(groq`*[_type == 'redirect']{
			source,
			destination,
			permanent
		}`)
	},

	env: {
		SC_DISABLE_SPEEDY: 'false',
	},

	// logging: {
	// 	fetches: {
	// 		fullUrl: true,
	// 	},
	// },
}

export default nextConfig
