# Next.js Test v1

This code come from the starter template for [Learn Next.js](https://nextjs.org/learn).
But original code was made based on Page Router(before v13), so I did migrate to the App Router.

# TO DO
- [ ] migrate it to the App Router.
- [ ] apply MUI to this code.

# Target to migrate
- chage root directory as pages to app
- app.js to page.js
- apply special files
    - pages/_app -> app/layout.js
    - index.js -> page.js
    - pages/posts/[id].js -> app/posts/[id]/page.js
    - styles/global.css -> app/layout.js
    - components/layout.js -> ?
    - pages/api/* -> app/api/route.js
- change previous functions
    - getServerSideProps, getStaticProps, getInitialProps -> fetch
    - getStaticPaths -> generateStaticParams