export default {
  ignoreDeadLinks: true,
  markdown: {
    attrs: { disable: true },
  },
  vite: {
    optimizeDeps: {
      include: ['vue', '@vue/server-renderer'],
    },
    ssr: {
      noExternal: ['vue', '@vue/server-renderer'],
    },
  },
  title: 'The Yggdrasil Project',
  description: 'From zero to AI systems engineer.',
  base: '/yggdrasil/',
  srcDir: '../curriculum',

  head: [
    ['link', { rel: 'icon', href: '/yggdrasil/img/logo.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    logo: '/img/logo.svg',
    siteTitle: 'Yggdrasil',

    nav: [
      { text: 'Curriculum', link: '/phase-0-roots/README' },
      { text: 'Where to Start', link: '/PLACEMENT' },
      { text: 'Discord', link: 'https://discord.gg/yggdrasil' },
      { text: 'GitHub', link: 'https://github.com/GrantW4/yggdrasil' },
    ],

    sidebar: [
      {
        text: '🗺️ Where to Start',
        link: '/PLACEMENT',
      },
      {
        text: '🌱 Phase 0: Roots',
        link: '/phase-0-roots/README',
        collapsed: false,
        items: [
          {
            text: 'Math for AI',
            link: '/phase-0-roots/01-math-for-ai/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-0-roots/01-math-for-ai/lessons/index' },
            ],
          },
          {
            text: 'Python for AI',
            link: '/phase-0-roots/02-python-for-ai/README',
            items: [
              { text: 'Setting Up Your Environment', link: '/phase-0-roots/02-python-for-ai/lessons/00-setting-up-your-environment' },
            ],
          },
          {
            text: 'CS Fundamentals',
            link: '/phase-0-roots/03-cs-fundamentals/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-0-roots/03-cs-fundamentals/lessons/index' },
            ],
          },
        ],
      },
      {
        text: '🪵 Phase 1: The Trunk',
        link: '/phase-1-trunk/README',
        collapsed: true,
        items: [
          {
            text: 'Supervised Learning',
            link: '/phase-1-trunk/01-supervised-learning/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-1-trunk/01-supervised-learning/lessons/index' },
            ],
          },
          {
            text: 'Unsupervised Learning',
            link: '/phase-1-trunk/02-unsupervised-learning/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-1-trunk/02-unsupervised-learning/lessons/index' },
            ],
          },
          {
            text: 'Model Evaluation',
            link: '/phase-1-trunk/03-model-evaluation/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-1-trunk/03-model-evaluation/lessons/index' },
            ],
          },
        ],
      },
      {
        text: '🌿 Phase 2: First Branches',
        link: '/phase-2-first-branches/README',
        collapsed: true,
        items: [
          {
            text: 'Neural Networks from Scratch',
            link: '/phase-2-first-branches/01-neural-networks/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-2-first-branches/01-neural-networks/lessons/index' },
            ],
          },
          {
            text: 'DL Architectures',
            link: '/phase-2-first-branches/02-deep-learning-architectures/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-2-first-branches/02-deep-learning-architectures/lessons/index' },
            ],
          },
          {
            text: 'Training Techniques',
            link: '/phase-2-first-branches/03-training-techniques/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-2-first-branches/03-training-techniques/lessons/index' },
            ],
          },
        ],
      },
      {
        text: '⚡ Phase 3: The LLM Era',
        link: '/phase-3-llms/README',
        collapsed: true,
        items: [
          {
            text: 'Transformer Architecture',
            link: '/phase-3-llms/01-transformer-architecture/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-3-llms/01-transformer-architecture/lessons/index' },
            ],
          },
          {
            text: 'Pre-training & Fine-tuning',
            link: '/phase-3-llms/02-pretraining-finetuning/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-3-llms/02-pretraining-finetuning/lessons/index' },
            ],
          },
          {
            text: 'RAG & Prompting',
            link: '/phase-3-llms/03-rag-and-prompting/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-3-llms/03-rag-and-prompting/lessons/index' },
            ],
          },
        ],
      },
      {
        text: '🏗️ Phase 4: The Canopy',
        link: '/phase-4-canopy/README',
        collapsed: true,
        items: [
          {
            text: 'MLOps',
            link: '/phase-4-canopy/01-mlops/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-4-canopy/01-mlops/lessons/index' },
            ],
          },
          {
            text: 'Distributed Training',
            link: '/phase-4-canopy/02-distributed-training/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-4-canopy/02-distributed-training/lessons/index' },
            ],
          },
          {
            text: 'Inference Optimization',
            link: '/phase-4-canopy/03-inference-optimization/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-4-canopy/03-inference-optimization/lessons/index' },
            ],
          },
        ],
      },
      {
        text: '🌐 Phase 5: The Realms',
        link: '/phase-5-realms/README',
        collapsed: true,
        items: [
          {
            text: 'AI Agents',
            link: '/phase-5-realms/01-ai-agents/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-5-realms/01-ai-agents/lessons/index' },
            ],
          },
          {
            text: 'Multimodal AI',
            link: '/phase-5-realms/02-multimodal-ai/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-5-realms/02-multimodal-ai/lessons/index' },
            ],
          },
          {
            text: 'AI Safety',
            link: '/phase-5-realms/03-ai-safety/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-5-realms/03-ai-safety/lessons/index' },
            ],
          },
        ],
      },
      {
        text: '🌳 Phase 6: Elite',
        link: '/phase-6-elite/README',
        collapsed: true,
        items: [
          {
            text: 'Research Skills',
            link: '/phase-6-elite/01-research-skills/README',
            items: [
              { text: '📚 Lessons Coming Soon', link: '/phase-6-elite/01-research-skills/lessons/index' },
            ],
          },
          {
            text: 'Capstone Projects',
            link: '/phase-6-elite/02-capstone-projects/README',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GrantW4/yggdrasil' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} Grant Werts and Yggdrasil Contributors`,
    },

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/GrantW4/yggdrasil/edit/main/curriculum/:path',
      text: 'Edit this lesson on GitHub',
    },

    lastUpdated: {
      text: 'Last updated',
    },
  },
}
