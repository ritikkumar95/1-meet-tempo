import type { TempoPage, TempoStoryboard } from 'tempo-sdk';
import type { LucideIcon } from "lucide-react";
import {
  Search,
  Heart,
  Plus,
  Send,
  Share,
  Bookmark,
  X,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  Menu,
  MapPin,
  Globe,
  Award,
  Star,
  Users,
  Settings,
  Calendar,
  MessageCircle,
  MessageSquare,
  Sparkles,
  Bell,
  Filter,
  Check,
  Building2,
  Castle,
  Mountain,
  Tent,
  TreePine,
  Waves,
  Wifi,
  Key,
  UtensilsCrossed,
  Smartphone,
  Lock,
} from 'lucide-react';
import {
  CanvasCover,
  HavnMark,
  MonoText,
  FONT_SANS,
  FONT_MONO,
  DARK,
} from '@/design-system/canvas-chrome';
import { HeartButton } from '@/design-system/components/HeartButton';
import { LISTINGS } from '@/data/listings';

const page: TempoPage = {
  name: "06 · Icons & Imagery",
};

export default page;

/* ── 00 · Cover ──────────────────────────────────────────────────── */
export const Cover: TempoStoryboard = {
  render: () => (
    <CanvasCover
      workspace="Workspace · 12"
      slug="icons-and-imagery.svg"
      title="Icons & imagery."
      description="The visual atoms, ordered by what appears first when scrolling top to bottom. Icons — six lucide-react categories at 16, 20, and 24, stroke 2, inheriting label colour. Imagery — three approved aspect ratios, the listing-detail gallery grid, and the heart and 'Guest favourite' overlay pair."
    />
  ),
  name: "00 · Cover",
  layout: { x: 0, y: -2, width: 1406, height: 351 },
};

/* ── Icon cell helper ────────────────────────────────────────────── */

function IconCell({
  icon: Icon,
  name,
  size,
}: {
  icon: LucideIcon;
  name: string;
  size: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        padding: "24px 8px",
        border: `1px solid ${DARK.hairline}`,
        borderRadius: 10,
        background: DARK.paperRaised,
        aspectRatio: "1 / 1",
      }}
    >
      <Icon size={size} strokeWidth={2} />
      <p
        style={{
          fontFamily: FONT_MONO,
          fontSize: 11,
          color: DARK.inkQuiet,
          margin: 0,
          letterSpacing: "0",
        }}
      >
        {name}
      </p>
    </div>
  );
}

function IconSection({
  title,
  description,
  continuation,
  children,
}: {
  title: string;
  description: string;
  continuation?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 56,
        alignItems: "flex-start",
        padding: continuation ? "16px 0 44px" : "44px 0",
        borderTop: continuation ? "none" : `1px solid ${DARK.hairline}`,
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
            letterSpacing: "-0.015em",
            color: DARK.ink,
            margin: 0,
            lineHeight: 1.2,
            outline: "none",
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
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 12,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
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
            letterSpacing: "-0.015em",
            color: DARK.ink,
            margin: 0,
            lineHeight: 1.2,
            outline: "none",
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
          minWidth: 0,
          border: "1px solid #ebebeb",
          borderRadius: 8,
          padding: "32px 44px",
          background: "#f7f7f7",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function SizePage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: 1280,
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
          fontFamily: FONT_SANS,
          fontSize: 44,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: DARK.ink,
          margin: 0,
          lineHeight: 1.05,
          outline: "none",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontFamily: FONT_SANS,
          fontSize: 15,
          color: DARK.inkQuiet,
          margin: "16px 0 24px",
          lineHeight: 1.6,
          maxWidth: 540,
        }}
      >
        {intro}
      </p>

      {children}
    </div>
  );
}

function SizeHeader({
  children,
  first,
}: {
  children: React.ReactNode;
  first?: boolean;
}) {
  return (
    <div
      style={{
        marginTop: first ? 0 : 24,
        paddingTop: 52,
        paddingBottom: 24,
        borderTop: first ? "none" : `1px solid ${DARK.hairline}`,
      }}
    >
      <h2
        contentEditable
        suppressContentEditableWarning
        style={{
          fontFamily: FONT_SANS,
          fontSize: 36,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: DARK.ink,
          margin: 0,
          lineHeight: 1.05,
          outline: "none",
        }}
      >
        {children}
      </h2>
    </div>
  );
}

/* ── ICONS STORYBOARD ────────────────────────────────────────────── */

