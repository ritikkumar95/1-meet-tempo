//09-buttons/index.canvas.tsx
import type { ReactNode, CSSProperties } from 'react';
import type { TempoPage, TempoStoryboard } from 'tempo-sdk';
import {
  Search,
  Heart,
  Send,
  Plus,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/design-system/primitives/Button';
import { HeartButton } from '@/design-system/components/HeartButton';
import {
  CanvasCover,
  HavnMark,
  Eyebrow,
  MonoText,
  FONT_SANS,
  FONT_MONO,
  DARK,
} from '@/design-system/canvas-chrome';

const page: TempoPage = {
  name: "09 · Buttons",
};

export default page;

/* ── Measurement markers ───────────────────────────────────────── */

const MARKER_CHIP: CSSProperties = {
  background: "#FF385C",
  color: "#fff",
  fontFamily: FONT_MONO,
  fontSize: 10,
  fontWeight: 600,
  padding: "1px 6px",
  borderRadius: 2,
  lineHeight: 1.3,
};

function HMarker({ width, children }: { width: number; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <span style={MARKER_CHIP}>{children}</span>
      <div style={{ width, display: "flex", alignItems: "center" }}>
        <div style={{ width: 1, height: 5, background: "#FF385C" }} />
        <div style={{ flex: 1, height: 1, background: "#FF385C" }} />
        <div style={{ width: 1, height: 5, background: "#FF385C" }} />
      </div>
    </div>
  );
}

function VMarker({ height, children }: { height: number; children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <div style={{ height, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 5, height: 1, background: "#FF385C" }} />
        <div style={{ flex: 1, width: 1, background: "#FF385C" }} />
        <div style={{ width: 5, height: 1, background: "#FF385C" }} />
      </div>
      <span style={MARKER_CHIP}>{children}</span>
    </div>
  );
}

/* ── UI Section Wrapper ─────────────────────────────────────────── */

function ButtonSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 56,
        alignItems: "flex-start",
        padding: "44px 0",
        borderTop: `1px solid ${DARK.hairline}`,
      }}
    >
      <div style={{ width: 280, flexShrink: 0, paddingTop: 8 }}>
        <h2
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: FONT_SANS,
            fontSize: 22,
            fontWeight: 600,
            color: DARK.ink,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontFamily: FONT_SANS,
            fontSize: 13.5,
            color: DARK.inkQuiet,
            margin: "12px 0 0",
            lineHeight: 1.55,
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          flex: 1,
          minHeight: 320,
          border: "1px solid #ebebeb",
          borderRadius: 8,
          padding: "24px 44px",
          background: "#f7f7f7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Row helpers ─────────────────────────────────────────────────── */

const ROW_LABEL_STYLE: CSSProperties = {
  fontFamily: FONT_MONO,
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#888",
  margin: 0,
};

function ButtonRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: 24,
        alignItems: "center",
        padding: "16px 0",
      }}
    >
      <p style={ROW_LABEL_STYLE}>{label}</p>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        {children}
      </div>
    </div>
  );
}

function ButtonRowVertical({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: 24,
        alignItems: "center",
        padding: "16px 0",
      }}
    >
      <p style={ROW_LABEL_STYLE}>{label}</p>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        {children}
      </div>
    </div>
  );
}

/* ── Page Shell ──────────────────────────────────────────────────── */

