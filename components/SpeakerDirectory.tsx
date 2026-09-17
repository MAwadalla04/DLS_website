"use client";

import Image from "next/image";
import { useState } from "react";
import type { Speaker } from "@/data/types";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";

export function SpeakerDirectory({ speakers }: { speakers: Speaker[] }) {
  const [selected, setSelected] = useState<Speaker | null>(null);

  return (
    <>
      <div className="speaker-grid">
        {speakers.map((speaker) => (
          <article className="speaker-card" key={speaker.id}>
            <div className="speaker-image">
              {speaker.image ? <Image src={speaker.image} alt={`${speaker.name}, ${speaker.title}`} fill sizes="(max-width: 700px) 100vw, 33vw" /> : <span aria-hidden="true">JJ</span>}
              <Badge className="speaker-status">Confirmed</Badge>
            </div>
            <div className="speaker-card-copy">
              <p className="speaker-role">Keynote speaker</p>
              <h3>{speaker.name}</h3>
              <p>{speaker.title}</p>
              <p className="speaker-org">{speaker.organization}</p>
              <button className="text-button" type="button" onClick={() => setSelected(speaker)}>Read biography <span aria-hidden="true">↗</span></button>
            </div>
          </article>
        ))}
      </div>
      <Dialog open={Boolean(selected)} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent labelledBy="bio-dialog-title">
          {selected ? <>
            <p className="eyebrow">Confirmed keynote</p>
            <DialogTitle id="bio-dialog-title">{selected.name}</DialogTitle>
            <p className="dialog-role">{selected.title} · {selected.organization}</p>
            <DialogDescription>{selected.biography}</DialogDescription>
            <p className="editorial-note">{selected.sourceNote}</p>
          </> : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
