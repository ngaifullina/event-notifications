import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectEvents, showPopoverOpen, togglePopover } from "./slice";
import styles from "./Notifications.module.css";
import { timeMessage } from "../events/lib/timeMessage";
import { Bell } from "./lib/Bell";

export type NotificationsProps = {
  popoverEventsCount: number;
};

export function Notifications({ popoverEventsCount }: NotificationsProps) {
  const events = useAppSelector(selectEvents);
  const showModal = useAppSelector(showPopoverOpen);
  const dispatch = useAppDispatch();

  function handleExpandClick() {
    dispatch(togglePopover());
  }

  return (
    <div>
      <Bell />
      {showModal && !!events.length && (
        <div className={styles.row}>
          {events.slice(0, popoverEventsCount).map((evt, i) => (
            <div key={`${evt.name}_${i}`} className={styles.item}>
              <div className={styles.name}>{evt.name}</div>
              <div className={styles.time}>
                {timeMessage(evt.timestamp, Date.now())}
              </div>
            </div>
          ))}
          {events.length > popoverEventsCount && (
            <button className={styles.link} onClick={handleExpandClick}>
              посмотреть все...
            </button>
          )}
        </div>
      )}
      {events.length === 0 && showModal && (
        <div className={styles.row}>Нет событий</div>
      )}
    </div>
  );
}
