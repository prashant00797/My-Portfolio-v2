import { bars, buttons, pipelineSteps } from "@/data/heroUIdata";
import type { FloaterProps } from "@/types";

const widgetHover =
  "transition-transform duration-300 ease-out hover:scale-[1.03]";

const DbIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5 text-tag-text"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="7" ry="3" />
    <path d="M5 5v10c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
    <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" />
  </svg>
);

const DashboardWindow = ({ className = "" }: FloaterProps) => (
  <div
    className={`${className} ${widgetHover} min-w-0 overflow-hidden rounded-(--radius-card) border border-border bg-surface shadow-(--shadow-card)`}
  >
    <div className="flex h-10 items-center gap-2 border-b border-border px-3">
      <span className="h-2.5 w-2.5 rounded-full border border-border bg-background" />
      <span className="h-2.5 w-2.5 rounded-full border border-border bg-background" />
      <span className="h-2.5 w-2.5 rounded-full border border-border bg-background" />
      <span className="ml-2 text-xs text-text-muted">dashboard.tsx</span>
      <span className="ml-auto h-2.5 w-2.5 rounded-full bg-tag-text" />
    </div>

    <div className="flex h-35">
      <div className="flex w-14 shrink-0 flex-col gap-3 border-r border-border px-3 pt-5">
        <span className="h-2 rounded-full bg-tag-text" />
        <span className="h-2 rounded-full bg-tag-bg" />
        <span className="h-2 rounded-full bg-border" />
        <span className="h-2 rounded-full bg-border" />
      </div>

      <div className="relative flex-1 px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Active users
            </p>
            <p className="font-display text-[30px] font-semibold leading-none text-primary">
              12,840
            </p>
          </div>
          <span className="rounded-full bg-tag-bg px-3 py-1 text-xs font-semibold text-tag-text">
            +24%
          </span>
        </div>

        <div className="absolute bottom-8 left-5 flex h-12 items-end gap-2">
          {bars.map((height, index) => (
            <span
              key={index}
              className={`w-3.5 rounded-t-sm bg-tag-bg ${height}`}
            />
          ))}
        </div>

        <div className="absolute bottom-4 left-5 right-4 flex gap-2">
          <span className="h-2 flex-1 rounded-full bg-tag-bg" />
          <span className="h-2 flex-1 rounded-full bg-border" />
          <span className="h-2 flex-1 rounded-full bg-border" />
        </div>
      </div>
    </div>
  </div>
);