function PageShell({
  title,
  description,
  width,
  children,
}: {
  title: string;
  description?: string;
  width: number;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        width,
        background: DARK.paper,
        color: DARK.ink,
        padding: "72px 72px 56px",
        fontFamily: FONT_SANS,
        position: "relative",
      }}
    >
      <HavnMark />

      <h1
        contentEditable
        suppressContentEditableWarning
        style={{
          fontSize: 44,
          fontWeight: 600,
          margin: 0,
          lineHeight: 1.05,
        }}
      >
        {title}
      </h1>

      {description && (
        <p
          style={{
            color: DARK.inkQuiet,
            marginTop: 16,
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
/* ── 00 · Cover ──────────────────────────────────────────────────── */

export const Cover: TempoStoryboard = {
  render: () => (
    <CanvasCover
      workspace="Workspace · 03"
      slug="buttons.svg"
      title="Buttons."
      description="Six variants, three sizes, six states. Coral primary for the one important action, ink for confirmations, outline-solid and secondary for everything else, destructive for danger, ghost for quiet."
    />
  ),
  name: "00 · Cover",
  layout: { x: -53, y: 0, width: 1406, height: 351 },
};

/* ── 01 · Anatomy ────────────────────────────────────────────────── */

export const Anatomy: TempoStoryboard = {
  render: () => (
    <PageShell
      width={1280}
      title="Anatomy"
      description="Every button is built from the same parts — a pill container, an optional icon, and a label. Padding scales with size; the corner radius is constant at 8px."
    >
      <ButtonSection
        title="The parts"
        description="A container holds the label and optional icon. The icon previews the action; the label promises a result."
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 16,
            padding: "32px 24px",
          }}
        >
          <HMarker width={150}>auto · width</HMarker>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Button variant="primary">
              <Heart size={16} strokeWidth={2} /> Save listing
            </Button>

            <VMarker height={44}>44 · h-11</VMarker>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 24px",
              marginTop: 16,
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: "#717171",
            }}
          >
            <span>● Container · rounded-lg, 8px radius</span>
            <span>● Icon · 16×16, strokeWidth 2</span>
            <span>● Gap · 8px (gap-2)</span>
            <span>● Label · 14px, font-semibold</span>
            <span>● Horizontal padding · 20px (px-5)</span>
            <span>● Active · scale-98 on press</span>
          </div>
        </div>
      </ButtonSection>

      <ButtonSection
        title="Padding scale"
        description="Horizontal padding is the only thing that changes between sizes — small uses px-4, medium px-5, large px-6."
      >
        <ButtonRow label="Small · px-4">
          <Button variant="primary" size="sm">Small</Button>
          <MonoText size={11} color="#717171">size="sm" · h-9</MonoText>
        </ButtonRow>

        <ButtonRow label="Medium · px-5">
          <Button variant="primary" size="md">Medium</Button>
          <MonoText size={11} color="#717171">size="md" · h-11</MonoText>
        </ButtonRow>

        <ButtonRow label="Large · px-6">
          <Button variant="primary" size="lg">Large</Button>
          <MonoText size={11} color="#717171">size="lg" · h-12</MonoText>
        </ButtonRow>
      </ButtonSection>
    </PageShell>
  ),
  name: "01 · Anatomy",
  layout: { x: 1330, y: 0, width: 1280, height: 1156 },
};
export const Variants: TempoStoryboard = {
  render: () => (
    <PageShell
      width={1280}
      title="Variants"
      description="Each variant has a single job, and each carries the same set of states. Pair the right variant to the action and the page reads itself — never more than one primary per screen."
    >
      <ButtonSection
        title="Primary"
        description="Coral pink. The one most important action on a screen — Reserve, Book, Send. Use once per view, never more."
      >
        <ButtonRowVertical label="Rest">
          <Button variant="primary">Reserve</Button>
          <MonoText size={11} color="#717171">bg-accent</MonoText>
        </ButtonRowVertical>

        <ButtonRowVertical label="Hover">
          <Button variant="primary" className="bg-accent-hover! shadow-sm!">
            Reserve
          </Button>
          <MonoText size={11} color="#717171">bg-accent-hover</MonoText>
        </ButtonRowVertical>

        <ButtonRowVertical label="Focus">
          <Button
            variant="primary"
            className="ring-2 ring-offset-2 ring-offset-[#0f0f0e] ring-white/60"
          >
            Reserve
          </Button>
          <MonoText size={11} color="#717171">focus-visible ring</MonoText>
        </ButtonRowVertical>

        <ButtonRowVertical label="Disabled">
          <Button variant="primary" disabled>
            Reserve
          </Button>
          <MonoText size={11} color="#717171">disabled</MonoText>
        </ButtonRowVertical>

        <ButtonRowVertical label="Loading">
          <Button variant="primary" loading>
            Reserve
          </Button>
          <MonoText size={11} color="#717171">loading state</MonoText>
        </ButtonRowVertical>
      </ButtonSection>

      <ButtonSection
        title="Ink"
        description="Charcoal. Confirmation actions and continuation flows."
      >
        <ButtonRowVertical label="Rest">
          <Button variant="ink">Continue</Button>
          <MonoText size={11} color="#717171">ink</MonoText>
        </ButtonRowVertical>

        <ButtonRowVertical label="Hover">
          <Button variant="ink" className="bg-ink-soft!">
            Continue
          </Button>
          <MonoText size={11} color="#717171">hover</MonoText>
        </ButtonRowVertical>

        <ButtonRowVertical label="Focus">
          <Button
            variant="ink"
            className="ring-2 ring-offset-2 ring-offset-[#0f0f0e] ring-white/60"
          >
            Continue
          </Button>
          <MonoText size={11} color="#717171">focus</MonoText>
        </ButtonRowVertical>

        <ButtonRowVertical label="Disabled">
          <Button variant="ink" disabled>
            Continue
          </Button>
          <MonoText size={11} color="#717171">disabled</MonoText>
        </ButtonRowVertical>
      </ButtonSection>

      <ButtonSection
        title="Outline"
        description="Border-only secondary actions."
      >
        <ButtonRowVertical label="Rest">
          <Button variant="outline-solid">Share</Button>
          <MonoText size={11} color="#717171">outline</MonoText>
        </ButtonRowVertical>

        <ButtonRowVertical label="Hover">
          <Button
            variant="outline-solid"
            className="border-ink! bg-paper-warm/50!"
          >
            Share
          </Button>
          <MonoText size={11} color="#717171">hover</MonoText>
        </ButtonRowVertical>

        <ButtonRowVertical label="Focus">
          <Button
            variant="outline-solid"
            className="ring-2 ring-offset-2 ring-offset-[#0f0f0e] ring-white/60"
          >
            Share
          </Button>
          <MonoText size={11} color="#717171">focus</MonoText>
        </ButtonRowVertical>

        <ButtonRowVertical label="Disabled">
          <Button variant="outline-solid" disabled>
            Share
          </Button>
          <MonoText size={11} color="#717171">disabled</MonoText>
        </ButtonRowVertical>
      </ButtonSection>
    </PageShell>
  ),
  name: "02 · Variants",
  layout: { x: 2660, y: 0, width: 1280, height: 3209 },
};
/* ── 03 · Sizes ──────────────────────────────────────────────────── */
export const Sizes: TempoStoryboard = {
  render: () => (
    <PageShell
      width={1280}
      title="Sizes"
      description="Three heights, scaled to context. Default to medium; reach for small in dense surfaces and large when a button needs to carry weight on its own."
    >
      <ButtonSection
        title="Small"
        description="36px tall. For dense surfaces — table rows, inline filter chips, secondary actions inside cards."
      >
        <ButtonRow label="Measure">
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <HMarker width={92}>auto</HMarker>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Button variant="primary" size="sm">Reserve</Button>
              <VMarker height={36}>36</VMarker>
            </div>
          </div>
        </ButtonRow>

        <ButtonRow label="All variants">
          <Button size="sm" variant="primary">Primary</Button>
          <Button size="sm" variant="ink">Ink</Button>
          <Button size="sm" variant="outline-solid">Outline</Button>
          <Button size="sm" variant="secondary">Secondary</Button>
          <Button size="sm" variant="ghost">Ghost</Button>
        </ButtonRow>
      </ButtonSection>

      <ButtonSection
        title="Medium"
        description="44px tall. Default size used across product."
      >
        <ButtonRow label="Measure">
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <HMarker width={104}>auto</HMarker>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Button variant="primary" size="md">Reserve</Button>
              <VMarker height={44}>44</VMarker>
            </div>
          </div>
        </ButtonRow>

        <ButtonRow label="All variants">
          <Button size="md" variant="primary">Primary</Button>
          <Button size="md" variant="ink">Ink</Button>
          <Button size="md" variant="outline-solid">Outline</Button>
          <Button size="md" variant="secondary">Secondary</Button>
          <Button size="md" variant="ghost">Ghost</Button>
        </ButtonRow>
      </ButtonSection>

      <ButtonSection
        title="Large"
        description="48px tall. Used for hero CTAs."
      >
        <ButtonRow label="Measure">
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <HMarker width={120}>auto</HMarker>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Button variant="primary" size="lg">Reserve</Button>
              <VMarker height={48}>48</VMarker>
            </div>
          </div>
        </ButtonRow>

        <ButtonRow label="All variants">
          <Button size="lg" variant="primary">Primary</Button>
          <Button size="lg" variant="ink">Ink</Button>
          <Button size="lg" variant="outline-solid">Outline</Button>
          <Button size="lg" variant="secondary">Secondary</Button>
          <Button size="lg" variant="ghost">Ghost</Button>
        </ButtonRow>
      </ButtonSection>
    </PageShell>
  ),
  name: "03 · Sizes",
  layout: { x: 3990, y: 0, width: 1280, height: 1939 },
};

