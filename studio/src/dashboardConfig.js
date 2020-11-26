export default {
  widgets: [
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
                  buildHookId: '5fbf5ea6d86d672a378601e0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ahvp6jrv',
                  apiId: 'ff715c25-9cc3-4e0d-b486-1e8c2b576bf6'
                },
                {
                  buildHookId: '5fbf5ea61c76591a96498c71',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uuhfgm2w',
                  apiId: '4f2f2e1a-8950-4825-b1fb-e810a95a67b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ltdat287/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uuhfgm2w.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