const DbChip = ({ className = "" }: FloaterProps) => {
  const rows = [
    ["Postgres", "vector store"],
    ["MongoDB", "documents"],
  ];

  return (
    <div
      className={`${className} ${widgetHover} min-w-0 rounded-(--radius-card) border border-border bg-surface p-4 shadow-(--shadow-card)`}
    >
      <div className="space-y-4">
        {rows.map(([name, sub]) => (
          <div key={name} className="flex items-center gap-3">
            <DbIcon />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold leading-4 text-primary">
                {name}
              </p>
              <p className="truncate text-xs leading-4 text-text-muted">
                {sub}
              </p>
            </div>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-tag-text" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ApiChip = ({ className = "" }: FloaterProps) => (
  <div
    className={`${className} ${widgetHover} flex min-h-14.5 min-w-0 items-center gap-3 rounded-(--radius-card) border border-border bg-surface px-4 shadow-(--shadow-card)`}
  >
    <span className="font-display text-xl font-semibold text-tag-text">
      {"{}"}
    </span>
    <div>
      <p className="text-sm font-semibold leading-4 text-primary">
        /api/v1/auth
      </p>
      <p className="text-xs leading-4 text-text-muted">200 &middot; 38ms</p>
    </div>
    <span className="ml-auto h-2.5 w-2.5 rounded-full bg-tag-text" />
  </div>
);

const WireframeCard = ({ className = "" }: FloaterProps) => (
  <div
    className={`${className} ${widgetHover} min-w-0 rounded-(--radius-card) border border-dashed border-border bg-surface p-3 shadow-(--shadow-card)`}
  >
    <div className="mb-2 flex items-center justify-between gap-3">
      <span className="h-2.5 w-14.5 rounded-full bg-border" />
      <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-text-muted">
        Wireframe
      </span>
    </div>
    <div className="h-14.5 rounded-button border border-border bg-[repeating-linear-gradient(135deg,var(--color-background)_0_8px,var(--color-surface)_8px_16px)]" />
    <div className="mt-2 flex gap-2">
      <span className="h-2 w-18 rounded-full bg-border" />
      <span className="h-2 w-9 rounded-full bg-border" />
    </div>
  </div>
);

const PipelineStrip = ({ className = "" }: FloaterProps) => (
  <div
    className={`${className} ${widgetHover} flex min-w-0 items-center gap-3 rounded-(--radius-card) border border-border bg-surface shadow-(--shadow-card)`}
  >
    {pipelineSteps.map((step, index) => (
      <div key={step} className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-tag-bg text-tag-text">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 10 3 3 7-7" />
            </svg>
          </span>
          <span className="text-sm text-primary">{step}</span>
        </div>
        {index < pipelineSteps.length - 1 && (
          <span className="hidden h-px w-4 bg-border sm:block md:w-7" />
        )}
      </div>
    ))}
  </div>
);

const AgentChip = ({ className = "" }: FloaterProps) => (
  <div
    className={`${className} ${widgetHover} flex min-w-0 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-primary shadow-(--shadow-card)`}
  >
    <span className="h-2.5 w-2.5 rounded-full bg-tag-text" />
    <span>AI agent</span>
    <span className="text-text-muted">&middot; live</span>
  </div>
);

const Connectors = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1120 440"
    className="absolute inset-0 h-full w-full text-tag-text"
    fill="none"
  >
    {[
      [317, 138, 294, 130],
      [287, 270, 204, 285],
      [787, 127, 858, 98],
      [850, 210, 914, 208],
      [776, 320, 810, 336],
      [862, 282, 928, 300],
    ].map(([x1, y1, x2, y2]) => (
      <g key={`${x1}-${y1}-${x2}-${y2}`} opacity="0.42">
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 7"
          strokeLinecap="round"
        />
        <circle cx={x1} cy={y1} r="2.4" fill="currentColor" />
        <circle cx={x2} cy={y2} r="2.4" fill="currentColor" />
      </g>
    ))}
  </svg>
);

export const HeroCopy = ({ className = "" }: FloaterProps) => (
  <div
    className={`${className} z-10 flex w-full flex-col items-center text-center`}
  >
    <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-tag-text md:mb-6 md:tracking-[0.35em]">
      Full Stack Developer
    </p>
    <h1 className="w-full font-display text-4xl font-semibold leading-tight tracking-normal text-primary sm:text-5xl md:text-[56px]">
      Prashant Nath
    </h1>
    <p className="mt-5 w-full max-w-75 text-base leading-7 text-secondary sm:max-w-107.5 sm:text-lg md:text-[22px] md:leading-8">
      Building web applications with React, Node.js, Python and modern AI
      systems
    </p>
    <p className="mt-5 w-full text-sm text-text-muted md:text-base">
      React &middot; Next.js &middot; Node.js &middot; Python
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {buttons.map((button) => {
        const isLinkedIn = button.name === "LinkedIn";

        return (
          <a
            key={button.name}
            href={button.link}
            target="_blank"
            rel="noreferrer"
            className={`button flex h-12 min-w-30 items-center justify-center px-8 text-sm font-semibold md:min-w-37.5 md:text-base ${
              isLinkedIn
                ? "border-border bg-surface text-primary hover:bg-background"
                : ""
            }`}
          >
            {button.name}
          </a>
        );
      })}
    </div>
  </div>
);

export const DesktopOrbit = () => (
  <div className="hidden xl:block" aria-hidden="true">
    <Connectors />
    <DashboardWindow className="absolute left-6.5 top-10 h-45 w-67" />
    <DbChip className="absolute left-10 top-62 w-41" />
    <ApiChip className="absolute left-214.5 top-12.5 h-14.5 min-w-37.5" />
    <WireframeCard className="absolute left-228.5 top-37.5 h-29 w-38" />
    <PipelineStrip className="absolute left-196.5 top-84 h-12 px-4" />
    <AgentChip className="absolute left-232 top-70.5" />
  </div>
);

export const TabletOrbit = () => (
  <div
    className="relative hidden h-140 min-w-0 md:block xl:hidden"
    aria-label="Hero orbit"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 834 560"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full text-tag-text"
      fill="none"
    >
      {[
        [260, 142, 318, 170],
        [166, 374, 260, 316],
        [600, 190, 670, 158],
        [590, 272, 658, 272],
        [520, 405, 610, 462],
      ].map(([x1, y1, x2, y2]) => (
        <g key={`${x1}-${y1}-${x2}-${y2}`} opacity="0.38">
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 7"
            strokeLinecap="round"
          />
          <circle cx={x1} cy={y1} r="2.4" fill="currentColor" />
          <circle cx={x2} cy={y2} r="2.4" fill="currentColor" />
        </g>
      ))}
    </svg>

    <DashboardWindow className="absolute left-0 top-0 h-45 w-61 lg:w-67" />
    <DbChip className="absolute bottom-17.5 left-0 w-39" />
    <WireframeCard className="absolute right-0 top-27 h-29 w-41" />
    <AgentChip className="absolute right-10.5 top-61" />
    <PipelineStrip className="absolute bottom-14 right-0 min-h-12 flex-wrap justify-center px-4 py-3" />
    <HeroCopy className="absolute left-1/2 top-36.25 max-w-112.5 -translate-x-1/2" />
  </div>
);

export const MobileOrbit = () => (
  <div className="relative flex min-w-0 flex-col items-center md:hidden">
    <DashboardWindow className="mx-auto h-45 w-67 max-w-full" />

    <div
      className="my-2 flex h-6 flex-col items-center text-tag-text"
      aria-hidden="true"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-tag-text opacity-50" />
      <span className="h-full border-l border-dashed border-tag-text opacity-40" />
      <span className="h-1.5 w-1.5 rounded-full bg-tag-text opacity-50" />
    </div>

    <HeroCopy className="max-w-77.5" />

    <div
      className="my-3 flex h-7 flex-col items-center text-tag-text"
      aria-hidden="true"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-tag-text opacity-50" />
      <span className="h-full border-l border-dashed border-tag-text opacity-40" />
      <span className="h-1.5 w-1.5 rounded-full bg-tag-text opacity-50" />
    </div>

    <WireframeCard className="mx-auto h-29 w-43 max-w-full" />
    <AgentChip className="mx-auto mt-3 w-fit max-w-full" />
  </div>
);
