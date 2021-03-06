import React from "react";
import {
  addEvent,
  deleteEvents,
  markEventsRead,
  loadRandomSentence,
  togglePopover,
} from "./slice";
import { connect, ConnectedProps } from "react-redux";
import styles from "./Controls.module.css";

const connector = connect(null, {
  addEvent,
  deleteEvents,
  markEventsRead,
  loadRandomSentence,
  togglePopover,
});

export type ControlsComponentProps = ConnectedProps<typeof connector> & {
  autoEventIntervalMills: number;
};
type ControlsComponentState = { eventName: string };

class ControlsComponent extends React.Component<
  ControlsComponentProps,
  ControlsComponentState
> {
  private interval: NodeJS.Timeout | null;

  constructor(props: ControlsComponentProps) {
    super(props);
    this.state = {
      eventName: "",
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.props.loadRandomSentence(),
      this.props.autoEventIntervalMills
    );
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  submitEvent = () => {
    if (this.state.eventName.length) {
      this.props.addEvent(this.state.eventName);
      this.setState({ eventName: "" });
    }
  };

  handleTogglePopoverClick = () => {
    this.props.togglePopover();
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ eventName: e.target.value });
  };

  handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.submitEvent();
    }
  };

  handleDeleteEventsClick = () => {
    this.props.deleteEvents();
  };

  handleMarkEventsReadClick = () => {
    this.props.markEventsRead();
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div>
            <input
              className={styles.textbox}
              aria-label="Set increment amount"
              value={this.state.eventName}
              onChange={this.handleInputChange}
              onKeyPress={this.handleEnterPress}
              placeholder="?????????????? ???????????????? ??????????????.."
            />
            <button
              className={`${styles.button} ${styles.button__small}`}
              onClick={this.submitEvent}
            >
              ??????????????????
            </button>
          </div>

          <button
            className={styles.button}
            onClick={this.handleMarkEventsReadClick}
          >
            ???????????????? ?????? ?????????????? ????????????????????????
          </button>
          <button
            className={styles.button}
            onClick={this.handleDeleteEventsClick}
          >
            ?????????????? ?????? ??????????????
          </button>
          <button
            className={styles.button}
            onClick={this.handleTogglePopoverClick}
          >
            ????????????/???????????????? ?????????? ??????????????????????
          </button>
        </div>
      </div>
    );
  }
}

export const Controls = connector(ControlsComponent);
