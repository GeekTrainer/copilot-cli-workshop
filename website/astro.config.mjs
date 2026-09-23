// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives';

// Lesson callouts are authored in GitHub admonition syntax (`> [!NOTE]`). This
// remark plugin rewrites them into Starlight aside directives before Starlight
// renders them, so the same syntax used in the repo's READMEs and on github.com
// also produces styled callouts on the published site. The mapping targets
// Starlight's aside types (note / tip / caution / danger).
const githubAdmonitionMapping = {
  NOTE: 'note',
  TIP: 'tip',
  IMPORTANT: 'note',
  WARNING: 'caution',
  CAUTION: 'caution',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://geektrainer.github.io',
  base: '/copilot-cli-workshop',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [
      [remarkGithubAdmonitionsToDirectives, { mapping: githubAdmonitionMapping }],
    ],
  },
  integrations: [
    starlight({
      title: 'GitHub Copilot CLI workshop',
      description:
        'Build, verify, and deliver Tailspin Toys changes while learning Copilot CLI modes, customizations, MCP tools, and pull request automation.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/geektrainer/copilot-cli-workshop',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/geektrainer/copilot-cli-workshop/edit/main/docs/',
      },
      sidebar: [
        { label: 'Overview', link: '/' },
        { label: '0. Prerequisites', link: '/0-prerequisites/' },
        { label: '1. Installing Copilot CLI', link: '/1-install-copilot-cli/' },
        { label: '2. Add star ratings', link: '/2-add-star-rating/' },
        { label: '3. Agent modes: Plan and Autopilot', link: '/3-agent-modes/' },
        { label: '4. Guiding Copilot with custom instructions', link: '/4-custom-instructions/' },
        { label: '5. Customize and use a quality-checks skill', link: '/5-agent-skills/' },
        { label: '6. Validate functionality with Playwright MCP', link: '/6-mcp-playwright/' },
        { label: '7. Create and use a QA agent', link: '/7-qa-agent/' },
        { label: '8. Create and merge the feature PR', link: '/8-create-pull-request/' },
        { label: '9. Slash commands in Copilot CLI', link: '/9-cli-power-tools/' },
        { label: '10. Wrap-up and next steps', link: '/10-review/' },
        {
          label: 'Optional: Incorporate Foundry',
          collapsed: true,
          items: [
            { label: 'Overview', link: '/8-foundry-agent/' },
            { label: '1. Prepare the project and model', link: '/8-foundry-agent/1-project-and-model/' },
            { label: '2. Build and deploy the agent', link: '/8-foundry-agent/2-build-and-deploy/' },
            { label: '3. Connect the agent to the website', link: '/8-foundry-agent/3-connect-to-site/' },
          ],
        },
      ],
    }),
  ],
});
