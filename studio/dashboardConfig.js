export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624f4e9618ce935e60c38a49',
                  title: 'Sanity Studio',
                  name: 'next-js-blog-studio',
                  apiId: '2246715d-1e0f-4c66-ab7d-88df1cfe2e70'
                },
                {
                  buildHookId: '624f4e96efa39b5dbc40118b',
                  title: 'Landing pages Website',
                  name: 'next-js-blog-web',
                  apiId: '2de230be-4384-4504-9175-b114abac1a23'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MikeOwino/Next.js-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://next-js-blog-web.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