export const Icons: TempoStoryboard = {
  render: () => (
    <SizePage
      title="Icons"
      intro="Every icon in Havn comes from lucide-react. Three sizes — 16 inside buttons and dense rows, 20 in headers and filter chips, 24 in empty states and amenity rows. Stroke width 2."
    >
      <SizeHeader first>16</SizeHeader>

      <IconSection
        title="Actions · 16"
        description="Verbs paired with button labels."
        continuation
      >
        <IconCell icon={Search} name="Search" size={16} />
        <IconCell icon={Heart} name="Heart" size={16} />
        <IconCell icon={Plus} name="Plus" size={16} />
        <IconCell icon={Send} name="Send" size={16} />
        <IconCell icon={Share} name="Share" size={16} />
        <IconCell icon={Bookmark} name="Bookmark" size={16} />
        <IconCell icon={X} name="X" size={16} />
        <IconCell icon={Check} name="Check" size={16} />
      </IconSection>

      <IconSection
        title="Navigation · 16"
        description="Chevrons, arrows, menu, map."
        continuation
      >
        <IconCell icon={ChevronLeft} name="ChevronLeft" size={16} />
        <IconCell icon={ChevronRight} name="ChevronRight" size={16} />
        <IconCell icon={ChevronUp} name="ChevronUp" size={16} />
        <IconCell icon={ChevronDown} name="ChevronDown" size={16} />
        <IconCell icon={ArrowLeft} name="ArrowLeft" size={16} />
        <IconCell icon={ArrowRight} name="ArrowRight" size={16} />
        <IconCell icon={Menu} name="Menu" size={16} />
        <IconCell icon={MapPin} name="MapPin" size={16} />
        <IconCell icon={Globe} name="Globe" size={16} />
      </IconSection>

      <SizeHeader>20</SizeHeader>

      <IconSection
        title="Identity · 20"
        description="Status, filters, alerts."
        continuation
      >
        <IconCell icon={Award} name="Award" size={20} />
        <IconCell icon={Star} name="Star" size={20} />
        <IconCell icon={Users} name="Users" size={20} />
        <IconCell icon={Settings} name="Settings" size={20} />
        <IconCell icon={Bell} name="Bell" size={20} />
        <IconCell icon={Filter} name="Filter" size={20} />
      </IconSection>

      <IconSection
        title="Content · 20"
        description="Messaging and dates."
        continuation
      >
        <IconCell icon={Calendar} name="Calendar" size={20} />
        <IconCell icon={MessageCircle} name="MessageCircle" size={20} />
        <IconCell icon={MessageSquare} name="MessageSquare" size={20} />
      </IconSection>

      <SizeHeader>24</SizeHeader>

      <IconSection
        title="Places · 24"
        description="Categories and browsing."
        continuation
      >
        <IconCell icon={Building2} name="Building2" size={24} />
        <IconCell icon={Castle} name="Castle" size={24} />
        <IconCell icon={Mountain} name="Mountain" size={24} />
        <IconCell icon={Tent} name="Tent" size={24} />
        <IconCell icon={TreePine} name="TreePine" size={24} />
        <IconCell icon={Waves} name="Waves" size={24} />
      </IconSection>

      <IconSection
        title="Amenities · 24"
        description="Listing features."
        continuation
      >
        <IconCell icon={Wifi} name="Wifi" size={24} />
        <IconCell icon={Key} name="Key" size={24} />
        <IconCell icon={UtensilsCrossed} name="UtensilsCrossed" size={24} />
        <IconCell icon={Smartphone} name="Smartphone" size={24} />
        <IconCell icon={Lock} name="Lock" size={24} />
        <IconCell icon={Sparkles} name="Sparkles" size={24} />
      </IconSection>
    </SizePage>
  ),
  name: "01 · Icons",
  layout: { x: 1557, y: 0, width: 1280, height: 2081 },
};

/* ── 02 · Imagery ────────────────────────────────────────────────── */

export const Imagery: TempoStoryboard = {
  render: () => (
    <SizePage
      title="Imagery"
      intro="Photos are the loudest part of the product. Three aspect ratios, 16px rounding, and one overlay system."
    >
      <Section
        title="Aspect ratios"
        description="Square, 4:3, and 16:9 formats."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          <div>
            <div style={{ aspectRatio: "1 / 1", borderRadius: 16, overflow: "hidden" }}>
              <img src={LISTINGS[0]?.images?.[0] ?? ""} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          <div>
            <div style={{ aspectRatio: "4 / 3", borderRadius: 16, overflow: "hidden" }}>
              <img src={LISTINGS[1]?.images?.[0] ?? ""} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          <div>
            <div style={{ aspectRatio: "16 / 9", borderRadius: 16, overflow: "hidden" }}>
              <img src={LISTINGS[2]?.images?.[0] ?? ""} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Overlay"
        description="Heart and badge overlays."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          <div style={{ position: "relative", aspectRatio: "4 / 3", borderRadius: 16, overflow: "hidden" }}>
            <img src={LISTINGS[0]?.images?.[0] ?? ""} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", top: 12, right: 12 }}>
              <HeartButton saved={false} size="md" surface="overlay" />
            </div>
          </div>

          <div style={{ position: "relative", aspectRatio: "4 / 3", borderRadius: 16, overflow: "hidden" }}>
            <img src={LISTINGS[3]?.images?.[0] ?? ""} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", top: 12, right: 12 }}>
              <HeartButton saved={true} size="md" surface="overlay" />
            </div>
          </div>
        </div>
      </Section>
    </SizePage>
  ),
  name: "02 · Imagery",
  layout: { x: 2957, y: 0, width: 1280, height: 1665 },
};