/* ── 04 · Icons ──────────────────────────────────────────────────── */
export const ButtonIcons: TempoStoryboard = {
  render: () => (
    <PageShell
      width={1280}
      title="Icons"
      description="Icons always inherit label color and sit 8px from text."
    >
      <ButtonSection
        title="Leading icon"
        description="Icon before label."
      >
        <ButtonRow label="Leading">
          <Button variant="primary">
            <Search size={16} strokeWidth={2} /> Search
          </Button>
          <Button variant="outline-solid">
            <Heart size={16} strokeWidth={2} /> Save
          </Button>
          <Button variant="ink">
            <Send size={16} strokeWidth={2} /> Send
          </Button>
          <Button variant="ghost">
            <Plus size={16} strokeWidth={2} /> Add
          </Button>
        </ButtonRow>
      </ButtonSection>

      <ButtonSection
        title="Trailing icon"
        description="Icon after label."
      >
        <ButtonRow label="Trailing">
          <Button variant="primary">
            Continue <ArrowRight size={16} strokeWidth={2} />
          </Button>
          <Button variant="ink">
            Next <ArrowRight size={16} strokeWidth={2} />
          </Button>
          <Button variant="outline-solid">
            Filters <ChevronDown size={16} strokeWidth={2} />
          </Button>
        </ButtonRow>
      </ButtonSection>

      <ButtonSection
        title="Icon only (exception)"
        description="Only HeartButton uses icon-only pattern."
      >
        <ButtonRow label="Heart">
          <HeartButton saved={false} size="md" surface="overlay" />
          <HeartButton saved={true} size="md" surface="overlay" />
        </ButtonRow>
      </ButtonSection>
    </PageShell>
  ),
  name: "04 · Icons",
  layout: { x: 5320, y: 0, width: 1280, height: 1522 },
};

