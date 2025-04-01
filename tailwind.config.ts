
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cyberpunk: {
					'dark': '#0a0a14',
					'purple': '#6e00ff',
					'pink': '#ff00a0',
					'cyan': '#00f0ff',
					'text': '#f0f0ff',
					'card': 'rgba(20, 20, 30, 0.7)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'rajdhani': ['Rajdhani', 'sans-serif'],
				'orbitron': ['Orbitron', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						textShadow: '0 0 5px rgba(110, 0, 255, 0.5), 0 0 10px rgba(110, 0, 255, 0.3)'
					},
					'50%': { 
						textShadow: '0 0 15px rgba(110, 0, 255, 0.8), 0 0 20px rgba(110, 0, 255, 0.5), 0 0 25px rgba(110, 0, 255, 0.3)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'gradient-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(255, 0, 160, 0.5), 0 0 10px rgba(110, 0, 255, 0.3)' },
					'50%': { boxShadow: '0 0 15px rgba(255, 0, 160, 0.8), 0 0 20px rgba(110, 0, 255, 0.5), 0 0 25px rgba(0, 240, 255, 0.3)' }
				},
				'border-glow': {
					'0%, 100%': { borderColor: 'rgba(110, 0, 255, 0.6)' },
					'33%': { borderColor: 'rgba(255, 0, 160, 0.6)' },
					'66%': { borderColor: 'rgba(0, 240, 255, 0.6)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'gradient-flow': 'gradient-flow 5s ease infinite',
				'glow-pulse': 'glow-pulse 3s infinite ease-in-out',
				'border-glow': 'border-glow 6s infinite ease-in-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards'
			},
			backgroundImage: {
				'radial-gradient': 'radial-gradient(circle at center, rgba(110, 0, 255, 0.1), rgba(10, 10, 20, 0.7) 70%)',
				'pink-to-purple': 'linear-gradient(45deg, #ff00a0, #6e00ff)',
				'purple-to-cyan': 'linear-gradient(45deg, #6e00ff, #00f0ff)',
				'cyber-pattern': 'url("/cyberpunk-pattern.svg")',
				'grid-lines': 'linear-gradient(rgba(110, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 0, 255, 0.1) 1px, transparent 1px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
