import { useState } from "react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/design-system/layout/Container";
import { Avatar } from "@/design-system/primitives/Avatar";
import { cn } from "@/lib/utils";
import { CONVERSATIONS } from "@/data/messages";

export function MessagesPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [newMsg, setNewMsg] = useState("");
  const [localMessages, setLocalMessages] = useState<Record<string, string[]>>({});

  const active = CONVERSATIONS.find((c) => c.id === activeId);
  const unreadTotal = CONVERSATIONS.reduce(
    (s, c) => s + c.messages.filter((m) => m.senderId === "host" && !m.read).length,
    0
  );

  function send() {
    if (!newMsg.trim() || !activeId) return;
    setLocalMessages((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] ?? []), newMsg.trim()],
    }));
    setNewMsg("");
  }

  return (
    <div className="min-h-screen pb-0">
      <Container className="pt-0 px-0 sm:px-6 max-w-4xl">
        <div className="flex h-[calc(100vh-4rem)] border-x border-stone-light">
          {/* Inbox sidebar */}
          <div className={cn("w-full sm:w-72 flex-shrink-0 border-r border-stone-light flex flex-col", activeId && "hidden sm:flex")}>
            <div className="p-4 border-b border-stone-light">
              <h1 className="font-display text-xl text-ink">
                Messages
                {unreadTotal > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-terracotta text-paper rounded-full">
                    {unreadTotal}
                  </span>
                )}
              </h1>
            </div>
            <div className="overflow-y-auto flex-1">
              {CONVERSATIONS.map((conv) => {
                const unread = conv.messages.filter((m) => m.senderId === "host" && !m.read).length;
                const last = conv.messages[conv.messages.length - 1];
                return (
                  <button
                    key={conv.id}
                    onClick={() => setActiveId(conv.id)}
                    className={cn(
                      "w-full flex items-start gap-3 p-4 text-left border-b border-stone-light/60",
                      "hover:bg-paper-dark transition-colors",
                      activeId === conv.id && "bg-paper-dark"
                    )}
                  >
                    <Avatar src={conv.hostAvatar} alt={conv.hostName} size="md" className="flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className={cn("text-sm text-ink", unread > 0 && "font-semibold")}>{conv.hostName}</p>
                        {unread > 0 && (
                          <span className="w-2 h-2 rounded-full bg-terracotta flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-stone mt-0.5 line-clamp-1">{conv.listingTitle}</p>
                      <p className={cn("text-xs mt-1 line-clamp-1", unread > 0 ? "text-ink font-medium" : "text-stone")}>
                        {last?.senderId === "guest" ? "You: " : ""}{last?.text}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Thread */}
          <div className={cn("flex-1 flex flex-col", !activeId && "hidden sm:flex")}>
            {!active ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-2xl text-stone/40 mb-2">Select a conversation</p>
                  <p className="text-sm text-stone/40">Your messages with hosts appear here</p>
                </div>
              </div>
            ) : (
              <>
                {/* Thread header */}
                <div className="flex items-center gap-3 p-4 border-b border-stone-light">
                  <button onClick={() => setActiveId(null)} className="sm:hidden text-stone hover:text-ink mr-1">←</button>
                  <Avatar src={active.hostAvatar} alt={active.hostName} size="sm" />
                  <div>
                    <p className="text-sm font-semibold text-ink">{active.hostName}</p>
                    <p className="text-xs text-stone">{active.listingTitle}</p>
                  </div>
                  <Link to={`/trips/${active.tripId}`} className="ml-auto text-xs text-terracotta hover:underline">
                    View trip →
                  </Link>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {active.messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn("flex gap-2", msg.senderId === "guest" ? "flex-row-reverse" : "flex-row")}
                    >
                      {msg.senderId === "host" && (
                        <Avatar src={active.hostAvatar} alt={active.hostName} size="xs" className="flex-shrink-0 mt-1" />
                      )}
                      <div
                        className={cn(
                          "max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                          msg.senderId === "guest"
                            ? "bg-terracotta text-paper rounded-tr-sm"
                            : "bg-paper-dark text-ink rounded-tl-sm"
                        )}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  {/* Local new messages */}
                  {(localMessages[active.id] ?? []).map((m, i) => (
                    <motion.div
                      key={`local-${i}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-row-reverse"
                    >
                      <div className="max-w-[75%] px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm bg-terracotta text-paper leading-relaxed">
                        {m}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Compose */}
                <div className="p-4 border-t border-stone-light flex items-end gap-2">
                  <textarea
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                    placeholder="Message your host…"
                    rows={1}
                    className="flex-1 resize-none bg-paper-dark rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-terracotta/20 min-h-[44px] max-h-32"
                  />
                  <button
                    onClick={send}
                    disabled={!newMsg.trim()}
                    className="w-11 h-11 rounded-xl bg-terracotta text-paper flex items-center justify-center transition-opacity disabled:opacity-40 hover:bg-[var(--terracotta-dark)] flex-shrink-0"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