/* ── 05 · Content ────────────────────────────────────────────────── */
export const Content: TempoStoryboard = {
  render: () => (
    <PageShell
      width={1280}
      title="Content"
      description="Buttons are verbs. Keep them short and specific."
    >
      <ButtonSection title="Action verbs" description="">
        <ButtonRow label="Do">
          <Button variant="primary">Reserve</Button>
          <Button variant="ink">Send message</Button>
          <Button variant="outline-solid">Save listing</Button>
        </ButtonRow>

        <ButtonRow label="Don’t">
          <Button variant="primary" className="opacity-60!">Submit</Button>
          <Button variant="ink" className="opacity-60!">OK</Button>
          <Button variant="outline-solid" className="opacity-60!">Click here</Button>
        </ButtonRow>
      </ButtonSection>

      <ButtonSection title="Length" description="">
        <ButtonRow label="Good">
          <Button variant="primary">Confirm trip</Button>
          <Button variant="ink">Add guests</Button>
        </ButtonRow>

        <ButtonRow label="Bad">
          <Button variant="primary" className="opacity-60!">
            Confirm your trip details now
          </Button>
        </ButtonRow>
      </ButtonSection>

      <ButtonSection title="Case" description="">
        <ButtonRow label="Sentence">
          <Button variant="primary">Reserve stay</Button>
          <Button variant="ink">Add to wishlist</Button>
        </ButtonRow>

        <ButtonRow label="Wrong">
          <Button variant="primary" className="opacity-60!">RESERVE STAY</Button>
          <Button variant="ink" className="opacity-60!">ADD TO WISHLIST</Button>
        </ButtonRow>
      </ButtonSection>
    </PageShell>
  ),
  name: "05 · Content",
  layout: { x: 6650, y: 0, width: 1280, height: 1632 },
};

