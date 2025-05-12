// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primaryText: 'var(--text-primary)',
        secondaryText: 'var(--text-secondary)',
        primaryBg: 'var(--bg-primary)',
        secondaryBg: 'var(--bg-secondary)',
        navbarBg: 'var(--bg-navbar)',
      },
    },
  },
  plugins: [],
}
