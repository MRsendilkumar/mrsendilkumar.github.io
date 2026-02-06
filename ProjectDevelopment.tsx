// =====================
// TYPES
// =====================
type GitCommit = {
  id: string;
  message: string;
  url: string;
  date: string;
};

type Challenge = {
  problem: string;
  status: "Working" | "In Progress" | "Blocked";
  notes: string;
};

type LearningResource = {
  title: string;
  type: "Article" | "Video" | "Mini Project" | "Docs";
  link?: string;
};

type ProjectProgress = {
  summary: string;
  commits: GitCommit[];
  challenges: Challenge[];
  learningResources: LearningResource[];
  nextSteps: string[];
};

// =====================
// DATA
// =====================
const progressData: ProjectProgress = {
  summary:
    "This project is currently in its early development stage. Core structure, layout, and initial functionality have been implemented, with ongoing refinement and experimentation.",

  commits: [
    {
      id: "a1b2c3",
      message: "Initial project setup and configuration",
      url: "https://github.com/username/repo/commit/a1b2c3",
      date: "2026-02-01",
    },
    {
      id: "d4e5f6",
      message: "Created Project Development progress page",
      url: "https://github.com/username/repo/commit/d4e5f6",
      date: "2026-02-03",
    },
  ],

  challenges: [
    {
      problem: "Structuring progress data cleanly",
      status: "Working",
      notes: "Using TypeScript interfaces helped keep everything organized.",
    },
    {
      problem: "Deciding future state management approach",
      status: "In Progress",
      notes: "Currently evaluating Context API vs external libraries.",
    },
  ],

  learningResources: [
    {
      title: "TypeScript Handbook",
      type: "Docs",
      link: "https://www.typescriptlang.org/docs/",
    },
    {
      title: "Mini React Component Experiment",
      type: "Mini Project",
    },
  ],

  nextSteps: [
    "Refactor components for reusability",
    "Add backend or API integration",
    "Improve visual design and responsiveness",
  ],
};

// =====================
// COMPONENT
// =====================
export default function ProjectDevelopment() {
  return (
    <section style={styles.section}>
      <h1>Project Development: Early Stages</h1>

      <p>{progressData.summary}</p>

      <h2>GitHub Progress</h2>
      <ul>
        {progressData.commits.map(commit => (
          <li key={commit.id}>
            <a href={commit.url} target="_blank" rel="noreferrer">
              {commit.message}
            </a>{" "}
            <span>({commit.date})</span>
          </li>
        ))}
      </ul>

      <h2>Challenges & Reflections</h2>
      <ul>
        {progressData.challenges.map((challenge, index) => (
          <li key={index}>
            <strong>{challenge.problem}</strong>{" "}
            <em>— {challenge.status}</em>
            <p>{challenge.notes}</p>
          </li>
        ))}
      </ul>

      <h2>Learning & Mini-Projects</h2>
      <ul>
        {progressData.learningResources.map((resource, index) => (
          <li key={index}>
            {resource.link ? (
              <a href={resource.link} target="_blank" rel="noreferrer">
                {resource.title}
              </a>
            ) : (
              resource.title
            )}{" "}
            <span>({resource.type})</span>
          </li>
        ))}
      </ul>

      <h2>Next Steps</h2>
      <ol>
        {progressData.nextSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

// =====================
// INLINE STYLES
// =====================
const styles: { [key: string]: React.CSSProperties } = {
  section: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2rem",
    lineHeight: 1.6,
  },
};