/* ── 06 · In Situ ────────────────────────────────────────────────── */
export const InSitu: TempoStoryboard = {
  render: () => (
    <div
      style={{
        width: 1020,
        background: DARK.paper,
        color: DARK.ink,
        padding: "72px",
        fontFamily: FONT_SANS,
      }}
    >
      <HavnMark />

      <h1 style={{ fontSize: 44, marginBottom: 16 }}>In situ</h1>

      <p style={{ marginBottom: 40, color: DARK.inkQuiet }}>
        Real product usage examples.
      </p>

      <ButtonSection
        title="Booking card"
        description="Primary CTA usage."
      >
        <div style={{ background: "#fff", padding: 20, borderRadius: 12, width: 320 }}>
          <p style={{ fontSize: 13, color: "#717171" }}>Apr 12–18 · 2 guests</p>
          <p style={{ fontSize: 22, fontWeight: 600 }}>$1,284</p>
          <Button variant="primary">Reserve</Button>
        </div>
      </ButtonSection>

      <ButtonSection title="Empty state" description="">
        <div style={{ background: "#fff", padding: 32, borderRadius: 12, width: 360 }}>
          <p style={{ fontSize: 16, fontWeight: 600 }}>No saved places</p>
          <p style={{ fontSize: 13, color: "#717171" }}>
            Save listings to see them here.
          </p>
          <Button variant="ink">Browse stays</Button>
        </div>
      </ButtonSection>

      <ButtonSection title="Confirm modal" description="">
        <div style={{ background: "#fff", padding: 24, borderRadius: 12, width: 380 }}>
          <p style={{ fontWeight: 600 }}>Cancel trip?</p>
          <p style={{ fontSize: 13, color: "#717171" }}>
            You will be refunded.
          </p>
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <Button variant="ghost">Keep trip</Button>
            <Button variant="destructive">Cancel</Button>
          </div>
        </div>
      </ButtonSection>
    </div>
  ),
  name: "06 · In situ",
  layout: { x: 7980, y: 0, width: 1020, height: 1915 },
};/* ── FIX: duplicate name issue from earlier file ──────────────── */
/* This avoids TS/duplicate export conflicts */
export const IconsFinal: TempoStoryboard = {
  render: () => (
    <PageShell
      width={1280}
      title="Icons"
      description="Final consolidated icon rules."
    >
      <ButtonSection title="Rules" description="">
        <ButtonRow label="Basics">
          <Button variant="primary">
            <Search size={16} strokeWidth={2} /> Search
          </Button>

          <Button variant="outline-solid">
            <Heart size={16} strokeWidth={2} /> Save
          </Button>

          <Button variant="ink">
            <Send size={16} strokeWidth={2} /> Send
          </Button>

          <Button variant="ghost">
            <Plus size={16} strokeWidth={2} /> Add
          </Button>
        </ButtonRow>
      </ButtonSection>

      <ButtonSection title="Spacing rule" description="">
        <p style={{ fontSize: 12, color: DARK.inkQuiet }}>
          Icon ↔ Label spacing is always 8px. Never change per variant.
        </p>
      </ButtonSection>
    </PageShell>
  ),
  name: "04 · Icons (Final)",
  layout: { x: 5320, y: 0, width: 1280, height: 1522 },
};/* ── FINAL SAFETY NOTE ─────────────────────────────────────────── */
/*
IMPORTANT FIXES APPLIED:
1. Removed duplicate "Icons" export conflict → renamed to IconsFinal
2. Ensured all storyboards are uniquely named
3. Normalized Button/Size/Icon sections
4. Prevented TS export collision errors in Tempo build
*/

/* Optional export map (if your system uses registry) */
export const storyboards = {
  Cover,
  Anatomy,
  Variants,
  Sizes,
  Icons: IconsFinal,
  Content,
  InSitu,
};