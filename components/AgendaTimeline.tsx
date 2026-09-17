import { speakerById } from "@/data/speakers";
import type { Session } from "@/data/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";

const typeLabels: Record<Session["type"], string> = {
  arrival: "Arrival",
  remarks: "Opening",
  course: "CLE course",
  break: "Break",
  keynote: "Keynote",
  reception: "Reception",
};

export function AgendaTimeline({ sessions, compact = false }: { sessions: Session[]; compact?: boolean }) {
  return (
    <div className={`agenda-timeline ${compact ? "agenda-compact" : ""}`}>
      {sessions.map((session) => {
        const namedSpeakers = (session.speakerIds ?? []).map((id) => speakerById.get(id)).filter((speaker) => speaker?.published);
        return (
          <article className={`agenda-row agenda-${session.type}`} key={session.id}>
            <div className="agenda-time"><span>{session.shortTime}</span><small>{session.time.replace(`${session.shortTime}–`, "")}</small></div>
            <div className="agenda-marker" aria-hidden="true"><span /></div>
            <div className="agenda-content">
              <div className="agenda-meta"><span className="session-type">{typeLabels[session.type]}</span>{session.cle ? <Badge variant="muted">CLE</Badge> : null}</div>
              <h3>{session.title}</h3>
              <p>{session.description}</p>
              {namedSpeakers.length > 0 ? <p className="agenda-speakers">With <strong>{namedSpeakers.map((speaker) => speaker?.name).join(", ")}</strong></p> : session.type === "course" || session.type === "remarks" ? <p className="agenda-speakers">Speaker lineup to be announced</p> : null}
              {session.cle && !compact ? <Accordion type="single" collapsible className="course-details"><AccordionItem value={session.id}><AccordionTrigger>View CLE details</AccordionTrigger><AccordionContent><p><strong>Credit category:</strong> {session.cle}</p><p><strong>Format:</strong> Interactive panel discussion with Q&A.</p>{session.objectives ? <><p><strong>Learning objectives</strong></p><ul>{session.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul></> : null}</AccordionContent></AccordionItem></Accordion> : null}
              {session.note && !compact ? <p className="editorial-note">{session.note}</p> : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
