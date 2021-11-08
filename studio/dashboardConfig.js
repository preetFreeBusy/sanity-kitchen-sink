export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6188f8cf689b29bbf17d48e3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-iwavxezb',
                  apiId: 'b5b4fee1-5240-4053-aaf3-d90fca948056'
                },
                {
                  buildHookId: '6188f8cf3b832b55fc56a167',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mjx4kx6o',
                  apiId: 'c5ab0b86-c915-48df-addd-7bb5637c515d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/preetFreeBusy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mjx4kx6o.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
