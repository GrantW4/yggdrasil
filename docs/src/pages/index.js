import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const phases = [
  {
    emoji: '🌱',
    title: 'Phase 0: Roots',
    description: 'Mathematics, Python, CS Fundamentals. The ground everything stands on.',
    href: '/phase-0-roots/',
    time: '10–14 weeks',
  },
  {
    emoji: '🪵',
    title: 'Phase 1: The Trunk',
    description: 'Classical Machine Learning. Build intuition before you use a framework.',
    href: '/phase-1-trunk/',
    time: '8–11 weeks',
  },
  {
    emoji: '🌿',
    title: 'Phase 2: Branches',
    description: 'Deep Learning from scratch. Implement backprop by hand. Then use PyTorch.',
    href: '/phase-2-first-branches/',
    time: '10–13 weeks',
  },
  {
    emoji: '⚡',
    title: 'Phase 3: The LLM Era',
    description: 'Transformers, fine-tuning, RAG. The core of modern AI engineering.',
    href: '/phase-3-llms/',
    time: '11–14 weeks',
  },
  {
    emoji: '🏗️',
    title: 'Phase 4: The Canopy',
    description: 'MLOps, distributed training, inference optimization. Production at scale.',
    href: '/phase-4-canopy/',
    time: '10–13 weeks',
  },
  {
    emoji: '🌐',
    title: 'Phase 5: The Realms',
    description: 'AI Agents, Multimodal AI, AI Safety. The frontier of applied AI.',
    href: '/phase-5-realms/',
    time: '10–13 weeks',
  },
  {
    emoji: '🌳',
    title: 'Phase 6: Elite',
    description: 'Research skills and capstone projects. From practitioner to contributor.',
    href: '/phase-6-elite/',
    time: '9–12 weeks',
  },
];

function PhaseCard({ emoji, title, description, href, time }) {
  return (
    <div className={clsx('col col--6', styles.phaseCard)}>
      <Link to={href} className={styles.phaseCardLink}>
        <div className={styles.phaseCardInner}>
          <div className={styles.phaseEmoji}>{emoji}</div>
          <h3>{title}</h3>
          <p>{description}</p>
          <span className={styles.phaseTime}>{time}</span>
        </div>
      </Link>
    </div>
  );
}

function HomepageHero() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroTitle}>
          <span className={styles.heroWord}>YGGDRASIL</span>
        </div>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          From zero to AI systems engineer.
        </p>
        <p className={styles.heroDescription}>
          A free, open-source curriculum covering the full stack of modern AI — from mathematical
          foundations through production systems engineering. Built by engineers, for engineers.
        </p>
        <div className={styles.heroCta}>
          <Link className="button button--primary button--lg" to="/phase-0-roots/">
            Start Learning →
          </Link>
          <Link className="button button--secondary button--lg" to="/curriculum/PLACEMENT">
            Where Should I Start?
          </Link>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.stat}><strong>7</strong><span>Phases</span></div>
          <div className={styles.stat}><strong>130+</strong><span>Lessons</span></div>
          <div className={styles.stat}><strong>15+</strong><span>Projects</span></div>
          <div className={styles.stat}><strong>Free</strong><span>Forever</span></div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="From Zero to AI Systems Engineer"
      description="A free, open-source curriculum taking engineers from zero to elite AI systems engineer."
    >
      <HomepageHero />
      <main>
        <section className={styles.phasesSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>The Curriculum</h2>
            <p className={styles.sectionSubtitle}>
              Work linearly from Phase 0 to Phase 6, or use the{' '}
              <Link to="/curriculum/PLACEMENT">placement guide</Link> to find your entry point.
            </p>
            <div className="row">
              {phases.map((phase) => (
                <PhaseCard key={phase.title} {...phase} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.philosophySection}>
          <div className="container">
            <div className={styles.philosophyGrid}>
              <div>
                <h2>Why Yggdrasil?</h2>
                <p>
                  In Norse mythology, Yggdrasil is the sacred tree connecting all nine worlds.
                  AI mastery works the same way — the mathematical roots, the ML trunk, the deep
                  learning branches, and the systems engineering canopy are all one interconnected
                  structure. Skip a layer and the whole thing is weaker.
                </p>
                <p>
                  This curriculum is built so every concept you learn connects to the ones above
                  and below it. You will not memorize APIs. You will understand systems.
                </p>
              </div>
              <div>
                <h2>How It Works</h2>
                <ul>
                  <li><strong>Read.</strong> Every lesson explains the why before the how.</li>
                  <li><strong>Implement.</strong> Every concept gets built by hand first.</li>
                  <li><strong>Test.</strong> Every module has a quiz. 80% to proceed.</li>
                  <li><strong>Build.</strong> Every module ends with a real project.</li>
                  <li><strong>Ship.</strong> Everything goes in a public portfolio repo.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
