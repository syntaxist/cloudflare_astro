/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          light: '#fafafa',
          dark: '#111111',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1a1a1a',
            '--tw-prose-headings': '#111111',
            '--tw-prose-links': '#2563eb',
            '--tw-prose-code': '#1a1a1a',
            maxWidth: '72ch',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#e5e5e5',
            '--tw-prose-headings': '#f5f5f5',
            '--tw-prose-links': '#60a5fa',
            '--tw-prose-code': '#e5e5e5',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
