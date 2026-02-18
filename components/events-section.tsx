"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import eventData from "@/data/events.json";

type MeetupEvent = {
  event_name: string;
  event_date: string;
  start_time: string;
  end_time: string;
  timezone: string;
  location: {
    venue_name: string;
    address: string;
    city: string;
    state: string;
    country: string;
  };
  organizer: string;
  description: string;
  abstract: string;
  speakers: {
    name: string;
    role?: string;
    bio: string;
  }[];
  hosts: string[];
  additional_info: {
    parking: string;
    instructions: string;
  };
  event_url: string;
  registration_url?: string;
  tags?: string[];
};

export function EventsSection() {
  const event = eventData as MeetupEvent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" ref={ref} className="p-6">
      <h2 className="text-2xl font-bold mb-6">Events</h2>

      {event && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 border rounded shadow-sm space-y-3">
              <p className="text-sm text-gray-500">
                {event.event_date} · {event.start_time}–{event.end_time}{" "}
                {event.timezone}
              </p>
              <h3 className="text-xl font-semibold">{event.event_name}</h3>
              <p className="text-gray-700">{event.abstract}</p>

              <div className="text-sm text-gray-600">
                <p className="font-semibold mt-2">Location</p>
                <p>{event.location.venue_name}</p>
                <p>{event.location.address}</p>
                <p>
                  {event.location.city}, {event.location.state},{" "}
                  {event.location.country}
                </p>
              </div>

              {event.speakers?.length > 0 && (
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mt-2">Speakers / Hosts</p>
                  <ul className="list-disc list-inside space-y-1">
                    {event.speakers.map((speaker) => (
                      <li key={speaker.name}>
                        <span className="font-medium">{speaker.name}</span>
                        {speaker.role && ` – ${speaker.role}`}
                        {speaker.bio && ` — ${speaker.bio}`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="text-sm text-gray-600">
                <p className="font-semibold mt-2">Additional info</p>
                <p>{event.additional_info.instructions}</p>
                <p>{event.additional_info.parking}</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={event.registration_url || event.event_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Register</Button>
                </a>
                <a
                  href={event.event_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View on Meetup
                </a>
              </div>

              <p className="text-xs text-gray-500 pt-2">
                Organized by {event.organizer}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}